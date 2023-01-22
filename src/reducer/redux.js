const constants = require('../Constants')
const Endpoints = require("../Endpoints")
const redux = require('redux')
const { ErrorResponse } = require('@remix-run/router')
const createStore = redux.createStore



const initialState = {
    api_status:{
        get_new_user_form : {
            status:"NOT_CAllED",
            data:null,
            error:null
        }
    }
}
const reducer = (state = initialState,action) => {
    switch(action){
        case constants.GET_CREATE_NEW_USER_FORM_ADMIN:{
            try {
                fetch(`${Endpoints.BACKEND_URL}${Endpoints.CREATE_NEW_USER}`)
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                    return {
                        ...state,
                        api_status:{
                            get_new_user_form:{
                                status:"Success",
                                data:json,
                                error:null
                            }
                        }
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }
        default: return state
    }
}

const store = createStore(reducer)

export default function dispatcher(action){
     
}