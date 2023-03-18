import './App.css';
import { useState, useEffect } from 'react';

function cutTask(id, list){
  list.splice(id,1);
}

function App() {

  let index = 0;
  let [task, setTask] = useState("");
  let [list, setList] = useState([]);
  let [, setDeleted] = useState([]);

  useEffect(() => {
    setList([])
  }, [])

  return (
    <div className="App">
      <h1>To-Do List</h1>

      <input
        type='text'
        name='todo'
        onChange={(e) => setTask(e.target.value)}
        autoComplete="off"
        value={task}
      />

      <button onClick={() =>{
        setTask("");
        setList([{
          id: index++,
          text: task,
        }, ...list]);
      }}>Adicionar</button>
      
    <ul>
      {list.map((task, id) => (
        <li key={id}>

          <input 
          type={'checkbox'}
          id={index}
          />

          {task.text}

          <button onClick={() => {
              cutTask(id, list);
              setDeleted([]);
            }
            }>Deletar</button>
        </li>
      ))}
    </ul>
    </div>
    
  );
  
}

export default App;
