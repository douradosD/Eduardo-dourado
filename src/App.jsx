import { useEffect } from 'react'
import Home from './pages/Home'

export default function App() {
  useEffect(() => {
    document.title = 'Sync Produtora | Videos premium para marcas locais'
  }, [])

  return <Home />
}
