import logo from './logo.svg';
import './App.css';

import Create from './views/Create';
import Display from './views/Display';
import DisplayChoose from './views/DisplayChoose';
import { Router } from '@reach/router';
import Show from './component/Show';

function App() {
  return (
    <div className="App">
      <h1>Countries Competition</h1>
      <Router>
        <Create path="/contsest/new"></Create>
        <Display path="/"></Display>
        <DisplayChoose path="/choose/:id"></DisplayChoose>
        <Show path="/contest/:id"></Show>
      </Router>
    </div>
  );
}

export default App;
