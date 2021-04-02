import React from 'react'
import { useDispatch } from 'react-redux'
import { filterText } from '../../redux/reducer/taskReduser'

const SearchInput = ({searchFiled}) => {

    const dispatch = useDispatch()

    const searchHandleInput=(e)=>{
        let partOfText = e.target.value
        dispatch(filterText(partOfText))
    }
        
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