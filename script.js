// your code here
const url= document.querySelector("#url");
const form= document.querySelector("form");
const name= document.querySelector("#name");
const year= document.querySelector("#year");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	if(name.value && year.value) {
		url.innerText= "https://localhost:8080/" + "?" + "name=" + name.value + "&" + "year=" +  year.value;
	}
	else if(name.value) {
		url.innerText= "https://localhost:8080/" + "?" + "name=" + name.value;	
	}
	else if(year.value) {
		url.innerText= "https://localhost:8080/" + "?" + "year=" + year.value;	
	}
	else {
		url.innerText= "https://localhost:8080/";
	}
})