var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {

    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {

  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);


'use strict';



window.addEventListener('scroll', () => {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	if(scrollTop > 0) {
		document.querySelector('.header').classList.add('header_fixed');
	} else {
		document.querySelector('.header').classList.remove('header_fixed');
	}
});

const button_burger = document.querySelector('#smart_menu_active');

button_burger.addEventListener('click', (event) => {
	button_burger.classList.toggle('active');
	document.querySelector('.smart_menu').classList.toggle('active');
});

const menu_items = document.querySelectorAll('.header__nav > ul > li > a');
const dropDownMenu = document.querySelector('.dropdown-menu');
const mobile_list_menu = document.querySelectorAll('.list_active');

mobile_list_menu.forEach(e=> {
	e.addEventListener('click', (event) => {
		event.preventDefault();

		let clone = dropDownMenu.querySelectorAll('li');

		clone.forEach(e=> {
			document.querySelector('.list_menu').classList.add('active');
			document.querySelector('.list_menu').appendChild(e.cloneNode(true));
		});

		button_burger.classList.remove('active');
		document.querySelector('.smart_menu').classList.remove('active');
		
	});
});


menu_items.forEach(e => {
	e.addEventListener('click', (event) => {
		event.preventDefault();
		if(event.target.nextElementSibling) event.target.nextElementSibling.classList.toggle('active');
	});
});

document.addEventListener('click', (event) => {
	const target = event.target;
	const its_menu = target == dropDownMenu || dropDownMenu.contains(target);
	// const its_btnMenu = target == target.classList.contains('dropdown-active');
	const menu_is_active = dropDownMenu.classList.contains('active');
	if(target.classList && !target.classList.contains('dropdown-active')) {
		if (!its_menu && menu_is_active) {
			dropDownMenu.classList.remove('active');
		}
	}
	
});

const slider_works_wrap = document.querySelector('#slider_works'),
	  slider_works_leftOffSet = document.querySelector('.works .container'),
	  slider_works_buttonPrev = document.querySelector('.works .swiper-prev'),
	  slider_works_buttonNext = document.querySelector('.works .swiper-next');

if(slider_works_wrap) {
	slider_works_wrap.setAttribute('style', `margin-left: ${slider_works_leftOffSet.getBoundingClientRect().left}px`);

	window.addEventListener('resize', () => {
		slider_works_wrap.setAttribute('style', `margin-left: ${slider_works_leftOffSet.getBoundingClientRect().left}px`);
	});

}

const slider_works = new Swiper(slider_works_wrap, {

	// slidesPerView: 1.7,
	// watchOverflow: true,
	// slidesPerColumn: 2,
	// slidesPerGroup: 2,
	slidesPerColumnFill: 'row',

	freeMode: true,
	freeModeSticky: true,
	spaceBetween: 16,
	// variableWidth: true,

	slidesOffsetAfter: 0,

	breakpoints: {
		0: {
			slidesPerView: 1,
			// slidesPerGroup: 3,
			// loopFillGroupWithBlank: true,
			// slidesPerColumn: 3,
		},
		600: {
			slidesPerGroup: 4,
			slidesPerColumn: 2,
			slidesPerView: 'auto',
			spaceBetween: 0,
		},
		1000: {
			// slidesPerView: 1.7,
			// spaceBetween: 32,
			slidesPerGroup: 4,
			slidesPerColumn: 2,
			slidesPerView: 'auto',
			spaceBetween: 0,
		}
	},

	pagination: {
		el: ".swiper-pagination",
		clickable: true
	},

	navigation: {
		nextEl: document.querySelector('.works .swiper-next'),
        prevEl: document.querySelector('.works .swiper-prev'),
	}
});


const slider_reviews = new Swiper('#slider_reviews', {

	slidesPerView: 2,
	// slidesPerColumn: 2,
	// freeMode: true,
	// freeModeSticky: true,
	spaceBetween: 32,

	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 16,
		},
		1000: {
			slidesPerView: 2,
			spaceBetween: 32,
		}
	},

	navigation: {
		nextEl: document.querySelector('.reviews .swiper-next'),
        prevEl: document.querySelector('.reviews .swiper-prev'),
	}
});



// var mySelectal = new Selectal('.js-custom_select');