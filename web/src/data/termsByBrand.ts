export interface TermsSection {
  id: string;
  brand: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  effectiveDate: string;
  sections: TermsSectionItem[];
}

export interface TermsSectionItem {
  id: string;
  title: string;
  content: string;
  subsections?: TermsSubsection[];
}

export interface TermsSubsection {
  id: string;
  title: string;
  content: string;
}

export const termsByBrand: TermsSection[] = [
  {
    id: "terminos",
    brand: "DOOQ Technology Holding",
    title: "Términos y Condiciones Generales",
    subtitle: "Condiciones de uso del sitio web y contratación de servicios DOOQ Technology Holding",
    lastUpdated: "2026-08-05",
    effectiveDate: "2026-08-05",
    sections: [
      {
        id: "aceptacion",
        title: "1. Aceptación de los Términos",
        content:
          "Al acceder y utilizar este sitio web, así como al contratar cualquier servicio ofrecido por DOOQ Technology Holding y sus marcas asociadas (ZennOn, BFriends, Planika, DOOQ 360, y demás marcas del holding), el usuario acepta de manera expresa e inequívoca los presentes Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, deberá abstenerse de utilizar nuestros servicios.",
      },
      {
        id: "descripcion-servicios",
        title: "2. Descripción de los Servicios",
        content:
          "DOOQ Technology Holding ofrece servicios de tecnología de la información y comunicación para el mercado colombiano, incluyendo pero no limitado a: desarrollo de software a la medida, inteligencia artificial y machine learning, infraestructura cloud, bases de datos, hardware empresarial, redes y ciberseguridad, diseño UX/UI, marketing digital, helpdesk, consultoría tecnológica, marketplace, logística y paquetes combinados (DOOQ 360). Los servicios específicos, alcance, precio y forma de contratación se detallan en cotizaciones formales emitidas por DOOQ.",
      },
      {
        id: "propiedad-intelectual",
        title: "3. Propiedad Intelectual",
        content:
          "Todo el contenido de este sitio web, incluyendo textos, gráficos, logos, iconos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad de DOOQ Technology Holding o de sus proveedores de contenido y está protegido por las leyes colombianas e internacionales de propiedad intelectual. Las marcas comerciales, logos y nombres comerciales exhibidos en este sitio son propiedad de DOOQ Technology Holding o de sus respectivos titulares. Queda prohibida su reproducción, distribución o uso sin autorización escrita previa.",
      },
      {
        id: "uso-sitio",
        title: "4. Uso del Sitio Web",
        content:
          "El usuario se compromete a utilizar este sitio web de manera lícita, conforme a la normativa colombiana aplicable, los presentes términos y las buenas costumbres. Se prohíbe expresamente: (a) utilizar el sitio para fines ilícitos o no autorizados; (b) intentar acceder sin autorización a sistemas o redes relacionadas con el sitio; (c) transmitir virus, troyanos o cualquier código malicioso; (d) realizar ingeniería inversa, descompilación o extracción de código fuente del sitio; (e) utilizar robots, spiders o herramientas automatizadas similares sin consentimiento previo.",
      },
      {
        id: "cotizaciones",
        title: "5. Cotizaciones y Contratación",
        content:
          "Las cotizaciones emitidas por DOOQ tienen validez por treinta (30) días calendario a partir de su fecha de emisión. La contratación formal de servicios se perfecciona mediante la firma del contrato o orden de servicio correspondiente, o mediante el pago de la factura de anticipo cuando así se estipule. Los precios están expresados en Pesos Colombianos (COP) y están sujetos a cambios sin previo aviso hasta la emisión de la cotización formal.",
      },
      {
        id: "pagos",
        title: "6. Pagos y Facturación",
        content:
          "Los pagos se realizarán según las condiciones acordadas en la cotización o contrato. DOOQ se reserva el derecho de suspender los servicios en caso de mora superior a treinta (30) días en el pago de facturas, sin perjuicio de los intereses de mora y demás consecuencias legales aplicables. Los precios incluyen el Impuesto sobre las Ventas (IVA) cuando sea aplicable según la normativa tributaria colombiana vigente.",
      },
      {
        id: "confidencialidad",
        title: "7. Confidencialidad",
        content:
          "Ambas partes se comprometen a mantener la confidencialidad de la información intercambiada durante la relación comercial y contractual. DOOQ adoptará las medidas técnicas y organizativas necesarias para proteger los datos personales y la información confidencial del cliente, conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013.",
      },
      {
        id: "limitacion-responsabilidad",
        title: "8. Limitación de Responsabilidad",
        content:
          "DOOQ no será responsable por daños indirectos, incidentales, especiales, consecuenciales o punitivos, incluyendo pero no limitado a lucro cesante, pérdida de datos, interrupción del negocio o cualquier otra pérdida derivada del uso o imposibilidad de uso de los servicios. La responsabilidad máxima de DOOQ frente al cliente estará limitada al monto efectivamente pagado por el cliente por los servicios que originaron la reclamación.",
      },
      {
        id: "terminacion",
        title: "9. Terminación de Servicios",
        content:
          "Cualquiera de las partes podrá dar por terminado el contrato de servicios con aviso previo de quince (15) días hábiles. En caso de terminación anticipada por parte del cliente sin justa causa, DOOQ tendrá derecho a cobrar los servicios ya prestados y los costos incurridos. DOOQ podrá terminar el contrato de inmediato en caso de incumplimiento grave por parte del cliente.",
      },
      {
        id: "ley-aplicable",
        title: "10. Ley Aplicable y Jurisdicción",
        content:
          "Los presentes términos se rigen por las leyes de la República de Colombia. Cualquier controversia derivada de la interpretación, cumplimiento o validez de los presentes términos será sometida a la jurisdicción ordinaria de los jueces y tribunales de la ciudad de Bogotá D.C., con renuncia expresa a cualquier otro fuero o jurisdicción que pudiera corresponderle por su domicilio presente o futuro.",
      },
    ],
  },
  {
    id: "privacidad",
    brand: "DOOQ Technology Holding",
    title: "Política de Privacidad y Protección de Datos Personales",
    subtitle: "Tratamiento de datos personales conforme a la Ley 1581 de 2012",
    lastUpdated: "2026-08-05",
    effectiveDate: "2026-08-05",
    sections: [
      {
        id: "info-recopilada",
        title: "1. Información Recopilada",
        content:
          "DOOQ Technology Holding recopila información personal de sus usuarios y clientes a través de formularios de contacto, solicitudes de cotización, contratos de servicios y comunicaciones directas. Esta información puede incluir: nombres y apellidos, número de documento de identidad, dirección de correo electrónico, número de teléfono, nombre de la empresa, cargo, información de facturación y cualquier otra información necesaria para la prestación de los servicios contratados.",
      },
      {
        id: "finalidad-tratamiento",
        title: "2. Finalidad del Tratamiento",
        content:
          "Los datos personales recopilados serán utilizados para las siguientes finalidades: (a) gestión comercial y contractual de los servicios contratados; (b) emisión de facturas y documentos contables; (c) comunicación sobre el estado de los servicios y soporte técnico; (d) envío de información comercial y promocional relacionada con los servicios de DOOQ, previo consentimiento del titular; (e) cumplimiento de obligaciones legales y regulatorias; (f) análisis estadísticos y mejora de la calidad de los servicios.",
      },
      {
        id: "derechos-titulares",
        title: "3. Derechos de los Titulares",
        content:
          "De conformidad con la Ley 1581 de 2012 y el Decreto 1377 de 2013, los titulares de datos personales tienen derecho a: (a) conocer, actualizar y rectificar sus datos personales; (b) solicitar prueba de la autorización otorgada para el tratamiento de sus datos; (c) ser informados sobre el uso que se le ha dado a sus datos personales; (d) presentar quejas ante la Superintendencia de Industria y Comercio por infracción a la normativa; (e) revocar la autorización y solicitar la supresión de sus datos cuando no se respeten los principios, deberes y prohibiciones establecidos en la ley.",
      },
      {
        id: "seguridad-datos",
        title: "4. Seguridad de los Datos",
        content:
          "DOOQ implementa medidas de seguridad técnicas, administrativas y físicas adecuadas para proteger los datos personales contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ninguna transmisión de datos por Internet o sistema de almacenamiento electrónico es 100% segura, por lo que no podemos garantizar seguridad absoluta.",
      },
      {
        id: "terceros",
        title: "5. Transferencia a Terceros",
        content:
          "DOOQ podrá compartir datos personales con proveedores de servicios, subcontratistas y socios comerciales que requieran acceso a dicha información para la prestación de servicios en nombre de DOOQ, siempre bajo acuerdos de confidencialidad y cumpliendo con la normativa de protección de datos. DOOQ no vende, alquila ni comparte datos personales con terceros para fines de marketing sin consentimiento expreso del titular.",
      },
      {
        id: "retencion",
        title: "6. Retención y Eliminación de Datos",
        content:
          "Los datos personales serán conservados durante el tiempo necesario para cumplir con las finalidades para las cuales fueron recolectados, así como para el cumplimiento de obligaciones legales, contables y fiscales. Una vez cumplidas estas finalidades, los datos serán eliminados o anonimizados de manera segura.",
      },
      {
        id: "cookies-privacidad",
        title: "7. Cookies y Tecnologías Similares",
        content:
          "Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar la experiencia del usuario, analizar el tráfico del sitio y personalizar contenido. El usuario puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio. Para más información, consulte nuestra Política de Cookies.",
      },
      {
        id: "contacto-privacidad",
        title: "8. Contacto para Consultas de Privacidad",
        content:
          "Para cualquier consulta, solicitud o reclamo relacionado con el tratamiento de datos personales, el usuario puede contactarnos a través del correo electrónico privacidad@dooq.dev o mediante el formulario de contacto en nuestro sitio web. El Delegado de Protección de Datos de DOOQ Technology Holding atenderá las solicitudes en un plazo máximo de diez (10) días hábiles.",
      },
    ],
  },
  {
    id: "cookies",
    brand: "DOOQ Technology Holding",
    title: "Política de Cookies",
    subtitle: "Uso de cookies y tecnologías de rastreo en el sitio web de DOOQ",
    lastUpdated: "2026-08-05",
    effectiveDate: "2026-08-05",
    sections: [
      {
        id: "que-son-cookies",
        title: "1. ¿Qué son las Cookies?",
        content:
          "Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (computadora, tablet o teléfono móvil) cuando visita un sitio web. Las cookies permiten que el sitio web reconozca su dispositivo, recuerde sus preferencias y mejore su experiencia de navegación. Las cookies pueden ser 'propias' (configuradas por DOOQ) o 'de terceros' (configuradas por servicios externos que utilizamos).",
      },
      {
        id: "tipos-cookies",
        title: "2. Tipos de Cookies que Utilizamos",
        content:
          "Cookies estrictamente necesarias: Requeridas para el funcionamiento básico del sitio web. No requieren consentimiento. Cookies de rendimiento y análisis: Nos permiten contar las visitas y fuentes de tráfico para medir y mejorar el rendimiento del sitio. Cookies de funcionalidad: Permiten recordar sus preferencias (idioma, región) para proporcionar una experiencia mejorada. Cookies de marketing: Utilizadas para rastrear visitantes en sitios web con el fin de mostrar anuncios relevantes y atractivos.",
      },
      {
        id: "gestion-cookies",
        title: "3. Gestión de Cookies",
        content:
          "Puede controlar y gestionar las cookies mediante la configuración de su navegador. La mayoría de los navegadores web le permiten: (a) ver qué cookies tiene almacenadas; (b) eliminar cookies individualmente o todas a la vez; (c) bloquear cookies de terceros; (d) bloquear cookies de sitios específicos; (e) bloquear todas las cookies. Tenga en cuenta que si desactiva las cookies, algunas funcionalidades del sitio pueden no funcionar correctamente.",
      },
      {
        id: "actualizaciones-cookies",
        title: "4. Actualizaciones de la Política",
        content:
          "DOOQ se reserva el derecho de modificar esta Política de Cookies en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web. Se recomienda revisar periódicamente esta página para mantenerse informado sobre el uso de cookies.",
      },
    ],
  },
  {
    id: "legal",
    brand: "DOOQ Technology Holding",
    title: "Aviso Legal",
    subtitle: "Información legal y avisos regulatorios",
    lastUpdated: "2026-08-05",
    effectiveDate: "2026-08-05",
    sections: [
      {
        id: "datos-empresa",
        title: "1. Datos de la Empresa",
        content:
          "DOOQ Technology Holding es una marca comercial registrada en Colombia. Razón social: DOOQ Technology Holding S.A.S. NIT: [Pendiente de registro]. Dirección de notificaciones judiciales: [Pendiente de registro - Bogotá D.C., Colombia]. Correo electrónico: contacto@dooq.dev. Teléfono: +57 300 000 0000.",
      },
      {
        id: "registro",
        title: "2. Inscripciones Registrales",
        content:
          "DOOQ Technology Holding y sus marcas asociadas se encuentran en proceso de registro ante la Superintendencia de Industria y Comercio (SIC) de Colombia. El uso de las marcas en este sitio web no constituye declaración alguna sobre su estado de registro o protección legal.",
      },
      {
        id: "exactitud-info",
        title: "3. Exactitud de la Información",
        content:
          "DOOQ realiza esfuerzos razonables para asegurar que la información publicada en este sitio web sea precisa y esté actualizada. Sin embargo, no garantiza la exactitud, integridad o actualidad de la información. Los precios, especificaciones técnicas y disponibilidad de servicios están sujetos a cambios sin previo aviso. La información contenida en este sitio web tiene carácter informativo y no constituye oferta vinculante.",
      },
      {
        id: "enlaces-externos",
        title: "4. Enlaces a Sitios Externos",
        content:
          "Este sitio web puede contener enlaces a sitios web de terceros que no son propiedad ni están controlados por DOOQ. DOOQ no se responsabiliza por el contenido, políticas de privacidad o prácticas de sitios web de terceros. Se recomienda revisar los términos y condiciones y políticas de privacidad de cualquier sitio web de terceros que visite.",
      },
      {
        id: "limitacion-responsabilidad-legal",
        title: "5. Limitación de Responsabilidad",
        content:
          "En la máxima medida permitida por la ley colombiana, DOOQ no será responsable por daños directos, indirectos, incidentales, especiales o consecuenciales derivados del uso o imposibilidad de uso de este sitio web o de los servicios ofrecidos. Esta limitación aplica incluso si DOOQ ha sido advertido de la posibilidad de tales daños.",
      },
      {
        id: "indemnizacion",
        title: "6. Indemnización",
        content:
          "El usuario acepta indemnizar y mantener indemne a DOOQ Technology Holding, sus directores, empleados, socios y agentes frente a cualquier reclamación, demanda, daño, pérdida, responsabilidad, costo o gasto (incluyendo honorarios legales) que surja de: (a) el uso del sitio web por parte del usuario; (b) el incumplimiento de estos términos; (c) la violación de derechos de terceros; (d) cualquier actividad relacionada con la cuenta del usuario.",
      },
      {
        id: "modificaciones",
        title: "7. Modificaciones de los Términos",
        content:
          "DOOQ se reserva el derecho de modificar, actualizar o reemplazar estos términos en cualquier momento. Las modificaciones serán publicadas en esta página con la fecha de última actualización. El uso continuado del sitio web después de la publicación de modificaciones constituye aceptación de dichos cambios.",
      },
      {
        id: "disponibilidad",
        title: "8. Disponibilidad del Sitio",
        content:
          "DOOQ no garantiza que el sitio web esté disponible en todo momento. Podemos suspender, interrumpir o restringir el acceso al sitio web total o parcialmente, por razones de mantenimiento, actualización, mejora o cualquier otra causa justificada, sin previo aviso y sin que ello genere derecho a compensación alguna.",
      },
      {
        id: "legislacion",
        title: "9. Legislación Aplicable",
        content:
          "Los presentes términos se rigen por las leyes de la República de Colombia. Cualquier controversia derivada de la interpretación, cumplimiento o validez de los presentes términos será sometida a la jurisdicción ordinaria de los jueces y tribunales de la ciudad de Bogotá D.C., con renuncia expresa a cualquier otro fuero o jurisdicción.",
      },
    ],
  },
  {
    id: "disclaimer",
    brand: "DOOQ Technology Holding",
    title: "Descargo de Responsabilidad",
    subtitle: "Limitaciones y exclusiones de responsabilidad legal",
    lastUpdated: "2026-08-05",
    effectiveDate: "2026-08-05",
    sections: [
      {
        id: "exclusiones",
        title: "1. Exclusiones Generales",
        content:
          "La información contenida en este sitio web se proporciona 'tal cual' y sin garantías de ningún tipo, ya sean expresas o implícitas. DOOQ no garantiza que el sitio web esté libre de errores, virus o componentes dañinos, ni que el acceso sea continuo e ininterrumpido. El uso del sitio web y la contratación de servicios se realiza bajo el propio riesgo del usuario.",
      },
      {
        id: "no-responsabilidad-contenido",
        title: "2. No Responsabilidad por Contenido de Terceros",
        content:
          "DOOQ no es responsable del contenido, exactitud, legalidad o idoneidad de información, productos o servicios de terceros a los que se acceda mediante enlaces desde este sitio web. La inclusión de enlaces no implica aprobación ni respaldo por parte de DOOQ.",
      },
      {
        id: "limitacion-danos",
        title: "3. Limitación de Daños",
        content:
          "En ningún caso DOOQ Technology Holding, sus directores, empleados, socios o afiliados serán responsables por daños directos, indirectos, incidentales, especiales, ejemplares o consecuenciales derivados de: (a) el uso o la imposibilidad de uso del sitio web; (b) el acceso no autorizado o la alteración de sus transmisiones o datos; (c) declaraciones o conducta de terceros en el sitio web; (d) cualquier otro asunto relacionado con el sitio web.",
      },
      {
        id: "servicios-profesionales",
        title: "4. Servicios Profesionales",
        content:
          "Los servicios de consultoría, desarrollo de software y servicios tecnológicos se proporcionan con el estándar de cuidado y habilidades profesionalmente aceptado en la industria. Sin embargo, DOOQ no garantiza resultados específicos o la adecuación de los servicios para un propósito particular, salvo que dicha garantía se establezca expresamente por escrito en el contrato de servicios correspondiente.",
      },
    ],
  },
];
