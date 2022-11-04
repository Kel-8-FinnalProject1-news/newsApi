import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { logout } from "../../../config/reducer/Login/Login"
import { fetchNewsGlobal } from "../../../config/reducer/SearchNewsSlice/SearchNewsSlice"

const Menubar = [
    {
        name: 'Indonesia',
        link: '/'
    },
    {
        name: 'Programing',
        link: '/programing'
    },
    {
        name: 'Covid19',
        link: '/covid-19'
    },
    {
        name: 'Saved',
        link: '/saved'
    }
]


const useNavbar = () => {
    const [isfalse, setIsFalse] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [inputGlobal, setInputGlobal] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const HandleOpen = () =>{
        setIsOpen(!isOpen)
    }

    const handleLogout = () => {
        dispatch(logout())
        window.location.reload()
    }

  const handleNavbar =() =>{
    if(window.scrollY >= 10){
        setIsFalse(true)
    } else{
        setIsFalse(false)
    }
  }
    window.addEventListener('scroll', handleNavbar)

  const handleInputGlobal = (e) =>{
    setInputGlobal(e.target.value)
  }
  
  const handleSearchGlobal   = (e) => { 
    dispatch(fetchNewsGlobal(inputGlobal))
    navigate(`/${inputGlobal}`)
    setInputGlobal("")
  }

  return {
    isfalse, 
    isOpen, 
    handleInputGlobal, 
    handleSearchGlobal, 
    HandleOpen, 
    handleLogout}
}



export {Menubar, useNavbar}