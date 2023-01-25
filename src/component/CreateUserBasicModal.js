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
  const checkUniqueEmail = async () => {

  }
  const handleCreateNewUser = async () => {
      try {
        fetch(`${endpoints.BACKEND_URL}${endpoints.POST_CREATE_NEW_USER}`,{
          method:'POST',
          headers:{'Content-Type' :'application/json'},
          body:JSON.stringify(inputState)
        })
        .then(res => res.json())
        .then(json => console.log(json))
      } catch (error) {
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
                  type="password"
                  onChange={event=> {
                      setInputState((prevState) => {
                        switch(item.label){
                          case 'email' : {
                            return {
                              ...prevState,
                              email:event.target.value
                            }
                          }
                          case 'First Name' : {
                            return {
                              ...prevState,
                              firstName:event.target.value
                            }
                          }
                          case 'Last Name' : {
                            return {
                              ...prevState,
                              lastName:event.target.value
                            }
                          }
                          case 'Password' : {
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