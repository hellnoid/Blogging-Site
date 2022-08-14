function navbar(){
  return `<div id="navbar">
    <div id="home"><h2><a href="index.html">Home</a></h2></div>
    <div id="create"><h2><a href="create.html">Create a New Blog</a></h2></div>
    <div id="search"><h2><a href="search.html">Search</a></h2></div>
    
</div>`;
}

let getData= async (url)=>{
  try {
      // let url='http://localhost:3000/Blog';
      let res =await fetch(url);
      let data = await res.json();
     // console.log(data);
      return data;
  } catch (error) {
      
  }
}

export{navbar,getData};