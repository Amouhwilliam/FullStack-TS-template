import { Test, TestingModule } from '@nestjs/testing';
import { HelloWordController } from './helloword.controller';
import { HelloWordService } from './helloword.service';

describe('HelloWordController', () => {
  let controller: HelloWordController;
  const mockHelloWordService = {
   
    sayHello: jest.fn(() => {
      return 'Hello Word';
    })
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloWordController],
      providers: [HelloWordService],
    }).overrideProvider(HelloWordService)
      .useValue(mockHelloWordService)
      .compile();

    controller = module.get<HelloWordController>(HelloWordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should say Hello ', () => {
    expect(controller.sayHello()).toEqual('Hello Word');
  });
});
