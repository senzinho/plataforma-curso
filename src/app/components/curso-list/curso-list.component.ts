import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MOCK_CURSOS } from '../../data/mock-cursos'; // Importe os dados

@Component({
  selector: 'app-curso-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css'],
})
export class CursoListComponent {
  cursos = MOCK_CURSOS; // Use os dados importados
}
