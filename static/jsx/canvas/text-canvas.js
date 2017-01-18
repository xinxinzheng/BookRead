;(function(define,window){define('textCanvas',[],function(){

  var TextCanvas = React.createClass({
  	componentDidMount:function(){
  		var canvas = document.getElementById("canvas");
  		if(canvas.getContext){
  			var cv = canvas.getContext('2d');
  			cv.font = "35px serif";
  			cv.textAlign = 'center';
  			cv.textBaseline = "hanging";
  			cv.direction = 'ltr';
  			// cv.fillText('hello world' , 60 , 20);
  			cv.strokeText('hello world' , 100,40);
  			var text = cv.measureText('hello');
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

  return TextCanvas;

  });
}(define,window))

