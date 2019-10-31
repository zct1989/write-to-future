import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Letter } from '../entities/letter.entity'
import { Repository } from 'typeorm'
import { Receiver } from '../entities/receiver.entity'

@Injectable()
export class LetterService {
  constructor(
    @InjectRepository(Letter)
    private readonly letterRepository: Repository<Letter>
  ) {}

  public async findOneById(id: number) {
    return await this.letterRepository.findOne(id)
  }

  public async findAll() {
    return await this.letterRepository.find()
  }

  public async addLetter(entity) {
    const letter = new Letter()
    const receiver = new Receiver()
    receiver.email = entity.receiverEmail
    receiver.weixin = entity.receiverWeixin
    letter.content = entity.content
    letter.receiver = receiver
    letter.isPublic = true
    await receiver.save()
    await letter.save()

    await letter.reload()

    return { id: letter.id }
  }
}
