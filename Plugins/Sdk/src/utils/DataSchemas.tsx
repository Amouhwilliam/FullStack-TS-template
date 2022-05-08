import { AxiosRequestConfig } from 'axios'

// SDK OPTIONS
export interface Options extends AxiosRequestConfig {
  version?: string
  token?: string
  baseURL?: string
  timeout?: number
  socketEndpoint?: string
  userId?: string
}

export interface Headers {
  'x-request-id'?: string
  'x-session-id'?: string
  'x-authorization'?: string
  'x-api-key': string
}

export interface ErrorSdk {
  detail: string
}
