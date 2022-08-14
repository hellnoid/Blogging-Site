import {navbar,getData} from './navabar.js';
let navbar1=navbar();
document.querySelector("#body").innerHTML=navbar1;

let calldata=async ()=>{
    try {
        let datas=await getData('http://localhost:3000/Blog');
        display(datas);
    } catch (error) {
        
    }

}
calldata();

// let getData= async ()=>{
//     try {
//         let url='http://localhost:3000/Blog';
//         let res =await fetch(url);
//         let data = await res.json();
//         console.log(data);
//         display(data);
//     } catch (error) {
        
//     }
// }
//json-server --watch db.json
let display=(data)=>{
    document.getElementById("tb").innerHTML="";
    data.forEach(ele => {
        
        let row=document.createElement("tr");

        let col1=document.createElement("td");
        col1.textContent=ele.id;

        let col2=document.createElement("td");
        col2.textContent=ele.Title;

        let col3=document.createElement("td");
        col3.textContent=ele.Author;

        let col4=document.createElement("td");
        let view_but=document.createElement("button");
        view_but.textContent="View";
        view_but.onclick=()=>{
            console.log(ele.id);
            localStorage.setItem("blogid",ele.id);
            location.href="view.html";
        };
        col4.append(view_but);

        let col5=document.createElement("td");
        let edit_but=document.createElement("button");
        edit_but.textContent="Edit";
        edit_but.onclick=()=>{
            localStorage.setItem("editBlog",ele.id);
            location.href="edit.html";
        }
        col5.append(edit_but);
        
        let col6=document.createElement("td");
        let del_but=document.createElement("button");
        del_but.textContent="Delete";
        del_but.onclick=async()=>{
            try {
                let res=await fetch(`http://localhost:3000/Blog/${ele.id}`,{
                    method:"DELETE"
                })
                window.location.reload();
            } catch (error) {
                
            }
        }
        col6.append(del_but);
        
        row.append(col1,col2,col3,col4,col5,col6);
        document.getElementById("tb").append(row);
    });
} 