import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { HelloWordModule } from './helloword/helloword.module';


@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin&readPreference=primary`, { autoCreate: true }),
    MailerModule.forRoot({
      transport: 'smtp://laura.bayer10@ethereal.email:sf8gH6SP4GGx6qtjhw@smtp.ethereal.email', // fake ethereal email
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
    }),
    ConfigModule.forRoot(),
   HelloWordModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
