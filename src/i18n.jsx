import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLanguage = localStorage.getItem('language') || 'en';


i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    welcome: "Welcome",
                    greeting: "Hello",
                    gallery: "PROJECT GALLERY",
                    menu: {
                        cuenca: "Cuenca",
                        projects: "Projects",
                        youths: "Youths",
                        team: "Team",
                        contact: "Contact",
                    },
                    vision: {
                        description: "S²Cities Cuenca empowers young people to design solutions that help <span class='highlight'>build healthier, safer, and more inclusive cities</span>, promoting community participation and youth leadership."
                    },
                    cuenca: {
                        title: "DISCOVER CUENCA",
                        description: "Cuenca, Ecuador, is known for its historical and cultural richness, having been declared a UNESCO World Heritage Site in 1999. This city combines well-preserved colonial architecture with a valuable artistic and cultural scene, making it a landmark for urban life. However, Cuenca faces the challenges of a modern city, from urban expansion to the need for safer and more inclusive spaces for its youth. At Safe and Sound Ecuador, we work to ensure that Cuenca is not only a place of beauty but also an example of safety, sustainability, and community participation."                    },
                    testimonies: {
                        hook: "THE CITY YOU DREAM OF IS ALREADY BEING IMAGINED",
                        title: "HOW DO YOUNG PEOPLE SEE IT?",
                        yearsold: "y/o"
                    },
                    projects: {
                        title: "PROJECTS",
                        bibliorioDescription: "Bibliorío is a project aimed at establishing a secure outdoor space where young individuals can engage in literature-related activities, promoting reading, and fostering connections with both the environment and fellow individuals.",
                        arteriaDescription: "Arteria aims to revitalize green spaces in urban areas through the deployment of sustainable furniture, connecting local businesses and culture. Our goal is to create inviting spaces for safe, waiting, and socializing.",
                        urbanoDescription: "The 2024 Urban Program was Cuenca's first placemaking school for youth, blending theory and practice. It featured public space interventions, urban trekking, and a camp, promoting safety and inclusion in the city.",
                        readMore: "Read more"
                    },
                    impact: {
                        title: "WHAT DID YOUNG PEOPLE THINK BEFORE THE INTERVENTIONS?",
                        insecurity: "have been exposed to insecurity",
                        transportation: "have been victims of robbery or theft on public transportation.",
                        strangers: "do not trust strangers in the street at all.",
                        unsafe: "feel unsafe walking in the city.",
                        anxiety: "suffer from anxiety, stress, or depression."
                    },



                    team: {
                        title: "Our Team",
                        amelia: {
                            name: "Amelia Tapia",
                            age: "32 years old",
                            role: "Project Coordinator",
                            description: "Architect from Quito, she studied Construction Technology at TUDelft, Netherlands. She has been the national project coordinator at Huasipichanga since 2022. Amelia has worked on urban and architectural projects focused on inclusive city-building and sustainability."
                        },
                        viviana: {
                            name: "Viviana Cordero",
                            age: "34 years old",
                            role: "Project Director Safe and Sound Cities Ecuador",
                            description: "Viviana Cordero is the co-founder of Huasipichanga. Her work focuses on city planning with children. She is a lawyer and urban planner, driven by the idea of achieving intergenerational justice. She has presented her work at global conferences, including TEDx. Currently, she serves as Director of Safe and Sound Cities projects that Huasipichanga leads in Ecuador."
                        },
                        cristina: {
                            name: "Cristina Durán",
                            age: "35 years old",
                            role: "Project Manager Arteria",
                            description: "Architect from Cuenca, holds a Master's in Architecture and Sustainable Habitat. Her focus is on rehabilitating public spaces to improve quality of life through urban interventions promoting social interaction, sustainability, and community well-being."
                        },
                        maria: {
                            name: "María Piedad Escandón",
                            age: "26 years old",
                            role: "Director of Communications",
                            description: "Environmental engineer focused on creating healthy and safe spaces for the community with a strong connection to nature. Her approach combines sustainability and social justice to achieve a more equitable and healthier environment for all."
                        },
                        martin: {
                            name: "Juan Martín Pesántez",
                            age: "32 years old",
                            role: "Architect",
                            description: "Architect from Cuenca, dedicated to urban design and public space analysis in intermediate cities. He has worked on projects in landscape and historical contexts, participatory workshops, and placemaking projects at the urban level."
                        },
                        pedro: {
                            name: "Pedro Coello",
                            age: "23 years old",
                            role: "Director of Youth Development",
                            description: "Sociologist, focused on integrating youth into political, social, and economic settings. Since April 2023, he has been the Director of Youth Development at Huasipichanga, focusing on creating sustainable and participatory cities through co-creation methodologies."
                        },
                        fabian: {
                            name: "Fabián Bermeo",
                            age: "Age not available",
                            role: "Innovation Director",
                            description: "Information not available."
                        }
                    },

                    bibliorio: {
                        description: "Navegando Historias is a project aimed at establishing a <span class='highlight'>secure outdoor space</span> where young individuals can engage in literature-related activities, promoting reading, and fostering connections with both the environment and fellow individuals.",
                        results: "RESULTS",
                        impactWorkshops: "WORKSHOPS",
                        volunteers: "VOLUNTEERS",
                        books: "BOOKS",
                        people: "PEOPLE IN SPACE",
                        readingTime: "MINUTES AS AVERAGE READING TIME",
                        feelSafe: "FEEL SAFE IN THE INTERVENED PUBLIC SPACE",
                        walking: "ARRIVE BY WALKING OR PUBLIC TRANSPORTATION",
                        nicoTestimonie: "For me, Bibliorío was an incredibly rewarding experience. It allowed me to look beyond my own challenges and focus on finding solutions to issues affecting young people. Through this, I was able to help create a safe space with green areas that is perfect for reading and enjoying in my city.",
                        daniTestimonie: "Bibliorío is also one of the ways I can contribute to creating positive change in our city, making it a more pleasant and welcoming place for everyone.",
                        ariTestimonie: "Bibliorío has helped me in various aspects, such as acquiring knowledge about placemaking, planning and executing a project, and gaining experience in presenting to a specific audience.",
                        titleAF: "Before & After",
                        TAfter: "After",
                        TBefore: "Before",
                        before: {
                            description: "Before the implementation, the linear park along the Yanuncay River, where Bibliorío is now located, was abandoned and perceived as an unsafe space. There was no clear use or adequate infrastructure for social or recreational activities, causing both young people and the general community to avoid the area. The lack of youth activities and the feeling of insecurity, especially at night, kept the park underutilized.",
                           },
                        after: {
                            description: "After the implementation of Bibliorío, the park has been transformed into an outdoor public library, featuring book modules and rest areas. Thanks to community participation, young volunteers organize cultural workshops every two weeks and promote reading, attracting more people to enjoy the space. With over 600 books available, Bibliorío has turned the linear park along the Yanuncay River into a safe and welcoming place, fostering social interaction and learning in a revitalized and accessible environment.",
                            }
                    },
                    arteria: {
                        description: "Arteria is an urban intervention that has created a key corridor in the city of Cuenca, <span class='highlight'>improving road safety and reclaiming green spaces.</span> The project connects the Salesian Polytechnic University through Elia Liut Avenue with the tram station, creating an inclusive, safe, and accessible environment, driven by the active participation of youth and the community.",
                        results: "RESULTS",
                        pedestrians: "PEDESTRIANS USE THE SPACE DAILY AFTER THE INTERVENTION",
                        greenAreas: "NATIVE SPECIES PLANTED",
                        safety: "FEELS MORE SECURE",
                        mobility: "TRAVEL BY BICYCLE",
                        lightning: "NEW PEDESTRIAN LIGHTS",
                        T1: "Arteria has been a project to be proud of, as it has made a significant contribution to both the youth and the city by reclaiming an abandoned and neglected space into something that we can now enjoy in an amazing and pleasant way with friends. 👥",
                        T2: "The opportunity we had after winning the competition was truly amazing, and after all the planning and project management, we were able to create an extraordinary green and safe space for the city.",
                        T3: "With Arteria, I felt rediscovered in many social issues that I had only superficially known before. I really like the urban and architectural perspectives I have developed thanks to this project, as well as the support and guidance I received, and the fact that I met super cool people ✨",
                        T4: "Arteria has been a true learning experience in my life. This space allowed me to open my mind and rediscover my passion for architecture and urbanism. I am very grateful for the lessons and support I received, which have guided my path and led me to meet wonderful people. 🫶🏼",
                        titleAF: "Before & After",
                        TAfter: "After",
                        TBefore: "Before",
                        before: {
                            description: "Before the implementation, Elia Liut Avenue was an unsafe and abandoned place. Pedestrians felt vulnerable due to vehicular traffic that did not respect their space, and the damaged sidewalks made walking uncomfortable and unsafe. There were no places to rest or socialize, and the accumulation of trash contributed to the deterioration of the area. At night, the lack of lighting increased the sense of danger, forcing people to hurry through the area as quickly as possible.",
                            },
                        after: {
                            description: "After the implementation, the project transformed the avenue into a comfortable and safe space for everyone. Rest areas with ergonomic furniture were installed, colorful sidewalks with interactive games were added, and murals now enhance the surroundings. The lighting makes the area safer to walk through at night, and the addition of green spaces with native plants, along with designated trash collection points, has improved the cleanliness and overall appearance of the place. Now, the community can enjoy the space as a safe and welcoming boulevard.",
                            }
                    },
                    urbano: {
                        title: "URBANO",
                        description: "The Urban Placemaking School offered young people the opportunity to <span class='highlight'>learn and apply Placemaking principles</span> through theoretical and practical workshops and activities. During the program, public space interventions were carried out, fostering a sense of community and promoting the active use of urban environments.",
                        results: "RESULTS",
                        summary: "URBANO is an initiative that seeks to empower young people to transform their city. Through placemaking, an approach that allows them to <span class='highlight2'>creatively intervene in public spaces</span>, participants not only imagine but also build tangible improvements. In this first edition, they learned how to design and execute <span class='highlight2'>projects that impact their community</span>, working together to bring life to urban corners. The program included everything from design workshops to practical activities like creating small placemaking projects, and even an educational camp at the BioParque Amaru. All of this took place in an environment that inspired innovation, learning, and, above all, community building.",
                        participants: "PARTICIPANTS",
                        safeCity: "OUT OF 10 YOUNG PEOPLE CONSIDER CUENCA A HEALTHY AND SAFE CITY",
                        greenAreas: "OUT OF 10 YOUNG PEOPLE THINK MORE INTERVENTIONS IN GREEN AREAS ARE NEEDED",
                        feelSafe: "OUT OF 10 YOUNG PEOPLE FEEL SAFE IN THE CITY",
                        placemakingImplementations: "PLACEMAKING IMPLEMENTATIONS",

                        timeline: {
                            title: "Urban Activities 1st Edition",
                            activity1: {
                                title: "Placemaking Workshop",
                                description: "An introduction to placemaking concepts and fundamentals, with group dynamics and talks on urban interventions."
                            },
                            activity2: {
                                title: "Placemaking Afternoon at Arteria",
                                description: "A collaborative activity where young people painted murals and worked on revitalizing Arteria's public spaces."
                            },
                            activity3: {
                                title: "Urban Trekking",
                                description: "A tour around the city to evaluate public spaces and generate ideas for future interventions."
                            },
                            activity4: {
                                title: "Camp at Zoológico Amaru",
                                description: "A full day of activities focused on local wildlife conservation, including evening community events."
                            },
                            activity5: {
                                title: "Placemaking Interventions",
                                description: "Five urban interventions in different public spaces, designed and executed by the participants."
                            }
                        }
                    },
                    podcast: {
                        title: "Safe & Sound Cities",
                        description: "We invite you to listen to our podcast, where young people share their experiences and realities in the city of Cuenca. You'll gain insight into the day-to-day of the projects and their processes, as well as the institutions and partners that make Safe & Sound Cuenca possible.",
                        callToAction: "Listen to it here!"
                    },
                    wordcloud: {
                        title: "What do young people like about Cuenca?",
                        architecture: "Architecture",
                        rivers: "Rivers",
                        parks: "Parks",
                        clean: "Clean",
                        secure: "Secure",
                        greenSpaces: "Green Spaces",
                        culture: "Culture",
                        art: "Art",
                        neighborhoodCommunity: "Neighborhood Community",
                        petFriendly: "Pet Friendly",
                        gastronomy: "Gastronomy",
                        tram: "Tram",
                        friendly: "Friendly People",
                        nature: "Nature",
                        historic: "Historic city",
                        mountainRoute: "Mountain Route",
                        churches: "Churches",
                        colorful: "Colorful",
                        diverse: "Diverse",
                        caredFor: "Cared For",
                        murals: "Murals",
                        publicBenches: "Public Benches",
                        aesthetic: "Aesthetic",
                        peaceful: "Peaceful",
                        communityLife: "Community Life",
                        bikeRides: "Bike Rides",
                        culturalWealth: "Cultural Wealth",
                        green: "Green",
                        culturalProjects: "Cultural Projects",
                        beautifulViews: "Beautiful Views"
                    },
                    change: {
                        title: "Join the Change",
                        description: "At Safe and Sound Ecuador, we believe that every action matters. Whether you're supporting as a volunteer, mentoring young people, or contributing your ideas and time, together we can make our city a better place. Contribute to the projects, and let's make a difference!",
                        callToAction: "Write to us and be part of the change..."
                    },
                    footer: {
                        quickLinks: "Quick Links",
                        support: "Support",
                        projects: "Projects",
                        youths: "Youths",
                        contactUs: "Contact Us",
                        email: "Email",
                        phone: "Phone",
                        chatOnWhatsapp: "Chat on Instagram",
                        followUs: "Follow Us",
                        allRightsReserved: "All rights reserved."
                    }
                }
            },
            es: {
                translation: {
                    welcome: "Bienvenido",
                    greeting: "Hola",
                    gallery: "GALERÍA DEL PROYECTO",
                    menu: {
                        cuenca: "Cuenca",
                        projects: "Proyectos",
                        youths: "Jóvenes",
                        team: "Equipo",
                        contact: "Contacto",
                    },
                    vision: {
                        description: "S²Cities Cuenca empodera a jóvenes para diseñar soluciones que contribuyan a <span class='highlight'>construir ciudades más sanas, seguras e inclusivas</span>, promoviendo la participación comunitaria y el liderazgo juvenil."
                    },
                    cuenca: {
                        title: "DESCUBRE CUENCA",
                        description: "Cuenca, Ecuador, es conocida por su riqueza histórica y cultural, declarada Patrimonio de la Humanidad por la UNESCO en 1999. Esta ciudad combina una arquitectura colonial bien conservada con una valiosa escena artística y cultural, convirtiéndola en un punto de referencia para la vida urbana. Sin embargo, Cuenca enfrenta los desafíos de una ciudad moderna, desde la expansión urbana hasta la necesidad de espacios más seguros e inclusivos para sus jóvenes. En Safe and Sound Ecuador, trabajamos para que Cuenca no solo sea un lugar de belleza, sino también un ejemplo de seguridad, sostenibilidad y participación comunitaria."
                    },
                    testimonies: {
                        hook: "LA CIUDAD QUE SUEÑAS YA ESTÁ SIENDO IMAGINADA",
                        title: "¿CÓMO LA VEN LOS JÓVENES?",
                        yearsold: "años"
                    },
                    projects: {
                        title: "NUESTROS PROYECTOS",
                        bibliorioDescription: "Bibliorío es un proyecto que busca establecer un espacio seguro al aire libre donde los jóvenes puedan realizar actividades relacionadas con la literatura, promoviendo la lectura y fomentando la conexión con el medio ambiente y con otras personas.",
                        arteriaDescription: "Arteria busca revitalizar los espacios verdes en áreas urbanas mediante la implementación de mobiliario sostenible, conectando los negocios locales y la cultura. Nuestro objetivo es crear espacios acogedores para esperar, descansar y socializar de manera segura.",
                        urbanoDescription: "El Programa Urbano 2024 fue la primera escuela de placemaking para jóvenes en Cuenca, combinando teoría y práctica. Presentó intervenciones en el espacio público, trekking urbano y un campamento, promoviendo la seguridad y la inclusión en la ciudad.",
                        readMore: "Leer más"
                    },
                    impact: {
                        title: "¿QUÉ PENSABAN LOS JÓVENES ANTES DE LAS INTERVENCIONES?",
                        insecurity: "han sido expuestos a la inseguridad",
                        transportation: "han sido víctimas de robos o hurtos en el transporte público.",
                        strangers: "no confían en extraños en la calle.",
                        unsafe: "se sienten inseguros caminando por la ciudad.",
                        anxiety: "sufren de ansiedad, estrés o depresión."
                    },


                    team: {
                        title: "Nuestro Equipo",
                        amelia: {
                            name: "Amelia Tapia",
                            age: "32 años",
                            role: "Coordinadora de proyectos",
                            description: "Arquitecta, nacida en Quito, estudió Tecnología de la Construcción en TUDelft, Países Bajos. Es la coordinadora de proyectos a nivel nacional en Huasipichanga desde el 2022. Ha trabajado en proyectos urbanos y arquitectónicos con enfoque de creación de ciudad para todxs y sostenibilidad."
                        },
                        viviana: {
                            name: "Viviana Cordero",
                            age: "34 años",
                            role: "Directora de Proyectos Safe and Sound Cities Ecuador",
                            description: "Viviana Cordero es cofundadora de Huasipichanga. Su trabajo se centra en la planificación de ciudades de la mano de los niños y niñas. Es abogada y urbanista impulsada por la idea de lograr la justicia intergeneracional. Ha presentado su trabajo en conferencias mundiales, incluyendo TEDx. Actualmente es la Directora de los proyectos de Safe and Sound Cities que Huasipichanga lidera en Ecuador."
                        },
                        cristina: {
                            name: "Cristina Durán",
                            age: "35 años",
                            role: "Project Manager Arteria",
                            description: "Arquitecta cuencana, Master en Arquitectura y Hábitat Sostenible, especializada en la rehabilitación del espacio público. Su objetivo es mejorar la calidad de vida en las ciudades mediante intervenciones urbanas que promuevan la interacción social, sostenibilidad y bienestar comunitario."
                        },
                        maria: {
                            name: "María Piedad Escandón",
                            age: "26 años",
                            role: "Directora de Comunicación",
                            description: "Ingeniera ambiental, dedicada a crear espacios sanos y seguros para la comunidad, siempre conectada con la naturaleza. Combina sostenibilidad y justicia social, buscando un entorno más equitativo y saludable para todos."
                        },
                        martin: {
                            name: "Juan Martín Pesántez",
                            age: "32 años",
                            role: "Project Manager Bibliorío",
                            description: "Arquitecto cuencano dedicado al diseño urbano y análisis de espacios públicos en ciudades intermedias. Ha trabajado en proyectos de contextos paisajísticos e históricos, talleres de participación y proyectos de placemaking a nivel urbano."
                        },
                        pedro: {
                            name: "Pedro Coello",
                            age: "23 años",
                            role: "Director de Desarrollo Juvenil",
                            description: "Sociológico, se enfoca en la integración de los jóvenes en escenarios políticos, sociales y económicos. Desde abril de 2023, es Director de Desarrollo Juvenil en Huasipichanga, centrado en el desarrollo de ciudades sostenibles y participativas mediante metodologías de co-creación."
                        },
                        fabian: {
                            name: "Fabián Bermeo",
                            age: "47 años",
                            role: "Director de Innovación",
                            description: "Información no disponible."
                        }
                    },



                    bibliorio: {
                        description: "Navegando Historias es un proyecto que busca crear un <span class='highlight'>espacio seguro al aire libre</span> donde los jóvenes puedan realizar actividades relacionadas con la literatura, promoviendo la lectura y fomentando la conexión con el medio ambiente y con otras personas.",
                        results: "RESULTADOS",
                        impactWorkshops: "TALLERES",
                        volunteers: "VOLUNTARIOS",
                        books: "LIBROS",
                        people: "PERSONAS EN EL ESPACIO",
                        readingTime: "MINUTOS COMO TIEMPO PROMEDIO DE LECTURA",
                        feelSafe: "SE SIENTEN SEGUROS EN EL ESPACIO PÚBLICO INTERVENIDO",
                        walking: "LLEGAN CAMINANDO O EN TRANSPORTE PÚBLICO",
                        nicoTestimonie: "Para mí, Bibliorío fue una experiencia increíblemente gratificante. Me permitió mirar más allá de mis propios desafíos y centrarme en encontrar soluciones a los problemas que afectan a los jóvenes. A través de esto, pude ayudar a crear un espacio seguro con áreas verdes, perfecto para leer y disfrutar en mi ciudad.",
                        daniTestimonie: "Bibliorío es también una de las formas en que puedo contribuir a crear un cambio positivo en nuestra ciudad, haciéndola un lugar más agradable y acogedor para todos.",
                        ariTestimonie: "Bibliorío me ha ayudado en varios aspectos, como adquirir conocimientos sobre placemaking, planificar y ejecutar un proyecto, y ganar experiencia en presentar a un público específico.",
                        titleAF: "Antes & Después",
                        TAfter: "Después",
                        TBefore: "Antes",
                        before: {
                            description: "Antes de la implementación, el parque lineal del río Yanuncay, donde ahora se encuentra Bibliorío, estaba abandonado y era percibido como un espacio inseguro. No había un uso claro ni infraestructura adecuada para actividades sociales o recreativas, lo que provocaba que tanto los jóvenes como la comunidad en general evitaran el lugar. La falta de actividades juveniles y la sensación de inseguridad, especialmente durante la noche, mantenían el parque en desuso.",
                                                    },
                        after: {
                            description: "Después de la implementación de Bibliorío, el parque ha sido transformado en una biblioteca pública al aire libre, con módulos, libros y áreas de descanso. Gracias a la participación comunitaria, jóvenes voluntarios organizan talleres culturales quincenales y promueven la lectura, atrayendo a más personas a disfrutar del espacio. Con más de 600 libros disponibles, Bibliorío ha convertido el parque lineal del río Yanuncay en un lugar seguro y acogedor, fomentando la interacción social y el aprendizaje en un entorno accesible y revitalizado.",
                        }
                    },
                    arteria: {
                        description: "Arteria es una intervención urbana que ha generado un corredor clave en la ciudad de Cuenca, <span class='highlight'>mejorando la seguridad vial y recuperando espacios verdes.</span> El proyecto conecta a través de la Avenida Elia Liut, la Universidad Politécnica Salesiana con la estación del tranvía, creando un entorno inclusivo, seguro y accesible, impulsado por la participación activa de jóvenes y la comunidad.",
                        results: "RESULTADOS",
                        pedestrians: "PERSONAS TRANSITAN POR EL ESPACIO DIARIAMENTE DESPUÉS DE LA INTERVENCIÓN",
                        greenAreas: "ESPECIES NATIVAS PLANTADAS",
                        safety: "SE SIENTEN MÁS SEGUROS",
                        mobility: "SE DESPLAZAN EN BICICLETA",
                        lightning: "NUEVAS LUMINARIAS PARA PEATONES",
                        T1: "Arteria ha sido un proyecto para enorgullecerse, ya que ha hecho una contribución significativa tanto para los jóvenes como para la ciudad, recuperando un espacio abandonado y descuidado en algo que ahora podemos disfrutar de una manera increíble y agradable con amigos. 👥",
                        T2: "La oportunidad que tuvimos después de ganar el concurso fue realmente increíble, y después de toda la planificación y gestión del proyecto, pudimos crear un espacio verde y seguro extraordinario para la ciudad.",
                        T3: "Con Arteria, me sentí redescubierto en muchos temas sociales que antes solo conocía superficialmente. Me encantan las perspectivas urbanas y arquitectónicas que he desarrollado gracias a este proyecto, así como el apoyo y la orientación que recibí, y el hecho de haber conocido a personas súper geniales ✨",
                        T4: "Arteria ha sido una verdadera experiencia de aprendizaje en mi vida. Este espacio me permitió abrir mi mente y redescubrir mi pasión por la arquitectura y el urbanismo. Estoy muy agradecido por las lecciones y el apoyo que recibí, que han guiado mi camino y me han llevado a conocer personas maravillosas. 🫶🏼",
                        titleAF: "ANTES & DESPUÉS",
                        TAfter: "Después",
                        TBefore: "Antes",
                        before: {
                            description: "Antes de la implementación la avenida Elia Liut era un lugar inseguro y abandonado. Los peatones se sentían vulnerables debido al tráfico vehicular que no respetaba su espacio, y las aceras dañadas hacían incómoda e insegura la caminata. No había lugares para descansar ni socializar, y la acumulación de basura contribuía al deterioro del área. Durante la noche, la falta de iluminación aumentaba la sensación de peligro, obligando a las personas a apresurarse para salir de la zona lo más rápido posible.",
                                                    },
                        after: {
                            description: "Después de la implementación, el proyecto transformó la avenida en un espacio cómodo y seguro para todos/as. Se instalaron áreas de descanso con mobiliario ergonómico, veredas coloridas con juegos interactivos, y murales que embellecen el entorno. La iluminación hace que la zona sea más segura para transitar durante la noche, y la incorporación de áreas verdes con plantas nativas, junto a puntos de recolección de basura, ha mejorado la limpieza y el aspecto general del lugar. Ahora, la comunidad puede disfrutar del lugar como un bulevar seguro y acogedor.",
                           }
                    },
                    urbano: {
                        title: "URBANO",
                        description: "La Escuela de Placemaking Urbano ofreció a los/as jóvenes la oportunidad de <span class='highlight'>aprender y aplicar principios de Placemaking</span> a través de talleres y actividades teórico-prácticas. Durante el programa, se llevaron a cabo intervenciones en el espacio público, fomentando un sentido de comunidad y promoviendo el uso activo de los entornos urbanos.",
                        summary: "URBANO es una iniciativa que busca empoderar a los/as jóvenes para que transformen su ciudad. A través del placemaking, un enfoque que les permite <span class='highlight2'>intervenir de forma creativa en los espacios públicos</span>, los/as participantes no solo imaginan, sino que construyen mejoras tangibles. En esta primera edición, aprendieron cómo diseñar y ejecutar <span class='highlight2'>proyectos que impacten en su comunidad</span>, trabajando juntos/as para darle vida a los rincones urbanos. El programa incluyó desde talleres de diseño hasta actividades prácticas como la creación de pequeños proyectos de placemaking, e incluso un campamento educativo en el BioParque Amaru. Todo sucedió en un entorno que inspiró la innovación, el aprendizaje y, sobre todo, el fortalecimiento de la comunidad.",
                        results: "RESULTADOS",
                        participants: "PARTICIPANTES",
                        safeCity: "DE CADA 10 JÓVENES CONSIDERAN A CUENCA UNA CIUDAD SANA Y SEGURA",
                        greenAreas: "DE CADA 10 JÓVENES PIENSA QUE HACE FALTA MÁS INTERVENCIONES EN ÁREAS VERDES",
                        feelSafe: "DE CADA 10 JÓVENES SE SIENTEN SEGUROS EN LA CIUDAD",
                        placemakingImplementations: "IMPLEMENTACIONES DE PLACEMAKING",
                        timeline: {
                            title: "Actividades Urbano 1ra edición",
                            activity1: {
                                title: "Taller de Placemaking",
                                description: "Una introducción a los conceptos y fundamentos del placemaking, con dinámicas grupales y charlas sobre intervenciones urbanas."
                            },
                            activity2: {
                                title: "Tarde de Placemaking en Arteria",
                                description: "Actividad colaborativa donde los jóvenes pintaron murales y trabajaron en la revitalización de los espacios públicos de Arteria."
                            },
                            activity3: {
                                title: "Trekking urbano",
                                description: "Un recorrido por la ciudad para evaluar los espacios públicos y generar ideas para futuras intervenciones."
                            },
                            activity4: {
                                title: "Campamento en BioParque Amaru",
                                description: "Un día completo de actividades enfocadas en la conservación de la fauna local, incluyendo eventos comunitarios nocturnos."
                            },
                            activity5: {
                                title: "Intervenciones de Placemaking",
                                description: "Cinco intervenciones urbanas en diferentes espacios públicos, diseñadas y ejecutadas por los participantes."
                            }
                        }
                    },
                    podcast: {
                        title: "Safe & Sound Podcast",
                        description: "Te invitamos a escuchar nuestro podcast, donde los jóvenes comparten sus experiencias y realidades en la ciudad de Cuenca. Obtendrás una visión del día a día de los proyectos y sus procesos, así como de las instituciones y socios que hacen posible Safe & Sound Cuenca.",
                        callToAction: "¡Escúchalo aquí!"
                    },
                    wordcloud: {
                        title: "¿Qué les gusta a los jóvenes de Cuenca?",
                        architecture: "Arquitectura",
                        rivers: "Ríos",
                        parks: "Parques",
                        clean: "Limpia",
                        secure: "Segura",
                        greenSpaces: "Espacios Verdes",
                        culture: "Cultura",
                        art: "Arte",
                        neighborhoodCommunity: "Comunidad Barrial",
                        petFriendly: "Pet Friendly",
                        gastronomy: "Gastronomía",
                        tram: "Tranvía",
                        friendly: "Gente Amigable",
                        nature: "Naturaleza",
                        historic: "Ciudad Histórica",
                        mountainRoute: "Ruta Montaña",
                        churches: "Iglesias",
                        colorful: "Colorida",
                        diverse: "Diversa",
                        caredFor: "Cuidada",
                        murals: "Murales",
                        publicBenches: "Bancas Públicas",
                        aesthetic: "Estética",
                        peaceful: "Tranquilidad",
                        communityLife: "Vida Comunitaria",
                        bikeRides: "Ciclopaseos",
                        culturalWealth: "Riqueza Cultural",
                        green: "Verde",
                        culturalProjects: "Proyectos Culturales",
                        beautifulViews: "Vistas Hermosas"
                    },
                    change: {
                        title: "Únete al cambio",
                        description: "En Safe and Sound Ecuador, creemos que cada acción cuenta. Ya sea apoyando como voluntario, mentorizando a jóvenes o contribuyendo con tus ideas y tiempo, juntos podemos hacer de nuestra ciudad un mejor lugar. ¡Contribuye a los proyectos y hagamos la diferencia!",
                        callToAction: "Escríbenos y sé parte del cambio..."
                    },
                    footer: {
                        quickLinks: "Enlaces Rápidos",
                        support: "Soporte",
                        projects: "Proyectos",
                        youths: "Jóvenes",
                        contactUs: "Contáctanos",
                        email: "Correo Electrónico",
                        phone: "Teléfono",
                        chatOnWhatsapp: "Escríbenos en Instagram",
                        followUs: "Síguenos",
                        allRightsReserved: "Todos los derechos reservados."
                    }
                }
            }
        },
        lng: savedLanguage, // Utiliza el idioma guardado
        fallbackLng: 'en', // Usar inglés si el idioma elegido no está disponible
        interpolation: {
            escapeValue: false, // React ya se encarga de esto
        },
    });

export default i18n;
