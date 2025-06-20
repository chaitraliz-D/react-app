import React, {useState} from 'react';
import './todo.css';

function ToDoList(){
    const [tasks, setTasks] = useState([]);
    const [newTask , setNewTask]=useState("");
    const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState('');
function handleInputChange(event){
    setNewTask(event.target.value);
           }

function handleEditChange(event) {
    setEditText(event.target.value);
  }           
function Add(){
if(newTask .trim() !=="")
    { setTasks(t=>[...t,newTask]);
        setNewTask("");}
           }
function Delete(index){
const updatedtasks=tasks.filter((_,i)=>i !== index);
setTasks(updatedtasks);
           }
function Edit(index) {
    setEditingIndex(index);
    setEditText(tasks[index]);
  }

  
  function Save(index) {
    if (editText.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[index] = editText;
      setTasks(updatedTasks);
      setEditingIndex(null);
      setEditText('');
    }
  }
           
    return(
           <div className="todolist">
            <h1>To-Do-List</h1>
            <p>by Chaitrali-Z</p>
            <hr style={{width:'100%',border:'1px solid black'}}/>
            <div>
                <input 
                type="text"
                placeholder ="Enter a Task" 
                value={newTask} 
                onChange={handleInputChange}/>
                 <button className="addbtn"
                 onClick={Add}>
                Add
                 </button>
            </div>
            <ol className="tasks">
                {tasks.map((task,index)=> 
                <li key={index}>
                 {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={handleEditChange}
                />
                <button className="savebtn" onClick={() => Save(index)}>
                  Save
                </button>
              </>
            ) : (
              <>
              <button className="deleteBtn" onClick={() => Delete(index)}>
                  -
                </button>
                <span className="text">{task}</span>
                
                <button className="editbtn" onClick={() => Edit(index)}>
                  Edit
                </button>
              </>
            )}    
                
                </li>
                )
             }
            </ol>
           
    </div>)}
    


export default ToDoList