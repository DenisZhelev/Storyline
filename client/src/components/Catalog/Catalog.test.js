/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import { StoryContext } from '../../contexts/StoryContext';
import { Catalog } from './Catalog';

const mockStorys = [
  {
    _id: '1',
    title: 'Test Story 1',
    imageUrl: 'https://test-story-1.jpg',
    preview: 'This is a test story preview.',
    ownerUsername: 'testuser1',
  },
  {
    _id: '2',
    title: 'Test Story 2',
    imageUrl: 'https://test-story-2.jpg',
    preview: 'This is another test story preview.',
    ownerUsername: 'testuser2',
  },
];

jest.mock('../../contexts/StoryContext', () => ({
  useStoryContext: jest.fn(() => ({ storys: mockStorys })),
}));

describe('Catalog', () => {
  it('should render a list of catalog items', () => {
    const { getByText, getAllByTestId } = render(
      <StoryContext.Provider value={{ storys: mockStorys }}>
        <Catalog />
      </StoryContext.Provider>
    );

    expect(getByText('All Storys')).toBeInTheDocument();
    expect(getAllByTestId('catalog-item').length).toBe(2);
    expect(getByText('Test Story 1')).toBeInTheDocument();
    expect(getByText('Test Story 2')).toBeInTheDocument();
  });

  it('should display a message when there are no storys', () => {
    const { getByText } = render(
      <StoryContext.Provider value={{ storys: [] }}>
        <Catalog />
      </StoryContext.Provider>
    );

    expect(getByText('All Storys')).toBeInTheDocument();
    expect(getByText('No articles yet')).toBeInTheDocument();
  });
});
