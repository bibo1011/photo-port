import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Contact from '..';
import ContactForm from '..';

afterEach(cleanup)

describe('Contact is rendering', () => {
    // it('renders', () => {
    //     render(<ContactForm
    //         categories={categories}
    //         setCurrentCategory={mockSetCurrentCategory}
    //         currentCategory={mockCurrentCategory}
    //         contactSelected={mockContactSelected}
    //         setContactSelected={mockSetContactSelected}
    //     />);
    it('renders', () => {
        const { getByTestId } = render(<ContactForm/>)
        expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
        })
    
})

// not working test