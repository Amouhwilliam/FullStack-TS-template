import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class HelloWordService {
  constructor(
  
  ) {}


  async sayHello(): Promise<String> {
    return "Hello Word";
  }
}
