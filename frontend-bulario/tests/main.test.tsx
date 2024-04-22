import { render, screen, waitFor } from '@testing-library/react';
import Main from '../src/pages/Main';
import { MemoryRouter } from "react-router-dom";
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { mockAllMedicaments } from './mocks/mockAllMedicaments';

describe('Testes da página principal', () => {

  afterEach(() => {vi.restoreAllMocks()})

  it('Verifica se a pagina esta sendo renderizada', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (mockAllMedicaments),
    });
    render(
      <MemoryRouter>
        <Main API_URL='' itensPage={10} />
      </MemoryRouter>)

    await waitFor(() => {
      expect(document.querySelector('header')).toBeInTheDocument()
      expect(document.querySelector('main')).toBeInTheDocument()
      expect(screen.getByText(/Bulario/i)).toBeInTheDocument()
      expect(screen.getByText(/Busque um medicamento/i)).toBeInTheDocument()
      expect(screen.getByText(/Resultados/i)).toBeInTheDocument()
      expect(screen.getByPlaceholderText(/Digite o nome.../i)).toBeInTheDocument()
      expect(screen.getByPlaceholderText(/digite o laboratorio.../i)).toBeInTheDocument()
    });
  });

  it('Verifica se a listagem de medicamentos está sendo renderizada', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: () => (mockAllMedicaments),
    });
    render(
      <MemoryRouter>
        <Main API_URL='' itensPage={10} />
      </MemoryRouter>)

    await waitFor(() => {
      expect(document.querySelector('.listMedicaments')).toBeInTheDocument();
      expect(document.querySelectorAll('.card')).toHaveLength(mockAllMedicaments.length);
    });
  });

  it('Verifica se o componente de paginas e exibido', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: () => (mockAllMedicaments),
    });
    render(
      <MemoryRouter>
        <Main API_URL='' itensPage={10} />
      </MemoryRouter>)

    await waitFor(() => {
      expect(document.querySelector('.pageSelection')).toBeInTheDocument();
    });
  })

  it('Verifica se a filtragem de medicamentos está funcionando', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: () => (mockAllMedicaments),
    });
    render(
      <MemoryRouter>
        <Main API_URL='' itensPage={10} />
      </MemoryRouter>)

    await waitFor(() => {
      expect(document.querySelector('.listMedicaments')).toBeInTheDocument();
      expect(document.querySelectorAll('.card')).toHaveLength(mockAllMedicaments.length);
    });

    const inputName = screen.getByPlaceholderText(/Digite o nome.../i);
    await userEvent.type(inputName, 'ACEZO');

    await waitFor(() => {
      expect(document.querySelectorAll('.card')).toHaveLength(1);
    });

    inputName.textContent = '';

    const inputCompany = screen.getByPlaceholderText(/digite o laboratorio.../i);
    await userEvent.type(inputCompany, 'CRISTÁLIA');

    await waitFor(() => {
      expect(document.querySelectorAll('.card')).toHaveLength(1);
    });
  });
});