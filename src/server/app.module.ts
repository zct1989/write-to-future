import { Module, Logger } from '@nestjs/common'
import { LetterController } from './controllers/letter.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'

import { Letter } from './entities/letter.entity'
import { Receiver } from './entities/receiver.entity'
import { LetterService } from './services/letter.service'
import { ReceiverService } from './services/receiver.service'
import { LetterResolver } from './graphql/resolvers/letter.resolvers'
import { join } from 'path'
import { CetterResolver } from './graphql/resolvers/cetter.resolvers'
@Module({
  imports: [
    TypeOrmModule.forRoot({
      logger: 'debug'
    }),
    TypeOrmModule.forFeature([Letter, Receiver]),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql']
    })
  ],
  controllers: [LetterController],
  providers: [
    Logger,
    LetterService,
    ReceiverService,
    LetterResolver,
    CetterResolver
  ]
})
export class AppModule {}
