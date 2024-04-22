import { render, screen, waitFor } from '@testing-library/react';
import App from '../src/App';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('Verifica se a rota raiz esta sendo renderizada', () => {
    vi.mock('../src/pages/Main', () => {
      return {
        default: () => (
          <div data-testid="main">
            <a href='/medicament/1'>aqui</a>
          </div>)}})

    render(<App />);

    expect(screen.getByTestId('main')).toBeInTheDocument();
  });

  it('renderiza o componente MedicamentDetail na rota /medicament/:id', async () => {
    vi.mock('../src/pages/MedicamentDetail', () => {
      return { default: () => (<div data-testid="medicamentDetail">detail component</div>) }
    })

    render(<App />);
    const link = screen.getByText('aqui');
    await userEvent.click(link);

    waitFor(() => expect(screen.getByTestId('medicamentDetail')).toBeInTheDocument());
  });

});