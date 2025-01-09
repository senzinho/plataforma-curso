export const MOCK_AULAS: { [key: number]: Aula[] } = {
    1: [
      { 
        id: 1, 
        titulo: 'Aula 1', 
        concluida: false, 
        videoUrl: 'https://www.example.com/video1.mp4' 
      },
      { 
        id: 2, 
        titulo: 'Aula 2', 
        concluida: true, 
        videoUrl: 'https://www.example.com/video2.mp4' 
      }
    ],
    2: [
      { 
        id: 3, 
        titulo: 'Aula 3', 
        concluida: false, 
        videoUrl: 'https://www.example.com/video3.mp4' 
      }
    ]
  };
  
  interface Aula {
    id: number;
    titulo: string;
    concluida: boolean;
    videoUrl: string;  // Nova propriedade para a URL do vídeo
  }
  