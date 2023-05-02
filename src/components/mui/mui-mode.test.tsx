// import { render, screen } from "@testing-library/react";
import { render, screen } from '../../test-utils'
import { MuiMode } from './mui-mode'
// import { AppProviders } from "../../providers/app-providers";

describe('MuiMode', () => {
  test('should renders text correctly', () => {
    // render(<MuiMode />, { wrapper: AppProviders });
    render(<MuiMode />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('dark mode')
  })
})
