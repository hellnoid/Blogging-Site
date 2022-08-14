import {navbar} from './navabar.js';
let navbar1=navbar();
document.querySelector("#body").innerHTML=navbar1;

let addBlog=async()=>{
try {
   
    let title=document.getElementById("title").value;
    let bod=document.getElementById("boda").value;
    console.log(bod);
    let author=document.getElementById("author").value;
    let newblog={Title:title,Body:bod,Author:author};
    console.log(newblog);
    let res= await fetch('http://localhost:3000/Blog',{
        method:"POST",
        body:JSON.stringify(newblog),
        headers:{"Content-Type" :"application/json"},
    })    
      location.href="index.html";
} catch (error) {
    
}
}
document.getElementById("Submit").addEventListener("click",addBlog);