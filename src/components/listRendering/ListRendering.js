import React from 'react'
import './listRendering.css'
import { SetEdit } from "./Setedit";


const ListRendering = (list) => {

    
   return list.map((el,i) => {
        return (
            <div className="row gx-5 listItem " key={el.id}>
                <div className="col">
                    <SetEdit
                        index={i}
                        params={el.isEdit}
                        id={el.id}
                        task={el.item} />
                </div>
            </div>
        )
    })
}

export default ListRendering