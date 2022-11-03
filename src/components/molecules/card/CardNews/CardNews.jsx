import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '../../../atoms'
import {addPostSave, removeSave} from '../../../../config/reducer/SaveContent/SaveContent'
import { handleConditionNull, handleReplace } from './SaveContent.hook'

const CardNews = ({data}) => {
  let {author, content, description, source, url, title, urlToImage} = data;
  const author1 =  author?.substring(0, 20) + "...";
  
  const contentfilter = content.substring(0, 100) + "...";

  const dispatch = useDispatch();
  const replaceDes = handleReplace(description)

  const [sources, setSources] = useState('')
  const [titles, setTitles] = useState('')
  const [descriptions, setDescriptions] = useState('')
  const [urls, setUrls] = useState('')
  const [isFalse , setIsFalse] = useState(false)
  const [urlToImages, setUrlToImages] = useState('')

  useEffect(()=>{
    handleConditionNull(source, setSources, title, setTitles, description, setDescriptions, url, setUrls, urlToImage, setUrlToImages, setIsFalse)
  },[dispatch])

  const handleSubmit = () => {
    dispatch(addPostSave(sources, titles, descriptions, urls, urlToImages))
    console.log("susscers");
    setIsFalse(true)
  }
  const handleRemoveSave = () =>{
    setIsFalse(false)
    dispatch(removeSave(sources, titles, descriptions, urls, urlToImage))
    console.log("succes delete");
  }

  return (
      <div className='nol:w-full mobile:w-[360px] w-[36px] lg:w-[450px] mx-auto m-6'>
        <h5 className='font-medium opacity-60 mb-2'>{source.name}</h5>
        <h1 className='text-4xl font-semibold w-auto'>
          {replaceDes}
          </h1>
        <h5 className='font-medium opacity-60 mt-2'>{author1}</h5>
        <h5 className='font-semibold  mt-2 '>{contentfilter}</h5>
        <div className='block mt-3'>
          <a href={url} target={'_blank'}>
             <Button name={'News Page'}  className="bg-blue-300 mr-2"  />
          </a>
            <Button name={isFalse ? `🧡`: `🤍`} handleClik={isFalse ? handleRemoveSave : handleSubmit} className="bg-blue-800 text-white "/>
        </div>
    </div>
  )
}

export default CardNews