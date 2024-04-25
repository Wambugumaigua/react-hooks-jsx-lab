import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

test("renders the Home component", () => {
  render(<Home />);
  const homeElement = screen.getByText("is a Web Developer from");
  expect(homeElement).toBeInTheDocument();
});
