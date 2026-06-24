function download(url){
    return new Promise((resolve) => {
    console.log("Download starts at url:",url);
    setTimeout(()=>{
       let profileImage=url.split("/")[4];
       console.log("Download end:",profileImage);  
      resolve(profileImage);
    },2000);  
});//maan lena download me 2 sec lag gaya 
}

function compress(profileImage){
    return new Promise((resolve) => {
    console.log("Starts compressing:",profileImage);
    setTimeout(()=>{
        let compressedImage = profileImage.split(".")[0]+".webp";
        console.log("End compression:",compressedImage);
        resolve(compressedImage);
    },2000); 
 }); //maan lena compression me 2 sec lag gaye
}

function upload(compressedImage){
    return new Promise((resolve) => {
    console.log("Starts uploading:",compressedImage);
    setTimeout(()=>{
    let newUrl="https://nayawebsite.com" + compressedImage;
    console.log("Done Uploading,new url:",newUrl);
    resolve();
    },2000);
  });//maan lena uploading me 2 sec lag gaye
}
let url="https://shivanikiwebsite.com/image/profile.jpg";
download(url)
.then((profileImage)=> compress(profileImage))
.then((compressedImage)=> upload(compressedImage))
.then(()=>{
     console.log("download ho gaya");
});


//dowmnload(url);
//compress("profile.jpg");
//upload("profile.webp");

