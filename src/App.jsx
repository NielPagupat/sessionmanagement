import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './Pages/Login.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import { Provider } from 'react-redux'
import store from './store.js'
import ProtectedRoute from './helpers/RouteProtection.jsx'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route element={<ProtectedRoute />}>
            <Route path="/dash" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    
  )
}

export default App
