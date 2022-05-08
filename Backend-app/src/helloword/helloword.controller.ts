import {
  Controller,
  Get,
} from '@nestjs/common';
import { HelloWordService } from './helloword.service';
import { ApiTags } from '@nestjs/swagger';


@Controller('HelloWords')
@ApiTags('HelloWords')
export class HelloWordController {
  constructor(private readonly helloWordService: HelloWordService) {}

  @Get()
  sayHello(
  ) {
    return this.helloWordService.sayHello();
  }


}
