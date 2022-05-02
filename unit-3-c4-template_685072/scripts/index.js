// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import {navbar} from "../components/navbar.js";
let n=document.getElementById("navbar")
n.innerHTML=navbar();



import {searchNews,append} from "./fetch.js"
searchNews("in")
.then((data)=>{
    console.log(data)
    
    let container=document.getElementById("results");
    container.innerHTML=null
    append(data.articles,container)
})





let search=()=>{
   console.log("tyeyss")
     let value=document.getElementById("catagory").value;
  searchImages(value)
  .then((data)=>{
      console.log(data)
      
      let container=document.getElementById("container");
      container.innerHTML=null
      append(data.results,container)
  })

 
}


let search1=(e)=>{
    if(e.key=="Enter"){
        let value=document.getElementById("query").value;
     searchImages(API,value)

    }
   }

   let search2=(e)=>{
    if(e.key=="Enter"){
      
        window.location.href="search.html"

    }
   }
   
   
   document.getElementById("search_input").addEventListener("keydown",search1);


   document.getElementById("search_input").addEventListener("keydown",search2);




document.getElementById("catagories").addEventListener("click",search);

let catagories=document.getElementById("catagories").children;



function cSearch(){
    console.log(this.id)
    searchNews(this.id)
    .then((data)=>{
        console.log(data)
        
        let container=document.getElementById("results");
        container.innerHTML=null
        append(data.articles,container)
    })
}
// like forEach
for(let el of catagories){
    el.addEventListener("click",cSearch)
}