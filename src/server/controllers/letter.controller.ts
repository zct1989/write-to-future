import { Controller, Post, Body, ValidationPipe } from '@nestjs/common'
import { LetterDto } from '../dtos/letter.dto'

@Controller('api/letter')
export class LetterController {
  @Post()
  public async create(@Body(ValidationPipe) letterDto: LetterDto) {
    console.error(letterDto)
  }
}
