const STORAGE_KEY = "rutina-semanal-progreso";

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

let progress = loadProgress();
let activeDayId = ROUTINE.days[0].id;

function exerciseKey(dayId, index) {
  return `${dayId}-${index}`;
}

function renderNav() {
  const nav = document.getElementById("dayNav");
  nav.innerHTML = "";

  ROUTINE.days.forEach((d) => {
    const btn = document.createElement("button");
    btn.className = "nav-btn" + (d.id === activeDayId ? " active" : "");
    btn.innerHTML = `<span class="nav-day">${d.day}</span><span class="nav-title">${d.title}</span>`;
    btn.addEventListener("click", () => {
      activeDayId = d.id;
      renderNav();
      renderDay(d.id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    nav.appendChild(btn);
  });
}

function renderIntro(container) {
  const card = document.createElement("section");
  card.className = "intro-card";
  card.id = "intro";
  card.innerHTML = `
    <h2>${ROUTINE.intro.title}</h2>
    <ul>${ROUTINE.intro.points.map((p) => `<li>${p}</li>`).join("")}</ul>
  `;
  container.appendChild(card);
}

function renderExerciseCard(day, exercise, index) {
  const key = exerciseKey(day.id, index);
  const isChecked = !!progress[key];

  const card = document.createElement("article");
  card.className = "exercise-card" + (isChecked ? " checked" : "");

  const pose = POSES[exercise.pose] || POSES.standing;

  card.innerHTML = `
    <div class="exercise-top">
      <div class="pose-box">${figureSVG(pose)}</div>
      <div class="exercise-info">
        <div class="exercise-name-row">
          <h4>${exercise.name}</h4>
          <button class="check-toggle${isChecked ? " checked" : ""}" aria-label="Marcar como completado">${isChecked ? "✓" : ""}</button>
        </div>
        <p class="muscles">${exercise.muscles}</p>
        <div class="set-rest-row">
          <span class="pill">${exercise.sets}</span>
          <span class="pill">Descanso ${exercise.rest}</span>
        </div>
        <details class="exercise-details">
          <summary></summary>
          <div class="detail-block">
            <h5>Cómo hacerlo</h5>
            <ol>${exercise.steps.map((s) => `<li>${s}</li>`).join("")}</ol>
          </div>
          <div class="detail-block mistakes">
            <h5>Errores comunes</h5>
            <ul>${exercise.mistakes.map((m) => `<li>${m}</li>`).join("")}</ul>
          </div>
          <div class="tip-box">💡 ${exercise.tip}</div>
        </details>
      </div>
    </div>
  `;

  const toggle = card.querySelector(".check-toggle");
  toggle.addEventListener("click", () => {
    progress[key] = !progress[key];
    saveProgress(progress);
    renderDay(activeDayId);
  });

  return card;
}

function renderRunPlan(container, day) {
  const rp = day.runPlan;
  const box = document.createElement("section");
  box.className = "run-plan";
  box.innerHTML = `
    <h3>Plan de carrera</h3>
    <p class="run-summary">${rp.summary}</p>
    <div class="run-blocks">
      ${rp.blocks
        .map(
          (b) => `<div class="run-block"><span class="rb-label">${b.label}</span><span class="rb-detail">${b.detail}</span></div>`
        )
        .join("")}
    </div>
    <div class="cues-title">Técnica de carrera</div>
    <ul>${rp.cues.map((c) => `<li>${c}</li>`).join("")}</ul>
    <div class="prog-title">Progresión</div>
    <p class="progression-text">${rp.progression}</p>
  `;
  container.appendChild(box);
}

function renderDay(dayId) {
  const day = ROUTINE.days.find((d) => d.id === dayId);
  const container = document.getElementById("mainContent");
  container.innerHTML = "";

  if (dayId === ROUTINE.days[0].id) {
    renderIntro(container);
  }

  const header = document.createElement("div");
  header.className = "day-header";

  const total = day.exercises.length;
  const done = day.exercises.filter((_, i) => progress[exerciseKey(day.id, i)]).length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  header.innerHTML = `
    <span class="day-label">${day.day}</span>
    <h2>${day.title}</h2>
    <p class="focus">${day.focus}</p>
    <div class="progress-wrap"><div class="progress-bar" style="width:${pct}%"></div></div>
    <p class="progress-label">${done}/${total} ejercicios completados</p>
  `;
  container.appendChild(header);

  const warmupCard = document.createElement("section");
  warmupCard.className = "warmup-card";
  warmupCard.innerHTML = `
    <h3>🔥 Calentamiento (5-8 min)</h3>
    <ul>${day.warmup.map((w) => `<li>${w}</li>`).join("")}</ul>
  `;
  container.appendChild(warmupCard);

  if (day.type === "running") {
    renderRunPlan(container, day);
  }

  day.exercises.forEach((ex, i) => {
    container.appendChild(renderExerciseCard(day, ex, i));
  });

  if (dayId === ROUTINE.days[ROUTINE.days.length - 1].id) {
    renderWeekend(container);
  }
}

function renderWeekend(container) {
  const wrap = document.createElement("section");
  wrap.style.marginTop = "24px";
  wrap.innerHTML = `<h3 style="font-size:1rem;margin-bottom:12px;">Fin de semana</h3>`;

  const grid = document.createElement("div");
  grid.className = "weekend-grid";

  ROUTINE.weekend.forEach((w) => {
    const card = document.createElement("div");
    card.className = "weekend-card";
    const pose = POSES[w.pose] || POSES.standing;
    card.innerHTML = `
      <div class="pose-box">${figureSVG(pose)}</div>
      <div>
        <h4>${w.day} — ${w.title}</h4>
        <p>${w.detail}</p>
      </div>
    `;
    grid.appendChild(card);
  });

  wrap.appendChild(grid);
  container.appendChild(wrap);
}

renderNav();
renderDay(activeDayId);
