import '../App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Main from './Main';
import Edit from './Edit';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <HashRouter>
          <Routes>
              <Route path='/' element={ <Main/>}></Route>
              <Route path='/edit' element={ <Edit/>}></Route>
          </Routes>
       </HashRouter>
      
      </header>
    </div>
  );
}

export default App;
