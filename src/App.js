import './App.css';
import { useState } from 'react';

function cutTask(id, list){
  list.splice(id,1);
}

function App(props) {

  let [task, setTask] = useState("");
  let [newTask, setNewTask] = useState("");
  let [list, setList] = useState([]);
  let [, setDeleted] = useState([]);

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
          id: list.length,
          text: task,
        }, ...list]);
      }}>Adicionar</button>
      
    <ul>
      {list.map((task, id) => (
        <li key={id}>

          <div>
          <input 
          type={'checkbox'}
          name='checkboxTask'
          id={list.length}
          />
        
          {task.text}
          </div>
          

          <div>
            <button onClick={() => {
                cutTask(id, list);
                setDeleted([]);
              }}>Deletar</button> 

              <button onClick={() => {
                cutTask(id, list);
                setDeleted([]);
                task = newTask;
                setNewTask("");
                setList([{
                  id: list.length,
                  text: task,
                }, ...list]);
              }}>Editar</button>

          </div>
                    
        </li>
        
      ))}
    </ul>

    <div>
      <p>Digite que nova tarefa deseja inserir e para
         subistituir a tarefa desejada aperte o botão *Editar*
         da tarefa respectiva
      </p>
      <input
          id="id" 
          name='editInput'
          type={'text'} 
          placeholder='Digite sua nova tarefa'
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
      />
    </div>
    
    </div>
    
  );
  
}

export default App;
