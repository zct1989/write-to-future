import { Module, Logger } from '@nestjs/common'
import { LetterController } from './controllers/letter.controller'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Letter } from './entities/letter.entity'
import { Receiver } from './entities/receiver.entity'
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Letter, Receiver])
  ],
  controllers: [LetterController],
  providers: [Logger]
})
export class AppModule {}
