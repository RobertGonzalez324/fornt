import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Navegacion from './componentes/Navegacion.jsx'
import Piepag from './componentes/Piepag.jsx'
import Hogar from './views/Hogar.jsx'
import Productos from './views/Productos.jsx'
import Nosotros from './views/Nosotros.jsx'
import Contacto from './views/Contacto.jsx'

function App() {
 const [path, setPath] = useState('Hogar')
 const [view, setView] = useState(<Hogar />)

  useEffect(() => {
    if (path === 'Hogar') {
      setView(<Hogar />)
    }
    if (path === 'Productos') {
      setView(<Productos />)
    }
    if (path === 'Nosotros') {
      setView(<Nosotros />)
    }
    if (path === 'Contacto') {
      setView(<Contacto />)
    }
  }, [path])

  return (
    <>
    <Navegacion path={path} setPath={setPath}/> 
<main className="min-h-screen bg-gray-200">
      {view}
</main>

<Piepag path={path} setPath={setPath} />

    </>
  )
}

export default App
