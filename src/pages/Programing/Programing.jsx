import React from 'react'
import { CardNews, HeaderNews } from '../../components'
import {usePrograming} from './usePrograming'
const Programing = () => {
 const {news} = usePrograming()

  return (
    <div>
      <div>
        <HeaderNews name="Programing" />
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

export default Programing