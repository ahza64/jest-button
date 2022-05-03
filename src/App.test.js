import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' })
  expect(colorButton.textContent).toBe('Change to Medium Violet Red')
})

test('initial conditions', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  expect(colorButton).toBeEnabled()
  const checkBox = screen.getByRole('checkbox')
  expect(checkBox).not.toBeChecked()
})

test('Checkbox enables on first click and disables on second click', () => {
  render(<App />)
  const checkBox = screen.getByRole('checkbox', { name: 'Disable color button' })
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  expect(colorButton).toBeEnabled()
  fireEvent.click(checkBox)
  expect(colorButton).toBeDisabled()
  fireEvent.click(checkBox)
  expect(colorButton).toBeEnabled()
})

test('Disabled button has greybackground and reverts to MediumVioletRed', () => {
  render(<App />)
  const checkBox = screen.getByRole('checkbox', { name: 'Disable color button' })
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  fireEvent.click(checkBox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'grey' })
  fireEvent.click(checkBox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })
})

test('Disabled button has grey background and reverts back to MidnightBlue', () => {
  render(<App />)
  const checkBox = screen.getByRole('checkbox', { name: 'Disable color button' })
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' })
  fireEvent.click(checkBox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'grey' })
  fireEvent.click(checkBox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' })
})

describe('spaces before capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })

  test('Works for multipule inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})















//
