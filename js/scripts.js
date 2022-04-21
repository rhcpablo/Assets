//old-partners/home/upload.php
function containsAny(_string, _array) {
	var _return = false;
	
	for (var i = 0; i < _array.length; i++) if (_string.includes(_array[i])) _return = true;
	
	return _return;
}


//pages-ir/news-releases.php
//pages-blog/blog.php
function updatePagination(_this) {
    var _active = 2,
        _is_page_link = false,
        _pgtn_links = document.querySelector("#" + _this.dataset.pgtnNav).querySelectorAll(".pgtn-link");
        
    try {
        for (i = 0; i < _pgtn_links.length; i++) {
            _pgtn_links[i].classList.remove("disabled");
            if (_pgtn_links[i].classList.contains("active")) _active = i;
            if (!isNaN(parseInt(_this.dataset.pgtnPage))) _is_page_link = true;
        }
        if (_is_page_link && _active == 2) {
            _pgtn_links[0].classList.add("disabled");
            _pgtn_links[1].classList.add("disabled");
        } else if (_is_page_link && _active == _pgtn_links.length - 3) {
            _pgtn_links[_pgtn_links.length - 1].classList.add("disabled");
            _pgtn_links[_pgtn_links.length - 2].classList.add("disabled");
        } else if (_this.dataset.pgtnPage == "prev") _pgtn_links[_active - 1].click();
        else if (_this.dataset.pgtnPage == "next") _pgtn_links[_active + 1].click();
        else if (_this.dataset.pgtnPage == "first") _pgtn_links[2].click();
        else if (_this.dataset.pgtnPage == "last") _pgtn_links[_pgtn_links.length - 3].click();
        if (_is_page_link && _pgtn_links.length > 10) {
            if (_active <= 4) {
                document.querySelector("#" + _this.dataset.pgtnNav).querySelectorAll(".pgtn-break")[0].classList.add("d-none");
                document.querySelector("#" + _this.dataset.pgtnNav).querySelectorAll(".pgtn-break")[1].classList.remove("d-none");
                for (i = 2; i <= _pgtn_links.length - 3; i++) {
                    if (i < 8) _pgtn_links[i].classList.add("d-lg-inline-block");
                    else _pgtn_links[i].classList.remove("d-lg-inline-block");
                }
            } else if (_active > 4) {
                document.querySelector("#" + _this.dataset.pgtnNav).querySelectorAll(".pgtn-break")[0].classList.remove("d-none");
                if (_active > _pgtn_links.length - 9) document.querySelector("#" + _this.dataset.pgtnNav).querySelectorAll(".pgtn-break")[1].classList.add("d-none");
                for (i = 2; i <= _pgtn_links.length - 3; i++) {
                    if (i < _active - 2 || i > _active + 3) _pgtn_links[i].classList.remove("d-lg-inline-block");
                    else _pgtn_links[i].classList.add("d-lg-inline-block");
                    if (_active - 3 > _pgtn_links.length - 9 && i > _pgtn_links.length - 9) _pgtn_links[i].classList.add("d-lg-inline-block");
                }
                if (_active - 3 < _pgtn_links.length - 9) document.querySelector("#" + _this.dataset.pgtnNav).querySelectorAll(".pgtn-break")[1].classList.remove("d-none");
            } 
        }
        smoothScroll(_this.dataset.pgtnCtnr, 1000);
	} catch(e) {
		console.log(e);
	}
}



//no files
function switchBlockDisplay(_block_id) {
	var _block = document.getElementById(_block_id);
	
	try {
		if (_block.classList.contains("d-none")) {
			_block.style.setProperty("opacity", "0");
			_block.classList.remove("d-none");
			setTimeout(() => {
				_block.style.setProperty("opacity", "1");
			}, 300);
		} else {
			_block.style.setProperty("opacity", "0");
			setTimeout(() => {
				_block.classList.add("d-none");
			}, 300);
		}
	} catch(e) {
		console.log(e);
	}
}



function smoothScroll(_element, _duration) {
	var _starting_y = window.pageYOffset,
		_element_y = window.pageYOffset + document.getElementById(_element).getBoundingClientRect().top,
		_target_y = document.body.scrollHeight - _element_y < window.innerHeight ? document.body.scrollHeight - window.innerHeight : _element_y,
		_diff = _target_y - _starting_y - 50,
		_easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
		_start;
	if (!_diff) return
		window.requestAnimationFrame(function step(_timestamp) {
		if (!_start) _start = _timestamp;
		
		var _time = _timestamp - _start,
			_percent = Math.min(_time / _duration, 1);
			
		_percent = _easing(_percent);
		window.scrollTo(0, _starting_y + _diff * _percent);
		if (_time < _duration) window.requestAnimationFrame(step);
	})
}


//no files
function updateStyle(_event, _target, _value) {
	document.querySelector("#" + _target).style.setProperty(_value, _event.target.value);
}


//no files
function locationAssignNoParams() {
	location.assign("https://" + window.location.hostname + ":" + window.location.port + window.location.pathname);
}


//pages-internal/upload-ir-presentation.php
//pages-internal/upload-collateral.php
//old-partners/upload.php
//old-partners/home/upload.php
function scrollListToActiveItem(_items_list_id) {
	var _scroll_top = 0,
		_list_childs = document.querySelector("#" + _items_list_id).children;

	for (i = 0; i < _list_childs.length; i++) {
		if (!_list_childs[i].classList.contains("d-none") && (window.getComputedStyle(_list_childs[i]).display != "none")) {
			if (_list_childs[i].classList.contains("active")) document.querySelector("#" + _items_list_id).scrollTop = _scroll_top;
			else _scroll_top = _scroll_top + _list_childs[i].offsetHeight;
		} 
	}
}



function fadeInImgs(_fade_in_img_class, _opacity_transition_time) { //TypeError: ‘undefined’ is not an object in JavaScript

    var _interval;
	var _fade_in_imgs = document.querySelectorAll("." + String(_fade_in_img_class));
	var _loaded = true;
	
    function showImg(_img, _fade_in_img_class, _opacity_transition_time) {
        try {
		    _img.classList.add("opacity-transition-" + String(_opacity_transition_time));
		    _img.style.setProperty("opacity", "1"); 
    	    if (_fade_in_img_class == "fade-in-thumbnail") _img.parentNode.parentNode.classList.add("thumbnail-loaded");
        } catch(e) {
    		console.log(e);
    	}
    }
    
    function startFadeInInterval() {
        if (!_interval) {
            _interval = setInterval(fadeInInterval, 100);
        }
    }

    function fadeInInterval() {
        //console.log("fadeInInterval");
		for (i = 0; i < _fade_in_imgs.length; i++) { 
            try {
                if (_fade_in_imgs[i].complete == true) showImg(_fade_in_imgs[i], _fade_in_img_class, _opacity_transition_time);
            } catch(e) {
        		console.log(e);
        	}
        }
        _loaded = true;
		for (i = 0; i < _fade_in_imgs.length; i++) if (!_fade_in_imgs[i].classList.contains("opacity-transition-" + String(_opacity_transition_time))) _loaded = false;
        if (_loaded) stopFadeInInterval();
    }

    function stopFadeInInterval() {
        clearInterval(_interval);
        _interval = null; 
    }

    startFadeInInterval();
    
	try {
		setTimeout(function() {
			for (i = 0; i < _fade_in_imgs.length; i++) { 
			    showImg(_fade_in_imgs[i], _fade_in_img_class, _opacity_transition_time);
			}
		}, 15000);
	} catch(e) {
		console.log(e);
	}
}



//pages-ir/committee-governance.php
function updateLinksAttributes() {
	let links = document.getElementsByClassName("wp_get_attachment_link"),
		filename = "";
	
	for (var i = 0; i < links.length; i++) {
		filename = links[i].href.substring(links[i].href.lastIndexOf('/') + 1);
		links[i].setAttribute('download', filename);
		links[i].setAttribute('target', '_blank');
	}
}
	
	
	
//no files
function setCookie(_cookie_name, _cookie_value, _expiration_days) {
	var _date = new Date();
	_date.setTime(_date.getTime() + (_expiration_days * 24 * 60 * 60 * 1000));
	var _expires = "expires="+ _date.toUTCString();
	document.cookie = _cookie_name + "=" + _cookie_value + ";" + _expires + "; path=/";
}



//no files
function getCookie(_cookie_name) {
	var _name = _cookie_name + "=",
		_decoded_cookie = decodeURIComponent(document.cookie),
		_decoded_cookie_split = _decoded_cookie.split(';');
	
	for (var i = 0; i < _decoded_cookie_split.length; i++) {
		var _cookie = _decoded_cookie_split[i];
		while (_cookie.charAt(0) == ' ') {
			_cookie = _cookie.substring(1);
		}
		if (_cookie.indexOf(_name) == 0) {
			return _cookie.substring(_name.length, _cookie.length);
		}
	}
	
	return "";
}








/* ############################################################################################################## */
/* PAGINATION */
/* ############################################################################################################## */

/*function goToPage(_pages_container_id, _navigator_id, _max_numbers_on_navigator, _page_number) {
	var _pages = document.getElementById(_pages_container_id),
		_navigator = document.getElementById(_navigator_id),
		_active_page_index = 0,
		_pagination_numbers = _navigator.getElementsByClassName("pagination-number"),
		_pagination_prev_btn = _navigator.getElementsByClassName("pagination-prev-btn")[0],
		_pagination_next_btn = _navigator.getElementsByClassName("pagination-next-btn")[0],
		_pagination_first_btn = _navigator.getElementsByClassName("pagination-first-btn")[0],
		_pagination_last_btn = _navigator.getElementsByClassName("pagination-last-btn")[0],
		_pagination_empty_start_btn = _navigator.getElementsByClassName("pagination-empty-start-btn")[0],
		_pagination_empty_end_btn = _navigator.getElementsByClassName("pagination-empty-end-btn")[0];

	if (_page_number == 0) {
		_pagination_prev_btn.classList.add("disabled");
		_pagination_first_btn.classList.add("disabled");
		_pagination_next_btn.classList.remove("disabled");
		_pagination_last_btn.classList.remove("disabled");
	} else if (_page_number < _pagination_numbers.length - 1) {
		_pagination_prev_btn.classList.remove("disabled");
		_pagination_first_btn.classList.remove("disabled");
		_pagination_next_btn.classList.remove("disabled");
		_pagination_last_btn.classList.remove("disabled");
	} else {
		_pagination_prev_btn.classList.remove("disabled");
		_pagination_first_btn.classList.remove("disabled");
		_pagination_next_btn.classList.add("disabled");
		_pagination_last_btn.classList.add("disabled");
	}
	_active_page_index = _page_number;
	numbersOnNav(_pages_container_id, _navigator_id, _max_numbers_on_navigator, _active_page_index);
	!_first_page_load ? smoothScroll(_pages_container_id, 1000) : _first_page_load = false;
}

function goToPage2(_pages_container_id, _navigator_id, _max_numbers_on_navigator, _page_number, _action) {
	var _pages = document.getElementById(_pages_container_id),
		_navigator = document.getElementById(_navigator_id),
		_pagination_pages = _navigator.querySelectorAll("[data-pagination='page']"),
		_pagination_prev = _navigator.querySelector("[data-pagination='prev']"),
		_pagination_next = _navigator.querySelector("[data-pagination='next']"),
		_pagination_first = _navigator.querySelector("[data-pagination='first']"),
		_pagination_last = _navigator.querySelector("[data-pagination='last']"),
		_pagination_ellipsis = _navigator.querySelectorAll("[data-pagination='ellipsis']"),
		_active_page = 0;
		
		
	

		
	console.log(_pagination_pages);
	console.log(_pagination_prev);
	console.log(_pagination_next);
	console.log(_pagination_first);
	console.log(_pagination_last);
	console.log(_pagination_dots_left);
	console.log(_pagination_dots_right);
	
	

	if (_action == "page") {
		_active_page = _page_number;*/
		/*switch (_page_number) {
			case 0:
				_pagination_prev.classList.add("disabled");
				_pagination_first.classList.add("disabled");
				_pagination_next.classList.remove("disabled");
				_pagination_last.classList.remove("disabled");
				break;
			case _pagination_pages.length - 1:
				_pagination_prev.classList.remove("disabled");
				_pagination_first.classList.remove("disabled");
				_pagination_next.classList.add("disabled");
				_pagination_last.classList.add("disabled");
				break;
			default:
				_pagination_prev.classList.remove("disabled");
				_pagination_first.classList.remove("disabled");
				_pagination_next.classList.remove("disabled");
				_pagination_last.classList.remove("disabled");
		}*/
/*	} else if (_action == "pagination") {
		for (var i = 0; i < _pagination_pages.length; i++) if (_pagination_pages[i].classList.contains("active")) _active_page = i;
		
		switch (_page_number) {
			case -2:
				_active_page = 0;
				_pagination_pages[0].click();
				_pagination_prev.classList.add("disabled");
				_pagination_first.classList.add("disabled");
				_pagination_next.classList.remove("disabled");
				if (_pagination_pages.length > _max_numbers_on_navigator) {
					_pagination_last.classList.remove("disabled");
					_pagination_ellipsis[0].classList.add("d-none");
				}
				break;
			case 2:
				_active_page = _pagination_pages.length - 1;
				_pagination_pages[_pagination_pages.length - 1].click();
				_pagination_prev.classList.remove("disabled");
				_pagination_first.classList.remove("disabled");
				_pagination_next.classList.add("disabled");
				_pagination_last.classList.add("disabled");
				if (_pagination_pages.length > _max_numbers_on_navigator) _pagination_ellipsis[1].classList.add("d-none");
				break;
			case 1:
				if (_active_page >= 0 && _active_page < _pagination_pages.length - 1) _active_page = _active_page + 1;
				_pagination_pages[_active_page].click();
				_pagination_prev.classList.remove("disabled");
				_pagination_first.classList.remove("disabled");
				if (_active_page == _pagination_pages.length - 1) {
					_pagination_next.classList.add("disabled");
					_pagination_last.classList.add("disabled");
					if (_pagination_pages.length > _max_numbers_on_navigator) _pagination_ellipsis[1].classList.add("d-none");
				}
				break;
			case -1:
				if (_active_page > 0 && _active_page < _pagination_pages.length) _active_page = _active_page - 1;
				_pagination_pages[_active_page].click();
				_pagination_next.classList.remove("disabled");
				_pagination_last.classList.remove("disabled");
				if (_active_page == 0) {
					_pagination_prev.classList.add("disabled");
					if (_pagination_pages.length > _max_numbers_on_navigator) {
						_pagination_first.classList.add("disabled");
						_pagination_ellipsis[0].classList.add("d-none");
					}
				}
				break;
		}
		
	}
	
		switch (_page_number) {
			case 0:
				_pagination_prev.classList.add("disabled");
				_pagination_first.classList.add("disabled");
				_pagination_next.classList.remove("disabled");
				_pagination_last.classList.remove("disabled");
				break;
			case _pagination_pages.length - 1:
				_pagination_prev.classList.remove("disabled");
				_pagination_first.classList.remove("disabled");
				_pagination_next.classList.add("disabled");
				_pagination_last.classList.add("disabled");
				break;
			default:
				_pagination_prev.classList.remove("disabled");
				_pagination_first.classList.remove("disabled");
				_pagination_next.classList.remove("disabled");
				_pagination_last.classList.remove("disabled");
		}
	
	

	if (window.innerWidth < 992) {
		for (var i = 0; i < _pagination_pages.length; i++) _pagination_pages[i].classList.add("d-none");
	} else {
		if (_pagination_pages.length > _max_numbers_on_navigator) {
			for (var i = 0; i < _pagination_pages.length; i++) _pagination_pages[i].classList.add("d-none");
			_pagination_pages[_page_number].classList.remove("d-none");
			if (_page_number <= Math.ceil(_max_numbers_on_navigator * 0.5) - 1) {
				for (var i = 0; i < _max_numbers_on_navigator; i++) _pagination_pages[i].classList.remove("d-none");
				_pagination_ellipsis[0].classList.add("d-none");
				_pagination_ellipsis[1].classList.remove("d-none");
			} else if (_page_number >= (_pagination_pages.length - Math.ceil(_max_numbers_on_navigator * 0.5) - 2)) {
				for (var i = (_pagination_pages.length - Math.ceil(_max_numbers_on_navigator * 0.5) - 2); i < _pagination_pages.length; i++) _pagination_pages[i].classList.remove("d-none");
				_pagination_ellipsis[0].classList.remove("d-none");
				_pagination_ellipsis[1].classList.add("d-none");
			} else {
				for (var i = _page_number - Math.ceil(_max_numbers_on_navigator * 0.5) + 1; i < _page_number + Math.ceil(_max_numbers_on_navigator * 0.5) + 1; i++) _pagination_pages[i].classList.remove("d-none");
				_pagination_ellipsis[0].classList.remove("d-none");
				_pagination_ellipsis[1].classList.remove("d-none");
			}
		}
	}
		

	//_active_page_index = _page_number;
	//numbersOnNav(_pages_container_id, _navigator_id, _max_numbers_on_navigator, _active_page_index);
	
	!_first_page_load ? smoothScroll(_pages_container_id, 1000) : _first_page_load = false;
}*/

/* ############################################################################################################## */

/*function numbersOnNav(_pages_container_id, _navigator_id, _max_numbers_on_navigator, _page_number) {
	var _pages = document.getElementById(_pages_container_id),
		_navigator = document.getElementById(_navigator_id),
		_pagination_numbers = _navigator.getElementsByClassName("pagination-number"),
		_pagination_prev_btn = _navigator.getElementsByClassName("pagination-prev-btn")[0],
		_pagination_next_btn = _navigator.getElementsByClassName("pagination-next-btn")[0],
		_pagination_first_btn = _navigator.getElementsByClassName("pagination-first-btn")[0],
		_pagination_last_btn = _navigator.getElementsByClassName("pagination-last-btn")[0],
		_pagination_empty_start_btn = _navigator.getElementsByClassName("pagination-empty-start-btn")[0],
		_pagination_empty_end_btn = _navigator.getElementsByClassName("pagination-empty-end-btn")[0],
		_visible_numbers = 0,
		_half_max_numbers_on_navigator = (Math.ceil(_max_numbers_on_navigator * 0.5));

	if (window.innerWidth < 992) {
		for (var i = 0; i < _pagination_numbers.length; i++) _pagination_numbers[i].classList.add("d-none");
	} else {
		if (_pagination_numbers.length > _max_numbers_on_navigator) {
			for (var i = 0; i < _pagination_numbers.length; i++) _pagination_numbers[i].classList.add("d-none");
			_pagination_numbers[_page_number].classList.remove("d-none");
			if (_page_number <= _half_max_numbers_on_navigator - 1) {
				for (var i = 0; i < _max_numbers_on_navigator; i++) _pagination_numbers[i].classList.remove("d-none");
				_pagination_empty_start_btn.classList.add("d-none");
				_pagination_empty_end_btn.classList.remove("d-none");
	
			} else if (_page_number >= (_pagination_numbers.length - _half_max_numbers_on_navigator - 2)) {
				for (var i = (_pagination_numbers.length - _half_max_numbers_on_navigator - 2); i < _pagination_numbers.length; i++) _pagination_numbers[i].classList.remove("d-none");
				_pagination_empty_start_btn.classList.remove("d-none");
				_pagination_empty_end_btn.classList.add("d-none");
			} else {
				for (var i = _page_number - _half_max_numbers_on_navigator + 1; i < _page_number + _half_max_numbers_on_navigator + 1; i++) _pagination_numbers[i].classList.remove("d-none");
				_pagination_empty_start_btn.classList.remove("d-none");
				_pagination_empty_end_btn.classList.remove("d-none");
			}
		}
	}
}*/

/* ############################################################################################################## */

/*function turnPage(_pages_container_id, _navigator_id, _max_numbers_on_navigator, _direction) {
	var _pages = document.getElementById(_pages_container_id),
		_navigator = document.getElementById(_navigator_id),
		_pagination_numbers = _navigator.getElementsByClassName("pagination-number"),
		_pagination_prev_btn = _navigator.getElementsByClassName("pagination-prev-btn")[0],
		_pagination_next_btn = _navigator.getElementsByClassName("pagination-next-btn")[0],
		_pagination_first_btn = _navigator.getElementsByClassName("pagination-first-btn")[0],
		_pagination_last_btn = _navigator.getElementsByClassName("pagination-last-btn")[0],
		_pagination_empty_start_btn = _navigator.getElementsByClassName("pagination-empty-start-btn")[0],
		_pagination_empty_end_btn = _navigator.getElementsByClassName("pagination-empty-end-btn")[0],
		_active_page_index = 0;
	for (var i = 0; i < _pagination_numbers.length; i++) if (_pagination_numbers[i].classList.contains("active")) _active_page_index = i;
	if (_pagination_numbers.length > 0) {
		switch (_direction) {
			case -2:
				_active_page_index = 0;
				_pagination_numbers[0].click();
				_pagination_prev_btn.classList.add("disabled");
				_pagination_first_btn.classList.add("disabled");
				_pagination_next_btn.classList.remove("disabled");
				if (_pagination_numbers.length > _max_numbers_on_navigator) {
					_pagination_last_btn.classList.remove("disabled");
					_pagination_empty_start_btn.classList.add("d-none");
				}
				break;
			case 2:
				_active_page_index = _pagination_numbers.length - 1;
				_pagination_numbers[_pagination_numbers.length - 1].click();
				_pagination_prev_btn.classList.remove("disabled");
				_pagination_first_btn.classList.remove("disabled");
				_pagination_next_btn.classList.add("disabled");
				_pagination_last_btn.classList.add("disabled");
				if (_pagination_numbers.length > _max_numbers_on_navigator) _pagination_empty_end_btn.classList.add("d-none");
				break;
			case 1:
				if (_active_page_index >= 0 && _active_page_index < _pagination_numbers.length - 1) _active_page_index = _active_page_index + 1;
				_pagination_numbers[_active_page_index].click();
				_pagination_prev_btn.classList.remove("disabled");
				_pagination_first_btn.classList.remove("disabled");
				if (_active_page_index == _pagination_numbers.length - 1) {
					_pagination_next_btn.classList.add("disabled");
					_pagination_last_btn.classList.add("disabled");
					if (_pagination_numbers.length > _max_numbers_on_navigator) _pagination_empty_end_btn.classList.add("d-none");
				}
				break;
			case -1:
				if (_active_page_index > 0 && _active_page_index < _pagination_numbers.length) _active_page_index = _active_page_index - 1;
				_pagination_numbers[_active_page_index].click();
				_pagination_next_btn.classList.remove("disabled");
				_pagination_last_btn.classList.remove("disabled");
				if (_active_page_index == 0) {
					_pagination_prev_btn.classList.add("disabled");
					if (_pagination_numbers.length > _max_numbers_on_navigator) {
						_pagination_first_btn.classList.add("disabled");
						_pagination_empty_start_btn.classList.add("d-none");
					}
				}
				break;
		}
		numbersOnNav(_pages_container_id, _navigator_id, _max_numbers_on_navigator, _active_page_index);
	}
}*/
