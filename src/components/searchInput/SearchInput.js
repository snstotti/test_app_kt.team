import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterTask,filterText } from '../../redux/reducer/taskReduser'

const SearchInput = () => {

    
    const dispatch = useDispatch()
    const searchFiled = useSelector(state => state.taskStore.searchFiled)

    const searchHandleInput=(e)=>{
        let partOfText = e.target.value
        dispatch(filterText(partOfText))
    }
        
    useEffect(() => {
        dispatch(filterTask(searchFiled))
    }, [dispatch,searchFiled])

   
    

    return (
            <div className="input-group mt-2 ">
                <input
                    onChange={(e)=>searchHandleInput(e)}
                    value={searchFiled}
                    type="text" className="form-control" placeholder="Search filed" aria-label="Recipient's username" aria-describedby="button-addon2" />
                
            </div>
      
    )
}
export default SearchInput