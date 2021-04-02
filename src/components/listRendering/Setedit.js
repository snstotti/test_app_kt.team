import React from 'react'
import { useDispatch } from 'react-redux';
import pencil from '../../icons/pencil.svg';
import trash from '../../icons/trash.svg';
import { removeTask,onEdit} from '../../redux/reducer/taskReduser';
import EditInput from './EditInput';


export const SetEdit = ({params,id,task,index,num}) => {

    const dispatch = useDispatch()

    const removeItem=(id)=>{
        dispatch(removeTask(id))
    }
    const openEdit=(id)=>{
        dispatch(onEdit(id))
    }
  

    if (params) {return <EditInput idItem={id} task={task} />}
       
    return (
        <div className="p-2 m-1 border bg-light d-flex justify-content-between">
            {num}{')'} {task}
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


