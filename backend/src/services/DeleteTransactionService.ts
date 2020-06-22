import { getCustomRepository } from 'typeorm';

import TransactionsRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

class DeleteTransactionService {
    public async execute(id: string): Promise<void> {
        const transactionsRepository = getCustomRepository(
            TransactionsRepository,
        );
        const thisTransactionExists = await transactionsRepository.findOne(id);
        console.log(thisTransactionExists);
        if (!thisTransactionExists) {
            throw new AppError('This transaction does not exist.');
        }
        await transactionsRepository.delete(id);
    }
}

export default DeleteTransactionService;
