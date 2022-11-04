import { Button } from '../../../atoms'
import { handleDataCard } from './useCard'

const CardNews = ({data}) => {
  const {
    authorfix, 
    contentfix, 
    descriptionFix, 
    sourcefix,  
    urlfix,  
    isFalse,  
    handleRemove, 
    handleSubmit} = handleDataCard(data)

  return (
      <div className='nol:w-full mobile:w-[360px] w-[36px] lg:w-[450px] mx-auto m-6'>
        <h5 className='font-medium opacity-60 mb-2'>{sourcefix}</h5>
        <h1 className='text-4xl font-semibold w-auto'>
          {descriptionFix}
          </h1>
        <h5 className='font-medium opacity-60 mt-2'>{authorfix}</h5>
        <h5 className='font-semibold  mt-2 '>{contentfix}</h5>
        <div className='block mt-3'>
          <a href={urlfix} target={'_blank'}>
             <Button name={'News Page'}  className="bg-blue-300 mr-2"/>
          </a>
            <Button name={isFalse ? `🧡`: `🤍`} handleClik={isFalse ? handleRemove : handleSubmit} className="bg-blue-800 text-white "/>
        </div>
    </div>
  )
}

export default CardNews