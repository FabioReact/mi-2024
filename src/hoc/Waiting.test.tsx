import { render, screen } from '@testing-library/react';
import Waiting from './Waiting';
import '@testing-library/jest-dom';

describe('Waiting Component', () => {
  it('should render Loader if data is loading', () => {
    render(
      <Waiting loading={true}>
        <h1>Hello</h1>
      </Waiting>,
    );
    const title = screen.queryByRole('heading', { name: /hello/i });
    const loader = screen.getByRole('status', { busy: true });

    expect(title).not.toBeInTheDocument();
    expect(loader).toBeInTheDocument();
  });

  it('should render Hello if loading is false', () => {
    // Arrange
    render(
      <Waiting loading={false}>
        <h1>Hello</h1>
      </Waiting>,
    );
    const title = screen.getByRole('heading', { name: /hello/i });
    const loader = screen.queryByRole('status', { busy: true });

    // Assert
    expect(title).toBeInTheDocument();
    expect(loader).not.toBeInTheDocument();
  });
});
