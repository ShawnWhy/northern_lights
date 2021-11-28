function genColor(){
var color;
var letters = '0123456789ABCDEF';
var color = '#';for (var j = 0; j < 6; j++){
    ;color += letters[Math.floor(Math.random() * 16)]
};return color};
function genBlades(){
    var blades = $(".blade");
    for(i=0; i<blades.length;i++){
            randnumber= Math.floor(Math.random()*350+10)

        $(blades[i]).css("background-color",genColor())
        $(blades[i]).css("transform","rotateX("+randnumber+"deg)")

    }
}
function genBladecolor(){
    var blades = $(".blade");
    for(i=0; i<blades.length;i++){
            // randnumber= Math.floor(Math.random()*350+10)

        $(blades[i]).css("background-color",genColor())
        // $(blades[i]).css("transform","rotateX("+randnumber+"deg)")

    }
}
function scaleingstripes(){

    var one = $(".firstPanel .Panel");
    var two = $(".firstPanel2 .Panel");
    var three = $(".firstPanel3 .Panel");
    console.log(one);
    for(i=0;i<one.length;i++){
        $(one[i]).css("width", + 60*(Math.pow(i,2)/300)+"px");
        // $(one[i]).css("height", + 40*(Math.pow(i,2)/100)+"px");
   


        $(two[i]).css("width", + 60*(Math.pow(i,2)/100)+"px");
        $(three[i]).css("width", + 40*(Math.pow(i,2)/400)+"px");


    
    
    }
}

function startSky(){
var panels = $(".Panel");
for(i=0;i<panels.length;i++){
    
    // randnumber2 = Math.floor(Math.random()*25+75)   
    scale = 1/i;
    // randomdumber=3;
    randcolor = genColor();
    $(panels[i]).css("background-color", randcolor);
    // $(panels[i]).css("opacity", randnumber2+"%");
 

    

    
}
// prevAngle=0;
// var panels2 = $(".Panel2");
// for(i=0;i<panels2.length;i++){
//     randnumber= Math.floor(Math.random()*180+90)
//     randcolor = genColor();
//     // $(panels2[i]).css("left", 10*i+"%" );
//     $(panels2[i]).css("background-color", randcolor);
//     // prevangle2 - 90-
//     // $(panels2[i]).css("transform","translate3D("+150*Math.cos(prevAngle)+"px,0px,"+(-150*Math.sin(prevAngle))+"px)rotateY("+randnumber+"deg)")
//     $(panels2[i]).css("transform","rotateY("+randnumber+"deg)")

//     // prevAngle=randnumber;
 
    
// }

}
genBlades();
$(".firstPanel").addClass("panelMove")
$(".firstPanel2").addClass("panelMove2")
$(".firstPanel3").addClass("panelMove2")

scaleingstripes()
startSky()
setInterval(() => {



    startSky()
    genBladecolor()



    
}, 500);