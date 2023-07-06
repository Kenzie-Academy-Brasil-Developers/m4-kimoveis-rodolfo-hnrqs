import { Entity, Column, OneToOne, JoinColumn, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Address, Category, Schedule } from './index';

@Entity('real_estate')
export class RealEstate {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'boolean', default: false })
    sold: boolean

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    value: number | string

    @Column({ type: 'integer' })
    size: number

    @CreateDateColumn({ type: 'date' })
    createdAt: string

    @UpdateDateColumn({ type: 'date' })
    updatedAt: string

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address

    @OneToMany(() => Schedule, (schedules) => schedules.realEstate)
    schedules: Schedule[]

    @ManyToOne(() => Category, (categories) => categories.realEstate)
    category: Category

}