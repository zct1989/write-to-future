import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Letter } from '../entities/letter.entity'
import { Repository } from 'typeorm'

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
}
