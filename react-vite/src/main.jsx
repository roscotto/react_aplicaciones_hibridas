import React from 'react'
import ReactDOM from 'react-dom/client'

//Componentes funcionales
function App()
{
  return(
    <div>
      <h1>Hola mundo</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat tempora beatae modi, iste repellendus ad aliquid minus necessitatibus nesciunt accusamus esse harum est, veniam recusandae alias dolores magnam error!</p>
    </div>
  )
}

ReactDOM.createRoot(
  document.getElementById('root'))
    .render(
    //<React.StrictMode>
      <App />
    //</React.StrictMode>,
)
