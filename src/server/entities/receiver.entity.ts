import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Receiver extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number

  @Column('varchar', {
    length: 30,
    nullable: true
  })
  public email

  @Column('varchar', {
    length: 80,
    nullable: true
  })
  public weixin
}
