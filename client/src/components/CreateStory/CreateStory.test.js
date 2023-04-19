import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { CreateStory } from './CreateStory';
import { AuthContext } from '../../contexts/AuthContext';
import { StoryContext } from '../../contexts/StoryContext';

describe('CreateStory component', () => {
  const authValue = {
    username: 'testuser',
  };
  const storyValue = {
    onCreateStorySubmit: jest.fn(),
  };

  beforeEach(() => {
    render(
      <AuthContext.Provider value={authValue}>
        <StoryContext.Provider value={storyValue}>
          <CreateStory />
        </StoryContext.Provider>
      </AuthContext.Provider>
    );
  });

  it('renders the form fields', () => {
    expect(screen.getByLabelText('Image URL')).toBeInTheDocument();
    expect(screen.getByLabelText('Title')).toBeInTheDocument();
    expect(screen.getByLabelText('Category')).toBeInTheDocument();
    expect(screen.getByLabelText('Preview')).toBeInTheDocument();
    expect(screen.getByLabelText('story')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Create Story' })).toBeInTheDocument();
  });

  it('updates form values on change', () => {
    const titleInput = screen.getByLabelText('Title');
    const categoryInput = screen.getByLabelText('Category');
    const previewInput = screen.getByLabelText('Preview');
    const storyInput = screen.getByLabelText('story');
    const imageUrlInput = screen.getByLabelText('Image URL');

    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    fireEvent.change(categoryInput, { target: { value: 'Test Category' } });
    fireEvent.change(previewInput, { target: { value: 'Test Preview' } });
    fireEvent.change(storyInput, { target: { value: 'Test Story' } });
    fireEvent.change(imageUrlInput, { target: { value: 'Test Image URL' } });

    expect(titleInput.value).toBe('Test Title');
    expect(categoryInput.value).toBe('Test Category');
    expect(previewInput.value).toBe('Test Preview');
    expect(storyInput.value).toBe('Test Story');
    expect(imageUrlInput.value).toBe('Test Image URL');
  });

  it('calls the onSubmit handler on form submit', () => {
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(storyValue.onCreateStorySubmit).toHaveBeenCalled();
  });
});
