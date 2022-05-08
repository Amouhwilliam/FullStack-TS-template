import { Options} from '../utils/DataSchemas'
import request from '../utils/request'

export default class HelloWordService {
  private options: Options

  constructor(options: Options) {
    this.options = options
  }

  async sayHello() {
    return request('Get', `HelloWords`, this.options)
  }
}
