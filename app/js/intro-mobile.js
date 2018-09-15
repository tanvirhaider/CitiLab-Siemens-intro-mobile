


var createjs, MobileAdobeAn;
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;


function createHeroMobileAnimation (cjs, an, heroImg) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.worldmap = function() {
	this.initialize(img.worldmap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4640,2731);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.mapBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.worldmap();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mapBG, new cjs.Rectangle(0,0,4640,2731), null);


(lib.dotpulsingmumbai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#15C2C2").s().p("AgkAlQgPgPgBgWQABgVAPgPQAPgPAVgBQAWABAPAPQAQAPAAAVQAAAWgQAPQgPAQgWAAQgVAAgPgQg");
	this.shape.setTransform(5.3,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dotpulsingmumbai, new cjs.Rectangle(0,0,10.5,10.5), null);


(lib.dotpulsinglondon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AgkAlQgPgPgBgWQABgVAPgPQAPgPAVgBQAWABAPAPQAQAPAAAVQAAAWgQAPQgPAQgWAAQgVAAgPgQg");
	this.shape.setTransform(5.3,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dotpulsinglondon, new cjs.Rectangle(0,0,10.5,10.5), null);


(lib.dotpulsingla = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AgkAlQgPgPgBgWQABgVAPgPQAPgPAVgBQAWABAPAPQAQAPAAAVQAAAWgQAPQgPAQgWAAQgVAAgPgQg");
	this.shape.setTransform(5.3,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dotpulsingla, new cjs.Rectangle(0,0,10.5,10.5), null);


(lib.mumbaidot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		if (!this.looped) this.looped = 1;    
		if (this.looped++ > 100) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Layer_3
	this.instance = new lib.dotpulsingmumbai();
	this.instance.parent = this;
	this.instance.setTransform(3,3,1,1,0,0,0,5.2,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:5,regY:5,scaleX:10.12,scaleY:10.12,x:1.7,y:1.7},59).to({regX:5.2,regY:5.2,scaleX:1,scaleY:1,x:3,y:3},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,10.5,10.5);


(lib.londondot0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		if (!this.london) this.london = 1;    
		if (this.london++ > 100) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Layer_1
	this.instance = new lib.dotpulsinglondon();
	this.instance.parent = this;
	this.instance.setTransform(3,3,1,1,0,0,0,5.2,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:5,regY:5,scaleX:9.33,scaleY:9.33,x:2.1,y:2.1},59).to({regX:5.2,regY:5.2,scaleX:1,scaleY:1,x:3,y:3},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,10.5,10.5);


(lib.ladot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		if (!this.london) this.london = 1;    
		if (this.london++ > 100) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Layer_1
	this.instance = new lib.dotpulsingla();
	this.instance.parent = this;
	this.instance.setTransform(3,3,1,1,0,0,0,5.2,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:5,regY:5,scaleX:10.08,scaleY:10.08,x:1.8,y:1.8},59).to({regX:5.2,regY:5.2,scaleX:1,scaleY:1,x:3,y:3},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,10.5,10.5);


(lib.world = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_299 = function() {
		this.stop();
		window.initIntroHeroCopy();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(299).call(this.frame_299).wait(1));

	// mumbai_0
	this.mumbai_0 = new lib.mumbaidot();
	this.mumbai_0.name = "mumbai_0";
	this.mumbai_0.parent = this;
	this.mumbai_0.setTransform(3242,1546.9,1,1,0,0,0,3,3);
	this.mumbai_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mumbai_0).wait(240).to({_off:false},0).wait(60));

	// london_0
	this.london_0 = new lib.londondot0();
	this.london_0.name = "london_0";
	this.london_0.parent = this;
	this.london_0.setTransform(2174,991.2);
	this.london_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.london_0).wait(140).to({_off:false},0).wait(160));

	// la_0
	this.la_0 = new lib.ladot();
	this.la_0.name = "la_0";
	this.la_0.parent = this;
	this.la_0.setTransform(554.2,1218.7,1,1,0,0,0,3,3);
	this.la_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.la_0).wait(59).to({_off:false},0).wait(241));

	// graphics
	this.instance = new lib.mapBG();
	this.instance.parent = this;
	this.instance.setTransform(2320,1365.5,1,1,0,0,0,2320,1365.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4640,2731);


// stage content:
(lib.introanimationv3mobile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_299 = function() {
		this.stop();
		
		doThis();
		
		function doThis() {
			console.log("fire this function");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(299).call(this.frame_299).wait(1));

	// Layer_1
	this.instance = new lib.world();
	this.instance.parent = this;
	this.instance.setTransform(340.4,111.3,0.158,0.158,0,0,0,2160.2,691.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({regX:2159.8,regY:691.4,scaleX:0.94,scaleY:0.94,x:1818,y:-347.1},39,cjs.Ease.quadInOut).to({x:1714},45).to({x:310,y:-27.1},51,cjs.Ease.quadInOut).to({x:142},60).wait(1).to({regX:2320,regY:1365.5,x:291.4,y:607.2},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:288.3,y:604.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:283.7,y:601.1},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:277.7,y:596.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:270.1,y:590.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:260.7,y:582.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:249.7,y:574},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:236.8,y:563.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:222,y:551.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:205.2,y:538.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:186.4,y:523.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:165.6,y:506.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:142.8,y:488.7},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:118.1,y:469},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:91.6,y:447.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:63.6,y:425.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:34.2,y:402},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:3.8,y:377.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-27.2,y:353.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-58.4,y:328.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-89.5,y:303.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-119.9,y:279.1},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-149.5,y:255.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-177.8,y:232.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-204.6,y:211.5},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-229.8,y:191.4},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-253.2,y:172.7},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-274.8,y:155.5},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:-294.5,y:139.8},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:-312.3,y:125.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-328.3,y:112.8},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-342.5,y:101.4},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-355,y:91.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-365.9,y:82.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-375.2,y:75.4},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-383.1,y:69.1},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-389.5,y:64},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-394.6,y:59.9},0).wait(1).to({regX:2159.8,regY:691.4,scaleX:0.75,scaleY:0.75,x:-518.8,y:-449.6},0).wait(1).to({regX:2320,regY:1365.5,x:-403,y:56.8},0).wait(1).to({x:-407.6},0).wait(1).to({x:-412.1,y:56.7},0).wait(1).to({x:-416.5},0).wait(1).to({x:-420.9,y:56.6},0).wait(1).to({x:-425.1},0).wait(1).to({x:-429.3,y:56.5},0).wait(1).to({x:-433.5},0).wait(1).to({x:-437.5},0).wait(1).to({x:-441.6,y:56.4},0).wait(1).to({x:-445.5},0).wait(1).to({x:-449.4,y:56.3},0).wait(1).to({x:-453.2},0).wait(1).to({x:-456.9},0).wait(1).to({x:-460.6,y:56.2},0).wait(1).to({x:-464.2},0).wait(1).to({x:-467.7,y:56.1},0).wait(1).to({x:-471.2},0).wait(1).to({x:-474.6},0).wait(1).to({x:-477.9,y:56},0).wait(1).to({x:-481.2},0).wait(1).to({x:-484.4,y:55.9},0).wait(1).to({x:-487.5},0).wait(1).to({x:-490.6},0).wait(1).to({x:-493.6,y:55.8},0).wait(1).to({x:-496.5},0).wait(1).to({x:-499.4},0).wait(1).to({x:-502.2,y:55.7},0).wait(1).to({x:-505},0).wait(1).to({x:-507.7},0).wait(1).to({x:-510.3},0).wait(1).to({x:-512.8,y:55.6},0).wait(1).to({x:-515.3},0).wait(1).to({x:-517.7},0).wait(1).to({regX:2159.9,regY:691.5,x:-640.3,y:-450.6},0).to({regX:2160.1,scaleX:0.14,scaleY:0.14,x:246.3,y:102.4},25,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(205.2,191.8,735.1,432.7);
// library properties:
lib.properties = {
	id: '1BC59284BC11499B8F52D1D6B9E2D635',
	width: 414,
	height: 380,
	fps: 60,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src: heroImg, 
		id:"worldmap"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1BC59284BC11499B8F52D1D6B9E2D635'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


}

//})(createjs = createjs||{}, MobileAdobeAn = MobileAdobeAn||{});


function initMobileIntroAnimation() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=MobileAdobeAn.getComposition("1BC59284BC11499B8F52D1D6B9E2D635");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.introanimationv3mobile();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	makeResponsive(false,'both',false,1);	
	MobileAdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}


window.onload = function() {
	var heroImgLoc = window.top.document.getElementById("animation_container").dataset.heroImg;
	createHeroMobileAnimation (createjs = createjs||{}, MobileAdobeAn = MobileAdobeAn||{},heroImgLoc);
	initMobileIntroAnimation();
	
}

function initIntroHeroCopy() {
	var introContent = document.querySelector("#animation_container .introCopy");
	introContent.style.display = "block";
}

