import { InvalidFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class EmailValidation implements FieldValidation {
  constructor (readonly field: string) {}

  validate (input: object): Error {
    const value = input[this.field]
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return (!value || emailRegex.test(value)) ? null : new InvalidFieldError()
  }
}
