
$(function() {
	
  // function pausevideo() {
  //   var vid = document.getElementById("vid1"); 
  //   vid.pause();
  // }
	
	
	
	$('.showVid').click(function() {
    document.getElementById("vid1").controls = true;
		$('.videoModal').addClass('toggle');
    $('.videoModal video').addClass('OpenVideo');
    $('.videoModal video').get(0).play();
    
	});
	$('.videoModal').click(function() {
    // $('.videoModal video').get(0).pause();
    $('.videoModal').removeClass('toggle');
    $('.videoModal video').removeClass('OpenVideo');
    
	});
	
});