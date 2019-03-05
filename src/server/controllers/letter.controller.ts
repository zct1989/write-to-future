import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UsePipes,
  Logger
} from '@nestjs/common'
import { LetterDto } from '../dtos/letter.dto'
import { ApiUseTags } from '@nestjs/swagger'
import { InjectRepository } from '@nestjs/typeorm'
import { Letter } from '../entities/letter.entity'
import { Repository } from 'typeorm'

@ApiUseTags('letter')
@Controller('api/letter')
export class LetterController {
  constructor(
    @InjectRepository(Letter)
    private readonly letterRepository: Repository<Letter>,
    private logger: Logger
  ) {
    return
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  public async create(@Body() letterDto: LetterDto) {
    const receiver = letterDto.getReceiver()
    const letter = letterDto.getLetter()
    letter.receiver = receiver
    this.logger.log(letter)
    await receiver.save()
    await letter.save()
  }
}
