import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import "./style/BasicModal.css"

const constants = require("../Constants")
const endpoints = require("../Endpoints")
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  display:'flex',
  flexDirection:'column',
  textAlign:"center",
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreateUserBasicModal(props) {
  const [open, setOpen] = React.useState(false);
  
  const [fields,setFields] = useState([])
  const [inputState,setInputState] = useState({
    email:"",
    firstName:"",
    lastName:"",
    password:""
  })
  const handleOpen = () => {setOpen(true);getCreateNewUserForm();}
  const handleClose = () =>{ setOpen(false);setInputState({email:"",firstName:"",lastName:"",password:""})}
  
  
  
  
  // to get the input fields required for the form

  const [requestBody , setRequestBody] = useState({})
  const getCreateNewUserForm = async () => {
    try {
        fetch(`${endpoints.BACKEND_URL}${endpoints.GET_CREATE_NEW_USER_FORM}`)
        .then(res => res.json())
        .then(json => setFields(json) )
    } catch (error) {
        console.log(error)
      }
    }  
  const handleCreateNewUser = async () => {
      setRequestBody({
        method:'POST',
        headers:{'Content-Type' :'application/json'},
        body:JSON.stringify(inputState)
      })
      console.log(requestBody)
      try {
        fetch(`${endpoints.BACKEND_URL}${endpoints.POST_CREATE_NEW_USER}`,requestBody)
        .then(res => res.json())
        .then(json => console.log(json))
      } catch (error) {
          console.log(error)
      }

  }
  return (
    <div>
      <Button onClick={handleOpen}>{props.buttonName}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <h3>Create New user</h3>
        {fields.map((item,idx) => 
            <div className='__basicModal_field_div' key={idx} > 
                <input 
                  required={item.required} 
                  placeholder={item.label}
                  type={()=>{
                    switch(item.id){
                      case 4: return "password"
                      default: return "text"
                    }
                  }}
                  onChange={event=> {
                      setInputState((prevState) => {
                        switch(item.id){
                          case 1 : {
                            return {
                              ...prevState,
                              email:event.target.value
                            }
                          }
                          case 2 : {
                            return {
                              ...prevState,
                              firstName:event.target.value
                            }
                          }
                          case 3 : {
                            return {
                              ...prevState,
                              lastName:event.target.value
                            }
                          }
                          case 4 : {
                            return {
                              ...prevState,
                              password:event.target.value
                            }
                          }
                          default : {
                            return prevState
                          }

                        }
                      })
                  }}
                  ></input>
            </div>)} 
        <Button onClick={()=>{handleCreateNewUser()}}>
            Submit
        </Button>
        </Box>

      </Modal>
    </div>
  );
}