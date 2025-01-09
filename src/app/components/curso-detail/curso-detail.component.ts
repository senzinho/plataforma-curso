import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOCK_AULAS } from '../../data/mock-aulas';
import { Location } from '@angular/common';

interface Aula {
  id: number;
  titulo: string;
  concluida: boolean;
  videoUrl: string;  // Nova propriedade para a URL do vídeo
}

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit {
  cursoId: number = 0;
  aulas: Aula[] = [];

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    // Obter o ID do curso da URL
    this.cursoId = Number(this.route.snapshot.paramMap.get('id'));

    // Verifica se a chave existe em MOCK_AULAS antes de tentar acessá-la
    this.aulas = MOCK_AULAS[this.cursoId] || [];

    if (!this.aulas.length) {
      console.warn(`Nenhuma aula encontrada para o curso com ID ${this.cursoId}`);
      // Fallback: Adiciona uma aula padrão se não encontrar o curso.
      this.aulas = [{ id: 0, titulo: 'Curso não encontrado', concluida: false, videoUrl: '' }];
    }
  }

  marcarConcluida(aula: Aula): void {
    aula.concluida = !aula.concluida;
  }

  voltar(): void {
    this.location.back(); // Volta para a página anterior
  }
}
