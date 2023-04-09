import React from 'react'
import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import DesktopHeader from '../../src/components/desktopHeader'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../src/store'


describe('test DesktopHeader render', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <DesktopHeader />
      </Provider>,
      { wrapper: MemoryRouter })
  })

  test('by text', () => {
    expect(screen.getByText('Каталог')).toBeInTheDocument()
  })

  test('snapshot', () => {
    expect(screen).toMatchSnapshot()
  })
})
