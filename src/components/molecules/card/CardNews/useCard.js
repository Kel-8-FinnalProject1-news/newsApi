import { useEffect } from "react"
import {Swal} from "../../../../Utils/Swal/Swal"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPostSave, removeSave } from "../../../../config/reducer/SaveContent/SaveContent"


export const handleDataCard = (data) =>{
    const dispatch = useDispatch()
    let {author, content, description, source, url, title, urlToImage} = data;
    let lorem100 = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id nihil modi officia excepturi. Libero, placeat exercitationem! Consectetur tenetur placeat distinctio quae dolores eligendi. Eum itaque ducimus maiores. Possimus cum iusto quisquam, provident nulla architecto culpa nam sint ex odit dignissimos dolore tenetur unde magnam exercitationem officia repudiandae minima commodi sit amet facilis consectetur iste. Suscipit tempore error sed recusandae facilis doloremque hic adipisci aperiam reiciendis? Quibusdam placeat itaque consequatur eaque ex atque explicabo odit dolorum voluptas in reiciendis eum, delectus omnis cumque recusandae, tenetur libero iste deleniti vero commodi expedita. Id laboriosam ratione, consectetur aspernatur necessitatibus fuga facilis quae ea?"

    //   contition length index
    let authorfix = author?.substring(0, 100) + "....";
    let contentfix = content?.substring(0, 100) + "....";
    let descriptionFix =  handleReplace(description, lorem100);
    let sourcefix = source.name? source.name : lorem100;
    let urlfix = url? url : lorem100;
    let titlefix = title? title : lorem100;
    let urlToImagefix = urlToImage? urlToImage : lorem100;
    const {SwalSucces, SwalRemove} = Swal()
    
    const [datafix , setDataFix] = useState({
        sources : sourcefix,
        titles : titlefix,
        descriptions : descriptionFix,
        urls : urlfix,
        urlToImages : urlToImagefix
    })
    const [isFalse, setIsFalse] = useState(false)
    const IsFalse =() =>{
        const isfalse = localStorage.getItem(`${urlToImagefix}`) ? true : false
        setIsFalse(isfalse)
    }
    useEffect(()=>{
        IsFalse()
    },[dispatch])
    
    const handleSubmit = () => {
        const {sources, descriptions,  titles, urlToImages, urls} = datafix
        dispatch(addPostSave(sources, descriptions, titles,urls, urlToImages))
        IsFalse(true)
        SwalSucces()
    }
    
    const handleRemove =() => {
        const {sources, descriptions,  titles, urlToImages, urls} = datafix
        dispatch(removeSave(sources, descriptions, titles, urls, urlToImages))
        IsFalse(false)
        SwalRemove()
    }
    return {
        authorfix, 
        contentfix, 
        descriptionFix, 
        sourcefix, 
        urlfix, 
        titlefix, 
        urlToImagefix, 
        datafix, 
        isFalse, 
        handleRemove, 
        handleSubmit }
}

const handleReplace = (description, lorem100) =>{
    if(description){
    let replace1 = description.split('/').join(' ');
    let replace2 = replace1.split('-').join(' ');
    let replace3 = replace2.split('.').join(' ');
    let replace4 = replace3.split('< li><li>').join(' ');
    let replace6 = replace4.split('<ol><li>').join(' ');
    if(replace6.length < 100){
        replace6 = lorem100
    }
    const replace5 = replace6.substring(0, 100) + "....";
    return replace5
    } else{
        return lorem100
    }
}
