import {  useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { CardNews, HeaderNews } from '../../components'
import NotFound from '../NotFound/NotFound'

const SerachGlobal = () => {
    const data = useSelector((state)=> state.newsGlobal.articles)
    let param = useParams()

  return (
    <div>
    <div>
      <HeaderNews name={`${param.src}`} />
    </div>
    { data && 
      data.length !== 0 ? (
        <div className="justify-center block sm:flex flex-wrap">
        {data.map((item, i)=>{
          return(
            <CardNews key={i} data={item} />
            )
          })}
      </div>
      ):(
        <NotFound />
      )
    }
  </div>
  )
}

export default SerachGlobal