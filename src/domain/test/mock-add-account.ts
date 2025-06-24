import faker from 'faker'
import { AddAccountParams } from '@/domain/usecases'

export const mockAddAccount = (): AddAccountParams => {
  const password = faker.internet.password()

  return {
    email: faker.internet.email(),
    password,
    name: faker.name.findName(),
    passwordConfirmation: password
  }
}
