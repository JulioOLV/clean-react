import React from 'react'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import Input from './input'
import Context from '@/presentation/context/form/form-context'

const makeSut = (): RenderResult => render(
  <Context.Provider value={{ state: {} }}>
    <Input name="field" />
  </Context.Provider>
)

describe('Input', () => {
  test('should begin with readOnly', () => {
    const sut = makeSut()
    const input = sut.getByTestId('field') as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })

  test('should remove readOnly on focus', () => {
    const sut = makeSut()
    const input = sut.getByTestId('field') as HTMLInputElement
    fireEvent.focus(input)
    expect(input.readOnly).toBe(false)
  })
})
