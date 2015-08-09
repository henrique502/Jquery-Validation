/*
* Valida Telefone sem DDD:
*
* Formatos aceitos:
* 9999 9999
* 99999 9999
* 9999-9999
* 99999-9999
* 99999999
* 999999999
*/
$.validator.addMethod("telefoneBR", function(value, element) {
	var numbers = value.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "");

	if (numbers === "" ||
		numbers === "00000000" || numbers === "000000000" ||
		numbers === "11111111" || numbers === "111111111" ||
		numbers === "22222222" || numbers === "222222222" ||
		numbers === "33333333" || numbers === "333333333" ||
		numbers === "44444444" || numbers === "444444444" ||
		numbers === "55555555" || numbers === "555555555" ||
		numbers === "66666666" || numbers === "666666666" ||
		numbers === "77777777" || numbers === "777777777" ||
		numbers === "88888888" || numbers === "888888888" ||
		numbers === "99999999" || numbers === "999999999"
	){
		return false;
	}

	return this.optional(element) || /^\d{4,5}[\s-]?\d{4}$/.test( numbers );
}, "Informe um Telefone válido.");