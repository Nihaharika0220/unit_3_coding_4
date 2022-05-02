// Ude Import export (MANDATORY)

import {navbar} from "../components/navbar.js";
let n=document.getElementById("navbar")
n.innerHTML=navbar();


// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" 
// so that you can access that on news.html page


import {navbar} from "../components/navbar.js";
let n=document.getElementById("navbar")
n.innerHTML=navbar();

import {searchNews1,append} from "./fetchsearch.js"


let search=(e)=>{
    if(e.key=="Enter"){
        let value=document.getElementById("search_input").value;
     searchNews1(value)
     .then((data)=>{
         console.log(data)
         
         let container=document.getElementById("results");
         container.innerHTML=null
         append(data.articles,container)
     })
    console.log(value)
    }
   }
   
   
   document.getElementById("search_input").addEventListener("keydown",search);