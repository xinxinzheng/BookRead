;(function(define,window){define('drawShape',[],function(){

  var DrawShape = React.createClass({
  	componentDidMount:function(){
  		var canvas = document.getElementById("canvas");
  		if(canvas.getContext){
  			var cv = canvas.getContext('2d');
  			//矩形
  			cv.fillStyle = 'rgba(132,210,74,.6)';
  			cv.fillRect(10,10,200,200);
  			cv.fillStyle = 'rgba(240,81,51,.6)';
  			cv.clearRect(40,40,140,140);
  			cv.fillStyle = 'rgba(252,207,0,.6)';
  			cv.strokeRect(70,70,80,80);
  			//路径
  			cv.beginPath();
  			cv.moveTo(350,40);
  			cv.lineTo(300,40);
  			cv.lineTo(250,90);
  			cv.lineTo(300,140);
  			cv.lineTo(350,140);
  			cv.lineTo(400,90);
  			cv.lineTo(350,40);
  			cv.closePath();
  			cv.fill();//填充
  			cv.stroke();//描边

  			//圆弧
  			cv.fillStyle = 'rgba(31,119,184,.6)';
  			cv.beginPath();
  			cv.arc(550,100,60,0,Math.PI*2,true);
  			cv.closePath();
  			cv.fill();
  			cv.stroke();

  			cv.fillStyle = 'rgba(51,167,241,.6)';
  			cv.beginPath();
  			cv.moveTo(650,100);
  			cv.lineTo(700,100);
  			cv.arcTo(775,100,775,225,75);
  			cv.lineTo(775,300);
  			cv.closePath();
  			cv.stroke();
  			cv.fill();

  			//贝塞尔曲线
  			// cv.beginPath();
  			// cv.quadraticCurveTo(900,46,1000,67);
  			// cv.closePath();
  			// cv.stroke();
  			// cv.fill();

  			cv.beginPath();
  			cv.bezierCurveTo(900,46,1000,67,1100,40);
  			cv.closePath();
  			cv.stroke();
  			cv.fill();

  		}
  	},
  	render:function(){
  		return(
  			<canvas id="canvas" width="1300px" height='600px'>
  				测试
  			</canvas>
  		)
  	}
  });

  return DrawShape;

  });
}(define,window))

