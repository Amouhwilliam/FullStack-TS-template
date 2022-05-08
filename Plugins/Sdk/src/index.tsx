import HelloWordService from './services/helloword'
// eslint-disable-next-line no-unused-vars
import * as dataSchemas from './utils/DataSchemas'

import API from './config'

const objectAssignDeep = require(`object-assign-deep`)

export class Client {
  options: dataSchemas.Options
  private helloWordService!: HelloWordService

  /**
   * Initiate client instance
   * @param options Optional. Set options for HTTP requests
   */
  constructor(options?: dataSchemas.Options) {
    const defaultOptions = {
      headers: {},
      baseURL: API.baseUrl,
      version: API.version,
      timeout: API.timeout,
      responseType: 'json'
    }
    this.options = objectAssignDeep({}, defaultOptions, options)
  }

  /**
   * Configure client instance
   * @param options Optional. Set options for HTTP requests
   */
  configure = (options?: dataSchemas.Options) => {
    this.options = objectAssignDeep(this.options, options)
    this.helloWordService = new HelloWordService(this.options)
  }

  /**
   * HelloWordService
   */
  sayHello = () => this.helloWordService.sayHello()



}
export * as types from './utils/DataSchemas'
