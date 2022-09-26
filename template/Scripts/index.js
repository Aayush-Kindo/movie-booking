// Write All Home  Page Script Here
let form=document.querySelector("form");
form.addEventListener("submit",fillDetail);
let lsData=JSON.parse(localStorage.getItem("movie-list"))||[];

function fillDetail(event){
     event.preventDefault();

    obj={
        name:document.getElementById("name").value,
        mainActor:form.mainActor.value,
        desc:form.desc.value,
        release:form.release.value,
        category:form.category.value,
        price:form.price.value,




    };

    //console.log(obj);
    lsData.push(obj);
    localStorage.setItem("movie-list",JSON.stringify(lsData));
    
}