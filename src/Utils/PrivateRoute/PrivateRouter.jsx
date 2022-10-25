import {Outlet, Navigate} from 'react-router-dom'
const PrivateRouterFalseLogin = () => {
  const isAUtenticated = localStorage.getItem('token');
  return isAUtenticated ? <Outlet /> : <Navigate to="/login" />
}

const PrivateRouterTrueLogin = () => {
    const isAUtenticated = localStorage.getItem('token');
    return isAUtenticated ? <Navigate to="/" /> : <Outlet />
}


export {PrivateRouterFalseLogin, PrivateRouterTrueLogin}