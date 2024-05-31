import { render, screen, waitFor } from '@testing-library/react';
import { Star } from './Star';
import userEvent from '@testing-library/user-event';

describe('Star Component', () => {
  it('should render component if visible is true', async () => {})
  it('should not render component if visible is false', async () => {})
  it('should call onUnfill when click on filled star', async () => {})

  it('should call onFill when click on unfilled star', async () => {
    // let called = false;
    // const onFill = () => (called = true);
    const onFill = vi.fn();
    const onUnfill = vi.fn();
    render(<Star onFill={onFill} onUnfill={onUnfill} filled={false} />);
    const starIcon = screen.getByRole('checkbox');

    // Act
    await userEvent.click(starIcon);

    // Assert
    expect(onFill).toHaveBeenCalled();
    expect(onUnfill).not.toHaveBeenCalled();
  });
});
