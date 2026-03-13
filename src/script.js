let auth = "";

function login(){

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

auth = "Basic " + btoa(username + ":" + password);

alert("Logged in");

}

function viewRecords(){

fetch("http://localhost:8080/api/records",{
headers:{
"Authorization":auth
}
})
.then(res=>res.json())
.then(data=>{
document.getElementById("output").textContent =
JSON.stringify(data,null,2);
});

}

function updateRecord(){

const id = document.getElementById("updateId").value;
const name = document.getElementById("updateName").value;

fetch(`http://localhost:8080/api/records/${id}`,{
method:"PUT",
headers:{
"Content-Type":"application/json",
"Authorization":auth
},
body:JSON.stringify({name:name})
})
.then(res=>res.text())
.then(data=>alert(data));

}

function deleteRecord(){

const id = document.getElementById("deleteId").value;

fetch(`http://localhost:8080/api/records/delete/${id}`,{
method:"DELETE",
headers:{
"Authorization":auth
}
})
.then(res=>res.text())
.then(data=>alert(data));

}