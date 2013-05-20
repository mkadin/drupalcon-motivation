Reveal.addEventListener('ready', function(event) {
  $('.kadin-fragment').hide();  
});
  
  
Reveal.addEventListener('fragmentshown', function(event) {
  var index = $(event.fragment).attr('data-fragment-index');
  $('.kadin-fragment').fadeOut(500, function () {
    $(event.fragment).closest('section').find('[data-kadin-fragment=' + index + ']').fadeIn(500);
  });
});

Reveal.addEventListener('fragmenthidden', function(event) {
  var index = $(event.fragment).attr('data-fragment-index');
  $(event.fragment).closest('section').find('[data-kadin-fragment=' + index + ']').fadeOut(500);
});
  
