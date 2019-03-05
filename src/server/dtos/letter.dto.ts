import {
  IsString,
  IsInt,
  IsBoolean,
  IsEmail,
  IsOptional,
  IsDate,
  IsDateString
} from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'
import { Receiver } from '../entities/receiver.entity'
import { Letter } from '../entities/letter.entity'

export class LetterDto {
  @IsString()
  @ApiModelProperty({
    description: '信件内容'
  })
  public readonly content: string

  @IsDateString()
  @ApiModelProperty({
    description: '寄送时间'
  })
  public readonly sendTime: number

  @IsBoolean()
  @ApiModelProperty({
    description: '是否公开'
  })
  public readonly isPublic: boolean

  @IsEmail()
  @IsOptional()
  @ApiModelProperty({
    description: '收信地址',
    required: false
  })
  public readonly receiverEmail?: string

  /**
   * 生成Receiver
   */
  public getReceiver() {
    const receiver = new Receiver()
    receiver.email = this.receiverEmail
    return receiver
  }

  /**
   *
   * @param receiver
   */
  public getLetter() {
    const letter = new Letter()
    letter.content = this.content
    letter.sendTime = this.sendTime
    letter.isPublic = this.isPublic
    return letter
  }
}
