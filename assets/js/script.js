$(document).ready(function(){
	//abrir y cerrar cartas (imagenes)
	$(".card").on("click", function(){
		$(this).toggleClass("card--open");
	});
	//agregar y quitar color rojo a corazones
	$(".card__like").on("click", function(e){
		$(this).toggleClass("card__like--red");
		e.stopPropagation();
		e.preventDefault();
	});
	//agregar y quitar clase a boton seguir de las cartas
	$(".card__follow-btn").on("click", function(e){
		$(this).toggleClass("card__follow-btn--following");
		e.stopPropagation();
	});
	//mostrar imagen al seleccionarla de la lista despleglable
	$("#image").on("change", function(e){
		$(".create__image img").attr("src", "assets/images/squared/" + $(this).val());
	});
	//mostrar imagen del autor seleccionado
	$("#author").on("change", function(){
		$(".create__profile img").attr("src", "assets/images/profiles/" + $(this).val());
	});
});
