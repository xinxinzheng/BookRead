;(function(define,window){define('transformCanvas',[],function(){

  var TransformCanvas = React.createClass({
  	componentDidMount:function(){
  		var canvas = document.getElementById("canvas");
  		if(canvas.getContext){
  			var cv = canvas.getContext('2d');
  			cv.fillRect(10,10,200,200);
  			cv.save();
  			cv.fillStyle = '#86D34B';
  			cv.fillRect(30,30,160,160);
  			cv.save();
  			cv.fillStyle = "#F05133";
  			cv.fillRect(50,50,120,120);
  			cv.restore();
  			// cv.fillStyle = '#24456B';
  			cv.fillRect(70,70,80,80);
  			cv.restore();
  			cv.fillRect(90,90,40,40);
  			cv.save();

			// cv.fillRect(300,10,300,300);
			// for (var i=0;i<3;i++) {
			//     for (var j=0;j<3;j++) {
			//       cv.save();
			//       cv.strokeStyle = "#9CFF00";
			//       cv.translate(50+j*100,50+i*100);
			//       drawSpirograph(cv,20*(j+2)/(j+1),-8*(i+3)/(i+1),10);
			//       cv.restore();
			//     }
			// }
			// function drawSpirograph(ctx,R,r,O){
			//   var x1 = R-O;
			//   var y1 = 0;
			//   var i  = 1;
			//   ctx.beginPath();
			//   ctx.moveTo(x1+300,y1+10);
			//   do {
			//     if (i>20000) break;
			//     var x2 = (R+r)*Math.cos(i*Math.PI/72) - (r+O)*Math.cos(((R+r)/r)*(i*Math.PI/72))
			//     var y2 = (R+r)*Math.sin(i*Math.PI/72) - (r+O)*Math.sin(((R+r)/r)*(i*Math.PI/72))
			//     ctx.lineTo(x2+300,y2+10);
			//     x1 = x2;
			//     y1 = y2;
			//     i++;
			//   } while (x2 != R-O && y2 != 0 );
			//   ctx.stroke();
			// }

      cv.fillStyle = '#8FD84C';
      cv.save();
      cv.translate(350,130);
      cv.fillRect(0,0,100,100);
      cv.fillStyle = '#E8821F';
      cv.save();
      cv.rotate(Math.PI*2/8 );
      cv.fillRect(0,0,100,100);
      cv.fillStyle = '#2CBEF9';
      cv.save();
      cv.scale(2,2);
      cv.rotate(Math.PI*2/4);
      cv.fillRect(0,0,50,50);
      cv.fillStyle = '#E70012';
      cv.rotate(Math.PI*2/1);
      var sin = Math.sin(Math.PI/6);//0.5
      var cos = Math.cos(Math.PI/6);//二分之一根号三
      cv.translate(700, 100);
      var c = 0;
      for (var i=0; i <= 12; i++) {
        c = Math.floor(255 / 12 * i);
        cv.fillStyle = "rgb(" + c + "," + c + "," + c + ")";
        cv.fillRect(0, 0, 100, 10);
        cv.transform(cos, sin, -sin, cos, 0, 0);
      }
        
      cv.setTransform(-1, 0, 0, 1, 700, 0);
      cv.fillStyle = "rgba(255, 128, 255, 0.5)";
      cv.fillRect(0, 50, 100, 100);

  		}
  	},
  	render:function(){
  		return(
  			<canvas id="canvas" height='600px' width='1300px'>
  				测试
  			</canvas>
  		)
  	}
  });

  return TransformCanvas;

  });
}(define,window))

