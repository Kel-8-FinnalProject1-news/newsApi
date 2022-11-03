import React from 'react'
import { CardNews, HeaderNews } from '../../components'
import { useCovid19 } from './useCovid19'

const Covid19 = () => {
 const {news} = useCovid19()
  return (
  <div>
    <div>
      <HeaderNews name="Covid-19" />
    </div>
    <div className="justify-center block sm:flex flex-wrap">
      {news?.map((item, i)=>{
        return(
         <CardNews key={i} data={item}/>
        )
      })}
    </div>
  </div>
  )
}

export default Covid19