
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTask, setText, reverseList } from './redux/reducer/taskReduser';

import ListRendering from './components/listRendering/ListRendering';
import SearchInput from './components/searchInput/SearchInput';
import { useEffect } from 'react';


function App() {

  const dispatch = useDispatch()
  const list = useSelector(state => state.taskStore.taskList)
  const searchFiled = useSelector(state => state.taskStore.searchFiled)
  const listFilter = useSelector(state => state.taskStore.searchShowNews)
  const filed = useSelector(state => state.taskStore.entryField)

  let newId = Date.now()
  
  const setClickTask = (e,newTask, id) => {
    if (!newTask) {return e.preventDefault()}
    dispatch(addTask(newTask, id))
    dispatch(setText(''))
    e.preventDefault() 
  }
   const textEntryHandler = (e) => {
    let text = e.target.value
    dispatch(setText(text))
  }
  const listTask = searchFiled ? listFilter : list
  useEffect(() => {
    ListRendering(listTask)
    
  }, [listTask])

 
  return (
    <div className="container">
      <div className='wrapper p-3' style={{ "width": 400, "margin": "0 auto" }}>
        
        <div className="mb-3 ">
          <form onSubmit={(e) => setClickTask(e,filed, newId)}>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Задачи</label>
            <input
              type='text'
              value={filed}
              className="form-control"
              rows="3"
              onChange={(e) => textEntryHandler(e)} />
            <button type="submit" className="mt-2 btn btn-success">Add task</button>
          </form>
          <button type='button' onClick={()=>dispatch(reverseList())}>reverse</button>
          <SearchInput />
        </div>
        
        {ListRendering(listTask)}
        
        
      </div>


    </div>
  )
}

export default App;
