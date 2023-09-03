import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setViewEngine('hbs');
  const configModule = app.get(ConfigService);
  const viewsDirectory = configModule.get<string>('templates.path');
  const publicDirectory = configModule.get<string>('public.path');
  app.setBaseViewsDir(viewsDirectory);
  app.useStaticAssets(publicDirectory);
  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('Home mantiqh')
    .setDescription('This is a description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
