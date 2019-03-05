import { Test, TestingModule } from '@nestjs/testing'
import { LetterController } from './letter.controller'
import { LetterService } from '../services/letter.service'
import { Letter } from '../entities/letter.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Receiver } from '../entities/receiver.entity'
import { Logger } from '@nestjs/common'

describe('LetterController', () => {
  let letterController: LetterController
  let letterService: LetterService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          logger: 'debug'
        }),
        TypeOrmModule.forFeature([Letter, Receiver])
      ],
      controllers: [LetterController],
      providers: [Logger, LetterService]
    }).compile()

    letterController = module.get<LetterController>(LetterController)
    letterService = module.get<LetterService>(LetterService)
  })

  /**
   * 测试findAll接口
   */
  describe('测试find方法', () => {
    test('测试返回数据是否一致', async () => {
      const result: any = [
        {
          id: 1,
          content: '123',
          isPublic: true
        }
      ]
      // 创建findAll模拟数据
      jest.spyOn(letterService, 'findAll').mockImplementation(() => result)
      expect(await letterController.find()).toBe(result)
    })
  })
})
