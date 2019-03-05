import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UsePipes,
  Logger,
  Get
} from '@nestjs/common'
import { LetterDto } from '../dtos/letter.dto'
import { ApiUseTags } from '@nestjs/swagger'
import { InjectRepository } from '@nestjs/typeorm'
import { Letter } from '../entities/letter.entity'
import { LetterService } from '../services/letter.service'

@ApiUseTags('letter')
@Controller('api/letter')
export class LetterController {
  constructor(private letterService: LetterService, private logger: Logger) {}

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

  @Get()
  public async find() {
    return await this.letterService.findAll()
  }
}
