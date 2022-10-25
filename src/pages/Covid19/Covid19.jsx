import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardNews, HeaderNews } from '../../components'
import { fetchNewsCovid19 } from '../../config/reducer/NewsCovid19/NewsCovid19'

const Covid19 = () => {
  const news = useSelector((state) => state.newsCovid19.articles)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchNewsCovid19())
  },[dispatch])

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