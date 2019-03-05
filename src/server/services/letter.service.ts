import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Letter } from '../entities/letter.entity'
import { Repository } from 'typeorm'
import { Query, Args } from '@nestjs/graphql'

@Injectable()
export class LetterService {
  constructor(
    @InjectRepository(Letter)
    private readonly letterRepository: Repository<Letter>
  ) {}

  public async findOneById(id: number) {
    return await this.letterRepository.findOne(id)
  }
}
