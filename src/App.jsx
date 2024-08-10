
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<MainLayout/>}>
          <Route index element={<Home />} />
        </Route>
      </Routes>  
    </Router>
  ) 
}

export default App
