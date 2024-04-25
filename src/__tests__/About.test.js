import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../About';

test("renders the About component", () => {
  render(<About />);
  const aboutElement = screen.getByTestId("about");
  expect(aboutElement).toBeInTheDocument();
});
