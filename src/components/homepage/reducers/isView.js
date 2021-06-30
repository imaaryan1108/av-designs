const viewReducer = (state = true, action) => {
    switch(action.type){
        case 'INVIEW':
            return true;
        case 'NOTINVIEW':
            return false;

        default: 
            return state;
    }
}
export default viewReducer;