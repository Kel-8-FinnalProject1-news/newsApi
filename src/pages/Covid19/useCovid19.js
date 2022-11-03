import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchNewsGlobal } from "../../config/reducer/SearchNewsSlice/SearchNewsSlice"

export const useCovid19 = () => { 
    const news = useSelector((state) => state.newsGlobal.articles)
    const dispatch = useDispatch()
    const search = 'covid19'
    
    useEffect(()=>{
      dispatch(fetchNewsGlobal(search))
    },[dispatch])

    return {news}
 }