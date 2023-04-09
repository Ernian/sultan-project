import React from 'react'
import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'
import Footer from '../../src/components/footer'

describe('test Footer render', () => {
  const testId = 'test-id'
  const testClassName = 'kdfa'

  beforeEach(() => {
    render(
      <Footer data-testid={testId} className={testClassName} />,
      { wrapper: MemoryRouter }
    )
  })

  test('by test id', () => {
    expect(screen.getByTestId(testId)).toBeInTheDocument()
  })

  test('have css class', () => {
    expect(screen.getByTestId(testId)).toHaveClass(testClassName)
  })

  test('by text', () => {
    expect(screen.getByText('Подпишись на скидки и акции')).toBeInTheDocument()
  })

  test('by tagname', () => {
    expect(screen.getByTestId(testId).tagName).toBe('FOOTER')
  })

  test('snapshot', () => {
    expect(screen).toMatchSnapshot()
  })
})
