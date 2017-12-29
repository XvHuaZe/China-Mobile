{
	let imgs = document.querySelectorAll(".lunbo ul li");
	let pagings = document.querySelectorAll(".dian li");
	let banners = document.querySelector(".san");
	let next = document.querySelector(".lunbo .you");
	let prev = document.querySelector(".lunbo .zuo");
	pagings.forEach(function(ele, index) {
		ele.onclick = function() {
			for(let i = 0; i < pagings.length; i++) {
				pagings[i].classList.remove("active");
				imgs[i].classList.remove("active");
			}
			ele.classList.add("active");
			imgs[index].classList.add("active");
			n = index;
		}
	})
	let n = 0;

	function bannerdh(x) {
		if(x) {
			n--;
		} else {
			n++;
		}
		if(n === -1) {
			n = imgs.length - 1
		}
		if(n == imgs.length) {
			n = 0
		}
		for(let i = 0; i < pagings.length; i++) {
			pagings[i].classList.remove("active");
			imgs[i].classList.remove("active");
		}
		pagings[n].classList.add("active");
		imgs[n].classList.add("active");
	}
	let st = setInterval(bannerdh, 3000);
	banners.onmouseover = function() {
		clearInterval(st)
	};
	banners.onmouseout = function() {
		st = setInterval(bannerdh, 3000);
	}
	let flat = true
	next.onclick = function() {
		if(flat) {
			flat = false
			bannerdh()
		}
	}
	prev.onclick = function() {
		if(flat) {
			flat = false
			bannerdh(1)
		}
	}
	imgs.forEach(function(ele) {
		ele.addEventListener("transitionend", function() {
			flat = true
		})
	})
} 
{
	let next = document.querySelector(".youhuiyoujiantou");
	let prev = document.querySelector(".youhuizuojiantou");
	let danping = document.querySelector(".youhuiyou-da");
	let youhui=document.querySelectorAll(".youhuiyou-da .youhuixiao")
	next.onclick = function() {
		danping.style.transform = "translateX(-966px)";
	}
	prev.onclick = function() {
		danping.style.transform = "translatex(0)";
	}
	let n = 0;

	function stay() {
		n++;
		if(n % 2 == 0) {
			next.onclick()
		} else {
			prev.onclick()
		}
	}
	let st = setInterval(stay, 3000);
	danping.onmouseover = function() {
		clearInterval(st)
	}
	danping.onmouseout = function() {
		st = setInterval(stay, 3000);
	}
}