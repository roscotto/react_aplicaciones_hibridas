import { useState } from 'react';
import './App.css';
import './GamesList.jsx';
import GamesList from './GamesList.jsx';

//Componentes funcionales

const Navbar = ({ dark, links }) => 
{
  let className = "nav-principal";
  if(dark){
    className += " nav-principal--dark";
  }
  
  //forma estructurada
  // const liLinks = [];
  // for(let i = 0; i < links?.length; i++){
  //   liLinks.push(<li className="nav-principal__item">
  //    <a href={links[i].url}>{links[i].texto}</a></li>
  //   )
  // }
  
  //forma funcional
  // const liLinks = links.map((elemento) => <li className="nav-principal__item"> <a href={elemento.url}>{elemento.texto}</a></li>)

  return(
    <nav>
      <ul className={className}>
        {links.map((elemento, index) => 
        <li key={index} className="nav-principal__item">
          <a href={elemento.url}>{elemento.texto}</a>
        </li>
        )}
      </ul>
    </nav>
  )
}


const Header = () => {
  //código js
  // variable y dispatch (función que modifica el estado)
  // funciones que empiezan con use son hooks - ganchos
  const [links, setLinks] = useState([ //creo un estado con un array de objetos como valor inicial
    {url: "#", texto: "Home"},
    {url: "#", texto: "Productos"},
    {url: "#", texto: "Contacto"},
    {url: "#", texto: "FAQ"}
  ])
  
  const handleClick = () => {
    setLinks([...links, {url: "#", texto: "Nuevo"}]) // agrego un nuevo objeto al array
    console.log(links)
  }

  return(
    <header>
      <h1>Header</h1>
      <Navbar dark={true} links={links}/>      
      <p>{links.length}</p>
      { links.length > 6 && 
        <Mensaje show={links.length === 7}>
          Hay muchos mensajes
        </Mensaje>
      }
      <button onClick={handleClick}>Agregar</button>
    </header>
  )
}

function Mensaje({show=false, children}) {
  if(show){
    return <p>{children}</p>
  }
  return null;
}

const TituloSecundario = ({children}) => {
  return(
    <h2>{children}</h2>
  )
}

// Render - Monta el componente en el DOM

// cambia el estado
// cambia el contexto (hooks)
// cambia las props

// function Mensaje({show=false, children}) {
//  if(show){
//    return <p>{children}</p>
//  }



function App()
{
  return(
    <div>
      <Header />
      <TituloSecundario>
        Título 1
      </TituloSecundario>

      <GamesList />
      
     
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat tempora beatae modi, iste repellendus ad aliquid minus necessitatibus nesciunt accusamus esse harum est, veniam recusandae alias dolores magnam error!</p>
    </div>
  )
}

export default App;

export {
  App,
  Header,
  Navbar
}