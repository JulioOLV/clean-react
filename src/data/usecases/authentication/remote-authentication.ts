import { HttpPostClient } from '@/data/protocols/http/http-post-client'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostCliente: HttpPostClient
  ) {}

  async auth (): Promise<void> {
    await this.httpPostCliente.post(this.url)
  }
}
