"use strict";
const names = { 19: "Monday", 20: "Tuesday", 21: "Wednesday", 22: "Thursday" },
  $ = (id) => document.getElementById(id),
  data = window.GALLERY;
let day = "19",
  current = [],
  index = 0,
  returnFocus = null;
const path = (p) => p.split("/").map(encodeURIComponent).join("/");
for (const d of Object.keys(names)) {
  let b = document.createElement("button");
  b.innerHTML = `<strong>${names[d]}</strong>October ${d}`;
  b.onclick = () => choose(d);
  b.dataset.day = d;
  $("days").append(b);
}
function choose(d) {
  day = d;
  for (const b of $("days").children)
    b.setAttribute("aria-pressed", String(b.dataset.day === d));
  $("dayTitle").textContent = `${names[d]}, October ${d}`;
  $("events").replaceChildren(new Option("All events", ""));
  data.forEach((a, i) => {
    if (a.day === d)
      $("events").add(
        new Option((a.time ? a.time + " · " : "") + a.title, String(i)),
      );
  });
  render();
}
function render() {
  const albums = data.filter(
    (a, i) =>
      a.day === day && (!$("events").value || i === Number($("events").value)),
  );
  $("albums").replaceChildren();
  $("summary").textContent =
    `${albums.length} events · ${albums.reduce((s, a) => s + a.photos.length, 0)} photos`;
  for (const a of albums) {
    const section = document.createElement("section"),
      head = document.createElement("div"),
      h = document.createElement("h3"),
      n = document.createElement("span"),
      grid = document.createElement("div");
    head.className = "albumhead";
    h.textContent = a.title;
    n.textContent = `${a.time ? a.time + " CT · " : ""}${a.photos.length} photos`;
    head.append(h, n);
    grid.className = "grid";
    a.photos.forEach((p, i) => {
      const b = document.createElement("button"),
        im = document.createElement("img");
      b.className = "photo";
      b.setAttribute("aria-label", `View ${a.title}, photo ${i + 1}`);
      im.src = path(p);
      im.alt = `${a.title} — photo ${i + 1}`;
      im.loading = "lazy";
      im.decoding = "async";
      im.onerror = () => {
        b.replaceChildren();
        let msg = document.createElement("span");
        msg.className = "missing";
        msg.textContent = "Photo unavailable";
        b.append(msg);
      };
      b.append(im);
      b.onclick = () => {
        current = a.photos;
        index = i;
        returnFocus = b;
        $("caption").textContent = a.title;
        show();
        $("viewer").showModal();
      };
      grid.append(b);
    });
    section.append(head, grid);
    $("albums").append(section);
  }
}
function show() {
  const src = path(current[index]);
  $("large").src = src;
  $("large").alt = `${$("caption").textContent}, photo ${index + 1}`;
  $("original").href = src;
  $("position").textContent = `${index + 1} / ${current.length}`;
}
function move(n) {
  index = (index + n + current.length) % current.length;
  show();
}
$("events").onchange = render;
$("prev").onclick = () => move(-1);
$("next").onclick = () => move(1);
$("close").onclick = () => $("viewer").close();
$("viewer").addEventListener("close", () => returnFocus?.focus());
$("viewer").addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    move(-1);
  }
  if (e.key === "ArrowRight") {
    e.preventDefault();
    move(1);
  }
});
choose(day);
