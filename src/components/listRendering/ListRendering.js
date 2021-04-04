import React from 'react'
import './listRendering.css'
import { SetEdit } from "./Setedit";


const ListRendering = ({list,currentPage,numberTasksPerPage}) => {

    
    
    let start = (currentPage - 1 ) * numberTasksPerPage
    let end = start + numberTasksPerPage
  
    

    let newTaskList = list.slice(start,end)
    
   return newTaskList.map((el,i) => {
        return (
            <div className="row gx-5 listItem " key={el.id}>
                <div className="col">
                    <SetEdit
                        index={i}
                        params={el.isEdit}
                        id={el.id}
                        task={el.item}
                        num={i + 1} />
                </div>
            </div>
        )
    })
}

export default ListRendering