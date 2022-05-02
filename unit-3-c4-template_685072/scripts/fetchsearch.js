let searchNews1=async (value)=>{
   
    try{
        // let res =await fetch(`https://api.unsplash.com/search/photos?query=${value}&per_page=20&client_id=${API}`)
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`)
        let data=await res.json()
        console.log(data)
        return data
    }
    catch(err){
        console.log(err)
    }
}

let append=(data,container)=>{
    data.forEach(function(elem){
        console.log(elem)
        
    let div=document.createElement("div");
    let img=document.createElement("img")
    let author=document.createElement("p")
    let content=document.createElement("p")
    let description=document.createElement("p")


   

    img.src=elem.urlToImage;
    author.innerText=elem.author;
    content.innerText=elem.content;
    description.innerText=elem.description


    div.append(img,author,content,description)
    container.append(div)
})

       
}

    
export {searchNews1,append};