import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element = {<Home/>} />
        {/* <Route path='form' element= {<Form/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
