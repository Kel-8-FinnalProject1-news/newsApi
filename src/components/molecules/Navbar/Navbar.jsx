import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { Close, Humberger} from '../../../assets'
import { fetchNewsGlobal } from '../../../config/reducer/SearchNewsSlice/SearchNewsSlice'
import { Button, Input } from '../../atoms'
import {Menubar} from './Navbar.hook'

const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isfalse, setIsfalse] = useState(false)

    const [isOpen, setIsOpen] = useState(false)
    const HandleOpen = () =>{
        setIsOpen(!isOpen)
    }

    const [inputGlobal, setInputGlobal] = useState('');
    const HandleInputGlobal = e => setInputGlobal(e.target.value);

    const hanldeSeachGlobal = () =>{
        dispatch(fetchNewsGlobal(inputGlobal))
        navigate(`/${inputGlobal}`)
        setInputGlobal('')
    }

    const handleNavbarScroll = () =>{
        if(window.scrollY >= 10){
            setIsfalse(true)
        } else{
            setIsfalse(false)
        }
    }
    window.addEventListener('scroll', handleNavbarScroll)

  return (
    <div className={`w-full fixed bg-black text-white p-3 shadow-3xl ${isfalse ? 'bg-opacity-80 bg-black shadow-white shadow-sm' : ''}`}>
        <div className='sm:hidden'>
        {isOpen === false ? (
            <div className='flex justify-center cursor-pointer '>
            <img src={Humberger} alt="huberger" className='h-10 ' onClick={HandleOpen}/>
            </div>
        ):(
            <div className='flex-col flex justify-center cursor-pointer'>
                <div className='text-center mb-5 font-bold capitalize mobile:text-xl miniTablet:text-2xl'>
                    <div className='miniTablet:flex justify-center '>
                        <Input HandleInput={HandleInputGlobal} className=" rounded-xl px-4 font-bold text-black text-xl capitalize " placeholder="Cari Berita"/>
                        <div className='mx-3 mobile:my-2 nol:py-2'/>
                        <Button name="Cari" handleClik={hanldeSeachGlobal} />
                    </div>
                    {Menubar.map((item, i)=>{
                        return(
                            <div key={i} className='py-2 shadow-lg' onClick={()=> navigate(item.link)} >
                                <h1>{item.name}</h1>
                            </div>
                        )
                    })}
                </div>
                <img src={Close} alt="huberger" className='h-5  mx-auto '  onClick={HandleOpen} />
        </div>
        )}
        </div>
        <div className='nol:hidden mobile:hidden miniTablet:hidden sm:flex justify-between'>
            <div className=' w-full flex font-bold capitalize text-2xl  '>
                {Menubar.map((item, i)=>{
                   return(
                    <div key={i} className='py-2 shadow-lg mx-3 nol:h-12 cursor-pointer' onClick={()=> navigate(item.link)} >
                        <h1>{item.name}</h1>
                    </div>
                   )
                })}
            </div>
           <div className='flex'>
            <Input placeholder="Cari Berita" HandleInput={HandleInputGlobal}  className="px-4 md:w-96 rounded-lg font-bold text-black text-xl capitalize"/>
            <div className='mx-2'/>
            <Button name={"Cari"} handleClik={hanldeSeachGlobal}/></div>
        </div>
    </div>
  )
}

export default Navbar