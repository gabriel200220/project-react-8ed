import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from '../pages/cadastro/Cadastro'
import Entrar from '../pages/entrar/Entrar'
import Home from '../pages/home/Lista'

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Entrar />}></Route>
				<Route path='/cadastro' element={<Cadastro />}></Route>
				<Route path='/lista' element={<Home />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes
