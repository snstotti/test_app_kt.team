const ADD_TASK_LIST = 'ADD_TASK_LIST' 
const SET_TEXT = 'SET_TEXT' 

const defaultState = {
    entryField:'',
    taskList: [
        {item:'krkrkrk',id:1},
        {item:'zaasa',id:2},
        {item:'asasas',id:3},
        {item:'asasasgg',id:4},
    ]
   
}

export default function taskReduser (state=defaultState, action){
    
    switch(action.type){

        case ADD_TASK_LIST:
            let newTask={
                item:action.task,
                id: action.newId+1
            }    

            return {
                ...state, 
                taskList: [...state.taskList,  newTask]
            }

        case SET_TEXT:
            return {
                ...state, 
                entryField: action.text
            }


        default:
            return state
    }

}

export const addTask =(task,newId)=>({type:ADD_TASK_LIST,task,newId})
export const setText =(text)=>({type:SET_TEXT,text})