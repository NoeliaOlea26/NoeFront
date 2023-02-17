import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ImagenservService } from 'src/app/servicios/imagenserv.service';
import { ImgService } from 'src/app/servicios/img.service';
import { Experiencia } from '../model/experiencia.model';
@Component({
  selector: 'app-editexp',
  templateUrl: './editexp.component.html',
  styleUrls: ['./editexp.component.css']
})
export class EditexpComponent implements OnInit {
exp: Experiencia= null;

  constructor(private experienciaS: ExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router, public imagenes: ImagenservService, public img: ImgService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaS.findexp(id).subscribe(data => {
      this.exp = data;
    }, err => {
      alert("Error al MODIFICAR exp");
      this.router.navigate(['']);
    }    )
  }
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    //console.log(this.exp);
    //this.exp.logo = this.imagenes.downloadURL1;
    this.exp.logo = this.img.downloadURL1;
    console.log(this.exp.logo+'experiencia cargada');
    this.experienciaS.editExperiencia(id, this.exp).subscribe(
      data => {
       // console.log(this.exp);
        this.router.navigate(['']);
    }, err => {
      console.log(err);
      alert("Error al modificar exp");
      this.router.navigate(['']);
    }    );  }

    
    uploadImagen($event: any) {
      const id = this.activatedRouter.snapshot.params['id'];
      const name = "exp_" + id;
      console.log(name);
      //this.imagenes.uploadImage($event, name);
      this.img.uploadImage2($event, name);
      console.log(name + "cargada");     
    }

}
