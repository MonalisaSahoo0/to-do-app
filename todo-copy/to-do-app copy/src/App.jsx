
import './App.css'
import AddContainer from './componenets/Container'



import AddHeading from './componenets/Header'
import Todo from './componenets/todo'
import itemList from './componenets/todocontainer'

function App() {
 
  function CreateToDo(item) {
    return <Todo  
    id={item.id}
    name={item.cname}
    date={item.cdate}/>
  }

  return <center class="todo-container">
    <AddHeading />
    
    <AddContainer />
   {itemList.map(CreateToDo)}
         

    

  

  
  
  </center>
    
  
}

export default App
