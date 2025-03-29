import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Hello from '@/app/hello/page';

describe('Hello', () => {
    it('should render the hello page', async () => {
        render(<Hello />);
        expect(screen.getByText('Hello')).toBeInTheDocument();
    });
}   )