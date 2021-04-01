import React from 'react'
import { useDispatch } from 'react-redux';
import { onEdit, editTextTask} from '../../redux/reducer/taskReduser';


const EditInput = ({idItem,task}) => {

    const dispatch = useDispatch()

    const openEdit=(e,id)=>{
        if(!task){return e.preventDefault()}
        dispatch(onEdit(id))
    }
    const taskEditHandler =(e,idItem)=>{
        let text = e.target.value
        dispatch(editTextTask(text,idItem))
    }

    return (
        <form onSubmit={(e)=>openEdit(e,task,idItem)}>
        <div className="p-1 border bg-light d-flex justify-content-between input-group">
           
            <input 
                type='text' 
                className="form-control" 
                value={task}
                onChange={(e)=>taskEditHandler(e,idItem)} 
                 />
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Add</button>
            
        </div>
        </form>
    )
}

export default EditInput
