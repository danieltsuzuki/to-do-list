import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { TasksModule } from './tasks/tasks.module';

async function bootstrap() {
  const config = new DocumentBuilder()
  .setTitle('API NestJS com Swagger')
  .setDescription('Documentação da API')
  .setVersion('1.0')
  .addTag('tasks')
  .build();

  const app = await NestFactory.create(TasksModule);

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
