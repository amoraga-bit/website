import Greeting from './component/Greeting.jsx';
import Counter from './component/Counter.jsx';

const App = () => {
return (
  <>  
    <h1>Mi primer componente de react</h1>
    <h2>Mi sitio web con reactjs</h2>
    <Greeting name="Ana" lastname="Pérez" />
    <Greeting name="Pedro" lastname="Gómez" />
    <Greeting name="Carlos" lastname="Rodríguez" />
    <Greeting name="Fernando" lastname="López" />
    <Greeting />
    <Counter counter />
    <Counter initCounter={10} />
    <Counter initCounter={15} />

  </>
)

}
export default App;