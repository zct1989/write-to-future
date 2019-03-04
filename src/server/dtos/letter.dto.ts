import { IsString, IsInt, IsBoolean } from 'class-validator'

export class LetterDto {
  @IsString()
  public readonly content: string
  @IsInt()
  public readonly sendTime: number
  @IsBoolean()
  public readonly isPublic: boolean
}
