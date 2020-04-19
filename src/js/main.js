$(document).ready(() => {
  
    function bindEvents() {
      $('.egg').click(function() {
        $(this).removeClass('fill-0 fill-1 fill-2 fill-3 fill-4');
        var classNo = Math.round( Math.random() * 4);
        console.log(classNo);
        var eggClass = `fill-${classNo}`;
        $(this).addClass(eggClass);
        
      });
    }
  
  
    
    /* FUNCTION CALLS */
    /* ============= */
    bindEvents();
  
  });