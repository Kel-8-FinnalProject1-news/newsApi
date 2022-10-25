import React from 'react'
import { LogoNews } from '../../assets'
import { Button, HeaderNews, Input, Label } from '../../components'

const Login = () => {
  const handleLogin = () =>{
    localStorage.setItem('token', '123456')
  }
  return (
    <form className=' h-screen min-w-[500px] w-full  flex bg-slate-100 '>
        <div className='w-2/3'>
            <img src={LogoNews} alt="logo"  className='h-screen object-cover bg-opacity-100 object-right-top'/>
        </div>
        <div className='min-w-[500px] my-auto text-center mx-auto px-10'>
            <Label name="Login" className='justify-center text-6xl uppercase font-mono'/>
            <Label name={'Email'} className={'text-slate-500'}/>
            <Input className={'border-2 outline-none rounded-2xl'} placeholder='Email...'/>
            <Label name={'Password'} className={'text-slate-500 mt-6'}/>
            <Input className={'border-2 outline-none rounded-2xl'} placeholder='Password...'/>
           
            <Button  name={'Login'} className={'mt-10'} handleClik={handleLogin}/>
        </div>
    </form>
  )
}

export default Login