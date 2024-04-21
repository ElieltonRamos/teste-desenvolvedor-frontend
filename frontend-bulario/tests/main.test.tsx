import { render } from '@testing-library/react';
import Main from '../src/pages/Main';
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe('Testes da página principal', () => {
  it('Verifica se os testes estão funcionando', () => {
    expect(true).toBe(true)
  })

  it('Verifica se a pagina esta sendo renderizada', () => {
    render(
      <MemoryRouter>
        <Main API_URL='http://localhost:3000' itensPage={10} />
      </MemoryRouter>
    )
    expect(document.querySelector('header')).toBeInTheDocument()
  })
});