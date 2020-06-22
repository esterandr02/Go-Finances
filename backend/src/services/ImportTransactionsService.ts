import csvParse from 'csv-parse';
import fs from 'fs';
import path from 'path';

import {
    getRepository,
    getCustomRepository,
    AdvancedConsoleLogger,
} from 'typeorm';

import Category from '../models/Category';
import Transaction from '../models/Transaction';
import TransactionRepository from '../repositories/TransactionsRepository';

interface CSVTransaction {
    title: string;
    type: 'income' | 'outcome';
    value: number;
    category: string;
}
class ImportTransactionsService {
    async execute(filename: string): Promise<void> {
        // TRATAMENTO DO ARQUIVO CSV
        const csvFilePath = path.resolve(
            __dirname,
            '..',
            '..',
            'tmp',
            filename,
        ); // pega o caminho do arquivo recebido no request (pasta tmp)

        const readCSVStream = fs.createReadStream(csvFilePath); // criação da leitura em Stream do arquivo (por linha)

        const parseStream = csvParse({
            // ignorar a linha 1 do arquivo (nesse caso contem o titulo campo da transacao), e os espaços entre os dados
            from_line: 2,
            ltrim: true,
            rtrim: true,
        });

        const csvTransactions: Array<CSVTransaction> = [];

        const parseCSV = readCSVStream.pipe(parseStream); // repassar os dados lidos (a cada linha) no readCSVStream para o parseStream

        parseCSV.on('data', line => {
            // inserir cada linha no array csvTransactions
            const [title, type, value, category] = line;

            csvTransactions.push({ title, type, value, category });
        });

        await new Promise(resolve => {
            parseCSV.on('end', resolve);
        });

        // LOGICA NA CRIACAO DE TRANSACOES E CATEGORIAS

        // A) Criacao das categorias

        const categoryRepository = getRepository(Category);

        const categories = await categoryRepository.find(); // guardar categorias ja exixtentes no banco
        const createCategories: Array<Category> = []; // array que armazena as categorias a serem criadas

        // verificar se a categoria de cada transacao do arquivo CSV existe
        function isCategoryExists(
            transaction: CSVTransaction,
        ): Category | undefined {
            return categories.find(
                category => category.title === transaction.category,
            );
        }

        function createNewCategory(transaction: CSVTransaction): Category {
            const newCategory = categoryRepository.create({
                title: transaction.category,
            });
            categories.push(newCategory);
            createCategories.push(newCategory);

            return newCategory;
        }

        // selecionar transacoes em que a categoria nao existe, e inserir no array de criacao de categorias
        csvTransactions.map(transaction => {
            if (!isCategoryExists(transaction)) {
                createNewCategory(transaction);
            }
            return null;
        });

        await categoryRepository.save(createCategories);

        // B) Criacao das transacoes

        const transactionRepository = getCustomRepository(
            TransactionRepository,
        );

        function findCategoryId(
            transaction: CSVTransaction,
        ): string | undefined {
            const findCategory = categories.find(
                category => category.title === transaction.category,
            );
            if (findCategory) {
                return findCategory.id;
            }
            return undefined;
        }

        const createTransaction = csvTransactions.map(transaction =>
            transactionRepository.create({
                title: transaction.title,
                type: transaction.type,
                value: transaction.value,
                category_id: findCategoryId(transaction),
            }),
        );

        await transactionRepository.save(createTransaction);
    }
}

export default ImportTransactionsService;
