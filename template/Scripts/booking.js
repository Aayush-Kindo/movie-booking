// Write All `All Movies`  Page Script Here
let tbody=document.querySelector("tbody")

let localSData=JSON.parse(localStorage.getItem("movie-list"))||[];
display(localSData);
document.getElementById("movie-count").innerHTML=localSData.length;

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

      let td7=document.createElement("td");
      td7.innerText="buy Ticket";
      td7.addEventListener("click",function(){
        addData(ele);
        removeData(data,index);
      })

      tr.append(td1,td2,td3,td5,td4,td6,td7);
      tbody.append(tr);

   })
  
}

function addData(ele){
  let buyData=JSON.parse(localStorage.getItem("buy-list"))||[];
  buyData.push(ele);
  localStorage.setItem("buy-list",JSON.stringify(buyData));
}

function removeData(data,idx){
    localSData=data.filter(function(e,i){
        return i!=idx;
    })
    localStorage.setItem("movie-list",JSON.stringify(localSData));
    display(localSData)
    document.getElementById("movie-count").innerHTML=localSData.length;
}

filter.addEventListener("change",function(){
    if(filter.value===""){
        display(localSData);
    }else{
        let filterD=localSData.filter(function(ele){
            return ele.category=== filter.value;
        })
        display(filterD);
    }
   
})