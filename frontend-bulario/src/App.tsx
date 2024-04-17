function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
      <header>
        <h1>Frontend Bulario</h1>
      </header>
      <section>
        <h2>Busque um medicamento</h2>
        <form>
          <input type="text" placeholder="Nome do medicamento" />
          <button type="submit">Buscar</button>
        </form>
      </section>
    </main>
  )
}

export default App
