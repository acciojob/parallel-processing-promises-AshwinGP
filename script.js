//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

let promise1=new Promise((res,rej)=>{
	     setTimeout(()=>{
			 resolve(`${images.url[0]}`);
		 },1000)
});

let promise2=new Promise((res,rej)=>{
	     setTimeout(()=>{
			 resolve(`${images.url[1]}`);
		 },1000)
});

let promise3=new Promise((res,rej)=>{
	     setTimeout(()=>{
			 resolve(`${images.url[1]}`);
		 },1000)
});
 function fetchImg(){
	 Promise.all([promise1,promise2,promise3]).then((res)=>{
	 return document.getElementById("output").innerHTML=`<img src="${res}" alt="img">`
		 }).catch((e)=>{
		 console.log("error",e);
		 })
				   
 }