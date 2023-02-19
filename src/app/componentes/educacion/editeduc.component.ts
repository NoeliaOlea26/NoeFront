import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ImagenservService } from 'src/app/servicios/imagenserv.service';
import { ImgeducService } from 'src/app/servicios/imgeduc.service';
//import { ImgService } from 'src/app/servicios/img.service';
//import { ImgService } from 'src/app/servicios/img.service';

import { Educacion } from '../model/educacion.model';

@Component({
  selector: 'app-editeduc',
  templateUrl: './editeduc.component.html',
  styleUrls: ['./editeduc.component.css']
})
export class EditeducComponent implements OnInit {

  educ: Educacion= null;

  constructor(private educacionS: EducacionService, private activatedRouter: ActivatedRoute,
    private router: Router,public img: ImgeducService) //, public img: ImgService , public imagen: ImagenservService
    { }
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.findeduc(id).subscribe(data => {
      this.educ = data;
    }, err => {
      alert("Error al MODIFICAR educ");
      this.router.navigate(['']);
    }    )
  }
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    console.log(this.educ);
    //this.educ.logo = this.imagen.downloadURL1;
    this.educ.logo = this.img.downloadURL1;
    this.educacionS.editEduc(id, this.educ).subscribe(
      data => {
       // console.log(this.exp);
        this.router.navigate(['']);
    }, err => {
      console.log(err);
      alert("Error al modificar educacion");
      this.router.navigate(['']);
    }    );  }

    uploadImagen($event: any) {
      const id = this.activatedRouter.snapshot.params['id'];
      const name = "educ" + id;
      console.log(name);
      //this.imagen.uploadImage($event, name);
      this.img.uploadImage($event, name);
      console.log(name + "cargada");     
    }

}
