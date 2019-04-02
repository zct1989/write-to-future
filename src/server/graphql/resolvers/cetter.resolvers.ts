import { Resolver, Query, ResolveProperty, Parent, Args } from '@nestjs/graphql'
import { LetterService } from '../../services/letter.service'
import { ReceiverService } from '../../services/receiver.service'

@Resolver('Letter')
export class CetterResolver {
  constructor(
    private readonly letterService: LetterService,
    private readonly receiverService: ReceiverService
  ) {}

  @Query('letter')
  public async getCetter(@Args('id') id: number) {
    return await this.letterService.findOneById(id)
  }

  @ResolveProperty('receiver')
  public async getReceiver(@Parent() letter) {
    const { receiverId } = letter
    return await this.receiverService.findOneById(receiverId)
  }
}
