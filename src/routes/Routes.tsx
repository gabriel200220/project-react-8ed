import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from '../pages/cadastro/Cadastro'
import Entrar from '../pages/entrar/Entrar'

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/Entrar' element={<Entrar />}></Route>
				<Route path='/Cadastro' element={<Cadastro />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes
