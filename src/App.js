import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTask, setText, reverseList, filterTask } from './redux/reducer/taskReduser';
import ListRendering from './components/listRendering/ListRendering';
import ReverseButton from './components/reversButton/ReverseButton';
import SearchInput from './components/searchInput/SearchInput';
import Pagination from './components/pagination/Pagination';
import {  useEffect } from 'react';


function App() {

  const dispatch = useDispatch()
  const list = useSelector(state => state.taskStore.taskList)
  const currentPage = useSelector(state => state.taskStore.currentPage)
  const isReverse = useSelector(state => state.taskStore.isReversArr)
  const searchFiled = useSelector(state => state.taskStore.searchFiled)
  const listFilter = useSelector(state => state.taskStore.searchShowNews)
  const filed = useSelector(state => state.taskStore.entryField)

  let newId = Date.now()
  let numberTasksPerPage = 1
  let pagesCount = Math.ceil(list.length / numberTasksPerPage)

  

  

  const setClickTask = (e, newTask, id) => {
    if (!newTask) { return e.preventDefault() }
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
    dispatch(filterTask(searchFiled))
  }, [searchFiled, dispatch, isReverse])

  
  return (
    <div className="container">
      <div className='wrapper p-3' style={{ "width": 400, "margin": "0 auto" }}>

        <div>
          <form onSubmit={(e) => setClickTask(e, filed, newId)}>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Задачи</label>
            <input
              type='text'
              value={filed}
              className="form-control"
              rows="3"
              onChange={(e) => textEntryHandler(e)} />
            <button type="submit" className="mt-2 btn btn-success">Add task</button>
          </form>

          <SearchInput searchFiled={searchFiled} />

          <ReverseButton reverseList={() => dispatch(reverseList(!isReverse))} />

        </div>

        <ListRendering
          list={listTask}
          currentPage={currentPage}
          pagesCount={pagesCount}
          numberTasksPerPage={numberTasksPerPage} />

        <Pagination 
          currentPage={currentPage}
          pagesCount={pagesCount}
           />
      </div>

      
    </div>
  )
}

export default App;
