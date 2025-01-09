import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursoDetailComponent } from "./components/curso-detail/curso-detail.component";
import { CursoListComponent } from "./components/curso-list/curso-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CursoDetailComponent, CursoListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plataforma-cursos';
}
