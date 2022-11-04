import { CardNews, HeaderNews } from '../../components'
import NotFound from '../NotFound/NotFound'
import {useSearchGlobal} from './useSearchGlobal'

const SerachGlobal = () => {
   const {news, params} = useSearchGlobal()

  return (
    <div>
    <div>
      <HeaderNews name={`${params.src}`} />
    </div>
    { news && 
      news.length !== 0 ? (
        <div className="justify-center block sm:flex flex-wrap">
        {news.map((item, i)=>{
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