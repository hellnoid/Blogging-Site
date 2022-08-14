import {navbar,getData} from './navabar.js';
let navbar1=navbar();
document.querySelector("#body").innerHTML=navbar1;


let blogId=localStorage.getItem("blogid")||"";

let viewFunc=async (blogId)=>{
    try {
        let ViewData=await getData(`http://localhost:3000/Blog/${blogId}`);
        console.log(ViewData);
        display(ViewData);
       
    } catch (error) {
        
    }
}

let display=(Data)=>{
    document.getElementById("view_area").innerText="";
    let viewbox=document.getElementById("view_area");
      
    let tit=document.createElement("p");
    tit.textContent=Data.Title;
    let viewArea= document.createElement("textarea");
    viewArea.textContent=Data.Body;
    let auth=document.createElement("p");
    auth.textContent=Data.Author;
    console.log(viewbox);
    viewbox.append(tit,viewArea,auth);

}

viewFunc(blogId);