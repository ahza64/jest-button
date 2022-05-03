import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
  expect(colorButton.textContent).toBe('Change to red')
})

test('initial conditions', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toBeEnabled()
  const checkBox = screen.getByRole('checkbox')
  expect(checkBox).not.toBeChecked()
})

test('Checkbox enables on first click and disables on second click', () => {
  render(<App />)
  const checkBox = screen.getByRole('checkbox', { name: 'Disable color button' })
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toBeEnabled()
  fireEvent.click(checkBox)
  expect(colorButton).toBeDisabled()
  fireEvent.click(checkBox)
  expect(colorButton).toBeEnabled()
})

test('Disabled button has greybackground and reverts to red', () => {
  render(<App />)
  const checkBox = screen.getByRole('checkbox', { name: 'Disable color button' })
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  fireEvent.click(checkBox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'grey' })
  fireEvent.click(checkBox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
})

test('Disabled button has grey background and reverts back to blue', () => {
  render(<App />)
  const checkBox = screen.getByRole('checkbox', { name: 'Disable color button' })
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
  fireEvent.click(checkBox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'grey' })
  fireEvent.click(checkBox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
})















//
