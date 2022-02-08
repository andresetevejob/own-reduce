export function itemsReducer(action,state=[]){
    switch(action.type){
        case "CREATE_ITEM":
            return [...state,Object.assign(action.payload)];
        default:
            return state;
    }
}