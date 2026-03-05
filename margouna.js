function fmt(n) {
  return n.toLocaleString("ar-EG", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function setVal(id, v) {
  document.getElementById(id).innerHTML = fmt(v) + '<span class="cur"> ج</span>';
}
function showError(msg) {
  const err = document.getElementById("error");
  document.getElementById("result").classList.remove("show");
  err.textContent = msg;
  err.classList.remove("show");
  void err.offsetWidth;
  err.classList.add("show");
}
function calculate() {
  const price  = parseFloat(document.getElementById("price").value);
  const months = parseInt(document.getElementById("months").value);
  const rate   = parseFloat(document.getElementById("rate").value);
  document.getElementById("error").classList.remove("show");
  if (isNaN(price)  || price  <= 0)     return showError("⚠️ من فضلك أدخل سعر الجهاز");
  if (isNaN(months) || months < 1 || months > 36) return showError("⚠️ عدد الأشهر يجب أن يكون بين 1 و 36");
  if (isNaN(rate)   || rate < 0)        return showError("⚠️ من فضلك أدخل نسبة الفائدة");
  const down = price * 0.35;
  const rem  = price - down;
  const mr   = (rate / 100 / 12) * months;
  const mo   = (rem * (1 + mr)) / months;
  setVal("r-down",    down);
  setVal("r-monthly", mo);
  const r = document.getElementById("result");
  r.classList.remove("show"); void r.offsetWidth; r.classList.add("show");
}
document.addEventListener("keydown", e => { if (e.key === "Enter") calculate(); });
