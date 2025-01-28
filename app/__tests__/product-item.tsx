// Testing library
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Card } from '~/components';
import { getProductDetail } from '~/.server/api';

const MOCK_PRODUCT_ID = 101

/**
 * Test the Card component
 */
describe('Testing Project Components', () => {
    it('renders a Card component correctly', async () => {

        const productData = await getProductDetail(MOCK_PRODUCT_ID);
        
        render(<Card product={productData} />, { wrapper: MemoryRouter });
        
        // Check if the product name and price are rendered
        expect(screen.getByText(productData.name)).toBeInTheDocument();
        expect(screen.getByText(`$${productData.price}`)).toBeInTheDocument();

        // Check if the product image is rendered
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', productData.imageUrl);
        expect(img).toHaveAttribute('alt', productData.name);

    });
});