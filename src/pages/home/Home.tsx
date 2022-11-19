import { Button } from '@mui/material'
import nodeTest from 'node:test'
import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, UserData } from '../../shared/interfaces/Interfaces'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'

const App = () => {
	// Data
	const navigate = useNavigate()
	const getUserList = JSON.parse(localStorage.getItem('userList')!)
	const getUser = JSON.parse(localStorage.getItem('loggedUser')!)
	const notes = getUserList.find(
		(value: User) => value.email === getUser?.email
	)

	const initialFormState = { id: null, name: '', username: '' }

	const [users, setUsers] = useState(notes.notes)
	const [currentUser, setCurrentUser] = useState(initialFormState)
	const [editing, setEditing] = useState(false)

	// CRUD Operations
	const addUser = (user: any) => {
		user.id = users.length + 1
		notes.notes = [...notes.notes, user]
		localStorage.setItem('userList', JSON.stringify(getUserList))
		setUsers([...users, user])
	}

	const deleteUser = (id: number) => {
		const filtered = users.filter((user: UserData) => user.id !== id)
		notes.notes = filtered
		localStorage.setItem('userList', JSON.stringify(getUserList))
		setEditing(false)
		setUsers(filtered)
	}

	const updateUser = (id: number, updatedUser: Partial<UserData>) => {
		const searchMessage = notes.notes.find(
			(nota: UserData) => nota.id === id
		)
		searchMessage.name = updateUser.name
		// @ts-ignore
		searchMessage.username = updateUser.username
		setEditing(false)
		setUsers(
			users.map((user: UserData) => (user.id === id ? updatedUser : user))
		)
		localStorage.setItem('userList', JSON.stringify(getUserList))
	}

	const editRow = (user: any) => {
		setEditing(true)

		setCurrentUser({
			id: user.id,
			name: user.name,
			username: user.username
		})

		const Exit = {}
	}

	return (
		<div className='container'>
			<h1>Bem vindo a lista de recados</h1>
			<div>
				<Button
					onClick={() => {
						localStorage.removeItem('loggedUser')
						navigate('/')
					}}
				>
					Sair
				</Button>
			</div>
			<div className='flex-row'>
				<div className='flex-large'>
					{editing ? (
						<Fragment>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className='flex-large'>
					<UserTable
						users={users}
						editRow={editRow}
						deleteUser={deleteUser}
					/>
				</div>
			</div>
		</div>
	)
}

export default App
