import './App.css';


//Componentes funcionales

const Navbar = ({ dark }) => 
{
  let className = "nav-principal";

  if(dark){
    className += " nav-principal--dark";
  }

  return(
    <nav>
      <ul className={className}>
        <li className="nav-principal__item"><a href="">Home</a></li>
        <li className="nav-principal__item"><a href="">Productos</a></li>
        <li className="nav-principal__item"><a href="">Contacto</a></li>
      </ul>
    </nav>
  )
}


const Header = () => {
  //código js
  return(
    <header>
      <h1>Header</h1>
      <Navbar dark={true} />      
    </header>
  )
}



function App()
{
  return(
    <div>
      <Header />
      <h2>Hola mundo</h2>
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