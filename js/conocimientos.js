const despliegueTarjeta = () =>{
    const combo = document.getElementById("combo");
    const seleccion = combo.options[combo.selectedIndex].value;
    const tarjetaDescripcion = document.getElementById("tarjetaDescripcion");

    if (seleccion === "opcion1") {
        // Contenido de la tarjeta
        const contenidoTarjeta = `
            <div class="tarjeta">
                <img src="../assets/imgs/python_logo.png" alt="PythonLogo">
                <h2>Python</h2>
                <p>Python es un lenguaje de programación de alto nivel, interpretado, de propósito general y fácil de aprender. Es conocido por su sintaxis clara y legible, lo que lo hace ideal tanto para principiantes como para desarrolladores experimentados. Python es ampliamente utilizado en una variedad de campos, incluyendo desarrollo web, análisis de datos, inteligencia artificial, aprendizaje automático, scripting y más. Su amplia biblioteca estándar y su comunidad activa hacen que sea fácil encontrar herramientas y recursos para casi cualquier tarea de programación que se pueda imaginar.</p>
            </div>
        `;
        // Insertar el contenido en la tarjeta
        tarjetaDescripcion.innerHTML = contenidoTarjeta;
    }
    else if (seleccion == "opcion2"){
         // Contenido de la tarjeta
         const contenidoTarjeta = `
         <div class="tarjeta">
            <img src="../assets/imgs/javascript_logo.png" alt="JavascriptLogo">
            <h2>Javascript</h2>
            <p>
            JavaScript es un lenguaje de programación de alto nivel, interpretado y orientado a objetos. Es ampliamente utilizado en el desarrollo web para crear interactividad en páginas y aplicaciones web. JavaScript se ejecuta en el lado del cliente, lo que significa que es procesado por el navegador web del usuario.</p>
         </div>
     `;
     // Insertar el contenido en la tarjeta
     tarjetaDescripcion.innerHTML = contenidoTarjeta;
    }
    else if (seleccion == "opcion3"){
        // Contenido de la tarjeta
        const contenidoTarjeta = `
        <div class="tarjeta">
        <img src="../assets/imgs/java_logo.png" alt="JavaLogo">
            <h2>Java</h2>
            <p>
            Java es un lenguaje de programación de propósito general, orientado a objetos, que se caracteriza por ser portable, robusto y seguro. Desarrollado por Sun Microsystems (ahora propiedad de Oracle), Java se diseñó con el objetivo de ser independiente de la plataforma, lo que significa que el mismo código puede ejecutarse en diferentes sistemas operativos sin necesidad de modificaciones. Además, Java utiliza un enfoque de programación orientada a objetos, lo que facilita la reutilización de código y el mantenimiento del software. Java es ampliamente utilizado en el desarrollo de aplicaciones empresariales, aplicaciones móviles (Android), servicios web, sistemas embebidos y más.</p>
        </div>
    `;
    // Insertar el contenido en la tarjeta
    tarjetaDescripcion.innerHTML = contenidoTarjeta;
   }
   else if (seleccion == "opcion4"){
    // Contenido de la tarjeta
    const contenidoTarjeta = `
    <div class="tarjeta">
    <img src="../assets/imgs/sql_logo.png" alt="sqlLogo">
        <h2>Bases de datos relacionales</h2>
        <p>
        Las bases de datos relacionales como SQL Server, MySQL y PostgreSQL son sistemas de gestión de bases de datos que se utilizan para almacenar y administrar datos estructurados de manera eficiente.
        </p>
    </div>
`;
    // Insertar el contenido en la tarjeta
    tarjetaDescripcion.innerHTML = contenidoTarjeta;
    }
    else if (seleccion == "opcion5"){
        // Contenido de la tarjeta
        const contenidoTarjeta = `
        <div class="tarjeta">
        <img src="../assets/imgs/node_logo.png" alt="NodeLogo">
            <h2>NodeJS</h2>
            <p>
            Node.js es un entorno de ejecución de JavaScript basado en el motor V8 de Google Chrome. Permite a los desarrolladores ejecutar código JavaScript tanto en el lado del servidor como en el cliente, lo que lo hace especialmente útil para construir aplicaciones web escalables y de alto rendimiento. Node.js utiliza un modelo de E/S sin bloqueo y orientado a eventos, lo que lo hace ideal para aplicaciones en tiempo real y que manejan muchas conexiones simultáneas. Además, cuenta con un amplio ecosistema de módulos y bibliotecas de código abierto que facilitan el desarrollo de aplicaciones rápidas y eficientes.</p>
        </div>
    `;
    // Insertar el contenido en la tarjeta
    tarjetaDescripcion.innerHTML = contenidoTarjeta;
    }
    else if (seleccion == "opcion6"){
        // Contenido de la tarjeta
        const contenidoTarjeta = `
        <div class="tarjeta">
        <img src="../assets/imgs/react_logo.png" alt="ReactLogo">
            <h2>React</h2>
            <p>
            React es una biblioteca de JavaScript de código abierto diseñada para construir interfaces de usuario (UI) interactivas y reactivas. Desarrollada por Facebook, React se centra en la creación de componentes reutilizables que representan diferentes partes de una interfaz de usuario. Utiliza un paradigma de programación declarativa, lo que significa que los desarrolladores describen cómo debería ser la interfaz de usuario en diferentes estados y React se encarga de actualizar automáticamente la interfaz cuando cambian los datos.

            Las principales características de React incluyen su eficiencia y rendimiento, gracias a su algoritmo de reconciliación virtual (Virtual DOM), que minimiza las actualizaciones de la interfaz de usuario. También ofrece una sólida arquitectura de componentes que facilita la modularidad, el mantenimiento y la reutilización del código. React se utiliza comúnmente en la construcción de aplicaciones web de una sola página (Single Page Applications), aplicaciones móviles con React Native, y es compatible con una amplia variedad de herramientas y bibliotecas complementarias, lo que lo convierte en una opción popular para el desarrollo moderno de aplicaciones.</p>
        </div>
    `;
    // Insertar el contenido en la tarjeta
    tarjetaDescripcion.innerHTML = contenidoTarjeta;
    }
    else if (seleccion == "opcion7"){
        // Contenido de la tarjeta
        const contenidoTarjeta = `
        <div class="tarjeta">
        <img src="../assets/imgs/git_logo.png" alt="GithubLogo">
            <h2>Github y gitlab</h2>
            <p>
            Git es un sistema de control de versiones distribuido de código abierto diseñado para rastrear cambios en archivos de código fuente durante el desarrollo de software.
            GitHub y GitLab son plataformas en línea que ofrecen servicios de alojamiento para repositorios Git, así como herramientas adicionales para el desarrollo de software colaborativo
            </p>
        </div>
    `;
    // Insertar el contenido en la tarjeta
    tarjetaDescripcion.innerHTML = contenidoTarjeta;
    }
    else if (seleccion == "opcion8"){
        // Contenido de la tarjeta
        const contenidoTarjeta = `
        <div class="tarjeta">
        <img src="../assets/imgs/api_logo.png" alt="APILogo">
            <h2>Uso de APIs Restfuk</h2>
            <p>
            Una API, o Interfaz de Programación de Aplicaciones, es un conjunto de reglas y herramientas que permite a diferentes programas y aplicaciones comunicarse entre sí. Funciona como un intermediario que permite que una aplicación acceda a ciertas características o datos de otra aplicación, servicio o sistema operativo de manera controlada y segura. Las API especifican cómo los componentes de software deben interactuar, qué datos están disponibles y cómo acceder a ellos. En esencia, las API proporcionan una forma estandarizada y estructurada para que diferentes programas se comuniquen y cooperen, lo que facilita la integración de sistemas, el intercambio de datos y la construcción de aplicaciones complejas.</p>
        </div>
    `;
    // Insertar el contenido en la tarjeta
    tarjetaDescripcion.innerHTML = contenidoTarjeta;
    }
    else if (seleccion == "opcion9"){
        // Contenido de la tarjeta
        const contenidoTarjeta = `
        <div class="tarjeta">
        <img src="../assets/imgs/poo_logo.jpg" alt="PooLogo">
            <h2>Programación orientada a objetos</h2>
            <p>
            La programación orientada a objetos (POO) es un paradigma de programación basado en el concepto de "objetos", que representan entidades del mundo real y tienen atributos y comportamientos asociados. La POO se estructura en torno a clases (plantillas) y objetos (instancias de esas clases), y se basa en los principios de abstracción, encapsulamiento, herencia y polimorfismo. Este enfoque promueve la reutilización de código, facilita la organización del software y permite modelar problemas complejos de manera más natural.</p>
        </div>
    `;
    // Insertar el contenido en la tarjeta
    tarjetaDescripcion.innerHTML = contenidoTarjeta;
    }
    else if (seleccion == "opcion10"){
        // Contenido de la tarjeta
        const contenidoTarjeta = `
        <div class="tarjeta">
        <img src="../assets/imgs/dsi_logo.png" alt="DSILogo">
            <h2>Diseño y análisis de sistemas</h2>
            <p>
            El diseño y análisis de sistemas es el proceso de planificar y estructurar sistemas informáticos y de información para cumplir con requisitos específicos y resolver problemas empresariales o técnicos. Implica identificar las necesidades del usuario, definir los objetivos del sistema, analizar los requisitos, diseñar soluciones efectivas y evaluar la viabilidad y eficacia del sistema propuesto.

El diseño de sistemas implica la creación de modelos y especificaciones detalladas que describen la arquitectura, la funcionalidad y el comportamiento del sistema. Esto puede incluir el diseño de la base de datos, la interfaz de usuario, los componentes del software y la lógica empresarial.

El análisis de sistemas implica comprender y documentar los requisitos del usuario, identificar problemas y oportunidades, y proponer soluciones que satisfagan las necesidades del negocio y los usuarios. Esto implica recopilar datos, realizar entrevistas con los interesados, analizar procesos comerciales y evaluar la viabilidad técnica y económica de diferentes soluciones.</p>
        </div>
    `;
    // Insertar el contenido en la tarjeta
    tarjetaDescripcion.innerHTML = contenidoTarjeta;
    }
    else if (seleccion == "opcion11"){
        // Contenido de la tarjeta
        const contenidoTarjeta = `
        <div class="tarjeta">
        <img src="../assets/imgs/uml_logo.png" alt="umlLogo">
            <h2>Lenguaje Unificado de Modelado</h2>
            <p>
            UML, el Lenguaje de Modelado Unificado, es un estándar para representar visualmente modelos de sistemas de software. Proporciona una variedad de diagramas gráficos, como diagramas de clases, casos de uso y secuencia, que ayudan a los desarrolladores a comprender, diseñar y comunicar la estructura y el comportamiento de un sistema de software de manera clara y concisa. </p>
        </div>
    `;
    // Insertar el contenido en la tarjeta
    tarjetaDescripcion.innerHTML = contenidoTarjeta;
    }
    else if (seleccion == "opcion12"){
        // Contenido de la tarjeta
        const contenidoTarjeta = `
        <div class="tarjeta">
        <img src="../assets/imgs/jira_logo.png" alt="JiraLogo">
            <h2>Uso de JIRA</h2>
            <p>
            JIRA es una plataforma de gestión de proyectos y seguimiento de problemas desarrollada por Atlassian. Es ampliamente utilizada por equipos de desarrollo de software para planificar, seguir y administrar el progreso de proyectos de desarrollo de software. JIRA permite a los equipos crear y organizar tareas, asignarlas a miembros del equipo, establecer fechas límite, y realizar un seguimiento del progreso a través de tableros de tareas visuales y otros informes. También incluye características para la gestión ágil de proyectos, como tableros Kanban y Scrum, así como integraciones con otras herramientas de desarrollo como Bitbucket y Confluence. JIRA es altamente configurable y escalable, lo que lo hace adecuado para equipos de todos los tamaños y tipos de proyectos.</p>
        </div>
    `;
    // Insertar el contenido en la tarjeta
    tarjetaDescripcion.innerHTML = contenidoTarjeta;
    }
    else if (seleccion == "opcion13"){
        // Contenido de la tarjeta
        const contenidoTarjeta = `
        <div class="tarjeta">
        <img src="../assets/imgs/postman_logo.png" alt="PostmanLogo">
            <h2>Herramientas de prueba de solicitudes web</h2>
            <p>
            Postman es una plataforma de colaboración para el desarrollo de APIs que permite a los desarrolladores diseñar, probar y depurar APIs de una manera sencilla y eficiente. Con Postman, los usuarios pueden crear solicitudes HTTP y enviarlas a servidores para probar la funcionalidad de las APIs, así como automatizar pruebas y documentar APIs. Postman ofrece una interfaz intuitiva y rica en características que facilita el trabajo con APIs y la colaboración entre equipos de desarrollo.

            ThunderClient es una extensión de Visual Studio Code (VS Code) que proporciona funcionalidades similares a las de Postman directamente dentro del entorno de desarrollo. Permite a los desarrolladores enviar solicitudes HTTP, probar y depurar APIs, así como guardar y organizar colecciones de solicitudes. ThunderClient está diseñado para integrarse de manera transparente con el flujo de trabajo de desarrollo en VS Code, lo que lo convierte en una opción conveniente para los desarrolladores que prefieren trabajar dentro de su entorno de desarrollo integrado (IDE).</p>
        </div>
    `;
    // Insertar el contenido en la tarjeta
    tarjetaDescripcion.innerHTML = contenidoTarjeta;
    }
    else if (seleccion == "opcion14"){
        // Contenido de la tarjeta
        const contenidoTarjeta = `
        <div class="tarjeta">
        <img src="../assets/imgs/ingles_logo.jpg" alt="Inglés">
            <h2>Inglés conversacional</h2>
            <p>
            El dominio de un nivel de inglés conversacional en habilidades orales y un nivel intermedio en habilidades escritas, junto con la capacidad de comprender todo lo que leo, constituye una cualidad que considero esencial y altamente aplicable en un entorno de trabajo en tecnologías de la información (TI). En un campo tan globalizado como el de TI, donde la comunicación y la colaboración con equipos internacionales son comunes, el dominio del inglés facilita la interacción efectiva con colegas, clientes y socios de todo el mundo. Además, la capacidad de comprender documentación técnica y recursos en inglés amplía el acceso a información y recursos clave, lo que permite mantenerse actualizado sobre las últimas tendencias, tecnologías y mejores prácticas en el sector. Esta competencia lingüística mejora la eficacia en la comunicación, promueve una colaboración más fluida en equipos multidisciplinarios y amplía las oportunidades profesionales en un mercado laboral cada vez más globalizado.</p>
        </div>
    `;
    // Insertar el contenido en la tarjeta
    tarjetaDescripcion.innerHTML = contenidoTarjeta;
    }
    
}


const despliegueAptitudes = () => {
    const combo2 = document.getElementById("combo2");
    const seleccion = combo2.options[combo2.selectedIndex].value;  
    const tarjetaAptitudes = document.getElementById("tarjetaAptitudes");

    if (seleccion === "aptitud1") {
        // Contenido de la tarjeta
        const contenidoTarjeta = `
            <div class="tarjeta2">
                <h2>Análisis de datos</h2>
                <p>
                El análisis de datos es una cualidad que poseo y que encuentro altamente aplicable en un entorno de trabajo en tecnologías de la información (TI). Mi habilidad radica en la capacidad de interpretar grandes volúmenes de información de manera eficiente y efectiva, identificando patrones, tendencias y oportunidades que pueden impulsar la toma de decisiones informadas y mejorar la eficiencia operativa. En un entorno de TI, esta habilidad es invaluable, ya que permite optimizar procesos, detectar anomalías en sistemas, mejorar la seguridad de la red y proporcionar información clave para el desarrollo de productos y servicios tecnológicos más innovadores y centrados en las necesidades del usuario. Mi enfoque meticuloso y orientado a resultados se complementa con una sólida comprensión de las herramientas y técnicas de análisis de datos más avanzadas, lo que me permite adaptarme rápidamente a las demandas y desafíos cambiantes del mundo digital.</p>
            </div>
        `;
        // Insertar el contenido en la tarjeta
        tarjetaAptitudes.innerHTML = contenidoTarjeta;
    }
    else if (seleccion === "aptitud2") {
        // Contenido de la tarjeta
        const contenidoTarjeta = `
            <div class="tarjeta2">
                <h2>Diseño de sistemas</h2>
                <p>
                El diseño de sistemas es una cualidad que poseo y que considero altamente relevante en un entorno de trabajo en tecnologías de la información (TI). Esta habilidad la adquirí durante mi formación en la Universidad Tecnológica Nacional - Facultad Regional Córdoba, donde aprendí a conceptualizar, planificar y desarrollar sistemas informáticos eficientes y robustos. Mi capacidad para analizar requisitos, diseñar arquitecturas escalables y aplicar metodologías de desarrollo ágiles me permite contribuir de manera significativa en proyectos de TI. En un entorno laboral, aplicaría esta habilidad para crear soluciones tecnológicas innovadoras que satisfagan las necesidades del negocio y los usuarios finales, optimizando procesos y mejorando la experiencia del cliente.</p>
            </div>
        `;
        // Insertar el contenido en la tarjeta
        tarjetaAptitudes.innerHTML = contenidoTarjeta;
    }
    else if (seleccion === "aptitud3") {
        // Contenido de la tarjeta
        const contenidoTarjeta = `
            <div class="tarjeta2">
                <h2>Comunicación</h2>
                <p>
                La comunicación efectiva con mis pares y superiores es una cualidad que considero fundamental en un entorno de trabajo en tecnologías de la información (TI). Mi capacidad para transmitir ideas de manera clara y concisa, así como para escuchar activamente las opiniones y necesidades de los demás, facilita la colaboración y el trabajo en equipo. En un entorno IT, esta habilidad me permitiría comunicar de manera efectiva los progresos, desafíos y soluciones relacionados con los proyectos tecnológicos, asegurando una alineación adecuada entre los diferentes equipos y departamentos. Además, mi habilidad para adaptar mi estilo de comunicación según las necesidades del público me permite establecer relaciones sólidas y construir un ambiente de trabajo colaborativo y productivo.</p>
            </div>
        `;
        // Insertar el contenido en la tarjeta
        tarjetaAptitudes.innerHTML = contenidoTarjeta;
    }
    else if (seleccion === "aptitud4") {
        // Contenido de la tarjeta
        const contenidoTarjeta = `
            <div class="tarjeta2">
                <h2>Resolución de problemas</h2>
                <p>
                La capacidad de resolver problemas y mantener la eficacia bajo presión es una cualidad que considero esencial en un entorno de trabajo en tecnologías de la información (TI). Mi experiencia y habilidad para identificar rápidamente los problemas, analizar las causas subyacentes y desarrollar soluciones efectivas me permiten mantener la calma y tomar decisiones informadas incluso en situaciones de alta presión. En el ámbito de TI, donde los plazos son ajustados y los problemas pueden surgir inesperadamente, esta capacidad me permite mantener la estabilidad operativa y minimizar el impacto de cualquier contratiempo en los proyectos. Mi enfoque pragmático y mi habilidad para trabajar de manera eficiente en situaciones de estrés me convierten en un recurso valioso para resolver desafíos tecnológicos de manera oportuna y efectiva, garantizando la continuidad del negocio y la satisfacción del cliente.</p>
            </div>
        `;
        // Insertar el contenido en la tarjeta
        tarjetaAptitudes.innerHTML = contenidoTarjeta;
    }
    else if (seleccion === "aptitud5") {
        // Contenido de la tarjeta
        const contenidoTarjeta = `
            <div class="tarjeta2">
                <h2>Manejo de situaciones complejas</h2>
                <p>
                El manejo de situaciones complejas es una cualidad que he cultivado y que considero especialmente relevante en un entorno de trabajo en tecnologías de la información (TI). Mi capacidad para descomponer problemas complejos en componentes más manejables, así como para identificar y priorizar las acciones necesarias para resolverlos, me permite enfrentar desafíos tecnológicos con confianza y eficacia. En el campo de TI, donde la complejidad de los sistemas y las interdependencias entre ellos pueden generar escenarios difíciles de gestionar, esta habilidad me permite mantener la claridad mental y tomar decisiones fundamentadas, incluso en situaciones de incertidumbre. Mi enfoque metódico y mi habilidad para trabajar en colaboración con equipos multidisciplinarios me convierten en un recurso valioso para abordar y superar con éxito los desafíos más exigentes en el ámbito tecnológico.</p>
            </div>
        `;
        // Insertar el contenido en la tarjeta
        tarjetaAptitudes.innerHTML = contenidoTarjeta;
    }
    else if (seleccion === "aptitud6") {
        // Contenido de la tarjeta
        const contenidoTarjeta = `
            <div class="tarjeta2">
                <h2>Dedicación</h2>
                <p>
                La dedicación es una cualidad arraigada en mi ética laboral y la considero esencial en cualquier entorno de trabajo, incluido el de tecnologías de la información (TI). Mi compromiso con la excelencia y la búsqueda constante de soluciones óptimas me impulsa a dedicar tiempo y esfuerzo a cada tarea que emprendo en el campo de la tecnología. Esta dedicación se traduce en un enfoque persistente para alcanzar los objetivos establecidos, así como en la disposición para aprender y adaptarme a las nuevas tecnologías y metodologías. En un entorno de TI, donde la innovación y la evolución son constantes, mi dedicación garantiza que pueda mantenerme actualizado y ofrecer resultados consistentes y de alta calidad en cada proyecto en el que participe.</p>
            </div>
        `;
        // Insertar el contenido en la tarjeta
        tarjetaAptitudes.innerHTML = contenidoTarjeta;
    }
    else if (seleccion === "aptitud7") {
        // Contenido de la tarjeta
        const contenidoTarjeta = `
            <div class="tarjeta2">
                <h2>Persistencia</h2>
                <p>
                La persistencia es una cualidad fundamental que he cultivado a lo largo de mi trayectoria y que considero esencial en un entorno de trabajo en tecnologías de la información (TI). Mi capacidad para mantenerme firme frente a los desafíos y obstáculos, combinada con una actitud proactiva y resiliente, me permite enfrentar problemas complejos en el ámbito tecnológico con determinación y perseverancia. En el campo de TI, donde los proyectos pueden encontrarse con contratiempos y dificultades inesperadas, mi persistencia me impulsa a seguir adelante, buscar soluciones alternativas y aprender de cada experiencia para alcanzar los objetivos establecidos. Esta cualidad no solo me permite superar los desafíos técnicos, sino que también contribuye a fomentar un ambiente de trabajo colaborativo y enfocado en encontrar soluciones efectivas y duraderas.</p>
            </div>
        `;
        // Insertar el contenido en la tarjeta
        tarjetaAptitudes.innerHTML = contenidoTarjeta;
    }
    else if (seleccion === "aptitud8") {
        // Contenido de la tarjeta
        const contenidoTarjeta = `
            <div class="tarjeta2">
                <h2>Proactividad</h2>
                <p>
                La proactividad es una cualidad que define mi enfoque hacia el trabajo, y la considero esencial en un entorno de tecnologías de la información (TI). Mi capacidad para anticipar problemas, identificar oportunidades de mejora y tomar la iniciativa para abordarlas me permite ser un activo valioso en equipos de TI. En este campo, donde la innovación y la adaptación rápida son cruciales, mi proactividad se traduce en la capacidad de proponer soluciones creativas, implementar mejoras en los procesos y estar al tanto de las últimas tendencias tecnológicas. Esta actitud orientada a la acción no solo impulsa la eficiencia y la efectividad en el trabajo, sino que también contribuye a mantener un ambiente de equipo dinámico y enfocado en el logro de resultados sobresalientes.</p>
            </div>
        `;
        // Insertar el contenido en la tarjeta
        tarjetaAptitudes.innerHTML = contenidoTarjeta;
    }
    else if (seleccion === "aptitud9") {
        // Contenido de la tarjeta
        const contenidoTarjeta = `
            <div class="tarjeta2">
                <h2>SCRUM</h2>
                <p>
                El conocimiento de SCRUM como metodología ágil es una habilidad clave que poseo y que considero fundamental para aplicar en un entorno de trabajo en tecnologías de la información (TI). Mi comprensión profunda de SCRUM me permite liderar y participar de manera efectiva en equipos ágiles, facilitando la entrega iterativa y continua de productos de alta calidad. En el campo de TI, donde la rapidez, la flexibilidad y la colaboración son esenciales, el dominio de SCRUM me capacita para gestionar eficientemente proyectos complejos, adaptarme a cambios en los requisitos del cliente y mantener una comunicación fluida y transparente entre todos los miembros del equipo. Esta metodología fomenta la entrega de valor de manera incremental, lo que se traduce en una mayor satisfacción del cliente y en la capacidad de responder de manera ágil a las demandas del mercado en constante evolución.</p>
            </div>
        `;
        // Insertar el contenido en la tarjeta
        tarjetaAptitudes.innerHTML = contenidoTarjeta;
    }
}
