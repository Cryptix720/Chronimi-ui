/*!
 * # Chronimi 1.0.0 - Scripto
 * http://github.com/chronimi/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
$(document).ready(function() {

	$(".mobile-menu-icon").on("click", function(){
		$(".primary-nav").slideToggle();
		$(this).toggleClass("open");
	});
	//open modal
	$(".learn-more").on("click", function(event){
		event.preventDefault();
		$(".modal-learn-more").fadeIn();
	});
	//close modal
	$(".close-modal").on("click", function(event){
		event.preventDefault();
		$(".modal-learn-more").fadeOut();
	});

});