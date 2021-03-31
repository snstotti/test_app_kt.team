
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTask, setText } from './redux/reducer/taskReduser';


function App() {

  const dispatch = useDispatch()
  const list = useSelector(state => state.taskStore.taskList)
  const filed = useSelector(state => state.taskStore.entryField)


  const setClickTask = (newTask, id) => {
    if (!newTask) return
    dispatch(addTask(newTask, id))
    dispatch(setText(''))
  }
  const textEntryHandler = (e) => {
    let text = e.target.value
    dispatch(setText(text))
  }

  let taskList = list.map(el => {
    return (
      <div className="row gx-5" key={el.id}>
        <div className="col">
          <div className="p-2 m-1 border bg-light">{el.id} {el.item}</div>
        </div>
      </div>
    )
  })

  return (
    <div className="container">
      <div className='wrapper p-3' style={{ "width": 400, "margin": "0 auto" }}>
        <div className="mb-3 ">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Задачи</label>
          <textarea
            value={filed}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) => textEntryHandler(e)} />
          <button
            type="button"
            className="mt-2 btn btn-success"
            onClick={() => setClickTask(filed, list.length)}>Success</button>
        </div>

        {taskList}
      </div>


    </div>
  )
}

export default App;
