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
{
	{
	let topbar = document.querySelector('.head2')
	let floors = document.querySelectorAll("body .xiangyouhui")
	let nav = document.querySelector(".youdao")
	let navs = document.querySelectorAll(".youdao li")
	let toptop = document.querySelector(".back")
	let spans=document.querySelectorAll(".youdao span")
	let flag = true;
//	let navz=["享优惠","业务推荐","手机专区","智能硬件","咪咕娱乐"]
//	let navN=["1F","1F","1F","1F","1F"]
	console.log(navs)
	window.onscroll = function() {
		if(flag) {
			let st = document.documentElement.scrollTop;
			if(st > 550) {
				topbar.style.display = 'block'
			} else {
				topbar.style.display = 'none'
			}
			if(st > 650) {
				nav.style.display = "block"
			} else {
				nav.style.display = "none"
			}
			floors.forEach(function(ele, index) {
				if(st < floors[0].offsetTop) {
					for(let i = 0; i < navs.length; i++) {
						navs[i].classList.remove("active")
					}
					navs[0].classList.add("active")
				}
				if(st >= ele.offsetTop-61) {
					for(let i = 0; i <navs.length; i++) {
						navs[i].classList.remove("active")
						spans[i].classList.remove("active")
//						navs[index].innerHTML=navN[index]
					}
					navs[index].classList.add("active")
					spans[index].classList.add("active")
//					navs[index].innerHTML=navz[index]
				}
			})
		}
	}
	navs.forEach(function(ele, index) {
		ele.onclick = function() {
			flag = false;
			let st = floors[index].offsetTop;
			st -= 60
			let now = document.documentElement.scrollTop;
			let speed = (st - now) * 30 / 300;
			let time = 0;
			let t = setInterval(function() {
				now += speed;
				time += 30;
				if(time === 300) {
					clearInterval(t);
					now = st;
					flag = true;
				}
				document.documentElement.scrollTop = now;
			}, 30)
		}
	})
	toptop.onclick = function() {
		let st = document.documentElement.scrollTop
		let speed = st * 30 / 500
		let t = setInterval(function() {
			st -= speed
			if(st <= 0) {
				st = 0;
				clearInterval(t)
			}
			document.documentElement.scrollTop = st
		}, 30)
	}
}
}
