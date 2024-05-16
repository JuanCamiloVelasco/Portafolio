import { Component } from '@angular/core';
import { InfoComponent } from "../../partials/info/info.component";
import { SkillsComponent } from "../../partials/skills/skills.component";
import { CurriculumComponent } from "../../partials/curriculum/curriculum.component";
import { PortfolioComponent } from "../../partials/portfolio/portfolio.component";
import { ContactoComponent } from "../../partials/contacto/contacto.component";
import { FooterComponent } from '../../partials/footer/footer.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [InfoComponent, SkillsComponent, CurriculumComponent, PortfolioComponent, ContactoComponent, FooterComponent]
})
export class HomeComponent {

}
