import{navbar,getData} from './navabar.js';

document.getElementById("na").innerHTML=navbar();


document.getElementById("search_button").addEventListener("click",async()=>{
try {
    let sea=document.getElementById("search_box").value;
    let data=await getData(`http://localhost:3000/Blog?q=${sea}`);
    Display(data);
    
} catch (error) {
    
}
})

let Display=(data)=>{
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