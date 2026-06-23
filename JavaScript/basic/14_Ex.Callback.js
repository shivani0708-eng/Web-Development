function download(url,cb){
    console.log("Download starts at url:",url);
    setTimeout(()=>{
       let profileImage=url.split("/")[4];
       console.log("Download end:",profileImage);  
       cb(profileImage,upload); 
    },2000);  //maan lena download me 2 sec lag gaya 
}

function compress(profileImage,cb){
    console.log("Starts compressing:",profileImage);
    setTimeout(()=>{
        let compressedImage = profileImage.split(".")[0]+".webp";
        console.log("End compression:",compressedImage);
        cb(compressedImage);
    },2000);  //maan lena compression me 2 sec lag gaye
}

function upload(compressedImage){
    console.log("Starts uploading:",compressedImage);
    setTimeout(()=>{
    let newUrl="https://nayawebsite.com" + compressedImage;
    console.log("Done Uploading,new url:",newUrl);
    },2000);//maan lena uploading me 2 sec lag gaye
}
let url="https://shivanikiwebsite.com/image/profile.jpg";
download(url,compress);
//dowmnload(url);
//compress("profile.jpg");
//upload("profile.webp");
