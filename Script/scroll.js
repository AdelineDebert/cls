var scrollY = 0;
var distance = 30;
var speed = 20;


function scrollDownTo(element){
  var currentY = window.pageYOffset;
  var targetY = document.getElementById(element).offsetTop;
  var bodyHeight = document.body.offsetHeight;
  var yPos = currentY + window.innerHTML;
  var animator = setTimeout('scrollDownTo(\''+element+'\')',speed);
    if(yPos > bodyHeight){
      clearTimeout(animator);
    }else{
      if(currentY < targetY - distance){
        scrollY = currentY + distance;
        window.scroll(0, scrollY);
      }else{
        clearTimeout(animator);
      }
    }
}

function scrollUpTo(element){
  var currentY = window.pageYOffset;
  var targetY = document.getElementById(element).offsetTop;
  var bodyHeight = document.body.offsetHeight;
  var yPos = currentY + window.innerHTML;
  var animator = setTimeout('scrollUpTo(\''+element+'\')',speed);
    if(yPos > bodyHeight){
      clearTimeout(animator);
    }else{
      if(currentY > targetY - distance){
        scrollY = currentY - distance;
        window.scroll(0, scrollY);
      }else{
        clearTimeout(animator);
      }
    }
}

function scrollHead(element){
  var currentY = window.pageYOffset;
  var targetY = document.getElementById(element).offsetTop;
  var animator = setTimeout('scrollHead(\''+element+'\')',speed);
  if(currentY > targetY){
    scrollY = currentY - distance;
    window.scroll(0, scrollY);
  }else{
    clearTimeout(animator);
  }
}
