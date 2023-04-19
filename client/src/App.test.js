import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from './App';

test('renders Navigation component', () => {
  render(<App />);
  const navigationElement = screen.getByTestId('navigation');
  expect(navigationElement).toBeInTheDocument();
});

test('renders Home component by default', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  const homeElement = screen.getByTestId('home');
  expect(homeElement).toBeInTheDocument();
});

test('navigates to Login component when clicking on Login link', async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  const loginLinkElement = screen.getByText(/login/i);
  userEvent.click(loginLinkElement);
  await waitFor(() => {
    const loginElement = screen.getByTestId('login');
    expect(loginElement).toBeInTheDocument();
  });
});

test('navigates to Register component when clicking on Register link', async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  const registerLinkElement = screen.getByText(/register/i);
  userEvent.click(registerLinkElement);
  await waitFor(() => {
    const registerElement = screen.getByTestId('register');
    expect(registerElement).toBeInTheDocument();
  });
});

test('navigates to Catalog component when clicking on Catalog link', async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  const catalogLinkElement = screen.getByText(/catalog/i);
  userEvent.click(catalogLinkElement);
  await waitFor(() => {
    const catalogElement = screen.getByTestId('catalog');
    expect(catalogElement).toBeInTheDocument();
  });
});

test('navigates to CreateStory component when clicking on Create Story link', async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  const createStoryLinkElement = screen.getByText(/create story/i);
  userEvent.click(createStoryLinkElement);
  await waitFor(() => {
    const createStoryElement = screen.getByTestId('create-story');
    expect(createStoryElement).toBeInTheDocument();
  });
});

test('navigates to StoryDetails component when clicking on a story in Catalog', async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  const catalogLinkElement = screen.getByText(/catalog/i);
  userEvent.click(catalogLinkElement);
  await waitFor(() => {
    const firstStoryLinkElement = screen.getByTestId('story-link-0');
    // eslint-disable-next-line testing-library/no-wait-for-side-effects
    userEvent.click(firstStoryLinkElement);
  });
  await waitFor(() => {
    const storyDetailsElement = screen.getByTestId('story-details');
    expect(storyDetailsElement).toBeInTheDocument();
  });
});
test('clicking on catalog link should render catalog page', async () => {
  render(
    // eslint-disable-next-line react/jsx-no-undef
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Find and click the "Catalog" link
  const catalogLinkElement = screen.getByText(/catalog/i);
  userEvent.click(catalogLinkElement);

  // Wait for the catalog page to be rendered
  await waitFor(() => {
    const catalogTitleElement = screen.getByRole('heading', { name: /catalog/i });
    expect(catalogTitleElement).toBeInTheDocument();
  });
});
