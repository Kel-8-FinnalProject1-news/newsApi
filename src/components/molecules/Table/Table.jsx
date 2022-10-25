import { useDispatch } from 'react-redux';
import { Pages, Recycle } from '../../../assets';
import { removeSave } from '../../../config/reducer/SaveContent/SaveContent';
import { Tolltip } from '../../atoms/Tooltip/Tolltip';

const Table = ({data}) => {
  const dispatch = useDispatch();
  
  const {source, description, title, url, urlToImage} = data;
  const handleRemoveSave = ()=>{
    dispatch(removeSave(description, source, title, url, urlToImage))
    location.reload()
  }
  
  return (
    <tbody className='items-start bg-white text-xl sm:text-2xl gap-y-10 font-normal border-y-2 border-gray-600 odd:bg-gray-100 p-36 h-32'>
      <tr className='w-full '>
            <td className='  text-left  h-32 items-center  pr-5'>
                {source}
                <Tolltip children={<img src={Pages} alt="pages" onClick={()=> window.open(url.toString())} className='h-10 w-10 cursor-pointer'  />} message={"To page"}/>
            </td>
            <td className='w-3/12 pr-5 '>
                {title}
            </td>
            <td className='w-6/12 pr-5 '>
                {description}
            </td>
            <td>
              <h1 onClick={handleRemoveSave} className="cursor-pointer flex justify-center items-center">
              <Tolltip children={<img src={Recycle} alt="recycle" className='h-8' />} message={"Delete"}/>
              </h1>
            </td>
         </tr>
    </tbody>
  )
}

export default Table