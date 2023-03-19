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
      <h1 className='Title'>To-Do List</h1>

    <div className='addTask'>

      <input
        className='inputBar'
        type='text'
        name='todo'
        placeholder='Digite a tarefa desejada'
        onChange={(e) => setTask(e.target.value)}
        autoComplete="off"
        value={task}
      />

      <button className='inputButtons' onClick={() =>{
        setTask("");
        setList([{
          id: list.length,
          text: task,
        }, ...list]);
      }}>Adicionar</button>

      <button className='inputButtons' onClick={() =>{
        setList([])
      }}>Deletar Todos</button>
      
    </div>

    <ul className='lista'>
      {list.map((task, id) => (
        <li className='listItem' key={id}>

          <div className='box_text'>
          <input 
          className='checkbox'
          type={'checkbox'}
          name='checkboxTask'
          id={list.length}
          />
        
          {task.text}

          </div>
          

          <div className='editDeleteButtons'>
            <button className='inputButtons' onClick={() => {
                cutTask(id, list);
                setDeleted([]);
              }}>Deletar</button> 

              <button className='inputButtons' onClick={() => {
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

    <div className='editSection'>
      <p className='paragraph'>Digite a tarefa que deseja inserir e para
         subistituir a tarefa desejada, aperte o botão [Editar]
         da respectiva tarefa
      </p>
      <input
          className='inputBar'
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
