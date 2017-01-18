;(function(define,window){define('BasesCanvas',[],function(){

  var BasesCanvas = React.createClass({
  	componentDidMount:function(){
  		var canvas = document.getElementById("canvas");
  		if(canvas.getContext){
  			var cv = canvas.getContext('2d');
  			cv.fillStyle = 'rgba(132,210,74,.6)';
  			cv.fillRect(20,20,100,100);
  			cv.fillStyle = 'rgba(240,81,51,.6)';
  			cv.fillRect(40,40,100,100);
  		}
  	},
  	render:function(){
  		return(
  			<canvas id="canvas" height='600px'>
  				测试
  			</canvas>
  		)
  	}
  });

  return BasesCanvas;

  });
}(define,window))

