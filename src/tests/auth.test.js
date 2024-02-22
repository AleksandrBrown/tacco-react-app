// SignInForm.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // If you're using Redux

import SignInForm from './SignInForm';

describe('SignInForm component', () => {
  // Create a mock store for Redux
  const mockStore = configureStore([]);

  it('renders without crashing', () => {
    // Create a mock store state (you can customize this based on your needs)
    const initialState = {
      auth: {
        isLoggedIn: false,
        error: false,
      },
      user: {},
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <SignInForm />
      </Provider>
    );
  });

  it('submits the form with valid input', async () => {
    const initialState = {
      auth: {
        isLoggedIn: false,
        error: false,
      },
      user: {},
    };

    const store = mockStore(initialState);

    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <SignInForm />
      </Provider>
    );

    // Get input elements
    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');

    // Fill in the input fields
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Trigger the form submission
    fireEvent.click(getByText('Log in'));

    // Wait for the submission to complete (if any asynchronous actions)
    await waitFor(() => {
      // Add assertions for successful sign-in (update based on your implementation)
      expect(/* Your success condition here */).toBe(/* Expected value */);
    });
  });

  // Add more test cases as needed
});
