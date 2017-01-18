;(function(define,window){define('styleCanvas',[],function(){

  var StyleCanvas = React.createClass({
  	componentDidMount:function(){
  		var canvas = document.getElementById("canvas");
  		if(canvas.getContext){
  			var cv = canvas.getContext('2d');
        for(var i = 0 ; i < 6 ; i++){
          for(var j = 0 ; j < 6 ; j++){
            cv.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' + 
                       Math.floor(255-42.5*j) + ',0)';
            cv.fillRect(j*25,i*25,25,25);
          }
        }
        cv.globalAlpha = 1;
        for(var i = 0 ; i < 6 ; i++){
          for(var j = 0 ; j < 6 ; j++){
            cv.strokeStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' + 
                       Math.floor(255-42.5*j) + ',0)';
            cv.beginPath();
            cv.arc(312.5 + j * 25 , i * 25 + 12.5 , 12.5 , 0 , Math.PI * 2 , true);
            cv.stroke();
          }
        }

        cv.fillStyle = '#FD0';
        cv.fillRect(10 , 200 , 50 , 50);
        cv.fillStyle = "#6C0";
        cv.fillRect(60 , 200 , 50 , 50);
        cv.fillStyle = "#09F";
        cv.fillRect(10 , 250 , 50 , 50);
        cv.fillStyle = "#F30";
        cv.fillRect(60 , 250 , 50 , 50);
        cv.fillStyle = "#fff";
        cv.globalAlpha = .2;

        for(var i = 0 ; i < 7 ; i++){
          cv.beginPath();
          cv.arc(60,250,5+10*i,0,Math.PI*2,true);
          cv.fill();
        }

        cv.globalAlpha = 1;
         cv.fillStyle = 'rgb(255,221,0)';
         cv.fillRect(300 , 200 , 150 , 50);
         cv.fillStyle = "rgb(102,204,0)";
         cv.fillRect(300 , 250 , 150 , 50);
         cv.fillStyle = "rgb(0,153,255)";
         cv.fillRect(300 , 300 , 150 , 50);
         cv.fillStyle = "rgb(255,51,0)";
         cv.fillRect(300 , 350 , 150 , 50);

         for(var j = 0 ; j < 10 ; j++){
            for(var i = 0 ; i < 4 ; i++){
               cv.fillStyle = "rgba(255,255,255," + (j+1)/10 + ")";
               cv.fillRect(300+15*j,200+i*50,15,50);
            }
         }

         cv.beginPath();
         cv.lineWidth = 10;
         cv.moveTo(500,10);
         cv.lineTo(650,10);        
         cv.stroke();

         cv.beginPath();
         cv.lineWidth = 10;
         cv.lineCap = 'butt';
         cv.moveTo(500,30);
         cv.lineTo(650,30);        
         cv.stroke();

         cv.beginPath();
         cv.lineWidth = 10;
         cv.lineCap = 'round';
         cv.moveTo(500,50);
         cv.lineTo(650,50);        
         cv.stroke();

         cv.beginPath();
         cv.lineWidth = 10;
         cv.lineCap = 'square';
         cv.moveTo(500,70);
         cv.lineTo(650,70);        
         cv.stroke();

         cv.beginPath();
         cv.lineWidth = 10;
         // cv.lineCap = 'square';
         cv.lineJoin = "miter";
         cv.miterLimit = 5;
         cv.moveTo(700,20);
         cv.lineTo(800,70);
         cv.lineTo(900,50); 
         cv.closePath();         
         cv.stroke();

         cv.beginPath();
         cv.lineWidth = 1;
         cv.setLineDash([8,4]);
         cv.lineDashOffset = 4;
         cv.moveTo(700,100);
         cv.lineTo(850,100);        
         cv.stroke();

         var lineargradient = cv.createLinearGradient(800, 200, 1000, 400);
         lineargradient.addColorStop(0,'white');
         lineargradient.addColorStop(1,'black');
         cv.fillStyle = lineargradient;
         cv.fillRect(800,200,200,200);

         var radialgradient = cv.createRadialGradient(500,500,100,400,400,50);
         radialgradient.addColorStop(0,'blue');
         radialgradient.addColorStop(1,'red');
         cv.fillStyle = radialgradient;
         cv.beginPath();
         cv.arc(500,500,100,0,Math.PI*2,true);
         cv.fill();

         cv.shadowOffsetX = 20;
         cv.shadowOffsetY = 20;
         cv.shadowBlur = 20;
         cv.shadowColor = 'red';
         var img = new Image();
         img.src = "static/image/hua.jpg";
         img.onload = function(){
           var pat = cv.createPattern(img,'repeat');
           cv.fillStyle = pat;
           cv.fillRect(700,500,100,100);
         }

         cv.fillStyle = 'yellow';
         cv.beginPath(); 
         cv.arc(1200, 500, 30, 0, Math.PI*2, true);
         cv.arc(1200, 500, 15, 0, Math.PI*2, true);
         cv.fill("evenodd");
         
  		}
  	},
    componentWillUnmount:function(){
      // console.log(12221);
    },
  	render:function(){
  		return(
  			<canvas id="canvas" height='700px' width="1300px">
  				测试
  			</canvas>
  		)
  	}
  });

  return StyleCanvas;

  });
}(define,window))

