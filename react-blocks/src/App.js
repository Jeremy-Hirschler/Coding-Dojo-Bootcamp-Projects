
import './App.css';
import Advertisement from './components/Advertisement';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Subcontent from './components/Subcontent';

function App() {
  return (
    <div className="App" style = {{
      backgroundColor: '#dddddd',
      height: '600px',
      width: '90%',
      margin: '20px auto',
      padding: '10px 5px'
    }}>
      <Header />
      <Nav />
      <Main>
        < Subcontent />
        < Subcontent />
        < Subcontent />
        <Advertisement />
      </Main>
    </div>
  );
}

export default App;
