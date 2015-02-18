// TODO add support for relative urls
//var baseURL = "http://johnrobinsn.github.io/pxScene2d/";
//var baseURL = "http://localhost/~johnrobinson/johnrobinsn.github.io/pxScene2d/";
var baseURL = process.cwd()+"/../../";

var root = scene.root;

var interpolators = scene.allInterpolators;

var bg = scene.createRectangle({fillColor:0xffffffff,w:scene.w,h:scene.h,parent:root});

var tweeners = [{n:"linear",v:0}, {n:"easeOutElastic",v:1}, {n:"easeOutBounce",v:2}, 
		{n:"exp", v:3}, {n:"stop", v:4}];

for (var i = 0; i < interpolators.length; i++) {
    var interpolatorName = interpolators[i];
    var x = 50;
    var y = i*64;
    scene.createImage({url:baseURL+"images/blurredline.png",x:x,y:y+50,parent:root});
    scene.createText({text:interpolatorName,textColor:0x707070ff,pixelSize:14,x:x+5,y:y+18,parent:root});
    scene.createImage({url:baseURL+"images/ball2.png",a:0.5,x:x,y:y+8,parent:root})
	.animateTo({x:600},1,scene[interpolatorName],scene.PX_SEESAW);
}

function updateSize(w, h) {
    bg.w = w;
    bg.h = h;
}

scene.on("onResize", function(e) { updateSize(e.w,e.h); });
updateSize(scene.w, scene.h);



