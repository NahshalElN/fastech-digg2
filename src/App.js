import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Questionaire from './components/Questionaire';
import Context from "./Global/Context";

function App() {
  return (
    <div className="App">
      <Context>
        <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Questionaire} path="/Questionaire" />
        </Switch>
      </BrowserRouter>
    </Context>
    </div>
  );
}

export default App;
