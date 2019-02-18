import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Builder, Nuxt } from 'nuxt'
import * as nuxtConfig from '../../nuxt.config'
import * as express from 'express'

async function bootstrap() {
  // 试用express作为服务容器
  const server = express()

  // 加载nuxt
  const nuxt = await new Nuxt(nuxtConfig)
  nuxtConfig.dev = !(process.env.NODE_ENV === 'production')
  if (nuxtConfig.dev) {
    new Builder(nuxt).build()
  }
  // api/doc分流至server
  // 其他分流至nuxt
  server.get(/^(?!\/?(api|doc)).+$/, (request, response) =>
    nuxt.render(request, response)
  )
  const app = await NestFactory.create(AppModule, server)
  await app.listen(3000, () => {
    return
  })
}
bootstrap()
