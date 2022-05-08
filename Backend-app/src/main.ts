import { ValidationError, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationException } from './utils/filters/validation.exception';
import { ValidationFilter } from './utils/filters/validation.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: true,
  });

  // validation Filter
  app.useGlobalFilters(new ValidationFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: false,
      exceptionFactory: (errors: ValidationError[]) => {
        const messages = errors.map((error) => {
          return {
            error: `${error.property} has wrong value ${error.value}.`,
            message: Object.values(error.constraints).join(''),
          };
        });
        return new ValidationException(messages);
      },
    }),
  );

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Bidiffy Platform Api Doc')
    .setDescription('Bellow you have access to all api endpoint to query')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
}
bootstrap();
