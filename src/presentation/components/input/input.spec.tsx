import React from 'react'
import { render } from '@testing-library/react'
import Input from './input'
import Context from '@/presentation/context/form/form-context'

describe('Input', () => {
  test('should begin with readOnly', () => {
    const { getByTestId } = render(
      <Context.Provider value={{ state: {} }}>
        <Input name="field" />
      </Context.Provider>
    )
    const input = getByTestId('field') as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })
})
