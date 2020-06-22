// import AppError from '../errors/AppError';
import { getCustomRepository, getRepository } from 'typeorm';
import Transaction from '../models/Transaction';
import Category from '../models/Category';
import TransactionsRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

interface Request {
    title: string;
    value: number;
    type: 'income' | 'outcome';
    category: string;
}

class CreateTransactionService {
    public async execute({
        title,
        value,
        type,
        category,
    }: Request): Promise<Transaction> {
        const transactionsRepository = getCustomRepository(
            TransactionsRepository,
        );
        const categoryRepository = getRepository(Category);

        const balance = await transactionsRepository.getBalance(); // codar o getBalance

        if (type === 'outcome' && balance.total < value) {
            throw new AppError(
                "You don't have enough money to do this operation.",
            );
        }

        const isCategoryExists = await categoryRepository.findOne({
            where: { title: category },
            select: ['id'],
        });

        let finalCategoryId;

        if (!isCategoryExists) {
            const newCategory = categoryRepository.create({
                title: category,
            });
            await categoryRepository.save(newCategory);

            finalCategoryId = newCategory.id;
        } else {
            finalCategoryId = isCategoryExists.id;
        }

        const transaction = transactionsRepository.create({
            title,
            type,
            value,
            category_id: finalCategoryId,
        });

        await transactionsRepository.save(transaction);
        return transaction;
    }
}

export default CreateTransactionService;
