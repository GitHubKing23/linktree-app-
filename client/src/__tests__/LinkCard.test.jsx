import { render, screen } from '@testing-library/react';
import LinkCard from '../components/LinkCard.jsx';

test('renders link title', () => {
  render(<LinkCard link={{ title: 'Example', url: 'https://example.com' }} />);
  expect(screen.getByText('Example')).toBeInTheDocument();
});
