function fall(){function t(){d+=l,l+=.8,u+=.001*r,context.clearRect(0,0,canvas.width,canvas.height),context.fillStyle="#133686",context.fillRect(s,d,o,o),h.forEach(function(t){t.updatePos(u),t.draw(),t.x+t.width<=0&&t.updatePos(-(canvas.width+t.width)),n(t)}),a(),d+o>=canvas.height&&(l=0,d=canvas.height-o,v=!1),tapt||requestAnimationFrame(t)}function e(){context.font="60px Helvetica Neue",context.textAlign="center",context.fillStyle="#aaa",context.fillText("Du tapte.",canvas.width/2,canvas.height/2),tapt=!0,document.addEventListener("mousedown",startClickHandler,!1),document.addEventListener("touchstart",startClickHandler,!1)}function n(t){t.x<=s+o&&t.x>=s-t.width?(t.inside=!0,d+o>=canvas.height-t.height&&e()):!0===t.inside&&(t.inside=!1,r+=1)}function a(){r>highscore&&(highscore=r),context.fillStyle="#666",context.font="32px Helvetica Neue",context.textAlign="center",context.fillText(r,80,80),context.fillStyle="#aaa",context.fillText(highscore,canvas.width-80,80)}function i(t){if(!isTouchDevice()||"mousedown"!==t.type){if("keydown"===t.type)if(82===t.keyCode)fall();else if(32!==t.keyCode)return;d===canvas.height-o?l=-20:v||(l=-15,v=!0),tapt&&t.target===canvas&&fall(),tapt=!1}}function c(t){this.x=t,this.width=50+Math.floor(80*Math.random()),this.height=50+Math.floor(100*Math.random()),this.inside=!1,this.updatePos=function(t){this.x-=t},this.draw=function(){context.fillStyle="#aaa",context.fillRect(this.x,canvas.height-this.height,this.width,this.height)}}document.querySelector(".play").blur(),tapt=!1,document.removeEventListener("mousedown",startClickHandler),document.removeEventListener("touchstart",startClickHandler);var o=20,s=50,d=canvas.height-o,h=[new c(canvas.width-225),new c(canvas.width+125)],l=0,r=0,u=6,v=!0;document.addEventListener("mousedown",i,!1),document.addEventListener("touchstart",i,!1),document.addEventListener("keydown",i,!1),t()}function startClickHandler(t){isTouchDevice()&&"mousedown"===t.type||t.target===canvas&&fall()}var canvas=document.querySelector(".game"),context=canvas.getContext("2d"),highscore=0,tapt=!1;document.addEventListener("mousedown",startClickHandler,!1),document.addEventListener("touchstart",startClickHandler,!1);