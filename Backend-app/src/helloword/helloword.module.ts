import { Module } from '@nestjs/common';
import { HelloWordService } from './helloword.service';
import { HelloWordController } from './helloword.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
    ]),
  ],
  controllers: [HelloWordController],
  providers: [HelloWordService],
  exports: [HelloWordService],
})
export class HelloWordModule {}
