import {
  Resolver,
  Query,
  ResolveProperty,
  Parent,
  Args,
  Mutation
} from '@nestjs/graphql'
import { LetterService } from '../../services/letter.service'
import { ReceiverService } from '../../services/receiver.service'
import { Letter } from 'src/server/entities/letter.entity'

@Resolver('Letter')
export class LetterResolver {
  constructor(
    private readonly letterService: LetterService,
    private readonly receiverService: ReceiverService
  ) {}

  @Query('letter')
  public async getLetter(@Args('id') id: number) {
    return await this.letterService.findOneById(id)
  }

  @Query('letters')
  public async getLetters() {
    return await this.letterService.findAll()
  }

  @ResolveProperty('receiver')
  public async getReceiver(@Parent() letter) {
    const { receiverId } = letter
    return await this.receiverService.findOneById(receiverId)
  }

  @Mutation()
  public async createLetter(
    @Args('content') content: string,
    @Args('sendTime') sendTime: string,
    @Args('receiverEmail') receiverEmail: string,
    @Args('receiverWeixin') receiverWeixin: string
  ) {
    return await this.letterService.addLetter({
      content,
      sendTime,
      receiverEmail,
      receiverWeixin
    })
  }
}
