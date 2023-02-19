//ImagenservService
import { Injectable } from '@angular/core';
//import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {Storage, ref, uploadBytes, list, getDownloadURL, getStorage} from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class ImgeducService {
  downloadURL1: string ="";

    constructor(private storage: Storage) { }
    
  public uploadImage($event: any, name: string){
  const file = $event.target.files[0];
  const imagRef = ref(this.storage, `educacion/` + name);
  console.log(imagRef);
  console.log(name);
  uploadBytes(imagRef, file)
  .then(response => {this.getImages()})
  .catch(error => console.log(error));

}


getImages() {
  const imagRef = ref(this.storage, 'educacion');
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


}



}
