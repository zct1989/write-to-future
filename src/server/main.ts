import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Builder, Nuxt } from 'nuxt'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import * as nuxtConfig from '../../nuxt.config'
import * as express from 'express'
import { Logger } from '@nestjs/common'

async function bootstrap() {
  // 试用express作为服务容器
  const server = express()
  const logger = new Logger()
  // 加载nuxt
  const nuxt = await new Nuxt(nuxtConfig)
  nuxtConfig.dev = !(process.env.NODE_ENV === 'production')
  if (nuxtConfig.dev) {
    new Builder(nuxt).build()
  }

  // 其他分流至nuxt
  server.get(/^(?!\/?(api|doc|graphql)).+$/, (request, response) =>
    nuxt.render(request, response)
  )

  const app = await NestFactory.create(AppModule, server)

  // 加载swagger
  const options = new DocumentBuilder()
    .setTitle('example')
    .setDescription('api description')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('doc', app, document)

  await app.listen(3000).then(() => logger.log('http://localhost:3000'))
}
bootstrap()
