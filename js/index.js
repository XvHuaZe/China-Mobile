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
	let box=document.querySelector(".youhuiyou")
	let n=4
	let flag=true
	let dir="right"
	let st=setInterval(moveFu,2000)
	function moveFu(){
		if(dir==="right"){
			n++
		}else{
			n--
		}
		danping.style.marginLeft=-n*241+"px"
		danping.style.transition="all 1s"
	}
	danping.addEventListener("transitionend",function(){
		flag=true
		if(n===11){
			n=4
			danping.style.transition="none"
			danping.style.marginLeft="-964px"
		}
		if(n===0){
			n=7
			danping.style.transition="none"
			danping.style.marginLeft="-1687px"
		}
	})
	window.onblur=box.onmouseover=function(){
		clearInterval(st);
		}
	window.onfocus=box.onmouseout=function(){
		st=setInterval(moveFu,2000)
	}
        next.onclick=function(){
        	   if(flag){
        	   	dir="right"
        	   	flag=false
        	   	moveFu();
        	   }
        }
         prev.onclick=function(){
         	if(flag){
         		dir="left"
         		flag=false
         		moveFu();
         	}
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
{
	let nav=document.querySelectorAll(".sanzuo ul li");
	let navbox=document.querySelectorAll(".sanzuo .navbox");
	let navBox=document.querySelector(".sanzuo")
	console.log(navbox)
	nav.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<nav.length;i++){
			nav[i].classList.remove("active")
			navbox[i].classList.remove("active")
			}
			console.log(index)
			nav[index].classList.add("active")
			navbox[index].classList.add("active")
		}
	})
	navBox.onmouseleave=function(){
		for(let i=0;i<navbox.length;i++){
			navbox[i].classList.remove("active")	
		}

	}
}
{
	let con=document.querySelector(".sousuo .beijing .sousuokuang")
	con.onfocus=function(){
		if(con.value == "流量" )	{
			con.value = ""
		}
	}
	con.onblur = function() {
			if(con.value === "")
				con.value = "流量"
		}
}
{
	let banner=document.querySelectorAll(".f5ls ul li");
	let pag=document.querySelectorAll(".f5lbxd")
	let banners=document.querySelector(".f5ls")
	pag.forEach(function(ele,index){
		ele.onmouseover=()=>{
			for(let i=0;i<pag.length;i++){
				pag[i].classList.remove("active")
				banner[i].classList.remove("active")
			}
			pag[index].classList.add("active")
			banner[index].classList.add("active")
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
			n = banner.length - 1
		}
		if(n == banner.length) {
			n = 0
		}
		for(let i = 0; i < pag.length; i++) {
			pag[i].classList.remove("active");
			banner[i].classList.remove("active");
		}
		pag[n].classList.add("active");
		banner[n].classList.add("active");
	}
	let st = setInterval(bannerdh, 3000);
	banners.onmouseover = function() {
		clearInterval(st)
	};
	banners.onmouseout = function() {
		st = setInterval(bannerdh, 3000);
	}
}
