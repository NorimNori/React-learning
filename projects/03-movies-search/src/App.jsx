import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'


function App() {
  const { movies: mappedMovies } = useMovies()


  return (
    <div>
      <header>
        <h1>Movie searcher</h1>
      <form className='form'>
        <input placeholder='Rec, Paranormal activity, The blackwell ghost...' />
        <button type='submit'>Search</button>
      </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
     
    </div>
  )
}

export default App
