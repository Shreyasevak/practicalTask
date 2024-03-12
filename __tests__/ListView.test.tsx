// __tests__/Demo.test.js
import 'react-native';
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import ListView from '../src/screen/ListView'; // Replace with the correct path to your Demo component
import { getStudentList } from '../src/api';

// Mock the API function
jest.mock('../src/api', () => ({
    getStudentList: jest.fn(),
}));

test('renders list correctly when data is available', async () => {
    // Mock API response
    (getStudentList as jest.MockedFunction<typeof getStudentList>).mockResolvedValueOnce([
        {
            id: 1,
            email: 'george.bluth@reqres.in',
            first_name: 'George',
            last_name: 'Bluth',
            avatar: 'https://reqres.in/img/faces/1-image.jpg',
        },
        {
            id: 2,
            email: 'janet.weaver@reqres.in',
            first_name: 'Janet',
            last_name: 'Weaver',
            avatar: 'https://reqres.in/img/faces/2-image.jpg',
        },
    ]);
    const { toJSON } = render(<ListView />);


    // Render the component
    // Wait for asynchronous code to settle
    await waitFor(() => {
        // Assert that list items are present
        // expect(getByText('George')).toBeDefined();
        // expect(getByText('Janet')).toBeDefined();
        expect(toJSON).toMatchSnapshot()
    });

});
