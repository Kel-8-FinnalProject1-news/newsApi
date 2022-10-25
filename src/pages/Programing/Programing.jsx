import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardNews, HeaderNews } from '../../components'
import { fetchNewsPrograming, filterNewsPrograming } from '../../config/reducer/NewsProgramming/NewsProgrammingSlice'

const Programing = () => {
  const news = useSelector((state)=> state.newsProgramingSlice.articles)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsPrograming())
  }, [dispatch])

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