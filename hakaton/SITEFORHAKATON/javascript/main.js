$.fn.animate_Text = function() {
    var string = this.text();
    return this.each(function(){
     var $this = $(this);
     $this.html(string.replace(/./g, '<span class="new">$&</span>'));
     $this.find('span.new').each(function(i, el){
      setTimeout(function(){ $(el).addClass('div_opacity'); }, 300 * i);
     });
    });
   };
   $('#layers_title').show();
   $('#layers_title').animate_Text();


new Rellax('.rellax'); 

new Rellax('.arrow-7');

new Rellax('.parellax',{ horizontal: true});

new Parallax( document.getElementById('scene1'));
new Parallax( document.getElementById('scene2'));
new Parallax( document.getElementById('scene3'));
new Parallax( document.getElementById('scene4'));
new Parallax( document.getElementById('scene5'));
new Parallax( document.getElementById('scene6'));
new Parallax( document.getElementById('scene7'));
new Parallax( document.getElementById('scene8'));
new Parallax( document.getElementById('scene9'));
new Parallax( document.getElementById('scene10'));


function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation, .animated-word');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

button = document.querySelector('.button');

button.addEventListener('mouseup', function(){
  this.classList.add('active');
  setTimeout(function () {
    button.classList.remove('active');
}, 300);
});

