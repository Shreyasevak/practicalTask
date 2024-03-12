/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
// Note: test renderer must be required after react-native.
import { render, waitFor, } from '@testing-library/react-native';

test('renders correctly', async () => {
  const { toJSON, } = render(<App />);

  await waitFor(() => {

    expect(toJSON).toMatchSnapshot()
  });
});
