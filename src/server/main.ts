import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Builder, Nuxt } from 'nuxt'
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import * as nuxtConfig from '../../nuxt.config'
import * as express from 'express'
import { Logger } from '@nestjs/common'
import { ExpressAdapter } from '@nestjs/platform-express'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  // 试用express作为服务容器
  const server = express()
  const logger = new Logger()
  // 加载nuxt
  const nuxt = await new Nuxt(nuxtConfig)
  // 设置开发模式
  nuxtConfig.dev = !(process.env.NODE_ENV === 'production')
  // 根据开发确定是否动态编译
  if (nuxtConfig.dev) {
    new Builder(nuxt).build()
  }
  // 其他分流至nuxt
  server.get(/^(?!\/?(api|doc|graphql)).+$/, (request, response) =>
    nuxt.render(request, response)
  )
  // 创建服务
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server), {
    logger: console
  })

  // 加载swagger
  const options = new DocumentBuilder()
    .setTitle('example')
    .setDescription('api description')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('doc', app, document)

  await app
    .listen(3000)
    .then(() => logger.log('服务启动成功:', 'http://localhost:3000'))
}
bootstrap()
