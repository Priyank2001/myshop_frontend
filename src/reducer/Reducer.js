import Context from "../Context"

export default function Reducer(state,action){
    switch(action.state){
        case 'GET_CREATE_NEW_USER_FORM_ADMIN':{
            try {
                var data = null;
                fetch(`${Context.BASE_BACKEND_URL}${Context.ADMIN_BASE_URL}/users/save`)
                .then(res =>res.json())
                .then(json => data=json)
                state
                return state
            } catch (error) {
                
            }
        }
        default : return state
    }
}