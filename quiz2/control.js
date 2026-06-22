// Hàm ghi vào console box trên trang
function log(msg) {
  const box = document.getElementById('consoleBox');
  box.textContent += msg + '\n';
}

// ─────────────────────────────────────────
// TODO 1: dùng if...else if...else để in ra xếp loại
// ─────────────────────────────────────────
function checkScore() {
  const input = document.getElementById('scoreInput');
  const result = document.getElementById('scoreResult');
  const score = parseFloat(input.value);

  if (isNaN(score) || score < 0 || score > 10) {
    result.textContent = '⚠️ Vui lòng nhập điểm hợp lệ từ 0 đến 10.';
    result.style.borderLeftColor = '#f87171';
    result.style.color = '#f87171';
    result.classList.remove('hidden');
    return;
  }

  let xepLoai;
  if (score >= 9) {
    xepLoai = 'Xuất sắc 🏆';
  } else if (score >= 8) {
    xepLoai = 'Giỏi 🌟';
  } else if (score >= 6.5) {
    xepLoai = 'Khá 👍';
  } else if (score >= 5) {
    xepLoai = 'Trung bình 📘';
  } else {
    xepLoai = 'Yếu ❌';
  }

  result.style.borderLeftColor = '#4ade80';
  result.style.color = '#4ade80';
  result.textContent = `Điểm: ${score} → Xếp loại: ${xepLoai}`;
  result.classList.remove('hidden');

  log(`[TODO 1] Điểm ${score} → ${xepLoai}`);
}

// ─────────────────────────────────────────
// TODO 2: vòng for in các số từ 1 đến 5
// ─────────────────────────────────────────
function printNumbers() {
  const result = document.getElementById('numberResult');
  let output = 'In các số từ 1 đến 5 bằng vòng for:\n';

  for (let i = 1; i <= 5; i++) {
    output += `  → ${i}\n`;
    log(`[TODO 2] ${i}`);
  }

  result.textContent = output.trim();
  result.classList.remove('hidden');
}

// ─────────────────────────────────────────
// TODO 3: vòng for tính tổng từ 1 đến 5
// ─────────────────────────────────────────
function calcTotal() {
  const result = document.getElementById('totalResult');
  let total = 0;

  for (let i = 1; i <= 5; i++) {
    total += i;
  }

  console.log('Tổng =', total); // giữ nguyên như đề bài
  log(`[TODO 3] Tổng = ${total}`);

  result.textContent = `Tổng = ${total}`;
  result.classList.remove('hidden');
}
