import { Link } from 'react-router-dom'
import { Container, Button, Paper, TextField } from '@mui/material'
import { Card, paperStyled } from '../../shared/styles/Styles'

const Entrar: React.FC = () => {
	return (
		<>
			<Container sx={Card}>
				<Paper elevation={4} sx={paperStyled}>
					<header>
						<h2>Pagina de Login</h2>
					</header>
					<TextField type='text' label='E-mail' />
					<TextField type='password' label='Senha' />
					<Button>Entrar</Button>
					<footer>
						<p>
							Não possui uma conta?{' '}
							<Link to={'/Cadastro'}>Crie uma.</Link>
						</p>
					</footer>
				</Paper>
			</Container>
		</>
	)
}

export default Entrar
