import './App.css';
import Names from './components/Names';


function App() {
  return (
    <div className="App">
      <Names firstName={'Jane'} lastName={'Doe'} age={45} hairColor={'black'}/>
      <Names firstName={'John'} lastName={'Smith'} age={88} hairColor={'brown'}/>
      <Names firstName={'Millard'} lastName={'Fillmore'} age={50} hairColor={'brown'}/>
      <Names firstName={'Maria'} lastName={'Smith'} age={62} hairColor={'brown'}/>
    </div>
  );
}

export default App;
