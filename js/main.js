window.Modernizr = function(i, e, u) {
	function s(a, b) {
		return ("" + a).indexOf(b) !== -1
	}

	function D(a, b) {
		for (var c in a)
			if (j[a[c]] !== u && (!b || b(a[c], E
))) return true
}
	function n(a, b) {
		var c = a.charAt(0).toUpperCase() + a.substr(1);
		return !!D(c, b)
	}

	function S() {
		f.input = function(a) {
			for (var b = 0, c = a.length; b < c; b++) L[a[b]] = !!(a[b] in h);
			return L
		}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
		f.inputtypes = function(a) {
			for (var b = 0, c, k = a.length; b <
			k; b++) {
				h.setAttribute("type", a[b]);
				if (c = h.type !== "text") {
					h.value = M;
					if (/^range$/.test(h.type) && h.style.WebkitAppearance !== u) {
						l.appendChild(h);
						c = e.defaultView;
						c = c.getComputedStyle && c.getComputedStyle(h, null).WebkitAppearance !== "textfield" && h.offsetHeight !== 0;
						l.removeChild(h)
					} else /^(search|tel)$/.test(h.type) || (c = /^(url|email)$/.test(h.type) ? h.checkValidity && h.checkValidity() === false : h.value != M)
				}
				N[a[b]] = !!c
			}
			return N
		}("search tel url email datetime date month week time datetime-local number range color".split(" "))
	}
	var f = {},
		l = e.documentElement,
		E = e.createElement("modernizr"),
		j = E.style,
		h = e.createElement("input"),
		M = ":)",
		O = Object.prototype.toString,
		q = " -webkit- -moz- -o- -ms- -khtml- ".split(" "),
		F = "Webkit Moz O ms Khtml".split(" "),
		v = {
			svg: "http://www.w3.org/2000/svg"
		},
		d = {},
		N = {},
		L = {},
		P = [],
		w, Q = function(a) {
			var b = document.createElement("style"),
				c = e.createElement("div");
			b.textContent = a + "{#modernizr{height:3px}}";
			(e.head || e.getElementsByTagName("head")[0]).appendChild(b);
			c.id = "modernizr";
			l.appendChild(c);
			a = c.offsetHeight ===
				3;
			b.parentNode.removeChild(b);
			c.parentNode.removeChild(c);
			return !!a
		},
		o = function() {
			var a = {
				select: "input",
				change: "input",
				submit: "form",
				reset: "form",
				error: "img",
				load: "img",
				abort: "img"
			};
			return function(b, c) {
				c = c || document.createElement(a[b] || "div");
				b = "on" + b;
				var k = b in c;
				if (!k) {
					c.setAttribute || (c = document.createElement("div"));
					if (c.setAttribute && c.removeAttribute) {
						c.setAttribute(b, "");
						k = typeof c[b] == "function";
						if (typeof c[b] != "undefined") c[b] = u;
						c.removeAttribute(b)
					}
				}
				return k
			}
		}(),
		G = {}.hasOwnProperty,
		R;
	R =
		typeof G !== "undefined" && typeof G.call !== "undefined" ? function(a, b) {
			return G.call(a, b)
		} : function(a, b) {
			return b in a && typeof a.constructor.prototype[b] === "undefined"
		};
	d.flexbox = function() {
		var a = e.createElement("div"),
			b = e.createElement("div");
		(function(k, g, r, x) {
			g += ":";
			k.style.cssText = (g + q.join(r + ";" + g)).slice(0, -g.length) + (x || "")
		})(a, "display", "box", "width:42px;padding:0;");
		b.style.cssText = q.join("box-flex:1;") + "width:10px;";
		a.appendChild(b);
		l.appendChild(a);
		var c = b.offsetWidth === 42;
		a.removeChild(b);
		l.removeChild(a);
		return c
	};
	d.canvas = function() {
		var a = e.createElement("canvas");
		return !!(a.getContext && a.getContext("2d"))
	};
	d.canvastext = function() {
		return !!(f.canvas && typeof e.createElement("canvas").getContext("2d").fillText == "function")
	};
	d.webgl = function() {
		var a = e.createElement("canvas");
		try {
			if (a.getContext("webgl")) return true
		} catch (b) {}
		try {
			if (a.getContext("experimental-webgl")) return true
		} catch (c) {}
		return false
	};
	d.touch = function() {
		return "ontouchstart" in i || Q("@media (" + q.join("touch-enabled),(") +
			"modernizr)")
	};
	d.geolocation = function() {
		return !!navigator.geolocation
	};
	d.postmessage = function() {
		return !!i.postMessage
	};
	d.websqldatabase = function() {
		return !!i.openDatabase
	};
	d.indexedDB = function() {
		for (var a = -1, b = F.length; ++a < b;) {
			var c = F[a].toLowerCase();
			if (i[c + "_indexedDB"] || i[c + "IndexedDB"]) return true
		}
		return false
	};
	d.hashchange = function() {
		return o("hashchange", i) && (document.documentMode === u || document.documentMode > 7)
	};
	d.history = function() {
		return !!(i.history && history.pushState)
	};
	d.draganddrop = function() {
		return o("drag") &&
			o("dragstart") && o("dragenter") && o("dragover") && o("dragleave") && o("dragend") && o("drop")
	};
	d.websockets = function() {
		return "WebSocket" in i
	};
	d.rgba = function() {
		j.cssText = "background-color:rgba(150,255,150,.5)";
		return s(j.backgroundColor, "rgba")
	};
	d.hsla = function() {
		j.cssText = "background-color:hsla(120,40%,100%,.5)";
		return s(j.backgroundColor, "rgba") || s(j.backgroundColor, "hsla")
	};
	d.multiplebgs = function() {
		j.cssText = "background:url(//:),url(//:),red url(//:)";
		return /(url\s*\(.*?){3}/.test(j.background)
	};
	d.backgroundsize =
		function() {
			return n("backgroundSize")
		};
	d.borderimage = function() {
		return n("borderImage")
	};
	d.borderradius = function() {
		return n("borderRadius", "", function(a) {
			return s(a, "orderRadius")
		})
	};
	d.boxshadow = function() {
		return n("boxShadow")
	};
	d.textshadow = function() {
		return e.createElement("div").style.textShadow === ""
	};
	d.opacity = function() {
		var a = q.join("opacity:.5;") + "";
		j.cssText = a;
		return s(j.opacity, "0.5")
	};
	d.cssanimations = function() {
		return n("animationName")
	};
	d.csscolumns = function() {
		return n("columnCount")
	};
	d.cssgradients =
		function() {
			var a = ("background-image:" + q.join("gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:") + q.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0, -17);
			j.cssText = a;
			return s(j.backgroundImage, "gradient")
		};
	d.cssreflections = function() {
		return n("boxReflect")
	};
	d.csstransforms = function() {
		return !!D(["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])
	};
	d.csstransforms3d = function() {
		var a = !!D(["perspectiveProperty", "WebkitPerspective",
			"MozPerspective", "OPerspective", "msPerspective"
		]);
		if (a) a = Q("@media (" + q.join("transform-3d),(") + "modernizr)");
		return a
	};
	d.csstransitions = function() {
		return n("transitionProperty")
	};
	d.fontface = function() {
		var a, b = e.head || e.getElementsByTagName("head")[0] || l,
			c = e.createElement("style"),
			k = e.implementation || {
				hasFeature: function() {
					return false
				}
			};
		c.type = "text/css";
		b.insertBefore(c, b.firstChild);
		a = c.sheet || c.styleSheet;
		b = k.hasFeature("CSS2", "") ? function(g) {
			if (!(a && g)) return false;
			var r = false;
			try {
				a.insertRule(g,
					0);
				r = !/unknown/i.test(a.cssRules[0].cssText);
				a.deleteRule(a.cssRules.length - 1)
			} catch (x) {}
			return r
		} : function(g) {
			if (!(a && g)) return false;
			a.cssText = g;
			return a.cssText.length !== 0 && !/unknown/i.test(a.cssText) && a.cssText.replace(/\r+|\n+/g, "").indexOf(g.split(" ")[0]) === 0
		};
		f._fontfaceready = function(g) {
			g(f.fontface)
		};
		return b('@font-face { font-family: "font"; src: "font.ttf"; }')
	};
	d.video = function() {
		var a = e.createElement("video"),
			b = !!a.canPlayType;
		if (b) {
			b = new Boolean(b);
			b.ogg = a.canPlayType('video/ogg; codecs="theora"');
			b.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"') || a.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
			b.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"')
		}
		return b
	};
	d.audio = function() {
		var a = e.createElement("audio"),
			b = !!a.canPlayType;
		if (b) {
			b = new Boolean(b);
			b.ogg = a.canPlayType('audio/ogg; codecs="vorbis"');
			b.mp3 = a.canPlayType("audio/mpeg;");
			b.wav = a.canPlayType('audio/wav; codecs="1"');
			b.m4a = a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")
		}
		return b
	};
	d.localstorage = function() {
		try {
			return "localStorage" in
				i && i.localStorage !== null
		} catch (a) {
			return false
		}
	};
	d.sessionstorage = function() {
		try {
			return "sessionStorage" in i && i.sessionStorage !== null
		} catch (a) {
			return false
		}
	};
	d.webWorkers = function() {
		return !!i.Worker
	};
	d.applicationcache = function() {
		return !!i.applicationCache
	};
	d.svg = function() {
		return !!e.createElementNS && !!e.createElementNS(v.svg, "svg").createSVGRect
	};
	d.inlinesvg = function() {
		var a = document.createElement("div");
		a.innerHTML = "<svg/>";
		return (a.firstChild && a.firstChild.namespaceURI) == v.svg
	};
	d.smil = function() {
		return !!e.createElementNS &&
			/SVG/.test(O.call(e.createElementNS(v.svg, "animate")))
	};
	d.svgclippaths = function() {
		return !!e.createElementNS && /SVG/.test(O.call(e.createElementNS(v.svg, "clipPath")))
	};
	for (var H in d)
		if (R(d, H)) {
			w = H.toLowerCase();
			f[w] = d[H]();
			P.push((f[w] ? "" : "no-") + w)
		} f.input || S();
	f.crosswindowmessaging = f.postmessage;
	f.historymanagement = f.history;
	f.addTest = function(a, b) {
		a = a.toLowerCase();
		if (!f[a]) {
			b = !!b();
			l.className += " " + (b ? "" : "no-") + a;
			f[a] = b;
			return f
		}
	};
	j.cssText = "";
	E = h = null;
	i.attachEvent && function() {
		var a = e.createElement("div");
		a.innerHTML = "<elem></elem>";
		return a.childNodes.length !== 1
	}() && function(a, b) {
		function c(p) {
			for (var m = -1; ++m < r;) p.createElement(g[m])
		}

		function k(p, m) {
			for (var I = p.length, t = -1, y, J = []; ++t < I;) {
				y = p[t];
				m = y.media || m;
				J.push(k(y.imports, m));
				J.push(y.cssText)
			}
			return J.join("")
		}
		var g = "abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video".split("|"),
			r = g.length,
			x = RegExp("<(/*)(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)",
				"gi"),
			T = RegExp("\\b(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)\\b(?!.*[;}])", "gi"),
			z = b.createDocumentFragment(),
			A = b.documentElement,
			K = A.firstChild,
			B = b.createElement("style"),
			C = b.createElement("body");
		B.media = "all";
		c(b);
		c(z);
		a.attachEvent("onbeforeprint", function() {
			for (var p = -1; ++p < r;)
				for (var m = b.getElementsByTagName(g[p]), I = m.length, t = -1; ++t < I;)
					if (m[t].className.indexOf("iepp_") < 0) m[t].className += " iepp_" +
						g[p];
			K.insertBefore(B, K.firstChild);
			B.styleSheet.cssText = k(b.styleSheets, "all").replace(T, ".iepp_$1");
			z.appendChild(b.body);
			A.appendChild(C);
			C.innerHTML = z.firstChild.innerHTML.replace(x, "<$1bdo")
		});
		a.attachEvent("onafterprint", function() {
			C.innerHTML = "";
			A.removeChild(C);
			K.removeChild(B);
			A.appendChild(z.firstChild)
		})
	}(this, document);
	f._enableHTML5 = true;
	f._version = "1.6";
	l.className = l.className.replace(/\bno-js\b/, "") + " js";
	l.className += " " + P.join(" ");
	return f
}(this, this.document);




window.addEventListener("load", canvasApp, false);
//是否支持canvas
function canvasSupport () {
  	return Modernizr.canvas;
}
function canvasApp() {
	//是否支持canvas
	if (!canvasSupport()) {
			 return;
  		}
	var theCanvas = document.getElementById("canvasOne");
	var context = theCanvas.getContext("2d");
	var tank=new Image();
	tank.addEventListener('load', start, false);
	tank.src="tanks_sheet.png"
	//Background
	context.fillStyle = "#CCCCCC";
	context.fillRect(0, 0, theCanvas.width, theCanvas.height);
	//Box
	context.lineWidth=16;
	context.strokeStyle = "#000000"; 
	context.strokeRect(8,8, theCanvas.width-16, theCanvas.height-16);
	//画我方tank和我方炮弹
	function drawtank() {
		if(gameover){
			context.save();
			context.fillStyle = "#000000";
			context.font = "normal bold 50px normal"; 
			context.fillText("游戏结束", 150, 150);
			context.restore();
			context.save();
			context.fillStyle = "#000000";
			context.font = "normal bold 25px normal"; 
			context.fillText("按空格键重新开始游戏", 125, 200);
			context.restore();
			update();
			return;
		}
	    update();
	    drawScene();
		render();
		//画场景
		function drawScene(){
			for(var i=0;i<=10;i++){
				for(var j=0;j<=14;j++){
					colCtr=j*32+16;
					rowCtr=i*32+16;
					context.save();
					sourceX=Math.floor(scene[i][j]%8)*32;
					sourceY=Math.floor(scene[i][j]/8)*32;
					context.drawImage(tank, sourceX,sourceY,32,32,colCtr,rowCtr,32,32);
					context.restore();
				}
			}	
		}
        //坦克更新数据
		function update(){
		    tankmove.x=tankmove.nextx;
			tankmove.y=tankmove.nexty;
			//左
			if(keyPressList[37]==true){
				//playermove.play();
				//playermove.stop();
				if(gameover){
					
					return;
				}
				space();
				tankmove.tankAngle=270;
				tankmove.nextx-=tankmove.tankspeed;
				tankmove.tankshape=tankmove.tanknextshape;
				if(scene[Math.floor((tankmove.nexty-12)/32)][Math.floor((tankmove.nextx-12)/32)]!=0||scene[Math.ceil((tankmove.nexty-20)/32)][Math.floor((tankmove.nextx-12)/32)]!=0){
					tankmove.nextx=tankmove.x;
					tankmove.nexty=tankmove.y;
					return;
				}
				tankmove.tanknextshape+=1;
				if(tankmove.tanknextshape>8){
					tankmove.tanknextshape=1;
				}
				return;
			}
			//右
			if(keyPressList[39]==true){
				if(gameover){
					
					return;
				}
				space();
				tankmove.tankAngle=90;
				tankmove.nextx+=tankmove.tankspeed;
				tankmove.tankshape=tankmove.tanknextshape;
				if(scene[Math.ceil((tankmove.nexty-20)/32)][Math.ceil((tankmove.nextx-20)/32)]!=0||scene[Math.floor((tankmove.nexty-12)/32)][Math.ceil((tankmove.nextx-20)/32)]!=0){
					tankmove.nextx=tankmove.x;
					tankmove.nexty=tankmove.y;
					return;
				}
				tankmove.tanknextshape+=1;
				if(tankmove.tanknextshape>8){
					tankmove.tanknextshape=1;
				}
				return;
			}
			//上
			if(keyPressList[38]==true){
				if(gameover){
					
					return;
				}
				space();
				tankmove.tankAngle=0;
				tankmove.nexty-=tankmove.tankspeed;
				tankmove.tankshape=tankmove.tanknextshape;
				if(scene[Math.floor((tankmove.nexty-12)/32)][Math.floor((tankmove.nextx-12)/32)]!=0||scene[Math.floor((tankmove.nexty-12)/32)][Math.ceil((tankmove.nextx-20)/32)]!=0){
					tankmove.nextx=tankmove.x;
					tankmove.nexty=tankmove.y;
					return;
				}
				tankmove.tanknextshape+=1;
				if(tankmove.tanknextshape>8){
					tankmove.tanknextshape=1;
				}
				return;
			}
			//下
			if(keyPressList[40]==true){
				if(gameover){
					
					return;
				}
				space();
				tankmove.tankAngle=180;
				tankmove.nexty+=tankmove.tankspeed;
				tankmove.tankshape=tankmove.tanknextshape;
				if(scene[Math.ceil((tankmove.nexty-20)/32)][Math.ceil((tankmove.nextx-20)/32)]!=0||scene[Math.ceil((tankmove.nexty-20)/32)][Math.floor((tankmove.nextx-12)/32)]!=0){
					tankmove.nextx=tankmove.x;
					tankmove.nexty=tankmove.y;
					return;
				}
				tankmove.tanknextshape+=1;
				if(tankmove.tanknextshape>8){
					tankmove.tanknextshape=1;
				}
				return;
			}
			space()
			//空格，发射炮弹
			function space(){
				if(keyPressList[32]==true){
					if(gameover){
						location.reload();
					}
					if(shell.shellflage){
						return;
					}
					if(tankmove.nextx<0){
						return;
					}
					else{
						shootSound.play();
						shell.shellflage=true;
						shell.nextx=tankmove.nextx;
						shell.nexty=tankmove.nexty;
						shell.shellAngle=tankmove.tankAngle;
						if(shellInterval){
							clearInterval(shellInterval);
							shellInterval=null;
						}
						shellInterval=setInterval(drawshell, 33);
					}
				}
			}	
		}

		//坦克实施
		function render(){
			context.save();
			context.setTransform(1,0,0,1,0,0)
			var angleInRadians =tankmove.tankAngle * Math.PI / 180;
			context.translate(tankmove.x+16, tankmove.y+16)
			context.rotate(angleInRadians);
			var tankshapeX=Math.floor(tankmove.tankshape%8)*32;
			var tankshapeY=Math.floor(tankmove.tankshape/8)*32;
			context.drawImage(tank, tankshapeX, tankshapeY,32,32,-16,-16,32,32);
			context.restore();
			
			context.clearRect(496,16,138,352);
			context.fillStyle = "#3cb371";
			context.fillRect(496,16,138,352);
			context.save();
			context.fillStyle = "#000000";
			context.font = "italic bold 23px serif"; 
			context.fillText("关  卡:"+level+"", 500, 80);
			context.fillText("敌  人:"+surplus+"", 500, 110); 
			context.fillText("生  命:"+life+"", 500, 140); 
			context.fillText("得  分:"+score+"", 500, 170); 
			context.fillText("最高分:"+record+"", 500, 200);
			context.restore();
			
			context.save();
			context.fillStyle = "#000000";
			context.font = "normal bold 15px normal"; 
			context.fillText("游戏说明: 玩家", 500, 270);
			context.fillText("操控坦克进行战", 500, 290); 
			context.fillText("斗，击毁敌方得", 500, 310); 
			context.fillText("分，被击毁或相", 500, 330); 
			context.fillText("相撞减分。", 500, 350);
			context.restore();
			
		}
		//画炮弹
		function drawshell(){
			if(gameover){
				return;
			}
			shellupdate()
			shellrender()
			//炮弹发射数据更新
			function shellupdate(){
				if(shell.shellAngle==0){
					shell.nexty-=shell.shellspeed;
					var i=scene[Math.floor((shell.nexty-12)/32)][Math.floor((shell.nextx)/32)];
					scene[Math.floor((shell.nexty-12)/32)][Math.floor((shell.nextx)/32)]=hitwall(i);
				}
				if(shell.shellAngle==90){
					shell.nextx+=shell.shellspeed;
					var i=scene[Math.floor((shell.nexty)/32)][Math.floor((shell.nextx+12)/32)];
					scene[Math.floor((shell.nexty)/32)][Math.floor((shell.nextx+12)/32)]=hitwall(i);
				}
				if(shell.shellAngle==180){
					shell.nexty+=shell.shellspeed;
					var i=scene[Math.floor((shell.nexty+12)/32)][Math.floor((shell.nextx)/32)];
					scene[Math.floor((shell.nexty+12)/32)][Math.floor((shell.nextx)/32)]=hitwall(i);
				}
				if(shell.shellAngle==270){
					shell.nextx-=shell.shellspeed;
					var i=scene[Math.floor((shell.nexty)/32)][Math.floor((shell.nextx-12)/32)];
					scene[Math.floor((shell.nexty)/32)][Math.floor((shell.nextx-12)/32)]=hitwall(i);
				}
				//检测炮弹是否撞墙
				function hitwall(i){
					switch(i){
						case 26:
							if(shellInterval){
								clearInterval(shellInterval);
								shellInterval=null;
							}
							setTimeout(function(){shell.shellflage=false},300);
							shell.nextx=-500;
							shell.nexty=-500;
							return 0;
							break

						case 31:	
							if(shellInterval){
								clearInterval(shellInterval);
								shellInterval=null;
							}
							setTimeout(function(){shell.shellflage=false},300);
							shell.nextx=-500;
							shell.nexty=-500;
							return i;
							break
						case 30:	
							if(shellInterval){
								clearInterval(shellInterval);
								shellInterval=null;
							}
							setTimeout(function(){shell.shellflage=false},300);
							shell.nextx=-500;
							shell.nexty=-500;
							return i;
							break
						default:
							return 0;
					}
				}					
			}
			//炮弹发射实施
			function shellrender(){
				shell.x=shell.nextx;
				shell.y=shell.nexty;
				context.save();
				context.setTransform(1,0,0,1,0,0)
				var shellangleInRadians =shell.shellAngle * Math.PI / 180;
				context.translate(shell.x+16, shell.y+16)
				context.rotate(shellangleInRadians);
				var shellshapeX=Math.floor(shell.shellshape%8)*32;
				var shellshapeY=Math.floor(shell.shellshape/8)*32;
				context.drawImage(tank, shellshapeX, shellshapeY,32,32,-16,-16,32,32);
				context.restore();
			}
		}		
	}
	//画敌军坦克
	function drawenemy(){
		if(gameover){
			return;
		}
		for(var enemytanknum=0;enemytanknum<=2;enemytanknum++){
			var enemytank=enemy[enemytanknum];
			//enemyrmove.play();
			enemyupdate();
			enemyrender();
		}
		function enemyupdate(){
			enemytank.shapenum=(0.1+enemytank.shapenum)%8+9;//减慢滚带的速度
			enemytank.enemytankshape=Math.floor(enemytank.shapenum);
			//下
			if(enemytank.enemytankAngle==180){
				swerve()
				enemytank.nexty+=enemytank.enemytankspeed;
				if(scene[Math.ceil((enemytank.nexty-20)/32)][Math.ceil((enemytank.nextx-20)/32)]!=0||scene[Math.ceil((enemytank.nexty-20)/32)][Math.floor((enemytank.nextx-12)/32)]!=0){
					enemyhitwall()
				}
			}
			//左
			if(enemytank.enemytankAngle==270){
				swerve()
				enemytank.nextx-=enemytank.enemytankspeed;
				if(scene[Math.floor((enemytank.nexty-12)/32)][Math.floor((enemytank.nextx-12)/32)]!=0||scene[Math.ceil((enemytank.nexty-20)/32)][Math.floor((enemytank.nextx-12)/32)]!=0){
					enemyhitwall()
				}
			}
			//右
			if(enemytank.enemytankAngle==90){
				swerve()
				enemytank.nextx+=enemytank.enemytankspeed;
				if(scene[Math.ceil((enemytank.nexty-20)/32)][Math.ceil((enemytank.nextx-20)/32)]!=0||scene[Math.floor((enemytank.nexty-12)/32)][Math.ceil((enemytank.nextx-20)/32)]!=0){
					enemyhitwall()
				}
			}
			//上
			if(enemytank.enemytankAngle==0){
				swerve()
				enemytank.nexty-=enemytank.enemytankspeed;
				if(scene[Math.floor((enemytank.nexty-12)/32)][Math.floor((enemytank.nextx-12)/32)]!=0||scene[Math.floor((enemytank.nexty-12)/32)][Math.ceil((enemytank.nextx-20)/32)]!=0){
					enemyhitwall()
				}
			}
			//随机发射炮弹
			var enemyfire=Math.floor(Math.random() * 100);
			if(enemyfire==0){
				if(enemyshell.shellflage){
					return;
				}
				if(enemytank.nextx<0){
					return;
				}
				else{
					enemyshell.shellflage=true;
					enemyshell.nextx=enemytank.nextx;
					enemyshell.nexty=enemytank.nexty;
					enemyshell.shellAngle=enemytank.enemytankAngle;
					if(enemyshellInterval){
						clearInterval(enemyshellInterval);
						enemyshellInterval=null;
					}
					enemyshellInterval=setInterval(enemyrdrawshell, 33);
				}
			}
			//检测是否打击到目标
			if(impact(shell,enemytank)){
				if(shellInterval){
					clearInterval(shellInterval);
					shellInterval=null;
				}
				score++;
				if(score>=record){
					record=score;
					localStorage.record=record;
				}
				if(score>=level*5){
					level++;
					if(level>=5){
						gameover=true;
						return
					}
					scene=scenenum[(level-1)%4];
					for(var enemynum=0;enemynum<=2;enemynum++){
					var tempx=48+enemynum*192;
					//敌军坦克
					tempenemytank={appearx:tempx,appeary:48,x:tempx,y:48,nextx:tempx,nexty:48,enemytankspeed:Speed+level*0.5,enemytankAngle:180,enemytankshape:0,shapenum:0};
					enemy[enemynum]=tempenemytank;
					}
					tankmove={appearx:240,appeary:304,x:240,y:304,nextx:240,nexty:304,tankAngle:Angle,tankspeed:Speed,tankshape:shape,tanknextshape:shape};
					enemyshell={x:0,y:0,nextx:0,nexty:0,shellspeed:Speed+level*0.5+2,shellshape:21,shellAngle:Angle,shellflage:false};
					surplus=6;
				}
				surplus--;
				setTimeout(function(){shell.shellflage=false},300);
				explode(enemytank)
				enemytank.nextx=-500;
				shell.nextx=-500;
				shell.nexty=-500;
			}
			//检测是否打击到玩家
			if(impact2(enemyshell,tankmove)){
				if(invincible){
					return;
				}
				if(enemyshellInterval){
					clearInterval(enemyshellInterval);
					enemyshellInterval=null;
				}
				life--;
				if(life<=0){
					gameover=true;
					return;
				}
				invincible=true;
				setTimeout(function(){invincible=false},2000)
				explode(tankmove)
				setTimeout(function(){enemyshell.shellflage=false},300);
				tankmove.nextx=-500;
				enemyshell.nextx=-500;
				enemyshell.nexty=-500;
			}
			//与敌人相撞
			if(impact(enemytank,tankmove)){
				if(enemyshellInterval){
					clearInterval(enemyshellInterval);
					enemyshellInterval=null;
				}
				if(invincible){
					return;
				}
				invincible=true;
				setTimeout(function(){invincible=false},2000)
				life--;
				if(life<=0){
					gameover=true;
					return;
				}
				explode(tankmove)
				tankmove.nextx=-500;
				
			}
			//自动转向
			function swerve(){
				var j=Math.floor(Math.random() * 100);
				if(j==0){
					enemytank.enemytankAngle+=90;
				}
				if(j==1){
					enemytank.enemytankAngle-=90;
				}
				enemytank.enemytankAngle=(enemytank.enemytankAngle+360)%360;
			}
			//撞墙转向
			function enemyhitwall(){
				enemytank.nextx=enemytank.x;
				enemytank.nexty=enemytank.y;
				var j=Math.floor(Math.random() * 2);
				if(j==0){
					enemytank.enemytankAngle+=90;
				}
				else{
					enemytank.enemytankAngle-=90;
				}
				enemytank.enemytankAngle=(enemytank.enemytankAngle+360)%360;
			}
		}
		//敌军tank
		function enemyrender(){
			enemytank.x=enemytank.nextx;
			enemytank.y=enemytank.nexty;
			context.save();
			context.setTransform(1,0,0,1,0,0)
			var enemyangleInRadians =enemytank.enemytankAngle * Math.PI / 180;
			context.translate(enemytank.x+16, enemytank.y+16)
			context.rotate(enemyangleInRadians);
			var enemyshapeX=Math.floor(enemytank.enemytankshape%8)*32;
			var enemyshapeY=Math.floor(enemytank.enemytankshape/8)*32;
			context.drawImage(tank, enemyshapeX, enemyshapeY,32,32,-16,-16,32,32);
			context.restore();	
		}
		//画炮弹
		function enemyrdrawshell(){
			if(gameover){
				return;
			}
			enemyrshellupdate()
			enemyrshellrender()
			//炮弹发射数据更新
			function enemyrshellupdate(){
				if(enemyshell.shellAngle==0){
					enemyshell.nexty-=enemyshell.shellspeed;
					var i=scene[Math.floor((enemyshell.nexty-0)/32)][Math.floor((enemyshell.nextx)/32)];
					scene[Math.floor((enemyshell.nexty-0)/32)][Math.floor((enemyshell.nextx)/32)]=hitwall(i);
				}
				if(enemyshell.shellAngle==90){
					enemyshell.nextx+=enemyshell.shellspeed;
					var i=scene[Math.floor((enemyshell.nexty)/32)][Math.floor((enemyshell.nextx+0)/32)];
					scene[Math.floor((enemyshell.nexty)/32)][Math.floor((enemyshell.nextx+0)/32)]=hitwall(i);
				}
				if(enemyshell.shellAngle==180){
					enemyshell.nexty+=enemyshell.shellspeed;
					var i=scene[Math.floor((enemyshell.nexty+0)/32)][Math.floor((enemyshell.nextx)/32)];
					scene[Math.floor((enemyshell.nexty+0)/32)][Math.floor((enemyshell.nextx)/32)]=hitwall(i);
				}
				if(enemyshell.shellAngle==270){
					enemyshell.nextx-=enemyshell.shellspeed;
					var i=scene[Math.floor((enemyshell.nexty)/32)][Math.floor((enemyshell.nextx-0)/32)];
					scene[Math.floor((enemyshell.nexty)/32)][Math.floor((enemyshell.nextx-0)/32)]=hitwall(i);
				}
				//检测炮弹是否撞墙
				function hitwall(i){
					switch(i){
						case 26:
							if(enemyshellInterval){
								clearInterval(enemyshellInterval);
								enemyshellInterval=null;
							}
							setTimeout(function(){enemyshell.shellflage=false},300);
							enemyshell.nextx=-500;
							enemyshell.nexty=-500;
							return 0;
							break

						case 31:	
							if(enemyshellInterval){
								clearInterval(enemyshellInterval);
								enemyshellInterval=null;
							}
							setTimeout(function(){enemyshell.shellflage=false},300);
							enemyshell.nextx=-500;
							enemyshell.nexty=-500;
							return i;
							break
						case 30:	
							if(enemyshellInterval){
								clearInterval(enemyshellInterval);
								enemyshellInterval=null;
							}
							setTimeout(function(){enemyshell.shellflage=false},300);
							enemyshell.nextx=-500;
							enemyshell.nexty=-500;
							return i;
							break
						default:
							return 0;
					}
				}					
			}
			//炮弹发射实施
			function enemyrshellrender(){
				enemyshell.x=enemyshell.nextx;
				enemyshell.y=enemyshell.nexty;
				context.save();
				context.setTransform(1,0,0,1,0,0)
				var shellangleInRadians =enemyshell.shellAngle * Math.PI / 180;
				context.translate(enemyshell.x+16, enemyshell.y+16)
				context.rotate(shellangleInRadians);
				var shellshapeX=Math.floor(enemyshell.shellshape%8)*32;
				var shellshapeY=Math.floor(enemyshell.shellshape/8)*32;
				context.drawImage(tank, shellshapeX, shellshapeY,32,32,-16,-16,32,32);
				context.restore();
			}
		}
	}
	//检测撞击
	function impact(one,two){
		var dx=one.nextx-two.nextx;
		var dy=one.nexty-two.nexty;
		var distance=Math.sqrt(dx*dx+dy*dy)
		if(distance<=26){
			return true;
		}
		else{
			return false;
		}
	}
	//检测撞击
	function impact2(one,two){
		var dx=one.nextx-two.nextx;
		var dy=one.nexty-two.nexty;
		var distance=Math.sqrt(dx*dx+dy*dy)
		if(distance<=26){
			return true;
		}
		else{
			return false;
		}
	}
	//爆炸
	function explode(dietank){
		explodeSound.play();
		var x=dietank.x;
		var y=dietank.y;
		var times=0;
		var dietankInterval=setInterval(function(){
			drawdietank(17+Math.floor(times/10));
			times++;
			if(times>29){
				clearInterval(dietankInterval);
				setTimeout(function(){dietank.shellflage=false},300);
				if(dietank.appeary==48){
					if(surplus<=2){
						dietank.enemytankspeed=0;
						return;
					}	
				}
				dietank.nextx=dietank.appearx;
				dietank.nexty=dietank.appeary;
			}
		},15)
		function drawdietank(dietankshape){
			context.save();
			context.setTransform(1,0,0,1,0,0)
			context.translate(x+16, y+16)
			var dietankshapeX=Math.floor(dietankshape%8)*32;
			var dietankshapeY=Math.floor(dietankshape/8)*32;
			context.drawImage(tank, dietankshapeX, dietankshapeY,32,32,-16,-16,32,32);
			context.restore();	
		}
	}
	var score=0;//分数
	var level=1;//关卡
	var surplus=5;//剩余敌人数量
	var life=3;//生命
	var invincible=false//无敌
	var storage = window.localStorage;//"localStorage"HTML5存储数据
	if(storage.length==0){
		localStorage.record=0;
	}
	var record=localStorage.record;//最高分
	var gameover=false;
	var enemyInterval=null;//敌人timer
	var tankInterval=null;//玩家timer
	var Speed=3;//运动的速度
	var Angle=0;//tank面向方向
	var shape=1;//tank当前状态
	//坦克数组
	tankmove={appearx:240,appeary:304,x:240,y:304,nextx:240,nexty:304,tankAngle:Angle,tankspeed:Speed,tankshape:shape,tanknextshape:shape};
	//炮弹数组
	shell={x:0,y:0,nextx:0,nexty:0,shellspeed:Speed+4,shellshape:20,shellAngle:Angle,shellflage:false};
	//敌军数组
	var enemy=new Array();
	//敌军炮弹数组
	var enemyshell={x:0,y:0,nextx:0,nexty:0,shellspeed:Speed+2,shellshape:21,shellAngle:Angle,shellflage:false};
	//场景数组
	var scenenum=[[
	[30,30,30,30,30,30,30,30,30,30,30,30,30,30,30],
	[31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,31],
	[31, 0, 0, 0,26,26, 0, 0, 0,26,26, 0, 0, 0,31],
	[31, 0, 0,26, 0, 0,26, 0,26, 0, 0,26, 0, 0,31],
	[31, 0, 0,26, 0, 0, 0,26, 0, 0, 0,26, 0, 0,31],
	[31,26, 0, 0,26, 0, 0, 0, 0, 0,26, 0, 0,26,31],
	[31,26, 0, 0, 0,26, 0, 0, 0,26, 0, 0, 0,26,31],
	[31,26, 0, 0, 0, 0,26, 0,26, 0, 0, 0, 0,26,31],
	[31,26,26,26,26, 0, 0,26, 0, 0,26,26,26,26,31],
	[31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,31],
	[30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]
	],
	[
	[30,30,30,30,30,30,30,30,30,30,30,30,30,30,30],
	[31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,31],
	[31, 0,26,26,26,26,0, 0,0,26,26, 26,26,0,31],
	[31, 0, 0, 0, 0,26, 0, 0, 0, 26,0, 0, 0, 0,31],
	[31,26,26,26, 26,26,26,26,26,26,26,26, 26,26,31],
	[31, 0, 26, 0, 0, 0, 0,26, 0, 0, 0, 0, 26,0,31],
	[31,26, 26,0,26,26,26,26,26,26,26, 0,26,26,31],
	[31, 0, 0, 0, 0, 26,0, 0, 0,26, 0, 0, 0, 0,31],
	[31,26,26,26,26, 0, 0,0,0,0, 26,26,26,26,31],
	[31, 0, 0,26, 26, 0, 0, 0, 0, 0, 26,26, 0, 0,31],
	[30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]
	],
	[
	[30,30,30,30,30,30,30,30,30,30,30,30,30,30,30],
	[31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,31],
	[31, 0,26,26,26,26,26, 0,26,26,26,26,26, 0,31],
	[31, 0,26, 0, 0, 0,26, 0,26, 0, 0, 0,26, 0,31],
	[31, 0,26, 0, 0, 0,26, 0,26, 0, 0, 0,26, 0,31],
	[31, 0,26, 0, 0, 0,26, 0,26,26,26,26,26, 0,31],
	[31, 0,26, 0, 0, 0,26, 0, 0, 0, 0, 0,26, 0,31],
	[31, 0,26, 0, 0, 0,26, 0,26, 0, 0, 0,26, 0,31],
	[31, 0,26,26,26,26,26, 0,26,26,26,26,26, 0,31],
	[31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,31],
	[30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]
	],
	[
	[30,30,30,30,30,30,30,30,30,30,30,30,30,30,30],
	[31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,31],
	[31, 0,26,26,26,26,26, 0,26,26,26, 0,26,26,31],
	[31, 0, 0, 0, 0,26, 0, 0, 0, 0,26, 0, 0, 0,31],
	[31,26,26,26, 0,26,26,26,26,26,26,26, 0,26,31],
	[31, 0, 0, 0, 0, 0, 0,26, 0, 0, 0, 0, 0,26,31],
	[31,26, 0,26,26,26,26,26,26,26,26, 0,26,26,31],
	[31, 0, 0, 0, 0, 0,26, 0, 0,26, 0, 0, 0, 0,31],
	[31,26,26,26,26, 0, 0,26,26,26, 0,26,26,26,31],
	[31, 0, 0,26, 0, 0, 0, 0, 0, 0, 0,26, 0, 0,31],
	[30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]
	]]
	var scene=scenenum[(level-1)];
	//计时器控制炮弹发出
	var shellInterval=null;
	var enemyshellInterval=null;
	for(var enemynum=0;enemynum<=2;enemynum++){
		var tempx=48+enemynum*192;
	//敌军坦克
	tempenemytank={appearx:tempx,appeary:48,x:tempx,y:48,nextx:tempx,nexty:48,enemytankspeed:Speed-1,enemytankAngle:180,enemytankshape:0,shapenum:0};
	enemy[enemynum]=tempenemytank;
	}
	//键盘事件
	var keyPressList=[];
	document.onkeydown=function(e){
		e=e?e:window.event;
		keyPressList[e.keyCode]=true;
	}
	document.onkeyup=function(e){
		e=e?e:window.event;
		keyPressList[e.keyCode]=false;
	}
	//声音
	//爆炸
	var explodeSound = document.createElement("audio");
	document.body.appendChild(explodeSound);
	explodeSound.setAttribute("src", "explode1.mp3");
	explodeSound.valume=.5;
	//发射子弹
	var shootSound = document.createElement("audio");
	document.body.appendChild(shootSound);
	shootSound.setAttribute("src", "shoot1.mp3");
	shootSound.volume=.5;
	//玩家行走
	var playermove = document.createElement("audio");
	document.body.appendChild(playermove);
	playermove.setAttribute("src", "move1.mp3");
	playermove.valume=.001;
	//敌人行走
	var enemyrmove = document.createElement("audio");
	document.body.appendChild(enemyrmove);
	enemyrmove.setAttribute("src", "move2.mp3");
	enemyrmove.valume=.001;
	//游戏开始
	
	//游戏失败
	
	
	
	//开始游戏
	function start(){
		tankInterval=setInterval(drawtank, 33);
		enemyInterval=setInterval(drawenemy, 33);
	}
	//debug函数
	var debug = function(log){
		try{
			console.log(log);//safari可用
		}
		catch(e){}
	}
}
function supportedAudioFormat(audio) {
	var returnExtension = "";
	if (audio.canPlayType("audio/ogg") =="probably" || audio.canPlayType("audio/ogg") == "maybe") {
		returnExtension = "ogg";
	} else if(audio.canPlayType("audio/wav") =="probably" || audio.canPlayType("audio/wav") == "maybe") {
		returnExtension = "wav";
	} else if(audio.canPlayType("audio/mp3") == "probably" || audio.canPlayType("audio/mp3") == "maybe") {
		returnExtension = "mp3";
	}
	
	return returnExtension;
	
}