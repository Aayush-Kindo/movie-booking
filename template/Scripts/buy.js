// Write All `My Movies`  Page Script Here
let bticket=JSON.parse(localStorage.getItem("buy-list"))|| [];
let tbody=document.querySelector("tbody");
display(bticket);

function display(data){
    tbody.innerHTML=null;
 
    data.forEach(function(ele,index){
     let tr=document.createElement("tr");
       let td1=document.createElement("td");
       td1.innerText=ele.name;
 
       let td2=document.createElement("td");
       td2.innerText=ele.mainActor;
 
       let td3=document.createElement("td");
       td3.innerText=ele.desc;
 
       let td4=document.createElement("td");
       td4.innerText=ele.category;
 
       let td5=document.createElement("td");
       td5.innerText=ele.release;
 
       let td6=document.createElement("td");
       td6.innerText=ele.price;
 
      
 
       tr.append(td1,td2,td3,td5,td4,td6);
       tbody.append(tr);
 
    })
   
 }