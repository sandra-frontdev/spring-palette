import { render, screen, fireEvent } from '@testing-library/react';
import { ColorInput } from './ColorInput';

describe('ColorInput', () => {
    it('displays the label', () => {
        render(<ColorInput label="Color" value="" onChange={() => { }} placeholder="Enter color" />);
        expect(screen.getByText('Color')).toBeInTheDocument();
    });

    it('displays the placeholder', () => {
        render(<ColorInput label="Color" value="" onChange={() => { }} placeholder="Enter HEX code" />);
        expect(screen.getByPlaceholderText('Enter HEX code')).toBeInTheDocument();
    });

    it('displays the provided value', () => {
        render(<ColorInput label="Color" value="#000" onChange={() => { }} placeholder="Enter color" />);
        expect(screen.getByDisplayValue('#000')).toBeInTheDocument();
    });

    it('calls onChange with the entered value', () => {
        const handleChange = jest.fn();
        render(<ColorInput label="Color" value="" onChange={handleChange} placeholder="Enter color" />);

        const input = screen.getByPlaceholderText('Enter color');
        fireEvent.change(input, { target: { value: '#000' } });
        expect(handleChange).toHaveBeenCalledWith('#000');
    });
});
