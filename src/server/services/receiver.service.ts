import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Letter } from '../entities/letter.entity'
import { Repository } from 'typeorm'
import { Query, Args } from '@nestjs/graphql'
import { Receiver } from '../entities/receiver.entity'

@Injectable()
export class ReceiverService {
  constructor(
    @InjectRepository(Receiver)
    private readonly receiverRepository: Repository<Receiver>
  ) {}

  public async findOneById(id: number) {
    return await this.receiverRepository.findOne(id)
  }
}
