import { Button } from '../../components'

const NotFound = () => {

  return (
    <div className='text-center my-[40vh]'>
        <div className='text-9xl font-bold '>
            <h1>Oops!</h1>
        </div>
        <h4 className='text-5xl font-bold italic'>
            Page Not Found
        </h4>
        <Button name={'back'}  className="text-3xl my-5 bg-black text-white"/>
    </div>
  )
}

export default NotFound