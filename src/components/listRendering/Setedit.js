import React from 'react'
import { useDispatch } from 'react-redux';
import pencil from '../../icons/pencil.svg';
import trash from '../../icons/trash.svg';
import { removeTask,onEdit, setCompleted} from '../../redux/reducer/taskReduser';
import EditInput from './EditInput';


export const SetEdit = ({params,id,task,completed}) => {

   

    const dispatch = useDispatch()

    const removeItem=(id)=>{
        dispatch(removeTask(id))
    }
    const openEdit=(id)=>{
        dispatch(onEdit(id))
    }
    const isCompleted=(e,id)=>{
        let value = e.target.checked
        
        dispatch(setCompleted(value,id))
    }

    let checkbox = (elem, id)=>{

        let classSuccses = completed ? "form-check-label text-success fw-bold" : "form-check-label"

        return(
            <form className="form-check" >
                <input onChange={(e)=>isCompleted(e,id)} checked={completed} className="form-check-input" type="checkbox"/>
                <label className={classSuccses} htmlFor="flexCheckDefault">
                   {elem}
                </label>
            </form>
        )
    }
        
    
  

    if (params) {return <EditInput idItem={id} task={task} />}
       
    return (
        <div className="p-2 m-1 border bg-light d-flex justify-content-between">
            {checkbox(task, id)}
            <div className="iconEdit" >
                <img
                    src={pencil}
                    alt='edit'
                    className="ps-2"
                    onClick={() => { openEdit(id) }} />
                <img
                    src={trash}
                    alt='trash'
                    className="ps-2"
                    onClick={() => { removeItem(id) }} />
            </div>
        </div>
    )
}


