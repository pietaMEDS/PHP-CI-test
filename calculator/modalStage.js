document.addEventListener('DOMContentLoaded', function(){
    let circles = document.querySelectorAll('.circleStage');
    let modal = document.getElementById('myModal');
  
    circles.forEach(function(circle) {
      circle.addEventListener('click', function() {
        modal.style.display = 'block';
      });
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  });

