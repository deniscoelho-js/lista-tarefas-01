import { useState } from 'react';
import * as C from './App.styles'
import './App.css';
import {Item} from './types/Item'
import {ListItem} from './components/ListItem'
import {AddArea} from './components/AddArea'

function App() {

  const [list, setList] = useState<Item[]>([
    {id: 1, nome: 'estudar react', done: false},
    {id: 2, nome: 'estudar typescript', done: true}
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      nome: taskName,
      done: false
    })
    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>

          <AddArea onEnter={handleAddTask} />

          {list.map((item, index) =>(
            <ListItem key={index} item={item}/>
          ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
