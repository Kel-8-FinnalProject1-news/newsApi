const handleConditionNull = (source, setSources, title, setTitles, description, setDescriptions, url, setUrls, urlToImage, setUrlToImages, setIsFalse) =>{
      source ? setSources(source.name) : setSources('No Source')

      title ? setTitles(title) : setTitles('No Title')

      description ? setDescriptions(description) : setDescriptions('No Description')

      url ? setUrls(url) : setUrls('No Url')

      urlToImage ? setUrlToImages(urlToImage) : setUrlToImages('No Url To Image')

      localStorage.getItem(`${urlToImage}`) ? setIsFalse(true): setIsFalse(false)
}

const handleReplace = (description) =>{
    if(description){
        let replace1 = description.split('/').join(' ');
    let replace2 = replace1.split('-').join(' ');
    let replace3 = replace2.split('.').join(' ');
    let replace4 = replace3.split('< li><li>').join(' ');
    let replace5 = replace4.split('<ol><li>').join(' ');
    return replace5
    } else{
        return 'No Description'
    }
}

export {handleConditionNull, handleReplace}