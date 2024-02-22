//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

let promise1=new Promise((resolve,reject)=>{
	     setTimeout(()=>{
			 resolve(`${images[0].url}`);
		 },1000)
});

let promise2=new Promise((resolve,reject)=>{
	     setTimeout(()=>{
			 resolve(`${images[1].url}`);
		 },1000)
});

let promise3=new Promise((resolve,reject)=>{
	     setTimeout(()=>{
			 resolve(`${images[2].url}`);
		 },1000)
});
 function fetchImg(){
	 Promise.all([promise1,promise2,promise3]).then((res)=>{
	     res.forEach((url)=>{
	         const img=document.createElement("img");
	         img.src=url;
	         output.appendChild(img);
	     })}).catch((err)=>{
		   console.log("err") 
	 })}
		btn.addEventListener('click',fetchImg) 
		 
				   
 