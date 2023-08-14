import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector));

  app.useGlobalPipes(new ValidationPipe());

  //config CORS
  app.enableCors({
    origin: '*',
    methods: 'GET, HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
  });

  const PORT = configService.get<string>('PORT');
  await app.listen(PORT, () => {
    console.log(`App listen port ${PORT}`);
  });
}
bootstrap();
