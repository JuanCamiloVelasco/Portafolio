import { Component } from '@angular/core';
import { FuncionesService } from '../../../services/funciones.service';

@Component({
  selector: 'skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  constructor (funcionesService:FuncionesService) {
      //detecto el scrolling para aplicar la animacion de la barra de habilidades
      if (typeof window !== "undefined") {
        window.onscroll = function(){
          funcionesService.efectoHabilidades();
        }
     }
  }
}

