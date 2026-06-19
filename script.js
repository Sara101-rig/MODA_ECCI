// GLOSSARY SEARCH
const glossSearch = document.getElementById('glossSearch');
if (glossSearch) {
  glossSearch.addEventListener('input', function () {
    const term = this.value.toLowerCase();
    document.querySelectorAll('.table-gloss tbody tr').forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(term) ? '' : 'none';
    });
  });
}

// MODAL IMAGE SETTER (for gallery grid images)
function setModalImg(src) {
  const img = document.getElementById('modalImgTag');
  if (img) img.src = src;
}