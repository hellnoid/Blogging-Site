import {navbar,getData} from './navabar.js';
let navbar1=navbar();
document.querySelector("#body").innerHTML=navbar1;

let editBlogId=localStorage.getItem("editBlog");

let preview=async()=>{
    try {
        
        let res=await getData(`http://localhost:3000/Blog/${editBlogId}`);
        DisplayEdit(res);
    } catch (error) {
       
    }
}

let DisplayEdit=(data)=>{
    document.getElementById("title").textContent=data.Title;
    document.getElementById("boda").textContent=data.Body;
    document.getElementById("author").textContent=data.Author;
}

preview();
let postEdit=async()=>{
    try {
       let ntit = document.getElementById("title").value;
       let nbody = document.getElementById("boda").value;
       let nauthor = document.getElementById("author").value;
       let upBlog={"Title":ntit,"Body":nbody,"Author":nauthor}
    
       let res= await fetch(`http://localhost:3000/Blog/${editBlogId}`,{
        method:"PATCH",
        body:JSON.stringify(upBlog),
        headers:{"Content-Type":"application/json"},
       })
       location.href="index.html";
    } catch (error) {
        
    }
    }
document.getElementById("Submit").addEventListener("click",postEdit);

