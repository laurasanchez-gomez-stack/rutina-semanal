/*
 * Motor simple de figuras en palitos (stick figures) para ilustrar la
 * posición clave de cada ejercicio. Todas las poses se definen con
 * ángulos absolutos (0° = arriba, 90° = derecha, 180° = abajo, 270° = izquierda)
 * para poder crear cualquier orientación (de pie, tumbado, en plancha...)
 * con el mismo sistema.
 */

const LEN = {
  head: 10,
  neck: 9,
  torso: 48,
  upperArm: 25,
  forearm: 23,
  thigh: 36,
  shin: 34,
  foot: 13
};

function deg2rad(d) {
  return (d * Math.PI) / 180;
}

// Punto final de un segmento dado un origen, ángulo (0=arriba) y longitud.
function seg(origin, angleDeg, length) {
  const a = deg2rad(angleDeg);
  return {
    x: origin.x + length * Math.sin(a),
    y: origin.y - length * Math.cos(a)
  };
}

function line(p1, p2, extra = "") {
  return `<line x1="${p1.x.toFixed(1)}" y1="${p1.y.toFixed(1)}" x2="${p2.x.toFixed(1)}" y2="${p2.y.toFixed(1)}" ${extra}/>`;
}

function circle(p, r, extra = "") {
  return `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${r}" ${extra}/>`;
}

// Pequeña mancuerna dibujada en la mano, perpendicular al antebrazo.
function dumbbell(hand, forearmAngle) {
  const a = deg2rad(forearmAngle + 90);
  const dx = Math.sin(a) * 9;
  const dy = -Math.cos(a) * 9;
  const p1 = { x: hand.x - dx, y: hand.y - dy };
  const p2 = { x: hand.x + dx, y: hand.y + dy };
  return `
    ${line(p1, p2, 'class="db-bar"')}
    ${circle(p1, 4.5, 'class="db-end"')}
    ${circle(p2, 4.5, 'class="db-end"')}
  `;
}

/**
 * Construye el SVG de una figura a partir de una pose.
 * pose = {
 *   hip: {x,y},
 *   torso: angle,
 *   armL: {shoulderAngle, elbowAngle, weight:bool},
 *   armR: {shoulderAngle, elbowAngle, weight:bool},
 *   legL: {hipAngle, kneeAngle},
 *   legR: {hipAngle, kneeAngle},
 *   footFlip: bool (dibuja el pie hacia el otro lado)
 * }
 */
function buildFigure(pose) {
  const hip = pose.hip;
  const shoulder = seg(hip, pose.torso, LEN.torso);
  const headBase = seg(shoulder, pose.torso, LEN.neck);
  const headCenter = seg(headBase, pose.torso, LEN.head * 0.9);

  function arm(cfg, shoulderPt) {
    const elbow = seg(shoulderPt, cfg.shoulderAngle, LEN.upperArm);
    const hand = seg(elbow, cfg.elbowAngle, LEN.forearm);
    let html = `
      ${line(shoulderPt, elbow, 'class="limb"')}
      ${line(elbow, hand, 'class="limb"')}
      ${circle(elbow, 3.2, 'class="joint"')}
    `;
    if (cfg.weight) {
      html += dumbbell(hand, cfg.elbowAngle);
    } else {
      html += circle(hand, 3.6, 'class="joint"');
    }
    return html;
  }

  function leg(cfg, hipPt, flip) {
    const knee = seg(hipPt, cfg.hipAngle, LEN.thigh);
    const foot = seg(knee, cfg.kneeAngle, LEN.shin);
    const footTip = seg(foot, cfg.kneeAngle + (flip ? -90 : 90), LEN.foot);
    return `
      ${line(hipPt, knee, 'class="limb thick"')}
      ${line(knee, foot, 'class="limb thick"')}
      ${line(foot, footTip, 'class="limb thick"')}
      ${circle(knee, 3.4, 'class="joint"')}
    `;
  }

  return `
    ${leg(pose.legL, hip, pose.footFlip)}
    ${leg(pose.legR, hip, pose.footFlip)}
    ${line(hip, shoulder, 'class="torso"')}
    ${arm(pose.armL, shoulder)}
    ${arm(pose.armR, shoulder)}
    ${line(headBase, shoulder, 'class="torso"')}
    ${circle(headCenter, LEN.head, 'class="head"')}
    ${circle(hip, 3.6, 'class="joint hip"')}
  `;
}

function figureSVG(pose, viewBox = "0 0 160 190") {
  return `<svg viewBox="${viewBox}" class="pose-svg" aria-hidden="true">${buildFigure(pose)}</svg>`;
}

/* -------------------------------------------------------------------- */
/* Librería de poses. Cada clave corresponde a un ejercicio o grupo.     */
/* -------------------------------------------------------------------- */

const POSES = {
  standing: {
    hip: { x: 80, y: 100 },
    torso: 0,
    armL: { shoulderAngle: 165, elbowAngle: 175 },
    armR: { shoulderAngle: 195, elbowAngle: 185 },
    legL: { hipAngle: 170, kneeAngle: 180 },
    legR: { hipAngle: 190, kneeAngle: 180 }
  },

  gobletSquat: {
    hip: { x: 80, y: 140 },
    torso: 12,
    armL: { shoulderAngle: 55, elbowAngle: 45, weight: true },
    armR: { shoulderAngle: 305, elbowAngle: 315, weight: true },
    legL: { hipAngle: 135, kneeAngle: 235 },
    legR: { hipAngle: 225, kneeAngle: 125 }
  },

  rdl: {
    hip: { x: 90, y: 110 },
    torso: 78,
    armL: { shoulderAngle: 100, elbowAngle: 95, weight: true },
    armR: { shoulderAngle: 100, elbowAngle: 95, weight: true },
    legL: { hipAngle: 172, kneeAngle: 190 },
    legR: { hipAngle: 188, kneeAngle: 170 }
  },

  walkingLunge: {
    hip: { x: 75, y: 122 },
    torso: 5,
    armL: { shoulderAngle: 200, elbowAngle: 210 },
    armR: { shoulderAngle: 150, elbowAngle: 140 },
    legL: { hipAngle: 105, kneeAngle: 250 },
    legR: { hipAngle: 245, kneeAngle: 110 },
    footFlip: true
  },

  hipThrust: {
    hip: { x: 80, y: 128 },
    torso: 340,
    armL: { shoulderAngle: 40, elbowAngle: 30, weight: true },
    armR: { shoulderAngle: 320, elbowAngle: 330, weight: true },
    legL: { hipAngle: 115, kneeAngle: 230 },
    legR: { hipAngle: 245, kneeAngle: 130 }
  },

  calfRaise: {
    hip: { x: 80, y: 96 },
    torso: 0,
    armL: { shoulderAngle: 170, elbowAngle: 178 },
    armR: { shoulderAngle: 190, elbowAngle: 182 },
    legL: { hipAngle: 178, kneeAngle: 182 },
    legR: { hipAngle: 182, kneeAngle: 178 }
  },

  benchPress: {
    hip: { x: 60, y: 150 },
    torso: 92,
    armL: { shoulderAngle: 350, elbowAngle: 35, weight: true },
    armR: { shoulderAngle: 350, elbowAngle: 325, weight: true },
    legL: { hipAngle: 130, kneeAngle: 250 },
    legR: { hipAngle: 150, kneeAngle: 210 }
  },

  overheadPress: {
    hip: { x: 80, y: 120 },
    torso: 2,
    armL: { shoulderAngle: 15, elbowAngle: 5, weight: true },
    armR: { shoulderAngle: 345, elbowAngle: 355, weight: true },
    legL: { hipAngle: 172, kneeAngle: 182 },
    legR: { hipAngle: 188, kneeAngle: 178 }
  },

  pushup: {
    hip: { x: 55, y: 150 },
    torso: 92,
    armL: { shoulderAngle: 5, elbowAngle: 45 },
    armR: { shoulderAngle: 5, elbowAngle: 335 },
    legL: { hipAngle: 100, kneeAngle: 190 },
    legR: { hipAngle: 100, kneeAngle: 170 }
  },

  lateralRaise: {
    hip: { x: 80, y: 118 },
    torso: 0,
    armL: { shoulderAngle: 95, elbowAngle: 100, weight: true },
    armR: { shoulderAngle: 265, elbowAngle: 260, weight: true },
    legL: { hipAngle: 172, kneeAngle: 182 },
    legR: { hipAngle: 188, kneeAngle: 178 }
  },

  tricepsOverhead: {
    hip: { x: 80, y: 118 },
    torso: 0,
    armL: { shoulderAngle: 20, elbowAngle: 60, weight: true },
    armR: { shoulderAngle: 340, elbowAngle: 300, weight: true },
    legL: { hipAngle: 172, kneeAngle: 182 },
    legR: { hipAngle: 188, kneeAngle: 178 }
  },

  plank: {
    hip: { x: 55, y: 150 },
    torso: 92,
    armL: { shoulderAngle: 355, elbowAngle: 95 },
    armR: { shoulderAngle: 355, elbowAngle: 265 },
    legL: { hipAngle: 100, kneeAngle: 190 },
    legR: { hipAngle: 100, kneeAngle: 170 }
  },

  sidePlank: {
    hip: { x: 55, y: 145 },
    torso: 100,
    armL: { shoulderAngle: 10, elbowAngle: 100 },
    armR: { shoulderAngle: 20, elbowAngle: 20 },
    legL: { hipAngle: 105, kneeAngle: 180 },
    legR: { hipAngle: 105, kneeAngle: 180 }
  },

  oneArmRow: {
    hip: { x: 55, y: 128 },
    torso: 75,
    armL: { shoulderAngle: 130, elbowAngle: 300, weight: true },
    armR: { shoulderAngle: 60, elbowAngle: 60 },
    legL: { hipAngle: 165, kneeAngle: 195 },
    legR: { hipAngle: 195, kneeAngle: 165 }
  },

  bentOverRow: {
    hip: { x: 90, y: 112 },
    torso: 78,
    armL: { shoulderAngle: 130, elbowAngle: 300, weight: true },
    armR: { shoulderAngle: 130, elbowAngle: 300, weight: true },
    legL: { hipAngle: 172, kneeAngle: 188 },
    legR: { hipAngle: 188, kneeAngle: 172 }
  },

  bicepCurl: {
    hip: { x: 80, y: 118 },
    torso: 0,
    armL: { shoulderAngle: 175, elbowAngle: 60, weight: true },
    armR: { shoulderAngle: 185, elbowAngle: 300, weight: true },
    legL: { hipAngle: 172, kneeAngle: 182 },
    legR: { hipAngle: 188, kneeAngle: 178 }
  },

  rearDeltFly: {
    hip: { x: 90, y: 112 },
    torso: 78,
    armL: { shoulderAngle: 45, elbowAngle: 50, weight: true },
    armR: { shoulderAngle: 135, elbowAngle: 310, weight: true },
    legL: { hipAngle: 172, kneeAngle: 188 },
    legR: { hipAngle: 188, kneeAngle: 172 }
  },

  hammerCurl: {
    hip: { x: 80, y: 118 },
    torso: 0,
    armL: { shoulderAngle: 172, elbowAngle: 70, weight: true },
    armR: { shoulderAngle: 188, elbowAngle: 290, weight: true },
    legL: { hipAngle: 172, kneeAngle: 182 },
    legR: { hipAngle: 188, kneeAngle: 178 }
  },

  bulgarianSplit: {
    hip: { x: 75, y: 125 },
    torso: 8,
    armL: { shoulderAngle: 175, elbowAngle: 185, weight: true },
    armR: { shoulderAngle: 185, elbowAngle: 175, weight: true },
    legL: { hipAngle: 120, kneeAngle: 245 },
    legR: { hipAngle: 200, kneeAngle: 340 }
  },

  reverseLunge: {
    hip: { x: 80, y: 122 },
    torso: 6,
    armL: { shoulderAngle: 200, elbowAngle: 210 },
    armR: { shoulderAngle: 150, elbowAngle: 140 },
    legL: { hipAngle: 165, kneeAngle: 195 },
    legR: { hipAngle: 215, kneeAngle: 340 },
    footFlip: true
  },

  stepUp: {
    hip: { x: 75, y: 118 },
    torso: 6,
    armL: { shoulderAngle: 190, elbowAngle: 200 },
    armR: { shoulderAngle: 170, elbowAngle: 160 },
    legL: { hipAngle: 110, kneeAngle: 240 },
    legR: { hipAngle: 200, kneeAngle: 175 }
  },

  plankShoulderTap: {
    hip: { x: 55, y: 150 },
    torso: 92,
    armL: { shoulderAngle: 355, elbowAngle: 95 },
    armR: { shoulderAngle: 15, elbowAngle: 300 },
    legL: { hipAngle: 100, kneeAngle: 190 },
    legR: { hipAngle: 100, kneeAngle: 170 }
  },

  bicycleCrunch: {
    hip: { x: 80, y: 135 },
    torso: 40,
    armL: { shoulderAngle: 60, elbowAngle: 340 },
    armR: { shoulderAngle: 300, elbowAngle: 20 },
    legL: { hipAngle: 100, kneeAngle: 260 },
    legR: { hipAngle: 60, kneeAngle: 200 }
  },

  superman: {
    hip: { x: 55, y: 150 },
    torso: 100,
    armL: { shoulderAngle: 355, elbowAngle: 5 },
    armR: { shoulderAngle: 355, elbowAngle: 355 },
    legL: { hipAngle: 95, kneeAngle: 175 },
    legR: { hipAngle: 95, kneeAngle: 185 }
  },

  running: {
    hip: { x: 75, y: 115 },
    torso: 15,
    armL: { shoulderAngle: 300, elbowAngle: 30 },
    armR: { shoulderAngle: 110, elbowAngle: 320 },
    legL: { hipAngle: 100, kneeAngle: 220 },
    legR: { hipAngle: 260, kneeAngle: 150 },
    footFlip: true
  },

  walking: {
    hip: { x: 80, y: 110 },
    torso: 5,
    armL: { shoulderAngle: 200, elbowAngle: 190 },
    armR: { shoulderAngle: 160, elbowAngle: 170 },
    legL: { hipAngle: 155, kneeAngle: 195 },
    legR: { hipAngle: 210, kneeAngle: 175 }
  },

  stretch: {
    hip: { x: 80, y: 118 },
    torso: 350,
    armL: { shoulderAngle: 25, elbowAngle: 15 },
    armR: { shoulderAngle: 335, elbowAngle: 345 },
    legL: { hipAngle: 172, kneeAngle: 182 },
    legR: { hipAngle: 188, kneeAngle: 178 }
  }
};
