import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BestsellerProduct } from '../stories/Product.stories';

test('loads and displays greeting', async () => {
   render(<BestsellerProduct {...BestsellerProduct.args} />)

   const product = screen.getByTestId('bestseller-badge')
   expect(product).toHaveTextContent('BESTSELLER')
})
