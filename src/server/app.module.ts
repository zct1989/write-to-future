import { Module } from '@nestjs/common'
import { LetterController } from './controllers/letter.controller'

@Module({
  imports: [],
  controllers: [LetterController],
  providers: []
})
export class AppModule {}
