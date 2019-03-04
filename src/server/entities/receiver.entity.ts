import { Entity, Column, BaseEntity } from 'typeorm'

@Entity()
export class Receiver extends BaseEntity {
  @Column('varchar', {
    length: 30
  })
  public email

  @Column('varchar', {
    length: 80
  })
  public weixin
}
