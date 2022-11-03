import {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LogoNews } from '../../assets'
import { Button, HeaderNews, Input, Label } from '../../components'
import { fetchDataUsers } from '../../config/reducer/Login/Login'

const Login = () => {
  const dispatch = useDispatch()
  const [data, setuser] = useState({
    username: '',
    password: ''
  })

  const handleInput =(e)=>{
    setuser({ ...data, [e.target.name]: e.target.value })
  }

  const handleLogin = () =>{
      dispatch(fetchDataUsers(data))
  }

  return (
    <div className=' h-screen min-w-[500px] w-full  flex bg-slate-100 '>
        <div className='w-2/3'>
            <img src={LogoNews} alt="logo"  className='h-screen object-cover bg-opacity-100 object-right-top'/>
        </div>
        <div className='min-w-[500px] my-auto text-center mx-auto px-10'>
            <Label name="Login" className='justify-center text-6xl uppercase font-mono'/>
            <Label name={'Email'} className={'text-slate-500'}/>
            <Input className={'border-2 outline-none rounded-2xl'} placeholder='Email...' HandleInput={handleInput} name='username' value={data.username}/>
            <Label name={'Password'} className={'text-slate-500 mt-6'}/>
            <Input className={'border-2 outline-none rounded-2xl'} placeholder='Password...' type="password" HandleInput={handleInput} name='password' value={data.password}/>
           
            <Button  name={'Login'} className={'mt-10'} handleClik={handleLogin}/>
        </div>
    </div>
  )
}

export default Login