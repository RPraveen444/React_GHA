import { render, screen } from '@testing-library/react';
import UsersListAzure from './UserListAzure';

test('renders learn react link', () => {
  render(<UsersListAzure />);
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
