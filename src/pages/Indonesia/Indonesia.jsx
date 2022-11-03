import React from 'react'
import { CardNews, HeaderNews } from '../../components'
import {useIndonesia} from './useIndonesia'

const Indonesia = () => {
  const {news} = useIndonesia()  
  return (
    <div>
    <div>
      <HeaderNews name="Indonesia" />
    </div>
    <div className="justify-center block sm:flex flex-wrap">
      {news?.map((item, i)=>{
        return(
          <CardNews key={i} data={item} />
        )
      })}
    </div>
  </div>
  )
}

export default Indonesia