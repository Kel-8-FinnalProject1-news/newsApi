import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchNewsGlobal } from "../../config/reducer/SearchNewsSlice/SearchNewsSlice"

export const usePrograming = () => { 
    const news = useSelector((state) => state.newsGlobal.articles)
    const dispatch = useDispatch()
    const search = 'programing'
    
    useEffect(()=>{
      dispatch(fetchNewsGlobal(search))
    },[dispatch])

    return {news}
}