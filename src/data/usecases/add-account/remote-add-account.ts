import { HttpPostClient } from '@/data/protocols/http'
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
    await this.httpPostCliente.post({
      url: this.url,
      body: params
    })
    return null
  }
}
