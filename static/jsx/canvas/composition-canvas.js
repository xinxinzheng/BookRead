;(function(define,window){define('compositionCanvas',[],function(){

  var CompositionCanvas = React.createClass({
  	componentDidMount:function(){
  		var canvas = document.getElementById("canvas");
  		if(canvas.getContext){
  			var cv = canvas.getContext('2d');
  			cv.fillStyle = '#84DA46';
  			cv.fillRect(0,0,200,200);
  			// cv.globalCompositeOperation = "source-over";//新图形在上
  			// cv.globalCompositeOperation = "destination-over";//原图像在上
  			// cv.globalCompositeOperation = "source-in";//原图形与新图形的交集，显示新图形
  			// cv.globalCompositeOperation = "destination-in";//原图形与新图形的交集，显示原图形
  			// cv.globalCompositeOperation = "source-out";//新图像与原图形不想交的区域显示新图形
  			// cv.globalCompositeOperation = "destination-out";//新图像与原图形不想交的区域显示原图像
  			// cv.globalCompositeOperation = "source-atop";//新图形中与原有内容重叠的部分会被绘制，并覆盖于原有内容之上
  			// cv.globalCompositeOperation = "destination-atop";//原有内容中与新内容重叠的部分会被保留，并会在原有内容之下绘制新图形
  			// cv.globalCompositeOperation = "lighter";//两图形中重叠部分作加色处理。
  			// cv.globalCompositeOperation = "darken";//两图形中重叠的部分作减色处理。
  			// cv.globalCompositeOperation = "xor";//重叠的部分会变成透明。
  			// cv.globalCompositeOperation = "copy";//只有新图形会被保留，其它都被清除掉。
  			// cv.fillStyle = '#159C5A';
  			// cv.fillRect(50,50,200,200);
  			cv.translate(100,100);
  			cv.arc(0,0,75,0,Math.PI*2,true);
  			cv.clip();

  			var col = cv.createLinearGradient(0,0,5,5);
  			col.addColorStop(0,'#DD5044');
  			col.addColorStop(1,'#FECB43');
  			cv.fillStyle = col;
  			cv.fillRect(-75,-75,150,150);

  			cv.fillStyle = 'white';
  			cv.beginPath();
  			cv.moveTo(-50,0);
  			cv.lineTo(50,0);
  			cv.lineTo(-30,50);
  			cv.lineTo(0,-35);
  			cv.lineTo(30,50);
  			cv.lineTo(-50,0);
  			cv.closePath();
  			cv.fill();
  			// cv.clip();

  		}
  	},
  	render:function(){
  		return(
  			<canvas id="canvas" height='600px' width='1000px'>
  				测试
  			</canvas>
  		)
  	}
  });

  return CompositionCanvas;

  });
}(define,window))

