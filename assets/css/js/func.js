const hide = function() {
	var cb = document.getElementById("checkbox");
	var shipping = document.getElementsByClassName("billing");
	if (cb.checked) {
		for (var i = 0; i < shipping.length; i++) {
			shipping[i].classList.add("hide");
		}
	} else {
		for (var i = 0; i < shipping.length; i++) {
			shipping[i].classList.remove("hide");
		}
	}
}

let checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", hide);


function phoneMask() {
	var num = $(this).val().replace(/\D/g, '');
	$(this).val(num.substring(0, 1) + '(' + num.substring(1, 4) + ')' + num.substring(4, 7) + '-' + num.substring(7, 11));
}
$('[type="tel"]').keyup(phoneMask);