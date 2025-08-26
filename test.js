const sorular = [
  {
    soru: "Atomun en küçük yapı taşı nedir?",
    secenekler: ["Proton", "Elektron", "Atom", "Nötron"],
    cevap: "Atom"
  },
  {
    soru: "Excel'de formül başlatmak için hangi karakter kullanılır?",
    secenekler: ["=", "+", %", "*"],
    cevap: "="
  },
  {
    soru: "Word'de metni kalın yapmak için hangi kısayol kullanılır?",
    secenekler: ["Ctrl + B", "Ctrl + K", "Ctrl + M", "Ctrl + D"],
    cevap: "Ctrl + B"
  }
];

let aktif = 0;
let dogru = 0;

function testiBaslat() {
  aktif = 0;
  dogru = 0;
  document.getElementById("test-alani").innerHTML = "";
  sonrakiSoru();
}

function sonrakiSoru() {
  if (aktif >= sorular.length) {
    document.getElementById("test-alani").innerHTML = `<p>Test tamamlandı. Doğru sayısı: ${dogru}</p>`;
    return;
  }

  const s = sorular[aktif];
  let html = `<p><strong>${s.soru}</strong></p>`;
  s.secenekler.forEach(sec => {
    html += `<button onclick="cevapKontrol('${sec}')">${sec}</button><br>`;
  });
  document.getElementById("test-alani").innerHTML = html;
}

function cevapKontrol(secilen) {
  if (secilen === sorular[aktif].cevap) dogru++;
  aktif++;
  sonrakiSoru();
}