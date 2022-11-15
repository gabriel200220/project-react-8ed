import React, { Fragment, useState } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'

const App = () => {
	// Data
	const userData = [
		{ id: 1, name: 'John', username: 'floppy' },
		{ id: 2, name: 'Fredy', username: 'mercury' },
		{ id: 3, name: 'Willy', username: 'donkel' }
	]

	const initialFormState = { id: null, name: '', username: '' }

	const [users, setUsers] = useState(userData)
	const [currentUser, setCurrentUser] = useState(initialFormState)
	const [editing, setEditing] = useState(false)

	// CRUD Operations
	const addUser = (user: any) => {
		user.id = users.length + 1
		setUsers([...users, user])
	}

	const deleteUser = (id: number) => {
		setEditing(false)
		setUsers(users.filter((user) => user.id !== id))
	}

	const updateUser = (id: number, updatedUser: any) => {
		setEditing(false)

		setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
	}

	const editRow = (user: any) => {
		setEditing(true)

		setCurrentUser({
			id: user.id,
			name: user.name,
			username: user.username
		})
	}

	return (
		<div className='container'>
			<h1>CRUD App with Hooks</h1>
			<div className='flex-row'>
				<div className='flex-large'>
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className='flex-large'>
					<h2>View users</h2>
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
