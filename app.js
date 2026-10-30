// Simple state-based quiz app. Edit questions in questions.js
const app = document.getElementById("app");
const LEVELS = ["Easy", "Medium", "Hard"];
const state = { subject: null, level: null, concept: "All", qs: [], i: 0, score: 0, answered: false, wrong: [] };

const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const best = () => { try { return JSON.parse(localStorage.getItem("ieBest") || "{}"); } catch (e) { return {}; } };
const saveBest = (k, v) => { try { const b = best(); if (!b[k] || v > b[k]) { b[k] = v; localStorage.setItem("ieBest", JSON.stringify(b)); } } catch (e) {} };
const pool = (s, l) => QUESTIONS.filter(q => q.subject === s && (!l || q.level === l));

function home() {
  const b = best();
  app.innerHTML = `<div class="card"><h2>Choose a subject</h2><div class="grid">` +
    SUBJECTS.map(s => `<button data-s="${esc(s)}"><b>${esc(s)}</b><br><small>${pool(s).length} questions</small></button>`).join("") +
    `</div></div>` + (Object.keys(b).length ? `<div class="card"><small>Best scores: ` + Object.entries(b).map(([k, v]) => `${esc(k)} – ${v}%`).join(" · ") + `</small></div>` : "");
  app.querySelectorAll("[data-s]").forEach(el => el.onclick = () => { state.subject = el.dataset.s; setup(); });
}

function setup() {
  const concepts = ["All", ...new Set(pool(state.subject).map(q => q.concept))];
  app.innerHTML = `<div class="card"><h2>${esc(state.subject)}</h2>
    <p><b>Level</b></p><div class="grid">${LEVELS.map(l => `<button data-l="${l}">${l}<br><small>${pool(state.subject, l).length} questions</small></button>`).join("")}</div>
    <p><b>Concept</b></p><select id="concept" style="width:100%;padding:10px;border-radius:10px">${concepts.map(c => `<option>${esc(c)}</option>`).join("")}</select>
    <p><button id="back">← Back</button></p></div>`;
  document.getElementById("back").onclick = home;
  app.querySelectorAll("[data-l]").forEach(el => el.onclick = () => start(el.dataset.l, document.getElementById("concept").value));
}

function start(level, concept) {
  state.level = level; state.concept = concept;
  state.qs = shuffle(pool(state.subject, level).filter(q => concept === "All" || q.concept === concept));
  if (!state.qs.length) { alert("No questions for this selection yet. Add some in questions.js!"); return; }
  Object.assign(state, { i: 0, score: 0, answered: false, wrong: [] });
  show();
}

function show() {
  const q = state.qs[state.i];
  const order = shuffle(q.options.map((t, idx) => ({ t, idx })));
  state.answered = false;
  app.innerHTML = `<div class="card"><div class="bar"><div style="width:${(state.i / state.qs.length) * 100}%"></div></div>
    <div class="row"><span><span class="pill">${esc(q.level)}</span><span class="pill">${esc(q.concept)}</span></span><small>${state.i + 1} / ${state.qs.length}</small></div>
    <h2 style="margin-top:14px">${esc(q.q)}</h2>
    ${order.map(o => `<button class="opt" data-i="${o.idx}">${esc(o.t)}</button>`).join("")}
    <div id="fb"></div></div>`;
  app.querySelectorAll(".opt").forEach(el => el.onclick = () => answer(el, q));
}

function answer(el, q) {
  if (state.answered) return;
  state.answered = true;
  const pick = +el.dataset.i, ok = pick === q.answer;
  if (ok) state.score++; else state.wrong.push(q);
  app.querySelectorAll(".opt").forEach(b => { if (+b.dataset.i === q.answer) b.classList.add("correct"); });
  if (!ok) el.classList.add("wrong");
  const last = state.i === state.qs.length - 1;
  document.getElementById("fb").innerHTML = `<div class="exp"><b>${ok ? "Correct!" : "Not quite."}</b> ${esc(q.explanation)}</div>
    <p><button class="primary" id="next">${last ? "See result" : "Next →"}</button></p>`;
  document.getElementById("next").onclick = () => { state.i++; last ? result() : show(); };
}

function result() {
  const pct = Math.round((state.score / state.qs.length) * 100);
  saveBest(`${state.subject} (${state.level})`, pct);
  app.innerHTML = `<div class="card" style="text-align:center"><h2>Result</h2><div class="score">${state.score} / ${state.qs.length}</div><p>${pct}%</p>
    <div class="grid"><button class="primary" id="again">Retry</button><button id="home">Home</button></div></div>` +
    (state.wrong.length ? `<div class="card"><h2>Review mistakes</h2>${state.wrong.map(q => `<p><b>${esc(q.q)}</b><br>✔ ${esc(q.options[q.answer])}<br><small>${esc(q.explanation)}</small></p>`).join("")}</div>` : "");
  document.getElementById("again").onclick = () => start(state.level, state.concept);
  document.getElementById("home").onclick = home;
}

home();
