interface API {
  baseUrl: string | undefined
  timeout: number
  version: string
}

const API: API = {
  baseUrl: 'http://api.app.localhost/api/',
  timeout: 30000,
  version: 'v1'
}

export default API
