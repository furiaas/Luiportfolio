export type ProjectCategory = 'Dinâmica' | 'Motion' | 'Consciente';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  client: string;
  role: string;
  roles?: string[];
  tools: string[];
  shortDesc: string;
  fullDesc: string;
  mainImage: string;
  gallery: string[];
  paperColor: 'light' | 'yellow';
  rotationDeg: number;
  crayonColor: string; // Hex color for wax crayon
  tapePosition: 'top' | 'top-corners' | 'corners' | 'top-single';
  aspectRatio: 'polaroid' | 'sheet' | 'wide';
  duration?: string;
  resolution?: string;
  fps?: string;
  videoUrl?: string;
  videoSrc?: string;
}

export const CRAYON_COLORS = {
  orange: '#FFB703',
  lime: '#9BC53D',
  green: '#3FA34D',
  teal: '#2A9D8F',
  red: '#D93A2B',
  magenta: '#B0306A',
};

const RAW_PROJECTS: Project[] = [
  {
    id: 'o-gigante-da-floresta',
    title: 'Conversa Motivacional',
    category: 'Consciente',
    year: '2025',
    client: 'Eduardo F./Gran Duque',
    role: 'Montagem, análise sentimental, pós-produção',
    roles: ['Montagem', 'análise sentimental', 'pós-produção'],
    tools: ['Premiere Pro'],
    shortDesc: 'Reels frio com movimento maior no início, que vai se acalmando até o final do vídeo, com foco em conscientizar por meio da conversa direta formada pelo storytelling.',
    fullDesc: 'Reels frio com movimento maior no início, que vai se acalmando até o final do vídeo, com foco em conscientizar por meio da conversa direta formada pelo storytelling.',
    mainImage: '/thumbnails/thumb_Conversamotivacional.jpg',
    gallery: [
      '/thumbnails/thumb_Conversamotivacional.jpg',
    ],
    paperColor: 'yellow',
    rotationDeg: -2.2,
    crayonColor: CRAYON_COLORS.orange,
    tapePosition: 'top-corners',
    aspectRatio: 'sheet',
    duration: '00:14',
    fps: '24 fps',
    videoUrl: 'https://www.instagram.com/edu.oduque?utm_source=ig_web_button_share_sheet&cplk=ZDNlZDc0MzIxNw==',
    videoSrc: '/videos/Conversamotivacional.mp4',
  },
  {
    id: 'jingle-politico',
    title: 'Feitos na política',
    category: 'Motion',
    year: '2026',
    client: 'Dep. estadual Wilson Santos',
    role: 'Edição de Vídeo, Motion Graphics, Sound Design',
    roles: ['Edição de Vídeo', 'Motion Graphics', 'Sound Design'],
    tools: ['Premiere Pro'],
    shortDesc: 'Motion design estruturado para campanha política, divulgado oficialmente em evento presencial de lançamento de campanha e no instagram após',
    fullDesc: 'Motion design estruturado para campanha política, divulgado oficialmente em evento presencial de lançamento de campanha e no instagram após',
    mainImage: '/thumbnails/thumb_feitos_da_politica.jpg',
    gallery: [
      '/thumbnails/thumb_feitos_da_politica.jpg',
    ],
    paperColor: 'light',
    rotationDeg: 1.8,
    crayonColor: CRAYON_COLORS.green,
    tapePosition: 'corners',
    aspectRatio: 'polaroid',
    duration: '00:18',
    fps: '60 fps',
    videoUrl: 'https://www.instagram.com/wilsonsantosmt?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw==',
    videoSrc: '/videos/feitos da politica.mp4',
  },
  {
    id: 'casa-na-arvore-cafe',
    title: 'Whatsapp bem humorado',
    category: 'Dinâmica',
    year: '2026',
    client: 'Dep. estadual Wilson Santos',
    role: 'Ambientação, positividade, informativo',
    roles: ['Ambientação', 'positividade', 'informativo'],
    tools: ['Premiere Pro'],
    shortDesc: 'Vídeo criativo veiculado como dark post para impulsionar o engajamento do conteúdo principal, utilizando o cenário de um grupo fictício de WhatsApp, em uma conversa sobre um deputado e seus feitos. A peça motiva o voto no candidato, que já possuía bom histórico na política, porém tinha dificuldade em ser amplamente divulgado.',
    fullDesc: 'Vídeo criativo veiculado como dark post para impulsionar o engajamento do conteúdo principal, utilizando o cenário de um grupo fictício de WhatsApp, em uma conversa sobre um deputado e seus feitos. A peça motiva o voto no candidato, que já possuía bom histórico na política, porém tinha dificuldade em ser amplamente divulgado.',
    mainImage: '/thumbnails/thumb_WhatsappBemHumorado.jpg',
    gallery: [
      '/thumbnails/thumb_WhatsappBemHumorado.jpg',
    ],
    paperColor: 'yellow',
    rotationDeg: -1.5,
    crayonColor: CRAYON_COLORS.teal,
    tapePosition: 'top',
    aspectRatio: 'sheet',
    duration: '00:20',
    videoUrl: 'https://www.instagram.com/wilsonsantosmt?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw==',
    videoSrc: '/videos/WhatsappBemHumorado.mp4',
  },
  {
    id: 'cha-da-vovo-nina',
    title: 'Ouvir a Realidade',
    category: 'Motion',
    year: '2025',
    client: 'Bira Ferreira',
    role: 'Engajamento, motivação',
    roles: ['Engajamento', 'motivação'],
    tools: ['Premiere Pro'],
    shortDesc: 'Vídeo focado na visão política do candidato, com atenção à comunidade, destacando como sua forma de atuar beneficiaria a população do estado pelo qual concorria.',
    fullDesc: 'Vídeo focado na visão política do candidato, com atenção à comunidade, destacando como sua forma de atuar beneficiaria a população do estado pelo qual concorria.',
    mainImage: '/thumbnails/thumb_OuvirARealidade.jpg',
    gallery: [
      '/thumbnails/thumb_OuvirARealidade.jpg',
    ],
    paperColor: 'light',
    rotationDeg: 2.4,
    crayonColor: CRAYON_COLORS.red,
    tapePosition: 'top-corners',
    aspectRatio: 'sheet',
    duration: '00:15',
    fps: '24 fps',
    videoUrl: 'https://www.instagram.com/bira.ubiratan_?utm_source=ig_web_button_share_sheet&xtok=ZDNlZDc0MzIxNw==',
    videoSrc: '/videos/OuvirARealidade.mp4',
  },
  {
    id: 'caderno-de-viagem-serras',
    title: 'Talking head promocional',
    category: 'Dinâmica',
    year: '2024',
    client: 'Thiago Barros',
    role: 'Storytelling, montagem, clareza',
    roles: ['Storytelling', 'montagem', 'clareza'],
    tools: ['Premiere Pro'],
    shortDesc: 'Reels dinâmico, com edição simples e foco em storytelling, para mostrar ao espectador que o anunciante resolve os problemas de audiovisual apontados no vídeo.',
    fullDesc: 'Reels dinâmico, com edição simples e foco em storytelling, para mostrar ao espectador que o anunciante resolve os problemas de audiovisual apontados no vídeo.',
    mainImage: '/thumbnails/thumb_PropagandaAudiovisual.jpg',
    gallery: [
      '/thumbnails/thumb_PropagandaAudiovisual.jpg',
    ],
    paperColor: 'yellow',
    rotationDeg: -2.8,
    crayonColor: CRAYON_COLORS.lime,
    tapePosition: 'corners',
    aspectRatio: 'polaroid',
    duration: '00:32',
    videoUrl: 'https://www.instagram.com/thiagosouza_b?utm_source=ig_web_button_share_sheet&rpxt=ZDNlZDc0MzIxNw==',
    videoSrc: '/videos/PropagandaAudiovisual.mp4',
  },
  {
    id: 'bichos-esquisitos-do-cerrado',
    title: 'Talkinghead Agressivo',
    category: 'Consciente',
    year: '2026',
    client: 'Delegado Fred Murta',
    role: 'Storytelling, Psicanálise, Contraste',
    roles: ['Storytelling', 'Psicanálise', 'Contraste'],
    tools: ['Premiere Pro'],
    shortDesc: 'Reels com gancho nos primeiros segundos, utilizando imagens que representam o visual do assunto, combinadas com áudio que remete ao mesmo tópico, prendendo a atenção do cliente final por se tratar de uma narrativa direta e sem enrolação.',
    fullDesc: 'Reels com gancho nos primeiros segundos, utilizando imagens que representam o visual do assunto, combinadas com áudio que remete ao mesmo tópico, prendendo a atenção do cliente final por se tratar de uma narrativa direta e sem enrolação.',
    mainImage: '/thumbnails/thumb_TalkingHeadAgressivo.jpg',
    gallery: [
      '/thumbnails/thumb_TalkingHeadAgressivo.jpg',
    ],
    paperColor: 'light',
    rotationDeg: 1.1,
    crayonColor: CRAYON_COLORS.magenta,
    tapePosition: 'top',
    aspectRatio: 'sheet',
    duration: '00:17',
    videoUrl: 'https://www.instagram.com/delegadofredmurta?utm_source=ig_web_button_share_sheet&psln=ZDNlZDc0MzIxNw==',
    videoSrc: '/videos/TalkingHeadAgressivo.mp4',
  },
  {
    id: 'festival-musica-na-calcada',
    title: 'Reforma de Bairro',
    category: 'Consciente',
    year: '2026',
    client: 'Dep. Federal Juarez Alves da Costa',
    role: 'Apresentar melhoria, positividade sentimental',
    roles: ['Apresentar melhoria', 'positividade sentimental'],
    tools: ['Premiere Pro'],
    shortDesc: 'Reels com a intenção de apresentar as melhorias que o deputado realizou durante o mandato, conscientizando a população sobre seu esforço e as mudanças ocorridas após sua eleição, usando um relato antigo como gancho emocional e fazendo uma comparação de antes e depois.',
    fullDesc: 'Reels com a intenção de apresentar as melhorias que o deputado realizou durante o mandato, conscientizando a população sobre seu esforço e as mudanças ocorridas após sua eleição, usando um relato antigo como gancho emocional e fazendo uma comparação de antes e depois.',
    mainImage: '/thumbnails/thumb_ReformaDoBairro.jpg',
    gallery: [
      '/thumbnails/thumb_ReformaDoBairro.jpg',
    ],
    paperColor: 'yellow',
    rotationDeg: -1.9,
    crayonColor: CRAYON_COLORS.orange,
    tapePosition: 'top-corners',
    aspectRatio: 'wide',
    duration: '00:15',
    fps: '25 fps',
    videoUrl: 'https://www.instagram.com/juarezcostamt?utm_source=ig_web_button_share_sheet&mdxt=ZDNlZDc0MzIxNw==',
    videoSrc: '/videos/ReformaDoBairro.mp4',
  },
  {
    id: 'poemas-para-passaros',
    title: 'Reels para promover candidato',
    category: 'Motion',
    year: '2026',
    client: 'Delegado Fred Murta',
    role: 'Motion, dinamismo, motivação',
    roles: ['Motion', 'dinamismo', 'motivação'],
    tools: ['Premiere Pro'],
    shortDesc: 'Reels de instagram com intenção de divulgar o numero do candidato a deputado federal em campanha política de 2026, priorizando efeitos visuais com estética 3D.',
    fullDesc: 'Reels de instagram com intenção de divulgar o numero do candidato a deputado federal em campanha política de 2026, priorizando efeitos visuais com estética 3D.',
    mainImage: '/thumbnails/thumb_ReelsParaPromoverCandidato.jpg',
    gallery: [
      '/thumbnails/thumb_ReelsParaPromoverCandidato.jpg',
    ],
    paperColor: 'light',
    rotationDeg: 2.2,
    crayonColor: CRAYON_COLORS.teal,
    tapePosition: 'corners',
    aspectRatio: 'polaroid',
    duration: '00:14',
    videoUrl: 'https://www.instagram.com/delegadofredmurta?utm_source=ig_web_button_share_sheet&psln=ZDNlZDc0MzIxNw==',
    videoSrc: '/videos/ReelsParaPromoverCandidato.mp4',
  }
];
// Prefixa caminhos de /public com o base do Vite ("/Luiportfolio/" no GitHub Pages, "/" local)
const asset = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`;

export const PROJECTS: Project[] = RAW_PROJECTS.map((p) => ({
  ...p,
  mainImage: asset(p.mainImage),
  gallery: p.gallery.map(asset),
  videoSrc: p.videoSrc ? asset(p.videoSrc) : p.videoSrc,
}));

export const TESTIMONIALS = [
  {
    id: '1',
    author: 'Felipe Fabre F.',
    role: 'MB Consultoria e Assessoria Política',
    text: `“Trabalhar com o Pedro Lui foi uma experiência muito positiva. Ele é um editor inteligente, que vai além da simples execução: entende o projeto, compreende a demanda e adapta suas habilidades para entregar o melhor resultado possível.

Além de trabalhar com muito profissionalismo, Pedro aprende rapidamente, é atento aos detalhes e demonstra bastante comprometimento em cada etapa do processo.”`,
    icon: 'gavel',
    postItColor: '#FFF6A5', // Pale yellow sticky
    rotation: -2.4,
    tapeColor: 'rgba(205, 190, 150, 0.85)',
    crayonAccent: '#FFB703',
  },
  {
    id: '2',
    author: 'Hortência Bragatto',
    role: 'Coordenadora de publicidade',
    text: `“Pedro é um profissional autêntico, inteligente e muito comprometido com o trabalho. Domina a técnica da edição, mas sem abrir mão da criatividade. Suas maiores qualidades são a propositividade e busca por aprimoramento e inovação.

Pude trabalhar com ele presencialmente e foi muito bom, pois conseguimos desenvolver vários projetos juntos, de forma leve, tranquila e divertida. Com várias trocas importantes para o desenvolvimento das demandas.”`,
    postItColor: '#FFD6E0', // Soft pastel pink
    rotation: 1.9,
    tapeColor: 'rgba(205, 190, 150, 0.85)',
    crayonAccent: '#B0306A',
  },
  {
    id: '3',
    isTorn: true,
    author: '················',
    role: '························',
    text: '',
    postItColor: '#D8F3DC', // Soft mint green
    rotation: -1.2,
    tapeColor: 'rgba(205, 190, 150, 0.85)',
    crayonAccent: '#2A9D8F',
  }
];

export const SKILLS_DATA = [
  { name: 'Montagem & Edição de Vídeo (Premiere / DaVinci)', percent: 96, color: '#FFB703', note: 'ritmo, corte cirúrgico e fluidez' },
  { name: 'Sound Design & Mixagem de Áudio', percent: 92, color: '#9BC53D', note: 'a alma invisível do vídeo' },
  { name: 'Color Grading & Correção de Cor', percent: 88, color: '#2A9D8F', note: 'paleta cinematográfica e calor analógico' },
  { name: 'Motion Design & Colagens Animadas', percent: 85, color: '#D93A2B', note: 'títulos manuais e stop-motion' },
  { name: 'Narrativa Cinematográfica & Roteiro Visual', percent: 94, color: '#B0306A', note: 'histórias que emocionam' }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Garatujas & Conversas',
    subtitle: 'O rabisco solto no guardanapo',
    desc: 'Tudo começa ouvindo a ideia com atenção. Esboços rápidos em papel sulfite ou caderno de rascunho sem medo de errar.',
    color: '#FFB703',
    tip: 'Sem borracha na primeira hora!'
  },
  {
    step: '02',
    title: 'Estudos de Cor & Giz',
    subtitle: 'Paleta e atmosfera afetiva',
    desc: 'Testes de combinações com giz de cera, recortes de revistas antigas e manchas de aquarela para definir a temperatura da cena.',
    color: '#3FA34D',
    tip: 'Luz que abraça o leitor'
  },
  {
    step: '03',
    title: 'Camadas & Pintura',
    subtitle: 'A construção do volume',
    desc: 'Aplicação das cores definitivas em guache e lápis dermatográfico sobre papéis com textura de 300g.',
    color: '#2A9D8F',
    tip: 'O prazer do pigmento real'
  },
  {
    step: '04',
    title: 'Digitalização & Gráfica',
    subtitle: 'Cuidado em cada milímetro',
    desc: 'Escaneamento em 600dpi, tratamento de curvas de cor e fechamento de arquivos mantendo a vibração das texturas originais.',
    color: '#B0306A',
    tip: 'Pronto para encantar o mundo'
  }
];
