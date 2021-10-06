import { useState } from 'react';
import * as C from './App.styles'
import './App.css';
import {Item} from './types/'

function App() {

  const [list, setList] = useState([]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de tarefas
        </C.Header>
      </C.Area>
    </C.Container>
  );
}

export default App;
