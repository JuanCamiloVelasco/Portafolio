import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {

  constructor() { }

  efectoHabilidades(){
    var skills = (document.getElementById("skills") as HTMLFormElement);
    var distancia_skills = window.innerHeight - skills!.getBoundingClientRect().top;
    if(distancia_skills >= 300){
      let habilidades = document.getElementsByClassName("progreso");
      habilidades[0].classList.add("javascript");
      habilidades[1].classList.add("htmlcss");
      habilidades[2].classList.add("java");
      habilidades[3].classList.add("baseD");
      habilidades[4].classList.add("angular");
      habilidades[5].classList.add("comunicacion");
      habilidades[6].classList.add("trabajo");
      habilidades[7].classList.add("ingles");
      habilidades[8].classList.add("dedicacion");
      habilidades[9].classList.add("scrum");
    }
  }
  
}
