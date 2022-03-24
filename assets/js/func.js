$(function() {
	$("#question").on("click",function() {
	  $(".answer").toggle(this.checked);
	});
  });