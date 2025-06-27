import { InvalidFieldError } from '@/validation/errors'
import { CompareFieldsValidation } from './compare-fields-validation'
import faker from 'faker'

const makeSut = (field: string, fieldToCompare: string): CompareFieldsValidation => new CompareFieldsValidation(field, fieldToCompare)

describe('CompareFieldsValidation', () => {
  test('should return error if compare is invalid', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const sut = makeSut(field, fieldToCompare)
    const error = sut.validate({ [field]: faker.random.word(), [fieldToCompare]: faker.random.word() })
    expect(error).toEqual(new InvalidFieldError())
  })

  test('should return falsy if compare is valid', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const fieldValue = faker.random.word()
    const sut = makeSut(field, fieldToCompare)
    const error = sut.validate({ [field]: fieldValue, [fieldToCompare]: fieldValue })
    expect(error).toBeFalsy()
  })
})
