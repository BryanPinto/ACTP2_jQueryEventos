$(document).ready(function(){
	//abrir y cerrar cartas (imagenes)
	$(".card").on("click", function(){
		$(this).toggleClass("card--open");
	});
	//agregar y quitar color rojo a corazones
	$(".card__like").on("click", function(e){
		$(this).toggleClass("card__like--red");
		e.stopPropagation();
	});
	//evitar que un link me navegue a #
	$("a[href='#']").on("click", function(e){
		e.preventDefault();
	});
	//agregar y quitar clase a boton seguir de las cartas
	$(".card__follow-btn").on("click", function(e){
		$(this).toggleClass("card__follow-btn--following");
		e.stopPropagation();
	});
});
