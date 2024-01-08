import { render, screen } from '@testing-library/react';
import Main from './pages/Main';

test('renders learn react link', () => {
  render(<Main />);
  const linkElement = screen.getByText(/MAIN PAGE/i);
  expect(linkElement).toBeInTheDocument();
});
