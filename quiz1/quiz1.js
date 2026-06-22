// Toggle hiển thị/ẩn phần giải thích của tất cả câu hỏi
function toggleExplain() {
  const explains = document.querySelectorAll('.explain');
  const btn = document.getElementById('toggleBtn');

  // Kiểm tra trạng thái hiện tại dựa vào câu đầu tiên
  const isHidden = explains[0].classList.contains('hidden');

  explains.forEach(function(el) {
    if (isHidden) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  });

  btn.textContent = isHidden ? 'Ẩn giải thích' : 'Hiện giải thích';
}
