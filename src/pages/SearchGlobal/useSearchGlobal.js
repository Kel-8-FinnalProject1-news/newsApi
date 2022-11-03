import { useSelector } from "react-redux"
import { useParams } from "react-router"

export const useSearchGlobal = () => {
    const news = useSelector((state) => state.newsGlobal.articles)
    const params = useParams()
    return {news, params}
}