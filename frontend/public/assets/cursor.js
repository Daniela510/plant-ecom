const cursor = document.querySelector('.cursor');
const cursorinner = document.querySelector('.cursor2');
const a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  cursorinner.style.left = e.clientX + 'px';
  cursorinner.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', function(){
  cursorinner.classList.add('cursorinnerdown')
});

document.addEventListener('mouseup', function(){
  cursorinner.classList.remove('cursorinnerdown')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})