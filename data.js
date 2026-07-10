/* Datos de la rutina semanal: 5 días, alternando inferior / superior / running */

const ROUTINE = {
  intro: {
    title: "Antes de empezar",
    points: [
      "Calienta siempre 5-8 min: movilidad articular + cardio suave (nunca entres en frío al peso o a correr).",
      "La técnica va antes que el peso. Con mancuernas ligeras hasta que el movimiento salga limpio en todas las repeticiones.",
      "Deja 1-2 repeticiones 'en la recámara': no llegues al fallo muscular las primeras semanas.",
      "Descansa 48h entre sesiones que trabajen el mismo grupo muscular (por eso se alterna inferior/superior).",
      "Progresión: cuando completes todas las series y repeticiones con buena forma dos sesiones seguidas, sube de peso (+1-2 kg por mancuerna).",
      "Hidrátate y estira 5 min al terminar cada sesión, incluidas las de running."
    ]
  },

  days: [
    {
      id: "lunes",
      day: "Lunes",
      title: "Tren Inferior A",
      focus: "Piernas y glúteos · fuerza base",
      type: "fuerza",
      warmup: [
        "5 min bici/cuerda o marcha rápida",
        "10 sentadillas sin peso",
        "10 círculos de cadera por lado",
        "10 balanceos de pierna (adelante-atrás) por lado"
      ],
      exercises: [
        {
          name: "Sentadilla goblet",
          pose: "gobletSquat",
          muscles: "Cuádriceps, glúteo, core",
          sets: "3 x 12",
          rest: "60-90 s",
          steps: [
            "Sujeta una mancuerna en vertical con ambas manos, pegada al pecho.",
            "Pies al ancho de hombros, puntas ligeramente hacia afuera.",
            "Baja llevando la cadera hacia atrás y abajo, como si te sentaras en una silla.",
            "Baja hasta que los muslos queden paralelos al suelo (o donde tu movilidad lo permita).",
            "Empuja el suelo con toda la planta del pie para subir, aprieta glúteo arriba."
          ],
          mistakes: [
            "Que las rodillas se junten hacia adentro.",
            "Levantar los talones del suelo.",
            "Redondear la espalda baja al bajar."
          ],
          tip: "Si no llegas a la profundidad completa con buena técnica, no pasa nada: baja solo hasta donde controles el movimiento."
        },
        {
          name: "Peso muerto rumano (RDL) con mancuernas",
          pose: "rdl",
          muscles: "Femoral, glúteo, zona lumbar",
          sets: "3 x 10",
          rest: "60-90 s",
          steps: [
            "De pie, mancuernas por delante de los muslos, palmas mirando al cuerpo.",
            "Rodillas ligeramente flexionadas (casi rectas, no dobladas como en sentadilla).",
            "Empuja la cadera hacia atrás mientras bajas las mancuernas pegadas a las piernas.",
            "Espalda recta todo el recorrido, el pecho se inclina hacia adelante junto con la cadera.",
            "Baja hasta sentir un buen estiramiento en el femoral (aprox. a la altura de la espinilla) y vuelve subiendo la cadera."
          ],
          mistakes: [
            "Doblar las rodillas como si fuera una sentadilla.",
            "Redondear la espalda.",
            "Alejar las mancuernas del cuerpo."
          ],
          tip: "El movimiento es de cadera (bisagra), no de rodillas. Piensa en 'cerrar una puerta con el glúteo' al subir."
        },
        {
          name: "Zancada caminando con mancuernas",
          pose: "walkingLunge",
          muscles: "Cuádriceps, glúteo, equilibrio",
          sets: "3 x 10 por pierna",
          rest: "60-90 s",
          steps: [
            "Mancuernas a los lados, brazos relajados.",
            "Da un paso largo hacia adelante y baja la cadera en línea recta.",
            "La rodilla trasera baja casi hasta rozar el suelo, la delantera no sobrepasa la punta del pie.",
            "Empuja con la pierna delantera para llevar el otro pie adelante y continuar caminando.",
            "Mantén el torso erguido durante todo el movimiento."
          ],
          mistakes: [
            "Dar pasos demasiado cortos (sobrecarga la rodilla delantera).",
            "Inclinar mucho el torso hacia adelante.",
            "Perder el equilibrio por ir muy rápido."
          ],
          tip: "Empieza sin peso si es tu primera vez con este ejercicio para dominar el equilibrio."
        },
        {
          name: "Elevación de cadera (hip thrust) con mancuerna",
          pose: "hipThrust",
          muscles: "Glúteo, femoral",
          sets: "3 x 15",
          rest: "60 s",
          steps: [
            "Apoya la espalda alta en un banco, pies apoyados en el suelo, rodillas a 90°.",
            "Sujeta una mancuerna sobre la cadera con ambas manos.",
            "Empuja con los talones y sube la cadera hasta que el torso quede en línea recta con los muslos.",
            "Aprieta el glúteo con fuerza arriba durante 1 segundo.",
            "Baja controlando el movimiento sin llegar a sentarte del todo."
          ],
          mistakes: [
            "Hiperextender la espalda baja al subir en vez de usar el glúteo.",
            "Apoyar los pies demasiado lejos o cerca del cuerpo."
          ],
          tip: "Si notas que trabaja más la zona lumbar que el glúteo, revisa la posición de los pies: deben quedar justo debajo de las rodillas al final del recorrido."
        },
        {
          name: "Elevación de talones (gemelo) con mancuernas",
          pose: "calfRaise",
          muscles: "Gemelo, sóleo",
          sets: "3 x 15",
          rest: "45-60 s",
          steps: [
            "De pie, una mancuerna en cada mano a los lados.",
            "Sube lo más alto posible sobre las puntas de los pies.",
            "Mantén 1 segundo arriba apretando la pantorrilla.",
            "Baja lento y controlado hasta estirar bien el talón."
          ],
          mistakes: [
            "Hacer el movimiento demasiado rápido, perdiendo el rango completo.",
            "Doblar las rodillas para 'ayudarse'."
          ],
          tip: "Puedes hacerlo con las puntas de los pies sobre un escalón para ganar más rango de movimiento."
        },
        {
          name: "Plancha lateral",
          pose: "sidePlank",
          muscles: "Core, oblicuos",
          sets: "3 x 20-30 s por lado",
          rest: "45 s",
          steps: [
            "Túmbate de lado apoyando el antebrazo en el suelo, codo bajo el hombro.",
            "Levanta la cadera del suelo formando una línea recta entre hombro, cadera y pies.",
            "Mantén el core apretado y la cadera arriba sin que caiga.",
            "Respira de forma normal durante todo el tiempo que aguantes."
          ],
          mistakes: [
            "Dejar caer la cadera hacia el suelo.",
            "Rotar el torso hacia adelante o atrás."
          ],
          tip: "Si es muy difícil, apoya también la rodilla de abajo en el suelo para reducir la palanca."
        }
      ]
    },

    {
      id: "martes",
      day: "Martes",
      title: "Tren Superior A — Empuje",
      focus: "Pecho, hombro, tríceps",
      type: "fuerza",
      warmup: [
        "5 min cardio suave (remo, cuerda o bici)",
        "10 círculos de brazos por sentido",
        "10 flexiones de rodillas o inclinadas en pared",
        "Movilidad de muñeca: 10 círculos por lado"
      ],
      exercises: [
        {
          name: "Press de pecho con mancuernas (banco o suelo)",
          pose: "benchPress",
          muscles: "Pecho, hombro anterior, tríceps",
          sets: "3 x 12",
          rest: "60-90 s",
          steps: [
            "Túmbate en un banco (o en el suelo) con una mancuerna en cada mano a la altura del pecho.",
            "Pies firmes en el suelo, espalda con ligero arco natural.",
            "Empuja las mancuernas hacia arriba hasta casi estirar los codos, sin bloquearlos del todo.",
            "Baja controlando hasta que los codos queden a unos 90° o donde sientas el pecho estirado.",
            "Exhala al empujar, inhala al bajar."
          ],
          mistakes: [
            "Dejar caer las mancuernas rápido en la bajada.",
            "Arquear demasiado la espalda baja.",
            "Abrir mucho los codos hacia los lados (sobrecarga el hombro)."
          ],
          tip: "Si lo haces en el suelo en vez de banco, el rango será algo menor y es totalmente válido para empezar."
        },
        {
          name: "Press militar de hombros con mancuernas",
          pose: "overheadPress",
          muscles: "Hombro, tríceps",
          sets: "3 x 10",
          rest: "60-90 s",
          steps: [
            "De pie o sentado, mancuernas a la altura de los hombros, palmas hacia adelante.",
            "Aprieta el core y evita arquear la espalda baja.",
            "Empuja las mancuernas hacia arriba hasta casi juntarlas sobre la cabeza.",
            "Baja controlado hasta la posición inicial a la altura del hombro."
          ],
          mistakes: [
            "Arquear la espalda baja para ayudarse a empujar.",
            "Bloquear los codos con fuerza arriba."
          ],
          tip: "Si te resulta incómodo en los hombros, prueba con las palmas mirándose entre sí (agarre neutro)."
        },
        {
          name: "Flexiones (push-ups)",
          pose: "pushup",
          muscles: "Pecho, tríceps, core",
          sets: "3 x tantas como puedas con buena forma (empieza apoyando rodillas si hace falta)",
          rest: "60-90 s",
          steps: [
            "Manos apoyadas un poco más anchas que los hombros.",
            "Cuerpo en línea recta desde la cabeza hasta los talones (o rodillas si es la versión fácil).",
            "Baja el pecho hacia el suelo doblando los codos a unos 45° del cuerpo.",
            "Empuja hasta estirar los brazos sin bloquear los codos con fuerza.",
            "Mantén el core apretado para que la cadera no caiga."
          ],
          mistakes: [
            "Dejar que la cadera se hunda o se eleve demasiado.",
            "Bajar solo un poco (rango incompleto).",
            "Abrir mucho los codos en cruz."
          ],
          tip: "Empieza con la versión de rodillas apoyadas y ve reduciendo el apoyo a medida que ganes fuerza."
        },
        {
          name: "Elevaciones laterales con mancuernas",
          pose: "lateralRaise",
          muscles: "Hombro medio (deltoide)",
          sets: "3 x 15",
          rest: "45-60 s",
          steps: [
            "De pie, una mancuerna en cada mano a los lados, ligera flexión de codo.",
            "Eleva los brazos hacia los lados hasta la altura de los hombros.",
            "Las manos van ligeramente por debajo de los codos, como si vaciaras una jarra.",
            "Baja controlado sin dejar caer el peso de golpe."
          ],
          mistakes: [
            "Usar impulso balanceando el cuerpo.",
            "Subir el peso por encima de la altura del hombro.",
            "Encoger los hombros hacia las orejas."
          ],
          tip: "Usa poco peso: este ejercicio se siente mucho incluso con mancuernas ligeras si la técnica es correcta."
        },
        {
          name: "Extensión de tríceps sobre la cabeza",
          pose: "tricepsOverhead",
          muscles: "Tríceps",
          sets: "3 x 12",
          rest: "45-60 s",
          steps: [
            "De pie o sentado, sujeta una mancuerna con ambas manos por encima de la cabeza.",
            "Codos apuntando hacia adelante, cerca de las orejas.",
            "Baja la mancuerna detrás de la cabeza doblando solo los codos.",
            "Extiende los brazos de nuevo hacia arriba sin mover los codos de sitio."
          ],
          mistakes: [
            "Abrir los codos hacia los lados.",
            "Arquear la espalda baja."
          ],
          tip: "Si no tienes una mancuerna grande, puedes hacerlo con una mancuerna en cada mano por separado."
        },
        {
          name: "Plancha frontal",
          pose: "plank",
          muscles: "Core completo",
          sets: "3 x 20-40 s",
          rest: "45 s",
          steps: [
            "Apóyate sobre los antebrazos y las puntas de los pies.",
            "Codos justo debajo de los hombros.",
            "Cuerpo en línea recta desde la cabeza hasta los talones.",
            "Aprieta glúteo y abdomen, no dejes que la cadera suba ni baje."
          ],
          mistakes: [
            "Dejar caer la cadera (sobrecarga la espalda baja).",
            "Levantar demasiado el glúteo."
          ],
          tip: "Mejor 20 segundos perfectos que 60 segundos con la cadera hundida."
        }
      ]
    },

    {
      id: "miercoles",
      day: "Miércoles",
      title: "Running + Core",
      focus: "Cardio y resistencia",
      type: "running",
      warmup: [
        "5 min caminando a paso vivo",
        "10 círculos de tobillo por lado",
        "10 elevaciones de rodilla al pecho, caminando",
        "10 talones al glúteo, caminando"
      ],
      runPlan: {
        summary:
          "Como vienes de estar activa pero eres nueva en carrera continua estructurada, esta sesión combina trote suave con caminata para construir resistencia sin sobrecargar.",
        blocks: [
          { label: "Calentamiento", detail: "5 min caminando a paso vivo" },
          { label: "Bloque principal", detail: "Repite 5 veces: 3 min trote suave + 2 min caminata de recuperación" },
          { label: "Enfriamiento", detail: "5 min caminando + respiración profunda" }
        ],
        cues: [
          "Ritmo de trote: debes poder mantener una conversación (si te falta mucho el aire, baja el ritmo).",
          "Postura: mirada al frente, hombros relajados (no subidos hacia las orejas), torso ligeramente inclinado hacia adelante desde el tobillo, no desde la cintura.",
          "Aterrizaje: pisa con la parte media del pie, no con el talón muy adelantado al cuerpo.",
          "Brazos: se mueven adelante-atrás pegados al cuerpo, no cruzan el centro del pecho.",
          "Cadencia: intenta dar pasos cortos y rápidos en vez de zancadas largas; reduce el impacto en rodillas."
        ],
        progression:
          "Cuando completes las 5 rondas sintiéndote cómoda dos semanas seguidas, aumenta el trote a 4 min y baja la caminata a 1-2 min."
      },
      exercises: [
        {
          name: "Plancha con toque de hombro",
          pose: "plankShoulderTap",
          muscles: "Core, estabilidad de hombro",
          sets: "3 x 10 toques por lado",
          rest: "45 s",
          steps: [
            "Posición de plancha alta, manos bajo los hombros.",
            "Sin mover la cadera, lleva una mano a tocar el hombro contrario.",
            "Vuelve a apoyar la mano y repite con el otro lado.",
            "Mantén los pies un poco más separados para más estabilidad."
          ],
          mistakes: ["Balancear la cadera de lado a lado con cada toque."],
          tip: "Cuanta menos rotación de cadera veas, mejor está funcionando tu core."
        },
        {
          name: "Abdominales bicicleta",
          pose: "bicycleCrunch",
          muscles: "Abdomen, oblicuos",
          sets: "3 x 15 por lado",
          rest: "45 s",
          steps: [
            "Tumbada boca arriba, manos detrás de la cabeza sin tirar del cuello.",
            "Lleva una rodilla al pecho mientras rotas el codo contrario hacia ella.",
            "Alterna de lado como pedaleando, manteniendo la zona lumbar pegada al suelo.",
            "Exhala en cada rotación."
          ],
          mistakes: ["Tirar del cuello con las manos.", "Despegar la espalda baja del suelo."],
          tip: "Hazlo despacio y con control, no es una carrera: la calidad del giro importa más que la velocidad."
        },
        {
          name: "Superman",
          pose: "superman",
          muscles: "Espalda baja, glúteo",
          sets: "3 x 12",
          rest: "45 s",
          steps: [
            "Boca abajo, brazos extendidos hacia adelante.",
            "Eleva brazos y piernas a la vez unos centímetros del suelo.",
            "Aprieta glúteo y espalda baja arriba durante 1-2 segundos.",
            "Baja controlado sin dejarte caer de golpe."
          ],
          mistakes: ["Elevar demasiado el cuello mirando hacia arriba."],
          tip: "El rango de movimiento es pequeño; no hace falta subir mucho para que trabaje bien."
        }
      ]
    },

    {
      id: "jueves",
      day: "Jueves",
      title: "Tren Inferior B",
      focus: "Glúteo y cadena posterior",
      type: "fuerza",
      warmup: [
        "5 min bici/cuerda o marcha rápida",
        "10 puentes de glúteo sin peso",
        "10 sentadillas con salto suave (o sin salto si prefieres bajo impacto)",
        "10 círculos de cadera por lado"
      ],
      exercises: [
        {
          name: "Zancada búlgara con mancuernas",
          pose: "bulgarianSplit",
          muscles: "Cuádriceps, glúteo, equilibrio",
          sets: "3 x 10 por pierna",
          rest: "60-90 s",
          steps: [
            "Apoya el empeine del pie trasero sobre un banco, pie delantero un buen paso adelante.",
            "Mancuernas a los lados, torso erguido con ligera inclinación adelante.",
            "Baja doblando la rodilla delantera hasta rozar el suelo con la rodilla trasera.",
            "Empuja con el talón delantero para subir."
          ],
          mistakes: ["Dar un paso demasiado corto (rodilla se va mucho hacia adelante).", "Perder el equilibrio por ir rápido."],
          tip: "Es normal que al principio cueste el equilibrio: hazlo cerca de una pared o silla para apoyarte si lo necesitas."
        },
        {
          name: "Peso muerto con mancuernas",
          pose: "rdl",
          muscles: "Femoral, glúteo, espalda baja",
          sets: "3 x 10",
          rest: "90 s",
          steps: [
            "Mancuernas frente a los muslos, pies al ancho de cadera.",
            "Flexiona ligeramente las rodillas y empuja la cadera hacia atrás.",
            "Mantén la espalda recta mientras bajas las mancuernas pegadas a las piernas.",
            "Sube empujando la cadera hacia adelante y apretando glúteo."
          ],
          mistakes: ["Redondear la espalda.", "Que las mancuernas se alejen del cuerpo."],
          tip: "Muy similar al RDL del lunes, pero baja un poco más si tu movilidad de femoral lo permite."
        },
        {
          name: "Puente de glúteo a una pierna",
          pose: "hipThrust",
          muscles: "Glúteo, femoral",
          sets: "3 x 12 por pierna",
          rest: "60 s",
          steps: [
            "Tumbada boca arriba, un pie apoyado en el suelo y la otra pierna extendida en el aire.",
            "Empuja con el talón apoyado para elevar la cadera.",
            "Sube hasta que cadera, rodilla y hombro queden alineados.",
            "Baja controlado sin tocar del todo el suelo entre repeticiones."
          ],
          mistakes: ["Rotar la cadera hacia el lado de la pierna elevada."],
          tip: "Aprieta el glúteo de la pierna de apoyo con fuerza arriba; ahí es donde se siente el trabajo."
        },
        {
          name: "Zancada inversa (reverse lunge)",
          pose: "reverseLunge",
          muscles: "Cuádriceps, glúteo",
          sets: "3 x 10 por pierna",
          rest: "60-90 s",
          steps: [
            "De pie, mancuernas a los lados.",
            "Da un paso largo hacia atrás y baja la rodilla trasera casi hasta el suelo.",
            "El peso queda mayormente sobre la pierna delantera.",
            "Empuja con el talón delantero para volver a la posición inicial."
          ],
          mistakes: ["Inclinar demasiado el torso hacia adelante."],
          tip: "Es más suave para la rodilla que la zancada hacia adelante, buena opción si notas molestias con esa variante."
        },
        {
          name: "Step-up con mancuernas",
          pose: "stepUp",
          muscles: "Cuádriceps, glúteo",
          sets: "3 x 10 por pierna",
          rest: "60-90 s",
          steps: [
            "Coloca un pie completo sobre un banco o step estable.",
            "Empuja con esa pierna para subir todo el cuerpo encima del banco.",
            "Sube completamente antes de bajar, sin impulsarte con la pierna de abajo.",
            "Baja controlado y repite todas las de un lado antes de cambiar."
          ],
          mistakes: ["Impulsarse con la pierna que queda abajo en vez de trabajar con la de arriba."],
          tip: "Usa un step de una altura donde tu rodilla quede aproximadamente a 90° al apoyar el pie."
        },
        {
          name: "Plancha con toque de hombro",
          pose: "plankShoulderTap",
          muscles: "Core, estabilidad de hombro",
          sets: "3 x 10 toques por lado",
          rest: "45 s",
          steps: [
            "Posición de plancha alta, manos bajo los hombros.",
            "Lleva una mano al hombro contrario sin mover la cadera.",
            "Alterna lados manteniendo el core firme."
          ],
          mistakes: ["Balancear la cadera con cada toque."],
          tip: "Separa un poco más los pies si te cuesta mantener el equilibrio."
        }
      ]
    },

    {
      id: "viernes",
      day: "Viernes",
      title: "Tren Superior B — Tirón",
      focus: "Espalda, bíceps, hombro posterior",
      type: "fuerza",
      warmup: [
        "5 min cardio suave",
        "10 círculos de brazos hacia atrás",
        "10 remos con banda o sin peso para activar espalda",
        "Movilidad de muñeca y hombro"
      ],
      exercises: [
        {
          name: "Remo con mancuerna a una mano",
          pose: "oneArmRow",
          muscles: "Espalda media, bíceps",
          sets: "3 x 12 por lado",
          rest: "60-90 s",
          steps: [
            "Apoya una rodilla y una mano en un banco, espalda paralela al suelo.",
            "Mancuerna en la otra mano, brazo extendido hacia abajo.",
            "Tira del codo hacia atrás y arriba, pegado al cuerpo, hasta la altura de la cadera/costilla.",
            "Aprieta el omóplato al final del recorrido.",
            "Baja controlado hasta extender el brazo por completo."
          ],
          mistakes: ["Rotar el torso para ayudarse a subir el peso.", "Tirar solo con el brazo sin usar la espalda."],
          tip: "Imagina que arrancas el codo hacia atrás como si encendieras un motor de arranque."
        },
        {
          name: "Remo inclinado a dos manos",
          pose: "bentOverRow",
          muscles: "Espalda, bíceps, hombro posterior",
          sets: "3 x 12",
          rest: "60-90 s",
          steps: [
            "De pie, flexiona ligeramente las rodillas e inclina el torso hacia adelante (bisagra de cadera).",
            "Mancuernas colgando bajo los hombros, espalda recta.",
            "Tira de ambos codos hacia atrás y arriba, pegados al cuerpo.",
            "Aprieta los omóplatos al final y baja controlado."
          ],
          mistakes: ["Redondear la espalda baja.", "Usar impulso balanceando el cuerpo."],
          tip: "Si notas tensión en la espalda baja al mantener la inclinación, reduce el ángulo de inclinación."
        },
        {
          name: "Curl de bíceps con mancuernas",
          pose: "bicepCurl",
          muscles: "Bíceps",
          sets: "3 x 12",
          rest: "45-60 s",
          steps: [
            "De pie, mancuernas a los lados, palmas hacia adelante.",
            "Sube las mancuernas doblando solo el codo, sin mover el hombro.",
            "Sube hasta contraer bien el bíceps.",
            "Baja controlado hasta estirar el brazo por completo."
          ],
          mistakes: ["Balancear el cuerpo para impulsar el peso (curl con trampa).", "Mover el codo hacia adelante."],
          tip: "Pega los codos a las costillas durante todo el recorrido para aislar bien el bíceps."
        },
        {
          name: "Elevación posterior (rear delt fly) inclinada",
          pose: "rearDeltFly",
          muscles: "Hombro posterior, espalda alta",
          sets: "3 x 15",
          rest: "45-60 s",
          steps: [
            "Inclina el torso hacia adelante como en el remo, mancuernas colgando.",
            "Con los codos ligeramente flexionados, abre los brazos hacia los lados.",
            "Sube hasta la altura del torso, apretando los omóplatos.",
            "Baja controlado sin dejar caer el peso de golpe."
          ],
          mistakes: ["Usar demasiado peso y perder el control del movimiento."],
          tip: "Este es un ejercicio de peso ligero: prioriza sentir el trabajo en la parte posterior del hombro."
        },
        {
          name: "Curl martillo",
          pose: "hammerCurl",
          muscles: "Bíceps, antebrazo",
          sets: "3 x 12",
          rest: "45-60 s",
          steps: [
            "De pie, mancuernas a los lados con las palmas mirándose entre sí (agarre neutro).",
            "Sube doblando el codo manteniendo esa posición de la muñeca todo el recorrido.",
            "Contrae arriba y baja controlado."
          ],
          mistakes: ["Rotar la muñeca durante el movimiento."],
          tip: "Ideal para complementar el curl normal y fortalecer el antebrazo, útil también para el agarre en otros ejercicios."
        },
        {
          name: "Plancha frontal",
          pose: "plank",
          muscles: "Core completo",
          sets: "3 x 20-40 s",
          rest: "45 s",
          steps: [
            "Apóyate sobre los antebrazos y las puntas de los pies.",
            "Cuerpo en línea recta desde la cabeza hasta los talones.",
            "Aprieta glúteo y abdomen todo el tiempo que aguantes."
          ],
          mistakes: ["Dejar caer la cadera."],
          tip: "Cierra la semana consolidando esta base de core: te ayuda en todos los demás ejercicios."
        }
      ]
    }
  ],

  weekend: [
    {
      day: "Sábado",
      title: "Descanso activo",
      pose: "walking",
      detail:
        "Caminata suave de 20-30 min o actividad ligera (bici tranquila, estiramientos, yoga). El objetivo es moverte sin generar fatiga."
    },
    {
      day: "Domingo",
      title: "Descanso completo",
      pose: "stretch",
      detail:
        "Día libre de entrenamiento. Aprovecha para estirar, dormir bien e hidratarte: es cuando el cuerpo realmente construye el progreso de la semana."
    }
  ]
};
