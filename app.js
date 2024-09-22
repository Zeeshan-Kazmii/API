let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{
   let country = document.querySelector("input").value;
   console.log(country);

   let CollArr=await getColleges(country);
   Show(CollArr);
})

function Show(CollArr){
   let list=document.querySelector("#list");
   list.innerText="";
   for(col of CollArr){
      console.log(col.name);

   let li=document.createElement("li");
   li.innerText=col.name;
   list.appendChild(li)
   let web=document.createElement("a");
   web.setAttribute('href',col.web_pages);
   web.innerText="More detail";
   li.appendChild(web);
    }
 }

async function getColleges(country){
   try {
    let res= await axios.get(url+country);
   return res.data;
   } catch (error) {
    console.log("error__", error)
    return [];
   }
}