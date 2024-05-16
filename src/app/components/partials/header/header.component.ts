import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuVisible!: boolean;
  //Función que oculta o muestra el menu
  mostrarOcultarMenu(){
      if(this.menuVisible){
        (document.getElementById("nav") as HTMLFormElement).classList.add("");
        this.menuVisible = false;
      }else{
        (document.getElementById("nav") as HTMLFormElement).classList.add("responsive");
        this.menuVisible = true;
      }
  }
  seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    (document.getElementById("nav") as HTMLFormElement).classList.value = ("");
    this.menuVisible = false;
  }
}
