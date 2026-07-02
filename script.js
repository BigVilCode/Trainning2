const WORKOUTS = [
  {
    "id": "A",
    "title": "Treniruotė A",
    "exercises": [
      {
        "name": "Horizontali trauka sėdint",
        "image": "row",
        "reps": [
          "15",
          "12",
          "10"
        ],
        "weights": {
          "Kristijonas": [
            "4",
            "6",
            "7"
          ],
          "Vilmantas": [
            "5",
            "7",
            "8"
          ]
        }
      },
      {
        "name": "Vertikali trauka sėdint",
        "image": "pulldown",
        "reps": [
          "15",
          "12",
          "10"
        ],
        "weights": {
          "Kristijonas": [
            "4",
            "5",
            "6"
          ],
          "Vilmantas": [
            "5",
            "7",
            "8"
          ]
        }
      },
      {
        "name": "Spaudimas sėdint",
        "image": "chestpress",
        "reps": [
          "12",
          "10",
          "8"
        ],
        "weights": {
          "Kristijonas": [
            "3",
            "5",
            "6"
          ],
          "Vilmantas": [
            "4",
            "6",
            "7"
          ]
        }
      },
      {
        "name": "Spaudimas į viršų sėdint",
        "image": "shoulderpress",
        "reps": [
          "12",
          "10",
          "8"
        ],
        "weights": {
          "Kristijonas": [
            "1",
            "1",
            "1"
          ],
          "Vilmantas": [
            "1",
            "1",
            "1"
          ]
        }
      },
      {
        "name": "Mostai į šalis su hanteliais stovint",
        "image": "lateralraise",
        "reps": [
          "15",
          "15",
          "15"
        ],
        "weights": {
          "Kristijonas": [
            "2",
            "3",
            "3p"
          ],
          "Vilmantas": [
            "2",
            "3",
            "3"
          ]
        }
      },
      {
        "name": "Bicepsas su štanga stovint",
        "image": "curl",
        "reps": [
          "12",
          "10",
          "8"
        ],
        "weights": {
          "Kristijonas": [
            "10.5",
            "13",
            ""
          ],
          "Vilmantas": [
            "10.5",
            "13",
            ""
          ]
        }
      },
      {
        "name": "Kojų spaudimas sėdint",
        "image": "legpress",
        "reps": [
          "15",
          "12",
          "10"
        ],
        "weights": {
          "Kristijonas": [
            "35",
            "65",
            ""
          ],
          "Vilmantas": [
            "35",
            "65",
            ""
          ]
        }
      },
      {
        "name": "Kojų lenkimas sėdint",
        "image": "legcurl",
        "reps": [
          "15",
          "12",
          "10"
        ],
        "weights": {
          "Kristijonas": [
            "25",
            "35",
            ""
          ],
          "Vilmantas": [
            "25",
            "35",
            ""
          ]
        }
      }
    ]
  },
  {
    "id": "B",
    "title": "Treniruotė B",
    "exercises": [
      {
        "name": "Prisitraukimai su pagalba",
        "image": "pullup",
        "reps": [
          "12",
          "10",
          "8"
        ],
        "weights": {
          "Kristijonas": [
            "6",
            "5",
            "4"
          ],
          "Vilmantas": [
            "8",
            "6",
            "4"
          ]
        }
      },
      {
        "name": "Mostai į šalis sėdint",
        "image": "reardelt",
        "reps": [
          "15",
          "15",
          "15"
        ],
        "weights": {
          "Kristijonas": [
            "1",
            "2",
            "3"
          ],
          "Vilmantas": [
            "2",
            "3",
            "3"
          ]
        }
      },
      {
        "name": "Štangos spaudimas gulint",
        "image": "bench",
        "reps": [
          "12",
          "10",
          "8"
        ],
        "weights": {
          "Kristijonas": [
            "25",
            "30",
            "35"
          ],
          "Vilmantas": [
            "30",
            "35",
            "40"
          ]
        }
      },
      {
        "name": "Spaudimas gulint hamerio tipo treniruoklyje",
        "image": "chestpress",
        "reps": [
          "12",
          "10",
          "8"
        ],
        "weights": {
          "Kristijonas": [
            "5",
            "7.5",
            ""
          ],
          "Vilmantas": [
            "5",
            "10",
            "12.5"
          ]
        }
      },
      {
        "name": "Rankų tiesimai su hanteliu už galvos",
        "image": "triceps",
        "reps": [
          "15",
          "12",
          "10"
        ],
        "weights": {
          "Kristijonas": [
            "6",
            "8",
            ""
          ],
          "Vilmantas": [
            "10",
            "11",
            ""
          ]
        }
      },
      {
        "name": "Kojų spaudimas kampu",
        "image": "legpress",
        "reps": [
          "15",
          "12",
          "10"
        ],
        "weights": {
          "Kristijonas": [
            "25",
            "45",
            "60"
          ],
          "Vilmantas": [
            "25",
            "45",
            "60"
          ]
        }
      },
      {
        "name": "Kojų tiesimas sėdint",
        "image": "legextension",
        "reps": [
          "12",
          "12",
          "12"
        ],
        "weights": {
          "Kristijonas": [
            "2",
            "3",
            "4p"
          ],
          "Vilmantas": [
            "3",
            "4",
            "5p"
          ]
        }
      }
    ]
  },
  {
    "id": "C",
    "title": "Treniruotė C",
    "exercises": [
      {
        "name": "Pusiau vertikali trauka",
        "image": "row",
        "reps": [
          "15",
          "12",
          "10"
        ],
        "weights": {
          "Kristijonas": [
            "5",
            "7.5",
            "10"
          ],
          "Vilmantas": [
            "5",
            "7.5",
            "10"
          ]
        }
      },
      {
        "name": "Virvės trauka su rotacija",
        "image": "rope",
        "reps": [
          "12",
          "12",
          "12"
        ],
        "weights": {
          "Kristijonas": [
            "2",
            "3p",
            ""
          ],
          "Vilmantas": [
            "2",
            "3p",
            ""
          ]
        }
      },
      {
        "name": "Štangos spaudimas kampu",
        "image": "inclinebench",
        "reps": [
          "12",
          "10",
          "8"
        ],
        "weights": {
          "Kristijonas": [
            "20",
            "30",
            ""
          ],
          "Vilmantas": [
            "25",
            "35",
            ""
          ]
        }
      },
      {
        "name": "Puloveris su hanteliu gulint",
        "image": "pullover",
        "reps": [
          "12",
          "12",
          "12"
        ],
        "weights": {
          "Kristijonas": [
            "6",
            "8",
            ""
          ],
          "Vilmantas": [
            "8",
            "10",
            ""
          ]
        }
      },
      {
        "name": "Tiesimai stovint treniruoklyje",
        "image": "triceps",
        "reps": [
          "15",
          "15",
          "15"
        ],
        "weights": {
          "Kristijonas": [
            "2",
            "3p",
            ""
          ],
          "Vilmantas": [
            "2",
            "3p",
            ""
          ]
        }
      },
      {
        "name": "Plaktukas – rankų lenkimai stovint prie sienos",
        "image": "curl",
        "reps": [
          "12",
          "10",
          "8"
        ],
        "weights": {
          "Kristijonas": [
            "6",
            "8",
            ""
          ],
          "Vilmantas": [
            "6",
            "8",
            ""
          ]
        }
      },
      {
        "name": "Įtūpstai stovint vietoje",
        "image": "lunge",
        "reps": [
          "12+12",
          "12+12",
          "12+12"
        ],
        "weights": {
          "Kristijonas": [
            "5 kg",
            "10 kg",
            ""
          ],
          "Vilmantas": [
            "5 kg",
            "10 kg",
            ""
          ]
        }
      },
      {
        "name": "Pritūpimai įrėmintom kojom",
        "image": "squat",
        "reps": [
          "12",
          "12",
          "12"
        ],
        "weights": {
          "Kristijonas": [
            "",
            "",
            ""
          ],
          "Vilmantas": [
            "",
            "",
            ""
          ]
        }
      },
      {
        "name": "Kojų pakėlimai lygiagretyje",
        "image": "legraise",
        "reps": [
          "15",
          "17",
          "20"
        ],
        "weights": {
          "Kristijonas": [
            "",
            "",
            ""
          ],
          "Vilmantas": [
            "",
            "",
            ""
          ]
        }
      },
      {
        "name": "Susirietimai ant suoliuko",
        "image": "crunch",
        "reps": [
          "20",
          "20",
          "20"
        ],
        "weights": {
          "Kristijonas": [
            "",
            "",
            ""
          ],
          "Vilmantas": [
            "",
            "",
            ""
          ]
        }
      }
    ]
  }
];

const appState = {
  person: "Kristijonas",
  workoutId: "A",
  exerciseIndex: 0,
  installPrompt: null,
  activeSession: null,
  needsSessionDecision: false,
  sessionChoiceMade: false
};

const el = {
  person: document.getElementById("person"),
  workout: document.getElementById("workout"),
  count: document.getElementById("count"),
  exerciseName: document.getElementById("exerciseName"),
  image: document.getElementById("exerciseImage"),
  hint: document.getElementById("hint"),
  sets: document.getElementById("sets"),
  prev: document.getElementById("prevBtn"),
  next: document.getElementById("nextBtn"),
  progress: document.getElementById("progress"),
  exerciseList: document.getElementById("exerciseList"),
  install: document.getElementById("installBtn"),
  sessionTitle: document.getElementById("sessionTitle"),
  sessionText: document.getElementById("sessionText"),
  finishSession: document.getElementById("finishSessionBtn"),
  openHistoryBtn: document.getElementById("openHistoryBtn"),
  backToWorkoutBtn: document.getElementById("backToWorkoutBtn"),
  exportBtn: document.getElementById("exportBtn"),
  importTriggerBtn: document.getElementById("importTriggerBtn"),
  importFileBtn: document.getElementById("importFileBtn"),
  mainWorkoutView: document.getElementById("mainWorkoutView"),
  historyView: document.getElementById("historyView"),
  historyTbody: document.getElementById("historyTbody"),
  historyChart: document.getElementById("historyChart"),
  wizardOverlay: document.getElementById("wizardOverlay"),
  wizardPersonOptions: document.getElementById("wizardPersonOptions"),
  wizardWorkoutOptions: document.getElementById("wizardWorkoutOptions"),
  wizardStartBtn: document.getElementById("wizardStartBtn")
};

function sessionKey(person = appState.person, workoutId = appState.workoutId) {
  return `treniruote:sesija:${person}:${workoutId}`;
}

function lastFinishedSessionKey(person = appState.person, workoutId = appState.workoutId) {
  return `${sessionKey(person, workoutId)}:paskutine-baigta`;
}

function todayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function createSession() {
  return {
    id: `${todayKey()}-${Date.now()}`,
    date: todayKey(),
    status: "active",
    person: appState.person,
    workoutId: appState.workoutId,
    exerciseIndex: 0,
    sets: {}
  };
}

function normalizeSession(session) {
  return {
    id: session.id || `${session.date || todayKey()}-${Date.now()}`,
    date: session.date || todayKey(),
    status: session.status || "active",
    person: session.person || appState.person,
    workoutId: session.workoutId || appState.workoutId,
    exerciseIndex: Number.isInteger(session.exerciseIndex) ? session.exerciseIndex : 0,
    sets: session.sets || {}
  };
}

function loadSession() {
  try {
    const raw = localStorage.getItem(sessionKey());
    return raw ? normalizeSession(JSON.parse(raw)) : null;
  } catch {
    return null;
  }
}

function saveSession() {
  if (!appState.activeSession) return;
  appState.activeSession.person = appState.person;
  appState.activeSession.workoutId = appState.workoutId;
  appState.activeSession.exerciseIndex = appState.exerciseIndex;
  localStorage.setItem(sessionKey(), JSON.stringify(appState.activeSession));
}

function updateLastActivity() {
  localStorage.setItem("treniruote:paskutinis-aktyvumas", Date.now().toString());
}

function shouldShowWizard() {
  const lastActivity = localStorage.getItem("treniruote:paskutinis-aktyvumas");
  if (!lastActivity) return true;
  
  const diffMs = Date.now() - parseInt(lastActivity, 10);
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  return diffDays >= 1;
}

function ensureSession() {
  const storedSession = loadSession();
  if (!storedSession || storedSession.status !== "active") {
    appState.activeSession = createSession();
    appState.exerciseIndex = 0;
    appState.needsSessionDecision = false;
    appState.sessionChoiceMade = false;
    saveSession();
    return;
  }

  appState.activeSession = storedSession;
  appState.exerciseIndex = storedSession.exerciseIndex;
  appState.needsSessionDecision = false;
  appState.sessionChoiceMade = true;
}

function startNewSession() {
  appState.activeSession = createSession();
  appState.exerciseIndex = 0;
  appState.needsSessionDecision = false;
  appState.sessionChoiceMade = false;
  saveSession();
  saveSettings();
  updateLastActivity();
  render();
}

let wizardPerson = "";
let wizardWorkout = "";

function showWizard() {
  wizardPerson = "";
  wizardWorkout = "";
  el.wizardStartBtn.disabled = true;

  el.wizardPersonOptions.querySelectorAll(".wizard-opt-btn").forEach(btn => btn.classList.remove("selected"));
  el.wizardWorkoutOptions.querySelectorAll(".wizard-opt-btn").forEach(btn => btn.classList.remove("selected"));

  el.wizardOverlay.hidden = false;
}

function initWizard() {
  el.wizardPersonOptions.querySelectorAll(".wizard-opt-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      el.wizardPersonOptions.querySelectorAll(".wizard-opt-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      wizardPerson = btn.dataset.value;
      checkWizardSelection();
    });
  });

  el.wizardWorkoutOptions.querySelectorAll(".wizard-opt-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      el.wizardWorkoutOptions.querySelectorAll(".wizard-opt-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      wizardWorkout = btn.dataset.value;
      checkWizardSelection();
    });
  });

  el.wizardStartBtn.addEventListener("click", () => {
    if (wizardPerson && wizardWorkout) {
      appState.person = wizardPerson;
      appState.workoutId = wizardWorkout;
      appState.exerciseIndex = 0;

      el.person.value = appState.person;
      el.workout.value = appState.workoutId;

      startNewSession();
      el.wizardOverlay.hidden = true;
    }
  });
}

function checkWizardSelection() {
  if (wizardPerson && wizardWorkout) {
    el.wizardStartBtn.disabled = false;
  } else {
    el.wizardStartBtn.disabled = true;
  }
}

function sessionSetFor(session, exerciseIndex, setIndex) {
  const sets = session?.sets;
  if (!sets || !Object.prototype.hasOwnProperty.call(sets, exerciseIndex)) return {};
  const exSets = Reflect.get(sets, exerciseIndex);
  if (!exSets || !Object.prototype.hasOwnProperty.call(exSets, setIndex)) return {};
  return Reflect.get(exSets, setIndex) || {};
}

function getLastFinishedSession(person = appState.person, workoutId = appState.workoutId) {
  try {
    const raw = localStorage.getItem(lastFinishedSessionKey(person, workoutId));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function getFallbackSet(exerciseIndex, setIndex, exercise, person = appState.person, workoutId = appState.workoutId) {
  const lastFinished = getLastFinishedSession(person, workoutId);
  const lastSet = sessionSetFor(lastFinished, exerciseIndex, setIndex);
  const weights = (Object.prototype.hasOwnProperty.call(exercise.weights, person) ? Reflect.get(exercise.weights, person) : null) || ["", "", ""];
  return {
    weight: lastSet.weight ?? (Reflect.get(weights, setIndex) || ""),
    reps: lastSet.reps ?? (Reflect.get(exercise.reps, setIndex) || "")
  };
}

function getSessionSet(exerciseIndex, setIndex, exercise) {
  const saved = sessionSetFor(appState.activeSession, exerciseIndex, setIndex);
  const fallback = getFallbackSet(exerciseIndex, setIndex, exercise);
  return {
    done: Boolean(saved.done),
    weight: saved.weight ?? fallback.weight,
    reps: saved.reps ?? fallback.reps
  };
}

function updateSessionSet(exerciseIndex, setIndex, patch) {
  if (!appState.activeSession) ensureSession();
  if (!Object.prototype.hasOwnProperty.call(appState.activeSession.sets, exerciseIndex)) {
    Reflect.set(appState.activeSession.sets, exerciseIndex, {});
  }
  const exSets = Reflect.get(appState.activeSession.sets, exerciseIndex);
  const current = Object.prototype.hasOwnProperty.call(exSets, setIndex) ? Reflect.get(exSets, setIndex) : {};
  Reflect.set(exSets, setIndex, { ...current, ...patch });
  saveSession();
  updateLastActivity();
}

function getWorkout() {
  return WORKOUTS.find(w => w.id === appState.workoutId) || WORKOUTS[0];
}

function getExercise() {
  const exercises = getWorkout().exercises;
  const idx = appState.exerciseIndex;
  return (idx >= 0 && idx < exercises.length) ? exercises[idx] : exercises[0];
}

function isDone(exerciseIndex, setIndex) {
  return Boolean(sessionSetFor(appState.activeSession, exerciseIndex, setIndex).done);
}

function setDone(exerciseIndex, setIndex, done) {
  updateSessionSet(exerciseIndex, setIndex, { done });
}

function valueOrDash(value) {
  return value && String(value).trim() ? value : "—";
}

function svgFor(type) {
  const common = 'fill="none" stroke="#111827" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"';
  const bench = '<line x1="74" y1="92" x2="206" y2="92" ' + common + '/><line x1="92" y1="92" x2="78" y2="118" ' + common + '/><line x1="186" y1="92" x2="204" y2="118" ' + common + '/>';
  const personLying = '<circle cx="115" cy="60" r="14" ' + common + '/><line x1="130" y1="70" x2="177" y2="84" ' + common + '/><line x1="152" y1="78" x2="133" y2="98" ' + common + '/>';
  const body = '<circle cx="140" cy="34" r="13" ' + common + '/><line x1="140" y1="48" x2="140" y2="84" ' + common + '/>';
  const chair = '<line x1="104" y1="89" x2="173" y2="89" ' + common + '/><line x1="110" y1="90" x2="98" y2="118" ' + common + '/><line x1="164" y1="90" x2="182" y2="118" ' + common + '/>';
  let art = "";
  switch(type) {
    case "row": art = body + '<line x1="140" y1="83" x2="106" y2="102" ' + common + '/><line x1="140" y1="83" x2="174" y2="102" ' + common + '/><line x1="121" y1="59" x2="78" y2="78" ' + common + '/><line x1="159" y1="59" x2="202" y2="78" ' + common + '/><line x1="70" y1="78" x2="210" y2="78" ' + common + '/>'; break;
    case "pulldown": art = body + '<line x1="140" y1="84" x2="118" y2="114" ' + common + '/><line x1="140" y1="84" x2="162" y2="114" ' + common + '/><line x1="92" y1="16" x2="188" y2="16" ' + common + '/><line x1="118" y1="50" x2="92" y2="16" ' + common + '/><line x1="162" y1="50" x2="188" y2="16" ' + common + '/>'; break;
    case "chestpress": art = chair + body + '<line x1="116" y1="58" x2="75" y2="58" ' + common + '/><line x1="164" y1="58" x2="205" y2="58" ' + common + '/><line x1="75" y1="42" x2="75" y2="74" ' + common + '/><line x1="205" y1="42" x2="205" y2="74" ' + common + '/>'; break;
    case "shoulderpress": art = chair + body + '<line x1="118" y1="52" x2="96" y2="22" ' + common + '/><line x1="162" y1="52" x2="184" y2="22" ' + common + '/><line x1="86" y1="22" x2="106" y2="22" ' + common + '/><line x1="174" y1="22" x2="194" y2="22" ' + common + '/>'; break;
    case "lateralraise": art = body + '<line x1="140" y1="84" x2="116" y2="116" ' + common + '/><line x1="140" y1="84" x2="164" y2="116" ' + common + '/><line x1="125" y1="56" x2="76" y2="44" ' + common + '/><line x1="155" y1="56" x2="204" y2="44" ' + common + '/><circle cx="68" cy="42" r="7" ' + common + '/><circle cx="212" cy="42" r="7" ' + common + '/>'; break;
    case "curl": art = body + '<line x1="140" y1="84" x2="116" y2="116" ' + common + '/><line x1="140" y1="84" x2="164" y2="116" ' + common + '/><line x1="120" y1="60" x2="103" y2="82" ' + common + '/><line x1="160" y1="60" x2="177" y2="82" ' + common + '/><circle cx="100" cy="88" r="7" ' + common + '/><circle cx="180" cy="88" r="7" ' + common + '/>'; break;
    case "legpress": art = '<circle cx="92" cy="50" r="13" ' + common + '/><line x1="104" y1="62" x2="142" y2="86" ' + common + '/><line x1="142" y1="86" x2="194" y2="62" ' + common + '/><line x1="188" y1="40" x2="220" y2="88" ' + common + '/><line x1="70" y1="96" x2="150" y2="96" ' + common + '/>'; break;
    case "legcurl": case "legextension": art = chair + '<circle cx="128" cy="45" r="13" ' + common + '/><line x1="136" y1="58" x2="158" y2="88" ' + common + '/><line x1="158" y1="88" x2="208" y2="88" ' + common + '/><circle cx="218" cy="88" r="9" ' + common + '/>'; break;
    case "pullup": art = '<line x1="80" y1="18" x2="200" y2="18" ' + common + '/><circle cx="140" cy="48" r="13" ' + common + '/><line x1="140" y1="61" x2="140" y2="95" ' + common + '/><line x1="116" y1="28" x2="140" y2="62" ' + common + '/><line x1="164" y1="28" x2="140" y2="62" ' + common + '/><line x1="140" y1="95" x2="116" y2="118" ' + common + '/><line x1="140" y1="95" x2="164" y2="118" ' + common + '/>'; break;
    case "reardelt": art = chair + '<circle cx="140" cy="45" r="13" ' + common + '/><line x1="140" y1="58" x2="140" y2="86" ' + common + '/><line x1="120" y1="62" x2="82" y2="52" ' + common + '/><line x1="160" y1="62" x2="198" y2="52" ' + common + '/><circle cx="74" cy="50" r="7" ' + common + '/><circle cx="206" cy="50" r="7" ' + common + '/>'; break;
    case "bench": case "inclinebench": art = bench + personLying + '<line x1="82" y1="36" x2="198" y2="36" ' + common + '/><line x1="72" y1="24" x2="72" y2="48" ' + common + '/><line x1="208" y1="24" x2="208" y2="48" ' + common + '/><line x1="128" y1="54" x2="128" y2="36" ' + common + '/><line x1="166" y1="80" x2="166" y2="36" ' + common + '/>'; break;
    case "triceps": art = body + '<line x1="140" y1="84" x2="116" y2="116" ' + common + '/><line x1="140" y1="84" x2="164" y2="116" ' + common + '/><line x1="128" y1="54" x2="128" y2="18" ' + common + '/><line x1="152" y1="54" x2="152" y2="18" ' + common + '/><line x1="122" y1="18" x2="158" y2="18" ' + common + '/>'; break;
    case "rope": art = body + '<line x1="140" y1="84" x2="116" y2="116" ' + common + '/><line x1="140" y1="84" x2="164" y2="116" ' + common + '/><path d="M104 20 C120 50, 116 70, 94 92" ' + common + '/><path d="M176 20 C160 50, 164 70, 186 92" ' + common + '/><line x1="104" y1="20" x2="176" y2="20" ' + common + '/>'; break;
    case "pullover": art = bench + personLying + '<path d="M134 58 C120 28, 112 18, 100 14" ' + common + '/><circle cx="94" cy="13" r="7" ' + common + '/>'; break;
    case "lunge": art = body + '<line x1="140" y1="84" x2="110" y2="116" ' + common + '/><line x1="140" y1="84" x2="184" y2="108" ' + common + '/><line x1="110" y1="116" x2="88" y2="116" ' + common + '/><line x1="184" y1="108" x2="210" y2="108" ' + common + '/>'; break;
    case "squat": art = body + '<line x1="140" y1="84" x2="110" y2="110" ' + common + '/><line x1="140" y1="84" x2="170" y2="110" ' + common + '/><line x1="96" y1="112" x2="124" y2="112" ' + common + '/><line x1="156" y1="112" x2="184" y2="112" ' + common + '/>'; break;
    case "legraise": art = '<line x1="72" y1="20" x2="72" y2="120" ' + common + '/><line x1="72" y1="20" x2="128" y2="20" ' + common + '/><circle cx="120" cy="52" r="13" ' + common + '/><line x1="120" y1="65" x2="120" y2="95" ' + common + '/><line x1="105" y1="72" x2="72" y2="38" ' + common + '/><line x1="135" y1="72" x2="128" y2="20" ' + common + '/><line x1="120" y1="95" x2="170" y2="88" ' + common + '/>'; break;
    case "crunch": art = '<line x1="70" y1="96" x2="210" y2="96" ' + common + '/><circle cx="104" cy="58" r="13" ' + common + '/><path d="M118 68 C140 72, 154 84, 164 96" ' + common + '/><line x1="164" y1="96" x2="198" y2="72" ' + common + '/>'; break;
    default: art = body + '<line x1="140" y1="84" x2="116" y2="116" ' + common + '/><line x1="140" y1="84" x2="164" y2="116" ' + common + '/>';
  }
  return '<svg role="img" aria-label="Pratimo schema" viewBox="0 0 280 136" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="272" height="128" rx="18" fill="#fff" stroke="#d1d5db" stroke-width="2"/>' + art + '</svg>';
}

const DB_NAME = 'WorkoutDB';
const STORE_NAME = 'history';

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveSessionToHistory(session) {
  const db = await openDB();
  const workout = WORKOUTS.find(w => w.id === session.workoutId) || getWorkout();
  const finishedAt = new Date().toISOString();
  
  const records = [];
  workout.exercises.forEach((exercise, exerciseIndex) => {
    const sets = [0, 1, 2].map(setIndex => {
      const saved = sessionSetFor(session, exerciseIndex, setIndex);
      const fallback = getFallbackSet(exerciseIndex, setIndex, exercise, session.person, session.workoutId);
      return {
        weight: saved.weight ?? fallback.weight,
        reps: saved.reps ?? fallback.reps,
        done: Boolean(saved.done)
      };
    });

    if (sets.some(s => s.done)) {
      records.push({
        id: `${session.id}:${exerciseIndex}`,
        sessionId: session.id,
        date: session.date,
        finishedAt,
        person: session.person,
        workout: session.workoutId,
        exerciseName: exercise.name,
        sets: sets.map(s => s.done ? s : { weight: "", reps: "", done: false })
      });
    }
  });

  return new Promise((resolve) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    records.forEach(record => store.put(record));
    tx.oncomplete = resolve;
  });
}

async function finishWorkout() {
  if (!appState.activeSession) ensureSession();
  const session = normalizeSession(appState.activeSession);
  await saveSessionToHistory(session);

  session.status = "finished";
  session.finishedAt = new Date().toISOString();
  localStorage.setItem(lastFinishedSessionKey(), JSON.stringify(session));

  appState.activeSession = null;
  appState.exerciseIndex = 0;
  appState.needsSessionDecision = false;
  appState.sessionChoiceMade = false;
  // We don't saveSession here because we'll create a new one when wizard finishes
  saveSettings();
  updateLastActivity();
  alert("Treniruotė išsaugota istorijoje.");
  render();
  showWizard();
}

async function exportCSV() {
  const db = await openDB();
  return new Promise((resolve) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const request = tx.objectStore(STORE_NAME).getAll();
    request.onsuccess = () => {
      const data = request.result;
      if (data.length === 0) {
        alert("Nėra istorijos eksportavimui.");
        return resolve();
      }
      let csv = "Data,Asmuo,Treniruotė,Pratimas,1_Svoris,1_Pakar,1_Atlikta,2_Svoris,2_Pakar,2_Atlikta,3_Svoris,3_Pakar,3_Atlikta\n";
      data.forEach(r => {
        let row = [
          r.date, r.person, r.workout, `"${r.exerciseName}"`
        ];
        r.sets.forEach(s => {
          row.push(s.weight, s.reps, s.done ? "Taip" : "Ne");
        });
        csv += row.join(",") + "\n";
      });
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "treniruociu_istorija.csv";
      a.click();
      URL.revokeObjectURL(url);
      resolve();
    };
  });
}

function parseCSVRow(str) {
  const result = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current);
  return result.map(v => {
    let val = v.trim();
    if (val.startsWith('"') && val.endsWith('"')) {
      val = val.substring(1, val.length - 1);
    }
    return val;
  });
}

async function importCSV(file) {
  const reader = new FileReader();
  reader.onload = async (e) => {
    const text = e.target.result;
    const lines = text.split("\n").map(l => l.trim()).filter(l => l);
    if (lines.length <= 1) {
      alert("CSV failas tuščias arba netinkamas.");
      return;
    }
    
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    let count = 0;
    
    for (let i = 1; i < lines.length; i++) {
      const cleanRow = parseCSVRow(lines[i]);
      if (cleanRow.length >= 13) {
        const [date, person, workout, exerciseName, w1, r1, d1, w2, r2, d2, w3, r3, d3] = cleanRow;
        const pseudoId = `${date}-${Date.now()}-${i}`;
        const record = {
          id: pseudoId,
          sessionId: `${date}-${Date.now()}`,
          date: date,
          finishedAt: new Date().toISOString(),
          person: person,
          workout: workout,
          exerciseName: exerciseName,
          sets: [
            { weight: w1, reps: r1, done: d1 === "Taip" },
            { weight: w2, reps: r2, done: d2 === "Taip" },
            { weight: w3, reps: r3, done: d3 === "Taip" }
          ]
        };
        store.put(record);
        count++;
      }
    }
    
    tx.oncomplete = () => {
      alert(`Sėkmingai importuota ${count} įrašų.`);
      if (el.importFileBtn) el.importFileBtn.value = "";
    };
    tx.onerror = () => {
      alert("Klaida importuojant duomenis.");
      if (el.importFileBtn) el.importFileBtn.value = "";
    };
  };
  reader.readAsText(file);
}

async function showHistory() {
  const exercise = getExercise();
  el.mainWorkoutView.hidden = true;
  el.historyView.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
  
  const db = await openDB();
  const tx = db.transaction(STORE_NAME, 'readonly');
  const request = tx.objectStore(STORE_NAME).getAll();
  
  request.onsuccess = () => {
    let data = request.result.filter(r => r.person === appState.person && r.exerciseName === exercise.name);
    data.sort((a,b) => a.date.localeCompare(b.date));
    
    el.historyTbody.innerHTML = "";
    
    if (data.length === 0) {
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.colSpan = 4;
      td.style.textAlign = "center";
      td.textContent = "Nėra išsaugotų duomenų";
      tr.appendChild(td);
      el.historyTbody.appendChild(tr);

      el.historyChart.innerHTML = "";
      const textNode = document.createElementNS("http://www.w3.org/2000/svg", "text");
      textNode.setAttribute("x", "150");
      textNode.setAttribute("y", "75");
      textNode.setAttribute("text-anchor", "middle");
      textNode.setAttribute("fill", "#6b7280");
      textNode.setAttribute("font-size", "12");
      textNode.textContent = "Nepakanka duomenų grafikui";
      el.historyChart.appendChild(textNode);
      return;
    }
    
    data.forEach(r => {
      const tr = document.createElement("tr");
      const dateTd = document.createElement("td");
      dateTd.textContent = r.date;
      tr.appendChild(dateTd);
      r.sets.forEach(s => {
        const td = document.createElement("td");
        const valText = valueOrDash(s.weight) + " kg (" + valueOrDash(s.reps) + "x)";
        if (!s.done) {
          const span = document.createElement("span");
          span.style.opacity = "0.5";
          span.textContent = valText;
          td.appendChild(span);
        } else {
          td.textContent = valText;
        }
        tr.appendChild(td);
      });
      el.historyTbody.appendChild(tr);
    });
    
    drawChart(data);
  };
}

function drawChart(historyData) {
  const svg = el.historyChart;
  svg.innerHTML = '';
  
  let minWt = Infinity, maxWt = -Infinity;
  historyData.forEach(r => {
    r.sets.forEach(s => {
      if (s.done) {
        let w = parseFloat(s.weight);
        if (!isNaN(w)) {
          if (w < minWt) minWt = w;
          if (w > maxWt) maxWt = w;
        }
      }
    });
  });
  
  if (minWt === Infinity) {
      const textNode = document.createElementNS("http://www.w3.org/2000/svg", "text");
      textNode.setAttribute("x", "150");
      textNode.setAttribute("y", "75");
      textNode.setAttribute("text-anchor", "middle");
      textNode.setAttribute("fill", "#6b7280");
      textNode.setAttribute("font-size", "12");
      textNode.textContent = "Nėra užbaigtų setų skaičių grafikui";
      svg.appendChild(textNode);
      return;
  }
  
  if (maxWt === minWt) { minWt -= 5; maxWt += 5; }
  
  const w = 300, h = 150;
  const padX = 20, padY = 20;
  
  const getX = (index) => padX + (index / (Math.max(1, historyData.length - 1))) * (w - padX * 2);
  const getY = (weight) => h - padY - ((weight - minWt) / (maxWt - minWt)) * (h - padY * 2);
  
  const colors = ['#2563eb', '#16a34a', '#d97706']; // Colors for Set 1, 2, 3
  
  for(let i=0; i<3; i++) {
    let pathD = "";
    historyData.forEach((r, idx) => {
      const setData = Reflect.get(r.sets, i);
      let wt = parseFloat(setData.weight);
      if (setData.done && !isNaN(wt)) {
        let x = historyData.length === 1 ? w/2 : getX(idx);
        let y = getY(wt);
        if (pathD === "") pathD = "M " + x + " " + y;
        else pathD += " L " + x + " " + y;
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", "3");
        circle.setAttribute("fill", Reflect.get(colors, i));
        svg.appendChild(circle);
      }
    });
    if (pathD && historyData.length > 1) {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", pathD);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", Reflect.get(colors, i));
      path.setAttribute("stroke-width", "2");
      svg.insertBefore(path, svg.firstChild);
    }
  }
}

function init() {
  WORKOUTS.forEach(w => {
    const option = document.createElement("option");
    option.value = w.id;
    option.textContent = w.title;
    el.workout.appendChild(option);
  });

  const saved = JSON.parse(localStorage.getItem("treniruote:nustatymai") || "{}");
  appState.person = saved.person || appState.person;
  appState.workoutId = saved.workoutId || appState.workoutId;
  appState.exerciseIndex = Number.isInteger(saved.exerciseIndex) ? saved.exerciseIndex : 0;
  el.person.value = appState.person;
  el.workout.value = appState.workoutId;

  initWizard();
  if (shouldShowWizard()) {
    showWizard();
  } else {
    ensureSession();
  }
  clampIndex();

  el.person.addEventListener("change", () => {
    appState.person = el.person.value;
    appState.workoutId = el.workout.value;
    appState.sessionChoiceMade = false;
    ensureSession();
    saveSettings();
    render();
  });

  el.workout.addEventListener("change", () => {
    appState.workoutId = el.workout.value;
    appState.sessionChoiceMade = false;
    ensureSession();
    saveSettings();
    render();
  });

  el.prev.addEventListener("click", () => {
    appState.exerciseIndex = Math.max(0, appState.exerciseIndex - 1);
    saveSession();
    saveSettings();
    render();
  });

  el.next.addEventListener("click", () => {
    const max = getWorkout().exercises.length - 1;
    appState.exerciseIndex = Math.min(max, appState.exerciseIndex + 1);
    saveSession();
    saveSettings();
    render();
  });

  el.finishSession.addEventListener("click", async () => {
    el.finishSession.disabled = true;
    try {
      await finishWorkout();
    } finally {
      el.finishSession.disabled = false;
    }
  });

  el.install.addEventListener("click", async () => {
    if (!appState.installPrompt) return;
    appState.installPrompt.prompt();
    await appState.installPrompt.userChoice;
    appState.installPrompt = null;
    el.install.hidden = true;
  });

  el.openHistoryBtn.addEventListener("click", () => {
    showHistory();
  });

  el.backToWorkoutBtn.addEventListener("click", () => {
    el.historyView.hidden = true;
    el.mainWorkoutView.hidden = false;
  });
  
  el.exportBtn.addEventListener("click", () => {
    exportCSV();
  });

  if (el.importTriggerBtn && el.importFileBtn) {
    el.importTriggerBtn.addEventListener("click", () => {
      el.importFileBtn.click();
    });
    
    el.importFileBtn.addEventListener("change", (e) => {
      if (e.target.files.length > 0) {
        importCSV(e.target.files[0]);
      }
    });
  }

  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    appState.installPrompt = event;
    el.install.hidden = false;
  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }

  render();
}

function saveSettings() {
  localStorage.setItem("treniruote:nustatymai", JSON.stringify({
    person: appState.person,
    workoutId: appState.workoutId,
    exerciseIndex: appState.exerciseIndex
  }));
}

function clampIndex() {
  const max = getWorkout().exercises.length - 1;
  if (appState.exerciseIndex < 0) appState.exerciseIndex = 0;
  if (appState.exerciseIndex > max) appState.exerciseIndex = max;
}

function setSvgContent(container, svgString) {
  container.innerHTML = "";
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, "image/svg+xml");
  const svgEl = doc.querySelector("svg");
  if (svgEl) {
    container.appendChild(svgEl);
  }
}

function render() {
  if (!appState.activeSession) ensureSession();
  clampIndex();
  saveSession();
  const workout = getWorkout();
  const exercise = getExercise();
  el.count.textContent = `${workout.title}. Pratimas ${appState.exerciseIndex + 1} iš ${workout.exercises.length}.`;
  el.exerciseName.textContent = exercise.name;
  el.openHistoryBtn.setAttribute('aria-label', `${exercise.name}, atidaryti istoriją`);
  setSvgContent(el.image, svgFor(exercise.image));
  el.hint.textContent = "Pažymėkite setą kaip atliktą. Svorį galima palikti pagal planą arba pataisyti pagal tai, ką darote šiandien.";
  
  el.historyView.hidden = true;
  el.mainWorkoutView.hidden = false;

  renderSessionPanel();
  renderSets(exercise);
  renderNav(workout);
  renderList(workout);
}

function renderSessionPanel() {
  const session = appState.activeSession;
  if (!session) return;

  el.sessionTitle.textContent = "Aktyvi treniruotė";
  el.sessionText.textContent = `Sesija pradėta ${session.date}. Baigus treniruotę įrašas bus išsaugotas istorijoje, o kitas atidarymas prasidės švariai.`;
  el.finishSession.hidden = false;
}

function renderSets(exercise) {
  el.sets.innerHTML = "";
  const weights = (Object.prototype.hasOwnProperty.call(exercise.weights, appState.person) ? Reflect.get(exercise.weights, appState.person) : null) || ["","",""];
  for (let i = 0; i < 3; i++) {
    const plannedWeight = valueOrDash(Reflect.get(weights, i));
    const plannedReps = valueOrDash(Reflect.get(exercise.reps, i));
    const done = isDone(appState.exerciseIndex, i);

    const card = document.createElement("article");
    card.className = "setCard" + (done ? " done" : "");
    card.setAttribute("aria-label", `${i + 1} setas. Pakartojimai: ${plannedReps}. Svoris: ${plannedWeight}.`);

    const text = document.createElement("div");
    const setTitle = document.createElement("div");
    setTitle.className = "setTitle";
    setTitle.textContent = (i + 1) + " setas";
    const setInfo = document.createElement("div");
    setInfo.className = "setInfo";
    setInfo.textContent = "Pakartojimai: ";
    const repsStrong = document.createElement("strong");
    repsStrong.textContent = plannedReps;
    setInfo.appendChild(repsStrong);
    setInfo.appendChild(document.createTextNode(". Svoris: "));
    const weightStrong = document.createElement("strong");
    weightStrong.textContent = plannedWeight;
    setInfo.appendChild(weightStrong);
    setInfo.appendChild(document.createTextNode("."));
    text.appendChild(setTitle);
    text.appendChild(setInfo);

    const button = document.createElement("button");
    button.className = "doneButton";
    button.type = "button";
    button.setAttribute("aria-pressed", done ? "true" : "false");
    button.textContent = done ? "Atlikta" : "Pažymėti";
    button.addEventListener("click", () => {
      setDone(appState.exerciseIndex, i, !isDone(appState.exerciseIndex, i));
      render();
    });

    const fields = document.createElement("div");
    fields.className = "setFields";
    const sessionSet = getSessionSet(appState.exerciseIndex, i, exercise);

    const weightLabel = document.createElement("label");
    weightLabel.textContent = "Šiandienos svoris ";
    const weightInput = document.createElement("input");
    weightInput.type = "text";
    weightInput.inputMode = "decimal";
    weightInput.setAttribute("aria-label", `${i + 1} seto šiandienos svoris`);
    weightInput.value = sessionSet.weight;
    weightLabel.appendChild(weightInput);

    const repsLabel = document.createElement("label");
    repsLabel.textContent = "Atlikti pakartojimai ";
    const repsInput = document.createElement("input");
    repsInput.type = "text";
    repsInput.inputMode = "numeric";
    repsInput.setAttribute("aria-label", `${i + 1} seto atlikti pakartojimai`);
    repsInput.value = sessionSet.reps;
    repsLabel.appendChild(repsInput);

    fields.appendChild(weightLabel);
    fields.appendChild(repsLabel);

    weightInput.addEventListener("input", e => {
        updateSessionSet(appState.exerciseIndex, i, { weight: e.target.value });
    });
    repsInput.addEventListener("input", e => {
        updateSessionSet(appState.exerciseIndex, i, { reps: e.target.value });
    });

    card.appendChild(text);
    card.appendChild(button);
    card.appendChild(fields);
    el.sets.appendChild(card);
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => {
    switch (char) {
      case "&": return "&amp;";
      case "<": return "&lt;";
      case ">": return "&gt;";
      case '"': return "&quot;";
      case "'": return "&#039;";
      default: return char;
    }
  });
}

function renderNav(workout) {
  el.prev.disabled = appState.exerciseIndex === 0;
  el.next.disabled = appState.exerciseIndex === workout.exercises.length - 1;
  const totalSets = workout.exercises.length * 3;
  let doneSets = 0;
  workout.exercises.forEach((_, exerciseIndex) => {
    for (let setIndex = 0; setIndex < 3; setIndex++) {
      if (isDone(exerciseIndex, setIndex)) doneSets++;
    }
  });
  el.progress.textContent = `Pažymėta ${doneSets} iš ${totalSets} setų.`;
}

function renderList(workout) {
  el.exerciseList.innerHTML = "";
  workout.exercises.forEach((exercise, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `${index + 1}. ${exercise.name}`;
    const completed = [0,1,2].every(setIndex => isDone(index, setIndex));
    button.className = index === appState.exerciseIndex ? "current" : (completed ? "completed" : "secondary");
    button.addEventListener("click", () => {
      appState.exerciseIndex = index;
      saveSession();
      saveSettings();
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    el.exerciseList.appendChild(button);
  });
}

init();
