import './App.css'
import { useEffect, useRef, useState, useCallback } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('Cannot do an empty search')
      return
    }if (search.match(/^\d+$/)) {
      setError('Cannot do a search with a number')
      return
    }if (search.length < 3) {
      setError('Search must be at least three characters')
      return
    }
  
    setError(null)
  }, [search])

  return { search, updateSearch, error}
}


function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error} = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 300)
    , [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }
  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie searcher</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input style={{ 
          border: '1px solid transparent', 
          borderColor: error ? 'red' : 'transparent' 
          }}onChange={ handleChange } value={search} name='query' placeholder='Rec, Paranormal activity, The blackwell ghost...' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
        <button type='submit'>Search</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>
     
    </div>
  )
}

export default App
