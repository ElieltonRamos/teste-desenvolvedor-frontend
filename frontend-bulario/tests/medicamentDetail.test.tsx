import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import { vi } from 'vitest';
import { mockAllMedicaments } from './mocks/mockAllMedicaments';
import MedicamentDetail from '../src/pages/MedicamentDetail';

describe('Testes da página principal', () => {

  afterEach(() => { vi.restoreAllMocks() })

  it('Verifica se a pagina esta sendo renderizada', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (mockAllMedicaments[0]),
    });
    const id = '9fd2789c-50f5-4743-857b-bbfa746ed631';
    const route = `/medicament/${id}`;
    render(<MemoryRouter initialEntries={[route]}><MedicamentDetail/></MemoryRouter>)

    await waitFor(() => {
      expect(document.querySelector('header')).toBeInTheDocument()
      expect(document.querySelector('main')).toBeInTheDocument()
      expect(screen.getByText(/Detalhes do Medicamento/i)).toBeInTheDocument()
    })
  });

  it('Verifica se os detalhes do medicamento sao exibidos', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (mockAllMedicaments[0]),
    });
    const id = '9fd2789c-50f5-4743-857b-bbfa746ed631';
    const route = `/medicament/${id}`;
    render(<MemoryRouter initialEntries={[route]}><MedicamentDetail/></MemoryRouter>)

    await waitFor(() => {
      expect(screen.getByText(/Detalhes do Medicamento/i)).toBeInTheDocument()
      expect(screen.getByText(/AMOXICILINA/i)).toBeInTheDocument()
      expect(screen.getByText(/MULTILAB INDUSTRIA E COMERCIO DE PRODUTOS FARMACEUTICOS LTDA/i)).toBeInTheDocument()
    })
  });

  it('Verifica se as bulas do medicamento sao exibidas', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (mockAllMedicaments[0]),
    });
    const id = '9fd2789c-50f5-4743-857b-bbfa746ed631';
    const route = `/medicament/${id}`;
    render(<MemoryRouter initialEntries={[route]}><MedicamentDetail/></MemoryRouter>)

    await waitFor(() => {
      const elementosDownload = screen.getAllByText(/download/i);
      expect(document.querySelector('.containerBula')).toBeInTheDocument()
      expect(screen.getByText(/bulas disponiveis/i)).toBeInTheDocument()
      expect(elementosDownload).toHaveLength(2)
      expect(screen.getAllByText(/visualizar/i)).toHaveLength(2)
    })
  });
});