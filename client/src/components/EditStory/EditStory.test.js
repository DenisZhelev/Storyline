import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { EditStory } from './EditStory';

test('renders edit story form', () => {
  render(
    <MemoryRouter>
      <EditStory />
    </MemoryRouter>
  );

  expect(screen.getByLabelText('Image URL')).toBeInTheDocument();
  expect(screen.getByLabelText('Title')).toBeInTheDocument();
  expect(screen.getByLabelText('Category')).toBeInTheDocument();
  expect(screen.getByLabelText('Preview')).toBeInTheDocument();
  expect(screen.getByLabelText('story')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /save changes/i })).toBeInTheDocument();
});
