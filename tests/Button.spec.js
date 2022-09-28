import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from '../components/Button'

test('loads and displays greeting', async () => {
    render(<Button mode="success" size="large" label="Button" />)

    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('Button')
})
