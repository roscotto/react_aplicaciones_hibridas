//Componentes funcionales

const Navbar = () => (
      <nav>
        <ul>
          <li>Home</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
      </nav>
)


const Header = () => {
  //código js
  return(
    <header>
      <h1>Header</h1>
      <Navbar />      
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