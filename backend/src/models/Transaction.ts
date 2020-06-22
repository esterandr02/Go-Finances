import {
    Entity,
    Column,
    JoinColumn,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from 'typeorm';

import Category from './Category';

@Entity('transactions')
class Transaction {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    type: 'income' | 'outcome';

    @Column()
    value: number;

    @Column()
    category_id: string;

    @ManyToOne(() => Category, category => category.transaction, {
        eager: true,
    }) // eager: true (relaciona a chave estrangeira à primaria automaticamente)
    @JoinColumn({ name: 'category_id' }) // a coluna category_id vai se relacionar com a category
    category: Category;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Transaction;
