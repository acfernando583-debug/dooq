// Auto-generated: Services for ZennOn, BFriends, and Planika
// Based on catalog.ts brand data and catalogData service items

export interface BrandService {
  brand: string;
  subdomain: string;
  target: string;
  color: string;
  gradient: string;
  description: string;
  url: string;
  services: BrandServiceItem[];
}

export interface BrandServiceItem {
  id: string;
  category: string;
  subcategory: string;
  name: string;
  description: string;
  features: string[];
  price: string;
  priceLabel: string;
  icon: string;
  highlight?: boolean;
}

export const brandsServices: BrandService[] = [
  {
    brand: "ZennOn",
    subdomain: "zennon.dooq.dev",
    target: "Productividad, Emprendimiento & Talento Local",
    color: "#10B981",
    gradient: "from-emerald-500 to-teal-600",
    description: "Red inteligente de oportunidades hiperlocales. Geolocalización (ZenMap, ZenNear), gestión personal (ZenPlanner, ZenTask), IA asistida (ZenAI), CRM para emprendedores y marketplace de productos digitales.",
    url: "https://zennon.dooq.dev",
    services: [
      {
        id: "zenmap",
        category: "ZennOn",
        subcategory: "Geolocalización",
        name: "ZenMap — Mapa Hiperlocal",
        description: "Geolocalización GPS para conectar profesionales con clientes en su zona de influencia (800m - 10km).",
        features: [
          "Mapa interactivo con radio de alcance configurable",
          "Búsqueda por categoría y distancia",
          "Perfil de negocio con ubicación precisa",
          "Integración con WhatsApp y redes sociales"
        ],
        price: "Gratis",
        priceLabel: "en plan Free",
        icon: "map"
      },
      {
        id: "zenplanner",
        category: "ZennOn",
        subcategory: "Gestión Personal",
        name: "ZenPlanner — Planificador Personal",
        description: "Herramienta de gestión personal para emprendedores y freelancers. Organiza tareas, proyectos y citas.",
        features: [
          "Gestión de tareas y proyectos",
          "Calendario integrado",
          "Recordatorios automáticos",
          "Seguimiento de productividad",
          "Exportación de informes"
        ],
        price: "Desde $24.900",
        priceLabel: "COP / mes",
        icon: "calendar"
      },
      {
        id: "zentask",
        category: "ZennOn",
        subcategory: "Gestión Personal",
        name: "ZenTask — Gestión de Tareas",
        description: "Sistema de gestión de tareas para equipos pequeños y freelancers.",
        features: [
          "Tablero Kanban",
          "Asignación de tareas",
          "Estados de avance",
          "Notificaciones en tiempo real",
          "Integración con ZenPlanner"
        ],
        price: "Desde $24.900",
        priceLabel: "COP / mes",
        icon: "task"
      },
      {
        id: "zenai",
        category: "ZennOn",
        subcategory: "IA Asistida",
        name: "ZenAI — Asistente de IA",
        description: "IA asistida para emprendedores: generación de contenido, análisis de mercado y recomendaciones personalizadas.",
        features: [
          "Generación de contenido para redes sociales",
          "Análisis de mercado local",
          "Recomendaciones de negocio",
          "Asistente de copywriting",
          "Análisis de competencia"
        ],
        price: "Desde $49.900",
        priceLabel: "COP / mes",
        icon: "brain"
      },
      {
        id: "zencrm",
        category: "ZennOn",
        subcategory: "CRM",
        name: "ZenCRM — CRM para Emprendedores",
        description: "CRM ligero para emprendedores y pequeños negocios. Gestión de clientes, seguimiento de ventas y pipeline.",
        features: [
          "Gestión de contactos y clientes",
          "Pipeline de ventas visual",
          "Seguimiento de oportunidades",
          "Recordatorios de seguimiento",
          "Reportes de rendimiento comercial"
        ],
        price: "Desde $49.900",
        priceLabel: "COP / mes",
        icon: "users"
      },
      {
        id: "zenmarketplace",
        category: "ZennOn",
        subcategory: "Marketplace",
        name: "ZenMarket — Marketplace de Productos Digitales",
        description: "Marketplace para vender productos digitales: cursos, templates, ebooks, presets y más.",
        features: [
          "Tienda digital integrada",
          "Gestión de productos digitales",
          "Pasarela de pago integrada",
          "Seguimiento de ventas",
          "Perfil de vendedor"
        ],
        price: "Desde $29.900",
        priceLabel: "COP / mes",
        icon: "store"
      }
    ]
  },
  {
    brand: "BFriends & BFriends Edu",
    subdomain: "bfriends.dooq.dev",
    target: "Bienestar Humano, Psicología & Educación Escolar",
    color: "#F43F5E",
    gradient: "from-rose-500 to-violet-600",
    description: "Ecosistema de salud mental, apoyo emocional, diario de ánimo (Mood AI), terapia virtual con especialistas y programa escolar integral (BFriends Edu) para instituciones educativas.",
    url: "https://bfriends.dooq.dev",
    services: [
      {
        id: "mood-ai",
        category: "BFriends",
        subcategory: "Bienestar Personal",
        name: "Mood AI — Diario de Ánimo Inteligente",
        description: "Diario de ánimo con inteligencia artificial que analiza patrones emocionales y ofrece recomendaciones personalizadas.",
        features: [
          "Registro diario de estado de ánimo",
          "Análisis de patrones emocionales con IA",
          "Recomendaciones personalizadas",
          "Gráficos de evolución emocional",
          "Recordatorios de autocuidado"
        ],
        price: "Gratis",
        priceLabel: "funcionalidad base",
        icon: "heart"
      },
      {
        id: "therapy",
        category: "BFriends",
        subcategory: "Bienestar Personal",
        name: "Terapia Virtual con Especialistas",
        description: "Conexión con psicólogos y terapeutas certificados para sesiones virtuales individuales o grupales.",
        features: [
          "Buscar psicólogos por especialidad",
          "Sesiones virtuales en vivo",
          "Agenda de citas integrada",
          "Seguimiento de sesiones",
          "Facturación electrónica"
        ],
        price: "Desde $80.000",
        priceLabel: "por sesión",
        icon: "message-circle"
      },
      {
        id: "marketplace-psico",
        category: "BFriends",
        subcategory: "Marketplace",
        name: "Marketplace de Psicólogos",
        description: "Marketplace para encontrar y contratar psicólogos, terapeutas y coaches certificados.",
        features: [
          "Filtros por especialidad y ubicación",
          "Reseñas y calificaciones",
          "Perfil detallado de cada profesional",
          "Agenda de disponibilidad",
          "Reserva en línea"
        ],
        price: "Sin costo de intermediación",
        priceLabel: "para el usuario",
        icon: "users"
      },
      {
        id: "bfriends-edu",
        category: "BFriends Edu",
        subcategory: "Educación Escolar",
        name: "BFriends Edu — Programa Escolar Integral",
        description: "Programa escolar integral para prevención de bullying y riesgos psicosociales en instituciones educativas.",
        features: [
          "Prevención de bullying y ciberbullying",
          "Detección temprana de riesgos psicosociales",
          "Talleres de bienestar emocional",
          "Formación de docentes en salud mental",
          "Canal de comunicación segura con padres",
          "Dashboard de bienestar institucional"
        ],
        price: "Desde $3.500",
        priceLabel: "COP por estudiante / mes",
        icon: "school",
        highlight: true
      },
      {
        id: "bfriends-school-start",
        category: "BFriends Edu",
        subcategory: "Educación Escolar",
        name: "BFriends Edu — School Start",
        description: "Plan escolar para instituciones con hasta 300 estudiantes.",
        features: [
          "Hasta 300 estudiantes",
          "Prevención de bullying",
          "Talleres de bienestar emocional",
          "Formación docente básica",
          "Dashboard de bienestar"
        ],
        price: "$3.500",
        priceLabel: "COP por estudiante / mes",
        icon: "school"
      },
      {
        id: "bfriends-school-plus",
        category: "BFriends Edu",
        subcategory: "Educación Escolar",
        name: "BFriends Edu — School Plus",
        description: "Plan escolar para instituciones con hasta 800 estudiantes.",
        features: [
          "Hasta 800 estudiantes",
          "Prevención de bullying avanzada",
          "Talleres de bienestar emocional",
          "Formación docente intensiva",
          "Dashboard de bienestar avanzado",
          "Soporte prioritario"
        ],
        price: "$3.000",
        priceLabel: "COP por estudiante / mes",
        icon: "school"
      },
      {
        id: "bfriends-school-premium",
        category: "BFriends Edu",
        subcategory: "Educación Escolar",
        name: "BFriends Edu — School Premium",
        description: "Plan escolar para instituciones con más de 800 estudiantes.",
        features: [
          "Más de 800 estudiantes",
          "Prevención de bullying completa",
          "Talleres de bienestar emocional",
          "Formación docente premium",
          "Dashboard de bienestar avanzado",
          "Soporte 24/7",
          "Asesor dedicado"
        ],
        price: "Desde $2.500",
        priceLabel: "COP por estudiante / mes",
        icon: "school",
        highlight: true
      }
    ]
  },
  {
    brand: "Planika",
    subdomain: "planika.dooq.dev",
    target: "Gobierno Curricular, Malla Curricular & Educación Superior",
    color: "#8B5CF6",
    gradient: "from-violet-500 to-purple-600",
    description: "Plataforma empresarial de gestión académica, curricular e inteligencia educativa para instituciones colombianas. Funciona como un Sistema Operativo Educativo Inteligente que digitaliza, organiza, automatiza y potencia procesos académicos mediante IA, automatización, gestión documental y arquitectura empresarial.",
    url: "https://planika.dooq.dev",
    services: [
      {
        id: "planika-apni",
        category: "Planika",
        subcategory: "APNI",
        name: "APNI — Asistente Pedagógico y Normativo Inteligente",
        description: "Consultor pedagógico, jurídico y normativo especializado en el sistema educativo colombiano. Mantiene actualizada a la institución con cambios legislativos del MEN y Gobierno Nacional, y genera reportes pedagógicos alineados con DBA, EBC y SIEE.",
        features: [
          "Actualización normativa del MEN y Gobierno Nacional",
          "Generación de informes pedagógicos alineados con DBA, EBC y SIEE",
          "Consultoría pedagógica y jurídica especializada",
          "Rastreo de leyes, decretos y circulares ministeriales",
          "Análisis de impacto en gestión escolar",
          "Variables contextuales: Área, Grado, Docente, Institución",
          "Alertas de vigencia normativa",
          "Enlaces oficiales de consulta (SUIN-Juriscol, Diario Oficial, DAPRE)"
        ],
        price: "Desde $6.500.000",
        priceLabel: "COP / mes",
        icon: "book"
      },
      {
        id: "planika-indicadores",
        category: "Planika",
        subcategory: "Indicadores",
        name: "Motor de Indicadores de Logro",
        description: "Genera reportes evaluativos por curso, materia o estudiante respetando la matriz obligatoria de cuatro componentes: Fortalezas, Debilidades, Estrategias de Aula y Recomendaciones para Casa.",
        features: [
          "Informes pedagógicos por estudiante o grupo",
          "Matriz de 4 componentes: Fortalezas, Debilidades, Estrategias, Recomendaciones",
          "Alineación con Derechos Básicos de Aprendizaje (DBA)",
          "Alineación con Estándares Básicos de Competencias (EBC)",
          "Alineación con Sistema Institucional de Evaluación (SIEE)",
          "Adaptación por Área, Grado, Docente e Institución",
          "Fundamentación en referentes de calidad del MEN",
          "Exportación en formatos institucionales"
        ],
        price: "Desde $4.200.000",
        priceLabel: "COP / mes",
        icon: "clipboard-list"
      },
      {
        id: "planika-normativa",
        category: "Planika",
        subcategory: "Normativa",
        name: "Actualización Normativa MEN",
        description: "Módulo especializado en rastrear, filtrar y resumir actualizaciones normativas del Ministerio de Educación Nacional y el Gobierno Colombiano.",
        features: [
          "Rastreo automático de normativa educativa",
          "Filtrado por vigencia y pertinencia",
          "Categorías: Leyes, Decretos, Circulares, Lineamientos curriculares",
          "Formato de alerta normativa oficial",
          "Impacto en gestión escolar",
          "Enlaces de consulta oficial",
          "Historial de cambios normativos",
          "Notificaciones institucionales"
        ],
        price: "Desde $3.800.000",
        priceLabel: "COP / mes",
        icon: "file-text"
      },
      {
        id: "planika-auditoria",
        category: "Planika",
        subcategory: "Auditoría",
        name: "Auditoría Curricular y Cumplimiento",
        description: "Verifica alineación curricular con normativa vigente, DBA, EBC y SIEE. Genera informes de cumplimiento y planes de mejoramiento.",
        features: [
          "Verificación de alineación con normativa MEN",
          "Análisis de cobertura curricular",
          "Informe de cumplimiento normativo",
          "Plan de mejoramiento institucional",
          "Detección de brechas curriculares",
          "Soporte para acreditaciones",
          "Trazabilidad de evidencias",
          "Dashboard de cumplimiento"
        ],
        price: "Desde $5.200.000",
        priceLabel: "COP / mes",
        icon: "shield"
      },
      {
        id: "planika-gobierno",
        category: "Planika",
        subcategory: "Gobierno",
        name: "Gobierno del Conocimiento Institucional",
        description: "Administra, valida, prioriza y gobierna todo el conocimiento curricular institucional. Garantiza que la información utilizada por IA provenga de fuentes oficiales y validadas.",
        features: [
          "Validación documental automática",
          "Control de versiones y vigencia",
          "Trazabilidad y auditoría curricular",
          "Integración con sistemas académicos",
          "Knowledge Graph institucional",
          "Hybrid RAG educativo",
          "Políticas de priorización de fuentes",
          "Memoria institucional gobernada"
        ],
        price: "Desde $7.000.000",
        priceLabel: "COP / mes",
        icon: "graduation-cap"
      }
    ]
  }
];

export default brandsServices;
