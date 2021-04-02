import React from 'react'
import repeat from '../../icons/arrowRepeat.svg'
import './reverseButton.css'

const ReverseButton = ({reverseList}) => {

    return(
        <img onClick={reverseList} src={repeat} alt='icon' className='reverse-icon' />
    )
}

export default ReverseButton

console.log();