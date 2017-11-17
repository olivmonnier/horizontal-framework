const btns = Array.from(document.querySelectorAll('[data-toggle="appbar"]'));

btns.forEach(btn => 
  btn.addEventListener('click', function() {
    this.closest('.appbar').classList.toggle('in')
  })
)