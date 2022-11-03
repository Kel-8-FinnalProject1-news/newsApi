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
    let replace6 = replace4.split('<ol><li>').join(' ');
    if(replace6.length < 100){
        replace6 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, placeat qui ipsum obcaecati laudantium voluptas incidunt error tempore debitis quam exercitationem repellendus, consectetur praesentium quas sapiente nisi odit in veritatis voluptatibus consequatur sequi provident perspiciatis! Numquam sapiente expedita debitis sequi totam adipisci laboriosam assumenda incidunt odit! Sed fugiat assumenda cumque voluptas numquam, adipisci ipsam! Numquam culpa quia dolor aspernatur, modi vero ipsa qui omnis molestiae corporis? Ipsam atque dolorum distinctio expedita suscipit laudantium, sapiente blanditiis impedit maiores ex? Quam aperiam dolorum id rem repudiandae! Dicta, suscipit? Incidunt doloribus a est officiis earum odio, omnis dolor autem unde quae eius tempore!"
    }
    const replace5 = replace6.substring(0, 100) + "....";
    return replace5
    } else{
        return 'No Description'
    }
}

export {handleConditionNull, handleReplace}