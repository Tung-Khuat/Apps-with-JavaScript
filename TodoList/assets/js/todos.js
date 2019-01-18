// Check off Todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Delete Todos
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(350,function(){
		$(this).remove();
	});
	event.stopPropagation();

});

// input a new Todo
$("input").keypress(function(event){
	if(event.which === 13){
		// grab to do text from input
		var todoText = $(this).val();
		$(this).val("");
		// create new li
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
})

$("input").hide();

$(".fa-plus").click(function(){
	$("input").fadeToggle();
})

$("h1 .fa-trash").click(function(){
	$("li").remove();
	$("input").fadeIn();
})