import { useNavigate } from 'react-router'
import { Close, Humberger} from '../../../assets'
import { Button, Input } from '../../atoms'
import {Menubar, useNavbar} from './useNavbar'
import {Islogin} from './../../../Utils/Condition/Islogin'

const Navbar = () => {
    const condition = Islogin()
    const navigate = useNavigate()
    const {
        isfalse, 
        isOpen, 
        handleInputGlobal, 
        handleSearchGlobal, 
        HandleOpen, 
        handleLogout,
        inputGlobal} = useNavbar()
    
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
                        <Input HandleInput={handleInputGlobal} value={inputGlobal} className=" rounded-xl px-4 font-bold text-black text-xl capitalize " placeholder="Cari Berita"/>
                        <div className='mx-3 mobile:my-2 nol:py-2'/>
                        <Button name="Cari" handleClik={handleSearchGlobal} />
                    </div>
                    {Menubar.map((item, i)=>{
                        return(
                            <div key={i} className='py-2 shadow-lg' onClick={()=> navigate(item.link)} >
                                <h1>{item.name}</h1>
                            </div>
                        )
                    })}
                     {condition  ? (
                    <div className='py-2 shadow-lg mx-3 nol:h-12 cursor-pointer' onClick={()=> handleLogout()} >
                    <h1>logout</h1>
                </div>
                ): <></>}
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
                 {condition? (
                    <div className='py-2 shadow-lg mx-3 nol:h-12 cursor-pointer' onClick={()=> handleLogout()} >
                    <h1>logout</h1>
                </div>
                ): <></>}
            </div>
           <div className='flex'>
            <Input placeholder="Cari Berita" HandleInput={handleInputGlobal} value={inputGlobal}  className="px-4 md:w-96 rounded-lg font-bold text-black text-xl capitalize"/>
            <div className='mx-2'/>
            <Button name={"Cari"} handleClik={handleSearchGlobal}/></div>
        </div>
    </div>
  )
}

export default Navbar