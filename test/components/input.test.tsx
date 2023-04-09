import React from 'react'
import { describe, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Input from '../../src/components/input'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../src/store'


describe('test Input', () => {
  const inputTestId = 'asdf'
  const inputValue = ''
  const inputPlaceHolder = 'placeholder'
  const onChangeInput = vi.fn()
  let input: HTMLInputElement

  beforeEach(() => {

    render(
      <Provider store={store}>
        <Input
          data-testid={inputTestId}
          value={inputValue}
          setPass={onChangeInput}
          placeholder={inputPlaceHolder}
        />
      </Provider>,
      { wrapper: MemoryRouter })

    input = screen.getByTestId(inputTestId)
  })

  test('check value', () => {
    expect(input.value).toBe(inputValue)
  })

  test('check  placeholder attribute', () => {
    expect(input).toHaveAttribute('placeholder')
  })

  test('check placeholder value', () => {
    expect(screen.getByPlaceholderText(inputPlaceHolder)).toBeInTheDocument()
  })

  test('check input onChange callback called times', async () => {
    await userEvent.type(input, 'adm')
    expect(onChangeInput).toHaveBeenCalledTimes(3)
  })

  test('check input onChange callback arg', async () => {
    await userEvent.type(input, 'adm')
    expect(onChangeInput).toBeCalledWith('a')
    expect(onChangeInput).toBeCalledWith('d')
    expect(onChangeInput).toBeCalledWith('m')
  })
})
