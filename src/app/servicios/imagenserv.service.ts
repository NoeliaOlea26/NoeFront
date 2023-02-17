//ImagenservService
import { Injectable } from '@angular/core';
//import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {Storage, ref, uploadBytes, list, getDownloadURL, getStorage} from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class ImagenservService {
  downloadURL1: string ="";

    constructor(private storage: Storage) { }
  public uploadImage($event: any, name: string){
  const file = $event.target.files[0];
  const imagRef = ref(this.storage, `image/` + name);
  console.log(imagRef);
  console.log(name);
  uploadBytes(imagRef, file)
  .then(response => {this.getImages()})
  .catch(error => console.log(error));
  //const storage = getStorage();
//const starsRef = ref(storage, 'images/stars.jpg');
// Get the download URL
//getDownloadURL(starsRef)
//.then((url) => {
  // Insert url into an <img> tag to "download"
//})
//.catch((error) => {
  //console.log(error);
//});
}





getImages() {
const imagRef = ref(this.storage, 'image');
console.log('xd' + imagRef);
console.log('Uplo' + imagRef);
const images = getDownloadURL(imagRef);
console.log(images+' downloaded');
//const link = await this.getDownloadURL
//this.url = await imagRef.getDownloadURL(imagRef)
list (imagRef)
.then( async response => {
  //this.url = await getDownloadURL(imagRef);
    //console.log("la url de UNO es: "+ this.url); 
  for(let item of response.items)//   image of response.images)
  { this.downloadURL1 = await getDownloadURL(item);
    console.log("la url es: "+ this.downloadURL1);
  }
})
.catch(err => console.log(err));

// () => {
//   // Upload completed successfully, now we can get the download URL
//   getDownloadURL(this.getImages.imagRef).then((downloadURL) => {
//     console.log('File available at', downloadURL);
//   });
// }
}



  // public uploadImage2($event: any,name: string){
  // const storage = getStorage();
  
  // // Create the file metadata
  // /** @type {any} */
  // const metadata = {
  //   contentType: 'image/jpeg'
  // };
  
  // // Upload file and metadata to the object 'images/mountains.jpg'
  // const file = $event.target.files[0];
  // const storageRef = ref(storage, 'images/' + name);//file.name
  // const uploadTask = uploadBytesResumable(storageRef, file, metadata);
  
  // // Listen for state changes, errors, and completion of the upload.
  // uploadTask.on('state_changed',
  //   (snapshot) => {
  //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //     console.log('Upload is ' + progress + '% done');
  //     switch (snapshot.state) {
  //       case 'paused':
  //         console.log('Upload is paused');
  //         break;
  //       case 'running':
  //         console.log('Upload is running');
  //         break;
  //     }
  //   }, 
  //   (error) => {
  //     // A full list of error codes is available at
  //     // https://firebase.google.com/docs/storage/web/handle-errors
  //     switch (error.code) {
  //       case 'storage/unauthorized':
  //         // User doesn't have permission to access the object
  //         break;
  //       case 'storage/canceled':
  //         // User canceled the upload
  //         break;

  //       case 'storage/unknown':
  //         // Unknown error occurred, inspect error.serverResponse
  //         break;
  //     }
  //   }, 
  //   () => {
  //     // Upload completed successfully, now we can get the download URL
  //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //       console.log('File available at', downloadURL);
  //       this.downloadURL1 = downloadURL;
  //       //const download = downloadURL;
  //     });
  //   }
  // );
  // }

}
