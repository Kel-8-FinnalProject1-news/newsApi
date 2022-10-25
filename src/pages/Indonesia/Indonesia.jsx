import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardNews, HeaderNews } from '../../components'
import { fetchNewsIndonesia} from '../../config/reducer/NewsIndonesia/newsSlice';

const Indonesia = () => {
  const news = useSelector((state)=> state.NewsIndonesiaSlice.articles)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchNewsIndonesia())
  },[dispatch])

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