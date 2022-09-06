import Loading from './Props/Loading'
import Parent from './Props/Parent'
import Counter from './State/Counter';
import Renderizado from './Renderizando/Renderizado';
import Padre from './LevantandoEstado/Padre'
import Refs from './Ref/Ref';
import Index from './Hoc/Index'
import ReactDOM from "react-dom";

ReactDOM.render(<Index />, document.getElementById("root"));

function App() {
  return(
    <div className='App'>
      <Loading show={'true'} />
      <Parent />
      <Counter />
      <Renderizado />
      <Padre />
      <Ref />
      
    </div>
  )
}


export default App;