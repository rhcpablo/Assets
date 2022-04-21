//pages-internal/upload/section-upload-collateral.php
function validatePattern(_evt, _this) {
    var _char = _evt.keyCode || _evt.which,
        _pattern = new RegExp(_evt.target.pattern, 'i');
    return _pattern.test(String.fromCharCode(_char)) ? _char : false;
}



//no files
/*function enableSubmitButton(_this) {
	var _submit_btn = null,
		_is_valid = true;
		_form = _this.parentNode;
		
	for (var i = 0; i < _form.childNodes.length; i++) {
		if (_form.childNodes[i].tagName == "INPUT" || _form.childNodes[i].tagName == "SELECT" || _form.childNodes[i].tagName == "TEXTAREA") {
			
			if (_form.childNodes[i].type == "submit") _submit_btn = _form.childNodes[i];
			if (_form.childNodes[i].required == true && _form.childNodes[i].type != "hidden" && (_form.childNodes[i].value == "" || _form.childNodes[i].value == " " || _form.childNodes[i].value.trim() == "")) _is_valid = false;
		} 
	}
	if (_submit_btn != null) {
		if (_is_valid) _submit_btn.classList.remove("disabled");
		else _submit_btn.classList.add("disabled");
	}
}*/



//no files
/*function validateForm() {
	var _g_recaptcha_response = document.getElementById("g-recaptcha-response");
	if (_g_recaptcha_response == null || _g_recaptcha_response.value.trim() == "") {
		alert("Please check reCAPTCHA validation");
		return false;
	}
	var _g_recaptcha = document.getElementById("recaptcha-anchor");
	if (_g_recaptcha) {
		if (_g_recaptcha.getAttribute("aria-checked") == false || _g_recaptcha.getAttribute("aria-checked") == "false") {
			alert("Please check reCAPTCHA validation");
			return false;
		}
	}
}*/



//pages-website/other/documents-library-post.php
function phonePattern(_evt, _this, _pattern) {
	var _return = true,
		_char = event.key,
		_char_code = _evt.which ? _evt.which : event.keyCode;
	//if (_char_code > 31 && (_char_code < 48 || _char_code > 57) && _char_code != 8) _return = false;
	if (_char_code > 31 && (_char_code < 48 || (_char_code > 57 && _char_code < 96) || _char_code > 105) && _char_code != 8) _return = false;
	else if (_char_code != 8) {
		if (_this.value == "") {
			_this.value = _pattern.replace("x", _char).replace(/x/g, " ");
			_return = false;
		} else {
			_this.value = _this.value.replace(" ", _char);
			_return = false;
		}
	}
	return _return;

}



//no files
/*function isNumberKey(_evt, _this) {
	var _return = true,
		_length = parseInt(_this.value.length) + 1,
		_char_code = _evt.which ? _evt.which : event.keyCode;
	if (_char_code > 31 && (_char_code < 48 || _char_code > 57) && _char_code != 8) _return = false;
	else if (_char_code != 8) {
		for (i = 0; i < _this.attributes.length; i++) {
			if (_this.attributes[i].name == "length" && _this.attributes[i].value != "") {
				var _x = parseInt(_this.attributes[i].value);
				if (_length > _x) _return = false;
			}
		}
	}
	return _return;
}*/



//no files
/*function isAlphaKey(_evt, _this) {
	var _return = true,
		_length = parseInt(_this.value.length) + 1,
		_char_code = _evt.which ? _evt.which : event.keyCode;

	if (_char_code != 8 && _char_code != 46 && _char_code != 32) {
		for (i = 0; i < _this.attributes.length; i++) {
			if (_this.attributes[i].name == "length" && _this.attributes[i].value != "") {
				var _x = parseInt(_this.attributes[i].value);
				if (_length > _x) _return = false;
			}
		}
		if (_return == true) {
			if (_evt.type == "keydown") {
				if ((_char_code >= 48 && _char_code <= 57) || // non-numeric pad numbers
					(_char_code >= 96 && _char_code <= 105) || // numeric pad numbers 
					(_char_code >= 65 && _char_code <= 90) || // a-z & A-Z 
					_char_code == 189 || // - 
					_char_code == 56 || // ( 
					_char_code == 57 || // ( 
					_char_code == 35 || // end 
					_char_code == 36 || // home 
					_char_code == 37 || // left 
					_char_code == 39 || // right 
					_char_code == 46) /* delete 
					_return = true; 
				else _return = false;
			} else if (_evt.type == "keypress") {
				if ((_char_code >= 48 && _char_code <= 57) || // non-numeric pad numbers && numeric pad numbers 
					(_char_code >= 97 && _char_code <= 122) || // a-z 
					(_char_code >= 65 && _char_code <= 90) || // A-Z 
					_char_code == 40 || // ( 
					_char_code == 41 || // ) 
					_char_code == 45 || // - 
					_char_code == 95) /* _ 
					_return = true; 
				else _return = false; 
			}
		}
	}
	return _return;
}*/



//pages-internal/upload/section-upload-ir-presentation.php:
function isDate(_evt, _this) {
	var _return = true,
		_length = parseInt(_this.value.length),
		_char_code = _evt.which ? _evt.which : event.keyCode,
		_value_split = _this.value.split("-");

	if (_evt.type == "keyup") {
		if (_length > 0 && _this.value[_length - 1] != "-") {
			if (_length > 10) _this.value = (_this.value).substring(0, 10);
			else if (_length == 5) _this.value = (_this.value).substring(0, 4) + "-" + _this.value[_length - 1];
			else if (_length == 8) _this.value = (_this.value).substring(0, 7) + "-" + _this.value[_length - 1];
		}
	} else if (_evt.type == "keypress") {
		if (_char_code >= 48 && _char_code <= 57) _return = true; else _return = false;
		if (_return == true) {
			switch (_length) {
			 case 0:
				if (_char_code != 49 && _char_code != 50) _return = false;
				break;
			 case 1:
				if (parseInt(_this.value) == 1 && _char_code != 57) _return = false;
				else if (parseInt(_this.value) == 2 && _char_code != 48) _return = false;
				break;
			 case 4:
				if (_char_code != 48 && _char_code != 49) _return = false;
				break;
			 case 5:
				if (_char_code != 48 && _char_code != 49) _return = false;
				break;
			 case 6:
				if (parseInt(_this.value[5]) == 0) if (_char_code >= 49 && _char_code <= 57) _return = true; else _return = false;
				else if (parseInt(_this.value[5]) == 1) if (_char_code >= 48 && _char_code <= 50) _return = true; else _return = false;
				break;
			 case 7:
				var _month = parseInt(_this.value[5] + _this.value[6]);
				if (_month == 2) if (_char_code >= 48 && _char_code <= 50) _return = true; else _return = false;
				else if (_month == 1 || _month == 3 || _month == 5 || _month == 7 || _month == 8 || _month == 10 || _month == 12) if (_char_code >= 48 && _char_code <= 51) _return = true; else _return = false;
				else if (_month == 4 || _month == 6 || _month == 9 || _month == 11) if (_char_code >= 48 && _char_code <= 51) _return = true; else _return = false;
				break;
			 case 8:
				var _month = parseInt(_this.value[5] + _this.value[6]);
				if (_month == 2) if (_char_code >= 48 && _char_code <= 50) _return = true; else _return = false;
				else if (_month == 1 || _month == 3 || _month == 5 || _month == 7 || _month == 8 || _month == 10 || _month == 12) if (_char_code >= 48 && _char_code <= 51) _return = true; else _return = false;
				else if (_month == 4 || _month == 6 || _month == 9 || _month == 11) if (_char_code >= 48 && _char_code <= 51) _return = true; else _return = false;
				break;
			 case 9:
				var _month = parseInt(_this.value[5] + _this.value[6]);
				var _year = parseInt(_this.value[0] + _this.value[1] + _this.value[2] + _this.value[3]);
				var _leap_year = ((_year % 4 == 0 && _year % 100 != 0) || _year % 400 == 0) ? true : false;
				if (_month == 2) {
					if (parseInt(_this.value[8]) == 0) if (_char_code >= 49 && _char_code <= 57) _return = true; else _return = false;
					else if (parseInt(_this.value[8]) == 1) if (_char_code >= 48 && _char_code <= 57) _return = true; else _return = false;
					else if (parseInt(_this.value[8]) == 2) {
						if (_leap_year) {
							if (_char_code >= 48 && _char_code <= 57) _return = true; else _return = false;
						} else if (_char_code >= 48 && _char_code <= 56) _return = true; else _return = false;
					}
				}
				else if (_month == 1 || _month == 3 || _month == 5 || _month == 7 || _month == 8 || _month == 10 || _month == 12) {
					if (parseInt(_this.value[8]) == 0) if (_char_code >= 49 && _char_code <= 57) _return = true; else _return = false;
					else if (parseInt(_this.value[8]) == 1) if (_char_code >= 48 && _char_code <= 57) _return = true; else _return = false;
					else if (parseInt(_this.value[8]) == 2) if (_char_code >= 48 && _char_code <= 57) _return = true; else _return = false;
					else if (parseInt(_this.value[8]) == 3) if (_char_code != 48 && _char_code != 49) _return = false;			 
				}
				else if (_month == 4 || _month == 6 || _month == 9 || _month == 11) {
					if (parseInt(_this.value[8]) == 0) if (_char_code >= 49 && _char_code <= 57) _return = true; else _return = false;
					else if (parseInt(_this.value[8]) == 1) if (_char_code >= 48 && _char_code <= 57) _return = true; else _return = false;
					else if (parseInt(_this.value[8]) == 2) if (_char_code >= 48 && _char_code <= 57) _return = true; else _return = false;
					else if (parseInt(_this.value[8]) == 3) if (_char_code != 48 && _char_code != 40) _return = false;	
				}
				break;
			 case 10:
				_return = false;
				break;
			 default:
				_return = true;
			}
		}
	}
	return _return;
}





//old-um/users-account.php:
//old-um/users-login.php:
//pages-internal/news-releases-quotemedia.php:
//old-partners/login.php:
//old-partners/register.php:
function passwordVisibility(_view_button_id, _input_id, _submit_button_id) {
	var _toggle_password = document.getElementById(_view_button_id),
		_password_input = document.getElementById(_input_id),
		_submit_button = document.getElementById(_submit_button_id);
	
	try {
		_password_input.parentNode.style.position = "relative";
		_password_input.parentNode.appendChild(_toggle_password);
		
		_toggle_password.addEventListener("click", function (e) {
			const type = _password_input.getAttribute('type') === "password" ? "text" : "password";
			_password_input.setAttribute("type", type);
			this.classList.toggle("bi-eye-slash-fill");
			!this.classList.contains("bi-eye-slash-fill") ? _submit_button.classList.remove("disabled") : _submit_button.classList.add("disabled");
		});
	} catch(e) {
		console.log(e);
		_toggle_password.style.display = "none";
	}
}



//no files
/*function sortSelectOptions(_id) {
	var _select = document.querySelector("#" + _id),
		_options = new Array();

	for (i = 1; i < _select.length; i++) {
		_options[i - 1] = _select.options[i].text.toUpperCase() + "," + _select.options[i].text + "," + _select.options[i].value + "," + _select.options[i].selected;
	}

	_options.sort();

	for (i = 1; i < _select.length; i++) {
		var parts = _options[i - 1].split(",");

		_select.options[i].text = parts[1];
		_select.options[i].value = parts[2];
		if (parts[3] == "true") _select.options[i].selected = true;
		else _select.options[i].selected = false;
	}
}*/