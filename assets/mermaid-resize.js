(function () {
  function resizeMermaidSVGs() {
    document.querySelectorAll('.mermaid svg').forEach(function (svg) {
      svg.removeAttribute('width');
      svg.removeAttribute('height');
      svg.style.removeProperty('max-width');
      svg.style.width = '100%';
      svg.style.height = 'auto';
    });
  }

  // Mermaid renders on window load — run after its callbacks complete
  window.addEventListener('load', function () {
    setTimeout(resizeMermaidSVGs, 50);
    setTimeout(resizeMermaidSVGs, 300);
  });
})();
