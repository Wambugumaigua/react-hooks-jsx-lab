import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../NavBar';

test("renders the correct number of <a> elements inside the <nav> element", () => {
  render(<NavBar />);
  const anchorTags = screen.getAllByRole("link");
  expect(anchorTags).toHaveLength(4); 
});

test("renders each <a> element with the correct attributes", () => {
  render(<NavBar />);
  const about = screen.getByText(/about/i);
  expect(about).toHaveAttribute("href", "/about");
  const portfolio = screen.getByText(/portfolio/i); 
  expect(portfolio).toHaveAttribute("href", "/portfolio");
  const contact = screen.getByText(/contact/i);
  expect(contact).toHaveAttribute("href", "/contact");
});
