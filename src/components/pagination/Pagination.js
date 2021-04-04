import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentPage,setHandlerPage } from '../../redux/reducer/taskReduser'


const Pagination =({pagesCount,currentPage})=>{
  const dispatch = useDispatch()
  
  let pages = []

  for (let index = 0; index < pagesCount; index++) {
   pages.push(index)
  }

  const getCurrentPage =(e,i)=>{
    dispatch(setCurrentPage(i))
    e.preventDefault()
  }
 

  const handlerPage =(e,i)=>{
    if(i<1 || i>pagesCount) return
    dispatch(setHandlerPage(i))
    
    e.preventDefault()
  }

  

  let paginationPage = pages.map(el=>{
    let activeClass = currentPage === el+1 ? 'page-link' : 'page-link active'
    return (
      <li
        onClick={(e)=>getCurrentPage(e,el + 1)}
        key={el}
        className="page-item">
        <a className={activeClass} href={`/${el + 1}`}>{el + 1}</a>
      </li>
   )
  })
    

return(
    <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"><a
      onClick={(e)=>handlerPage(e,currentPage - 1)}
      className="page-link" href="/#">Previous</a></li>
    {paginationPage}
    <li className="page-item"><a
      onClick={(e)=>handlerPage(e,currentPage + 1)}
      className="page-link" href="/#">Next</a></li>
  </ul>
</nav>
)
}

export default Pagination