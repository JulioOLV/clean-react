import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { EmailInUseError } from '@/domain/errors'
import { AccountModel } from '@/domain/models'
import { AddAccount, AddAccountParams } from '@/domain/usecases'

export class RemoteAddAccount implements AddAccount {
  constructor (
    private readonly url: string,
    private readonly httpPostCliente: HttpPostClient<
    AddAccountParams,
    AccountModel
    >
  ) {}

  async add (params: AddAccountParams): Promise<AccountModel> {
    const response = await this.httpPostCliente.post({
      url: this.url,
      body: params
    })

    switch (response.statusCode) {
      case HttpStatusCode.forbidden:
        throw new EmailInUseError()
      default:
        return null
    }
  }
}
