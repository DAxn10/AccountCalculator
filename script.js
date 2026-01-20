function safeInt(id) {
  let el = document.getElementById(id);
  let v = parseInt(el.value, 10);

  if (isNaN(v) || v < 1) {
    el.value = 0; // blank / invalid / negative → 0
    return 0;
  }
  return v;
}

function calculate() {
  let csEl = document.getElementById("cs");
  let cs = parseInt(csEl.value, 10);

  if (isNaN(cs)) {
    cs = 0;
    csEl.value = 0;
  }

  let epicLow = safeInt("epicLow");
  let epicHigh = safeInt("epicHigh");
  let epicTop = safeInt("epicTop");

  let normal103 = safeInt("normal103");
  let normal102 = safeInt("normal102");

  let manager = safeInt("manager");
  let ronaldo = safeInt("ronaldo");
  let messi = safeInt("messi");

  let bestLow = safeInt("bestLow");
  let bestHigh = safeInt("bestHigh");

  // ---- Collective Strength Price ----
  let csPrice = 0;
  if (cs >= 3100 && cs <= 3165) csPrice = 300;
  else if (cs >= 3166 && cs <= 3200) csPrice = 700;
  else if (cs >= 3201 && cs <= 3225) csPrice = 1000;
  else if (cs >= 3226 && cs <= 3250) csPrice = 1500;
  else if (cs >= 3251 && cs <= 3275) csPrice = 2500;
  else if (cs >= 3276 && cs <= 3300) csPrice = 3500;

  // ---- Total Price ----
  let price =
    csPrice +
    (epicLow * 100) +
    (epicHigh * 200) +
    (epicTop * 500) +
    (Math.floor(normal103 / 2) * 50) +
    (Math.floor(normal102 / 2) * 25) +
    (manager * 50) +
    (ronaldo * 600) +
    (messi * 800) +
    (bestLow * 400) +
    (bestHigh * 0); // 🔧 change if you set BestPlayer(108) price

  document.getElementById("result").innerText =
    "Total ID Price: Rs " + price;
}

function clearAll() {
  const ids = [
    "cs",
    "epicLow",
    "epicHigh",
    "epicTop",
    "normal103",
    "normal102",
    "manager",
    "ronaldo",
    "messi",
    "bestLow",
    "bestHigh"
  ];

  ids.forEach(id => {
    let el = document.getElementById(id);
    if (el) el.value = 0;
  });

  document.getElementById("result").innerText =
    "Total ID Price: Rs 0";
}
