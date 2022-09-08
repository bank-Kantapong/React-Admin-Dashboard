import {Route, Routes} from 'react-router-dom'
import Customers from '../pages/Customers'
import Dashboard from '../pages/Dashboard'

const PageRoutes = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route path='/customers' element={<Customers />} />
    </Routes>
    )
}

export default PageRoutes