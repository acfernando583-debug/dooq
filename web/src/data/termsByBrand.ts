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
    title: "TÃ©rminos y Condiciones Generales",
    subtitle: "Condiciones de uso del sitio web y contrataciÃ³n de servicios DOOQ Technology Holding",
    lastUpdated: "2026-08-05",
    effectiveDate: "2026-08-05",
    sections: [
      {
        id: "aceptacion",
        title: "1. AceptaciÃ³n de los TÃ©rminos",
        content:
          "Al acceder y utilizar este sitio web, asÃ­ como al contratar cualquier servicio ofrecido por DOOQ Technology Holding y sus marcas asociadas (ZennOn, BFriends, Planika, DOOQ 360, y demÃ¡s marcas del holding), el usuario acepta de manera expresa e inequÃ­voca los presentes TÃ©rminos y Condiciones. Si no estÃ¡ de acuerdo con alguna parte de estos tÃ©rminos, deberÃ¡ abstenerse de utilizar nuestros servicios.",
      },
      {
        id: "descripcion-servicios",
        title: "2. DescripciÃ³n de los Servicios",
        content:
          "DOOQ Technology Holding ofrece servicios de tecnologÃ­a de la informaciÃ³n y comunicaciÃ³n para el mercado colombiano, incluyendo pero no limitado a: desarrollo de software a la medida, inteligencia artificial y machine learning, infraestructura cloud, bases de datos, hardware empresarial, redes y ciberseguridad, diseÃ±o UX/UI, marketing digital, helpdesk, consultorÃ­a tecnolÃ³gica, marketplace, logÃ­stica y paquetes combinados (DOOQ 360). Los servicios especÃ­ficos, alcance, precio y forma de contrataciÃ³n se detallan en cotizaciones formales emitidas por DOOQ.",
      },
      {
        id: "propiedad-intelectual",
        title: "3. Propiedad Intelectual",
        content:
          "Todo el contenido de este sitio web, incluyendo textos, grÃ¡ficos, logos, iconos, imÃ¡genes, clips de audio, descargas digitales y compilaciones de datos, es propiedad de DOOQ Technology Holding o de sus proveedores de contenido y estÃ¡ protegido por las leyes colombianas e internacionales de propiedad intelectual. Las marcas comerciales, logos y nombres comerciales exhibidos en este sitio son propiedad de DOOQ Technology Holding o de sus respectivos titulares. Queda prohibida su reproducciÃ³n, distribuciÃ³n o uso sin autorizaciÃ³n escrita previa.",
      },
      {
        id: "uso-sitio",
        title: "4. Uso del Sitio Web",
        content:
          "El usuario se compromete a utilizar este sitio web de manera lÃ­cita, conforme a la normativa colombiana aplicable, los presentes tÃ©rminos y las buenas costumbres. Se prohÃ­be expresamente: (a) utilizar el sitio para fines ilÃ­citos o no autorizados; (b) intentar acceder sin autorizaciÃ³n a sistemas o redes relacionadas con el sitio; (c) transmitir virus, troyanos o cualquier cÃ³digo malicioso; (d) realizar ingenierÃ­a inversa, descompilaciÃ³n o extracciÃ³n de cÃ³digo fuente del sitio; (e) utilizar robots, spiders o herramientas automatizadas similares sin consentimiento previo.",
      },
      {
        id: "cotizaciones",
        title: "5. Cotizaciones y ContrataciÃ³n",
        content:
          "Las cotizaciones emitidas por DOOQ tienen validez por treinta (30) dÃ­as calendario a partir de su fecha de emisiÃ³n. La contrataciÃ³n formal de servicios se perfecciona mediante la firma del contrato o orden de servicio correspondiente, o mediante el pago de la factura de anticipo cuando asÃ­ se estipule. Los precios estÃ¡n expresados en Pesos Colombianos (COP) y estÃ¡n sujetos a cambios sin previo aviso hasta la emisiÃ³n de la cotizaciÃ³n formal.",
      },
      {
        id: "pagos",
        title: "6. Pagos y FacturaciÃ³n",
        content:
          "Los pagos se realizarÃ¡n segÃºn las condiciones acordadas en la cotizaciÃ³n o contrato. DOOQ se reserva el derecho de suspender los servicios en caso de mora superior a treinta (30) dÃ­as en el pago de facturas, sin perjuicio de los intereses de mora y demÃ¡s consecuencias legales aplicables. Los precios incluyen el Impuesto sobre las Ventas (IVA) cuando sea aplicable segÃºn la normativa tributaria colombiana vigente.",
      },
      {
        id: "confidencialidad",
        title: "7. Confidencialidad",
        content:
          "Ambas partes se comprometen a mantener la confidencialidad de la informaciÃ³n intercambiada durante la relaciÃ³n comercial y contractual. DOOQ adoptarÃ¡ las medidas tÃ©cnicas y organizativas necesarias para proteger los datos personales y la informaciÃ³n confidencial del cliente, conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013.",
      },
      {
        id: "limitacion-responsabilidad",
        title: "8. LimitaciÃ³n de Responsabilidad",
        content:
          "DOOQ no serÃ¡ responsable por daÃ±os indirectos, incidentales, especiales, consecuenciales o punitivos, incluyendo pero no limitado a lucro cesante, pÃ©rdida de datos, interrupciÃ³n del negocio o cualquier otra pÃ©rdida derivada del uso o imposibilidad de uso de los servicios. La responsabilidad mÃ¡xima de DOOQ frente al cliente estarÃ¡ limitada al monto efectivamente pagado por el cliente por los servicios que originaron la reclamaciÃ³n.",
      },
      {
        id: "terminacion",
        title: "9. TerminaciÃ³n de Servicios",
        content:
          "Cualquiera de las partes podrÃ¡ dar por terminado el contrato de servicios con aviso previo de quince (15) dÃ­as hÃ¡biles. En caso de terminaciÃ³n anticipada por parte del cliente sin justa causa, DOOQ tendrÃ¡ derecho a cobrar los servicios ya prestados y los costos incurridos. DOOQ podrÃ¡ terminar el contrato de inmediato en caso de incumplimiento grave por parte del cliente.",
      },
      {
        id: "ley-aplicable",
        title: "10. Ley Aplicable y JurisdicciÃ³n",
        content:
          "Los presentes tÃ©rminos se rigen por las leyes de la RepÃºblica de Colombia. Cualquier controversia derivada de la interpretaciÃ³n, cumplimiento o validez de los presentes tÃ©rminos serÃ¡ sometida a la jurisdicciÃ³n ordinaria de los jueces y tribunales de la ciudad de BogotÃ¡ D.C., con renuncia expresa a cualquier otro fuero o jurisdicciÃ³n que pudiera corresponderle por su domicilio presente o futuro.",
      },
    ],
  },
  {
    id: "privacidad",
    brand: "DOOQ Technology Holding",
    title: "PolÃ­tica de Privacidad y ProtecciÃ³n de Datos Personales",
    subtitle: "Tratamiento de datos personales conforme a la Ley 1581 de 2012",
    lastUpdated: "2026-08-05",
    effectiveDate: "2026-08-05",
    sections: [
      {
        id: "info-recopilada",
        title: "1. InformaciÃ³n Recopilada",
        content:
          "DOOQ Technology Holding recopila informaciÃ³n personal de sus usuarios y clientes a travÃ©s de formularios de contacto, solicitudes de cotizaciÃ³n, contratos de servicios y comunicaciones directas. Esta informaciÃ³n puede incluir: nombres y apellidos, nÃºmero de documento de identidad, direcciÃ³n de correo electrÃ³nico, nÃºmero de telÃ©fono, nombre de la empresa, cargo, informaciÃ³n de facturaciÃ³n y cualquier otra informaciÃ³n necesaria para la prestaciÃ³n de los servicios contratados.",
      },
      {
        id: "finalidad-tratamiento",
        title: "2. Finalidad del Tratamiento",
        content:
          "Los datos personales recopilados serÃ¡n utilizados para las siguientes finalidades: (a) gestiÃ³n comercial y contractual de los servicios contratados; (b) emisiÃ³n de facturas y documentos contables; (c) comunicaciÃ³n sobre el estado de los servicios y soporte tÃ©cnico; (d) envÃ­o de informaciÃ³n comercial y promocional relacionada con los servicios de DOOQ, previo consentimiento del titular; (e) cumplimiento de obligaciones legales y regulatorias; (f) anÃ¡lisis estadÃ­sticos y mejora de la calidad de los servicios.",
      },
      {
        id: "derechos-titulares",
        title: "3. Derechos de los Titulares",
        content:
          "De conformidad con la Ley 1581 de 2012 y el Decreto 1377 de 2013, los titulares de datos personales tienen derecho a: (a) conocer, actualizar y rectificar sus datos personales; (b) solicitar prueba de la autorizaciÃ³n otorgada para el tratamiento de sus datos; (c) ser informados sobre el uso que se le ha dado a sus datos personales; (d) presentar quejas ante la Superintendencia de Industria y Comercio por infracciÃ³n a la normativa; (e) revocar la autorizaciÃ³n y solicitar la supresiÃ³n de sus datos cuando no se respeten los principios, deberes y prohibiciones establecidos en la ley.",
      },
      {
        id: "seguridad-datos",
        title: "4. Seguridad de los Datos",
        content:
          "DOOQ implementa medidas de seguridad tÃ©cnicas, administrativas y fÃ­sicas adecuadas para proteger los datos personales contra acceso no autorizado, alteraciÃ³n, divulgaciÃ³n o destrucciÃ³n. Sin embargo, ninguna transmisiÃ³n de datos por Internet o sistema de almacenamiento electrÃ³nico es 100% segura, por lo que no podemos garantizar seguridad absoluta.",
      },
      {
        id: "terceros",
        title: "5. Transferencia a Terceros",
        content:
          "DOOQ podrÃ¡ compartir datos personales con proveedores de servicios, subcontratistas y socios comerciales que requieran acceso a dicha informaciÃ³n para la prestaciÃ³n de servicios en nombre de DOOQ, siempre bajo acuerdos de confidencialidad y cumpliendo con la normativa de protecciÃ³n de datos. DOOQ no vende, alquila ni comparte datos personales con terceros para fines de marketing sin consentimiento expreso del titular.",
      },
      {
        id: "retencion",
        title: "6. RetenciÃ³n y EliminaciÃ³n de Datos",
        content:
          "Los datos personales serÃ¡n conservados durante el tiempo necesario para cumplir con las finalidades para las cuales fueron recolectados, asÃ­ como para el cumplimiento de obligaciones legales, contables y fiscales. Una vez cumplidas estas finalidades, los datos serÃ¡n eliminados o anonimizados de manera segura.",
      },
      {
        id: "cookies-privacidad",
        title: "7. Cookies y TecnologÃ­as Similares",
        content:
          "Nuestro sitio web puede utilizar cookies y tecnologÃ­as similares para mejorar la experiencia del usuario, analizar el trÃ¡fico del sitio y personalizar contenido. El usuario puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio. Para mÃ¡s informaciÃ³n, consulte nuestra PolÃ­tica de Cookies.",
      },
      {
        id: "contacto-privacidad",
        title: "8. Contacto para Consultas de Privacidad",
        content:
          "Para cualquier consulta, solicitud o reclamo relacionado con el tratamiento de datos personales, el usuario puede contactarnos a travÃ©s del correo electrÃ³nico privacidad@dooq.dev o mediante el formulario de contacto en nuestro sitio web. El Delegado de ProtecciÃ³n de Datos de DOOQ Technology Holding atenderÃ¡ las solicitudes en un plazo mÃ¡ximo de diez (10) dÃ­as hÃ¡biles.",
      },
    ],
  },
  {
    id: "cookies",
    brand: "DOOQ Technology Holding",
    title: "PolÃ­tica de Cookies",
    subtitle: "Uso de cookies y tecnologÃ­as de rastreo en el sitio web de DOOQ",
    lastUpdated: "2026-08-05",
    effectiveDate: "2026-08-05",
    sections: [
      {
        id: "que-son-cookies",
        title: "1. Â¿QuÃ© son las Cookies?",
        content:
          "Las cookies son pequeÃ±os archivos de texto que se almacenan en su dispositivo (computadora, tablet o telÃ©fono mÃ³vil) cuando visita un sitio web. Las cookies permiten que el sitio web reconozca su dispositivo, recuerde sus preferencias y mejore su experiencia de navegaciÃ³n. Las cookies pueden ser 'propias' (configuradas por DOOQ) o 'de terceros' (configuradas por servicios externos que utilizamos).",
      },
      {
        id: "tipos-cookies",
        title: "2. Tipos de Cookies que Utilizamos",
        content:
          "Cookies estrictamente necesarias: Requeridas para el funcionamiento bÃ¡sico del sitio web. No requieren consentimiento. Cookies de rendimiento y anÃ¡lisis: Nos permiten contar las visitas y fuentes de trÃ¡fico para medir y mejorar el rendimiento del sitio. Cookies de funcionalidad: Permiten recordar sus preferencias (idioma, regiÃ³n) para proporcionar una experiencia mejorada. Cookies de marketing: Utilizadas para rastrear visitantes en sitios web con el fin de mostrar anuncios relevantes y atractivos.",
      },
      {
        id: "gestion-cookies",
        title: "3. GestiÃ³n de Cookies",
        content:
          "Puede controlar y gestionar las cookies mediante la configuraciÃ³n de su navegador. La mayorÃ­a de los navegadores web le permiten: (a) ver quÃ© cookies tiene almacenadas; (b) eliminar cookies individualmente o todas a la vez; (c) bloquear cookies de terceros; (d) bloquear cookies de sitios especÃ­ficos; (e) bloquear todas las cookies. Tenga en cuenta que si desactiva las cookies, algunas funcionalidades del sitio pueden no funcionar correctamente.",
      },
      {
        id: "actualizaciones-cookies",
        title: "4. Actualizaciones de la PolÃ­tica",
        content:
          "DOOQ se reserva el derecho de modificar esta PolÃ­tica de Cookies en cualquier momento. Los cambios entrarÃ¡n en vigor inmediatamente despuÃ©s de su publicaciÃ³n en el sitio web. Se recomienda revisar periÃ³dicamente esta pÃ¡gina para mantenerse informado sobre el uso de cookies.",
      },
    ],
  },
  {
    id: "legal",
    brand: "DOOQ Technology Holding",
    title: "Aviso Legal",
    subtitle: "InformaciÃ³n legal y avisos regulatorios",
    lastUpdated: "2026-08-05",
    effectiveDate: "2026-08-05",
    sections: [
      {
        id: "datos-empresa",
        title: "1. Datos de la Empresa",
        content:
          "DOOQ Technology Holding es una marca comercial registrada en Colombia. RazÃ³n social: DOOQ Technology Holding S.A.S. NIT: [Pendiente de registro]. DirecciÃ³n de notificaciones judiciales: [Pendiente de registro - BogotÃ¡ D.C., Colombia]. Correo electrÃ³nico: contacto@dooq.dev. TelÃ©fono: +57 311 889 3722.",
      },
      {
        id: "registro",
        title: "2. Inscripciones Registrales",
        content:
          "DOOQ Technology Holding y sus marcas asociadas se encuentran en proceso de registro ante la Superintendencia de Industria y Comercio (SIC) de Colombia. El uso de las marcas en este sitio web no constituye declaraciÃ³n alguna sobre su estado de registro o protecciÃ³n legal.",
      },
      {
        id: "exactitud-info",
        title: "3. Exactitud de la InformaciÃ³n",
        content:
          "DOOQ realiza esfuerzos razonables para asegurar que la informaciÃ³n publicada en este sitio web sea precisa y estÃ© actualizada. Sin embargo, no garantiza la exactitud, integridad o actualidad de la informaciÃ³n. Los precios, especificaciones tÃ©cnicas y disponibilidad de servicios estÃ¡n sujetos a cambios sin previo aviso. La informaciÃ³n contenida en este sitio web tiene carÃ¡cter informativo y no constituye oferta vinculante.",
      },
      {
        id: "enlaces-externos",
        title: "4. Enlaces a Sitios Externos",
        content:
          "Este sitio web puede contener enlaces a sitios web de terceros que no son propiedad ni estÃ¡n controlados por DOOQ. DOOQ no se responsabiliza por el contenido, polÃ­ticas de privacidad o prÃ¡cticas de sitios web de terceros. Se recomienda revisar los tÃ©rminos y condiciones y polÃ­ticas de privacidad de cualquier sitio web de terceros que visite.",
      },
      {
        id: "limitacion-responsabilidad-legal",
        title: "5. LimitaciÃ³n de Responsabilidad",
        content:
          "En la mÃ¡xima medida permitida por la ley colombiana, DOOQ no serÃ¡ responsable por daÃ±os directos, indirectos, incidentales, especiales o consecuenciales derivados del uso o imposibilidad de uso de este sitio web o de los servicios ofrecidos. Esta limitaciÃ³n aplica incluso si DOOQ ha sido advertido de la posibilidad de tales daÃ±os.",
      },
      {
        id: "indemnizacion",
        title: "6. IndemnizaciÃ³n",
        content:
          "El usuario acepta indemnizar y mantener indemne a DOOQ Technology Holding, sus directores, empleados, socios y agentes frente a cualquier reclamaciÃ³n, demanda, daÃ±o, pÃ©rdida, responsabilidad, costo o gasto (incluyendo honorarios legales) que surja de: (a) el uso del sitio web por parte del usuario; (b) el incumplimiento de estos tÃ©rminos; (c) la violaciÃ³n de derechos de terceros; (d) cualquier actividad relacionada con la cuenta del usuario.",
      },
      {
        id: "modificaciones",
        title: "7. Modificaciones de los TÃ©rminos",
        content:
          "DOOQ se reserva el derecho de modificar, actualizar o reemplazar estos tÃ©rminos en cualquier momento. Las modificaciones serÃ¡n publicadas en esta pÃ¡gina con la fecha de Ãºltima actualizaciÃ³n. El uso continuado del sitio web despuÃ©s de la publicaciÃ³n de modificaciones constituye aceptaciÃ³n de dichos cambios.",
      },
      {
        id: "disponibilidad",
        title: "8. Disponibilidad del Sitio",
        content:
          "DOOQ no garantiza que el sitio web estÃ© disponible en todo momento. Podemos suspender, interrumpir o restringir el acceso al sitio web total o parcialmente, por razones de mantenimiento, actualizaciÃ³n, mejora o cualquier otra causa justificada, sin previo aviso y sin que ello genere derecho a compensaciÃ³n alguna.",
      },
      {
        id: "legislacion",
        title: "9. LegislaciÃ³n Aplicable",
        content:
          "Los presentes tÃ©rminos se rigen por las leyes de la RepÃºblica de Colombia. Cualquier controversia derivada de la interpretaciÃ³n, cumplimiento o validez de los presentes tÃ©rminos serÃ¡ sometida a la jurisdicciÃ³n ordinaria de los jueces y tribunales de la ciudad de BogotÃ¡ D.C., con renuncia expresa a cualquier otro fuero o jurisdicciÃ³n.",
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
          "La informaciÃ³n contenida en este sitio web se proporciona 'tal cual' y sin garantÃ­as de ningÃºn tipo, ya sean expresas o implÃ­citas. DOOQ no garantiza que el sitio web estÃ© libre de errores, virus o componentes daÃ±inos, ni que el acceso sea continuo e ininterrumpido. El uso del sitio web y la contrataciÃ³n de servicios se realiza bajo el propio riesgo del usuario.",
      },
      {
        id: "no-responsabilidad-contenido",
        title: "2. No Responsabilidad por Contenido de Terceros",
        content:
          "DOOQ no es responsable del contenido, exactitud, legalidad o idoneidad de informaciÃ³n, productos o servicios de terceros a los que se acceda mediante enlaces desde este sitio web. La inclusiÃ³n de enlaces no implica aprobaciÃ³n ni respaldo por parte de DOOQ.",
      },
      {
        id: "limitacion-danos",
        title: "3. LimitaciÃ³n de DaÃ±os",
        content:
          "En ningÃºn caso DOOQ Technology Holding, sus directores, empleados, socios o afiliados serÃ¡n responsables por daÃ±os directos, indirectos, incidentales, especiales, ejemplares o consecuenciales derivados de: (a) el uso o la imposibilidad de uso del sitio web; (b) el acceso no autorizado o la alteraciÃ³n de sus transmisiones o datos; (c) declaraciones o conducta de terceros en el sitio web; (d) cualquier otro asunto relacionado con el sitio web.",
      },
      {
        id: "servicios-profesionales",
        title: "4. Servicios Profesionales",
        content:
          "Los servicios de consultorÃ­a, desarrollo de software y servicios tecnolÃ³gicos se proporcionan con el estÃ¡ndar de cuidado y habilidades profesionalmente aceptado en la industria. Sin embargo, DOOQ no garantiza resultados especÃ­ficos o la adecuaciÃ³n de los servicios para un propÃ³sito particular, salvo que dicha garantÃ­a se establezca expresamente por escrito en el contrato de servicios correspondiente.",
      },
    ],
  },
];

