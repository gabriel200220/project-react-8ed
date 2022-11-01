import { Container, Button, Paper, TextField } from '@mui/material'
import { FormEventHandler, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import User from '../../shared/interfaces/Interfaces'
import { Card, paperStyled } from '../../shared/styles/Styles'

function Register() {
	const navigate = useNavigate()

	const userList = JSON.parse(
		localStorage.getItem('userList') || '[]'
	) as User[]

	const onSubmit = (e: any) => {
		e.preventDefault()

		validateRegister(e)

		const user = {
			name: e.target.elements.name.value,
			email: e.target.elements.email.value,
			password: e.target.elements.password.value
		}

		userList.push(user)

		localStorage.setItem('userList', JSON.stringify(userList))

		navigate('/')
	}

	const validateRegister = (e: any) => {
		if (!e.target.elements.name.value || e.target.elements.email.value) {
			alert('Verifique os campos!')
			return
		}

		// if (user.password !== user.repassword) {
		// 	alert('Campos não coincidem!')
		// 	return
		// }
	}

	const verifyUser = (e: any) => {
		const verified = userList.find(
			(user: User) => user.email === user.email
		)

		if (!verified) {
			alert('Usuário existente!')
		}
	}

	return (
		<Container sx={Card}>
			<Paper elevation={4} sx={paperStyled}>
				<header>
					<h2>Página de Cadastro</h2>
				</header>
				<form onSubmit={onSubmit}>
					<TextField
						name='name'
						type='text'
						placeholder='Digite seu nome'
					/>
					<TextField
						name='email'
						type='text'
						placeholder='Digite seu e-mail'
					/>
					<TextField
						name='password'
						type='password'
						placeholder='Digite sua senha'
					/>
					<TextField
						name='repassword'
						type='password'
						placeholder='Digite sua senha'
					/>
					<Button type='submit'>Cadastrar</Button>
				</form>
				<footer>
					<p>
						Já possui uma conta? <Link to={'/'}>Conecte-se!</Link>
					</p>
				</footer>
			</Paper>
		</Container>
	)
}

export default Register
