import React, { useEffect, useState } from 'react'

const EditUserForm = (props: any) => {
	const [user, setUser] = useState(props.currentUser)

	useEffect(() => {
		setUser(props.currentUser)
	}, [props])

	const handleInputChange = (event: any) => {
		const { name, value } = event.target
		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault()
				props.updateUser(user.id, user)
			}}
		>
			<label>Detalhamento</label>
			<input
				type='text'
				name='name'
				value={user.name}
				onChange={handleInputChange}
			/>
			<label>Descrição</label>
			<input
				type='text'
				name='username'
				value={user.username}
				onChange={handleInputChange}
			/>
			<button>Atualizar</button>
			<button
				onClick={() => props.setEditing(false)}
				className='button muted-button'
			>
				Cancelar
			</button>
		</form>
	)
}

export default EditUserForm
