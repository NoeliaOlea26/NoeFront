import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Proyecto } from '../model/proyecto.model';

@Component({
  selector: 'app-editproy',
  templateUrl: './editproy.component.html',
  styleUrls: ['./editproy.component.css']
})
export class EditproyComponent implements OnInit {

  proy: Proyecto= null;

  constructor(private proyectoS: ProyectoService, private activatedRouter: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.findProyecto(id).subscribe(data => {
      this.proy = data;
    }, err => {
      alert("Error al MODIFICAR educ");
      this.router.navigate(['']);
    }    )
  }
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    console.log(this.proy);
    this.proyectoS.editProyecto(id, this.proy).subscribe(
      data => {
       // console.log(this.exp);
        this.router.navigate(['']);
    }, err => {
      console.log(err);
      alert("Error al modificar educacion");
      this.router.navigate(['']);
    }    );  }
}
