import Homepage from './Homepage';
import Projects from './Projects';
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Homepage} />
          <Route path="/work" Component={Projects} />
        </Routes>
      </BrowserRouter>


    </>

  );
}

export default App;