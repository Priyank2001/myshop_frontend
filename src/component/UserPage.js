import { Button } from '@mui/material'
import React from 'react'
import AdminTopBar from './AdminTopBar'
import BasicTable from './BasicTable'
import { useState } from 'react'
import {Modal,Box,Typography,} from '@mui/material'
import CreateUserBasicModal from './CreateUserBasicModal'


function UserPage() {
  const [createUserModalOpen, setCreateUserModalOpen] = useState(false);
  const modalHandleOpen = () => {
    setCreateUserModalOpen(true)
  }
  const modalHandleClose = () => {
    setCreateUserModalOpen(false)
  }

  return (
    <div>
        <AdminTopBar />
        <div>
            <h1>User Details</h1>
            <CreateUserBasicModal useCase="create_new_user" buttonName="Create a new User"/>
            <Button>Delete</Button>
        </div>
        <BasicTable url="http://localhost:8080/myshopadmin/users" />
    </div>
  )
}

export default UserPage