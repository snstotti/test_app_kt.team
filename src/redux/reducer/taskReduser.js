const ADD_TASK_LIST = 'ADD_TASK_LIST' 
const SET_TEXT = 'SET_TEXT' 
const REMOVE_TASK_FROM_LIST = 'REMOVE_TASK_FROM_LIST' 
const EDIT_TASK_FROM_LIST = 'EDIT_TASK_FROM_LIST' 
const ON_EDIT = 'ON_EDIT' 
const EDIT_TEXT_TASK = 'EDIT_TEXT_TASK' 
const FILTER_TASK = 'FILTER_TASK' 
const FILTER_TEXT = 'FILTER_TEXT' 
const REVERSE_LIST_TASK = 'REVERSE_LIST_TASK' 
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE' 
const SET_HANDLER_PAGE = 'SET_HANDLER_PAGE' 

const defaultState = {
    entryField:'',
    searchFiled: '',
    isReversArr: false,
    taskList: [
        {item:'krkrkrk',id:1,isEdit:false,numTask:1},
        {item:'zaasa',id:2,isEdit:false,numTask:2},
        {item:'asasas',id:3,isEdit:false,numTask:3},
        {item:'asasasgg',id:4,isEdit:false,numTask:4},
        {item:'krkrkrk',id:5,isEdit:false,numTask:1},
        {item:'zaasa',id:6,isEdit:false,numTask:2},
        {item:'asasas',id:7,isEdit:false,numTask:3},
        {item:'asasasgg',id:8,isEdit:false,numTask:4},
        {item:'krkrkrk',id:9,isEdit:false,numTask:1},
        {item:'zaasa',id:10,isEdit:false,numTask:2},
        {item:'asasas',id:11,isEdit:false,numTask:3},
        {item:'asasasgg',id:12,isEdit:false,numTask:4},
    ],
    searchShowNews:[],
    currentPage: 1
    
}

export default function taskReduser (state=defaultState, action){
    
    switch(action.type){

        case ADD_TASK_LIST:
            let newTask={
                item:action.task,
                id: action.newId,
                isEdit:false,
                
            }    

            return {
                ...state, 
                taskList: [...state.taskList,  newTask]
            }
        case EDIT_TEXT_TASK:
            return {
                ...state, 
                taskList: state.taskList.map(el=>{
                    if(el.id === action.editItemId){
                      el.item = action.editText
                    }
                    return el
                })
            }
        case REMOVE_TASK_FROM_LIST:
            
            return {
                ...state, 
                taskList: state.taskList.filter(el=>el.id !== action.id)
            }
        case ON_EDIT:
            
            return {
                ...state, 
                taskList: state.taskList.map(el=>{
                    if(el.id === action.id){
                      el.isEdit = !el.isEdit
                    }
                    return el
                })
            }
        case SET_TEXT:
            return {
                ...state, 
                entryField: action.text
            }
        case FILTER_TEXT:
            return {
                ...state, 
                searchFiled: action.searchText
            }
        case FILTER_TASK:
            if (action.even === '') {
                return{ ...state}
            }
             const newArr = state.taskList.filter((i) => {
                return i.item.toLowerCase().indexOf(action.even.toLowerCase()) > -1
            })
            return {...state, searchShowNews: newArr}
            
        case REVERSE_LIST_TASK:
            return {
                ...state,
                isReversArr: action.isReverse
                , taskList: state.taskList.reverse()
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage:action.page
            }
        case SET_HANDLER_PAGE:
            return {
                ...state,
                currentPage:action.handlerPage
            }

        default:
            return state
    }

}

export const addTask =(task,newId)=>({type:ADD_TASK_LIST,task,newId})
export const setText =(text)=>({type:SET_TEXT,text})
export const removeTask =(id)=>({type:REMOVE_TASK_FROM_LIST,id})
export const editTask =(newTask)=>({type:EDIT_TASK_FROM_LIST,newTask})
export const onEdit =(id)=>({type:ON_EDIT,id})
export const editTextTask =(editText,editItemId)=>({type:EDIT_TEXT_TASK,editText,editItemId})
export const filterText =(searchText)=>({type:FILTER_TEXT,searchText})
export const filterTask =(even)=>({type:FILTER_TASK,even})
export const reverseList =(isReverse)=>({type:REVERSE_LIST_TASK,isReverse})
export const setCurrentPage =(page)=>({type:SET_CURRENT_PAGE,page})
export const setHandlerPage =(handlerPage)=>({type:SET_HANDLER_PAGE,handlerPage})

