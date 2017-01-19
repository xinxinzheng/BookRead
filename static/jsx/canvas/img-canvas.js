;(function(define,window){define('imgCanvas',[],function(){

  var ImgCanvas = React.createClass({
  	componentDidMount:function(){
  		var canvas = document.getElementById("canvas");
  		if(canvas.getContext){
  			var cv = canvas.getContext('2d');
        var img = new Image();
        img.onload = function(){
          cv.drawImage(img,20,20);
          cv.beginPath();
          cv.moveTo(20,150);
          cv.lineTo(30,130);
          cv.lineTo(50,120);
          cv.lineTo(70,100);
          cv.lineTo(100,80);
          // cv.closePath();
          cv.stroke();

          for(var i = 0 ; i < 5 ; i++){
            for(var j = 0 ; j < 5 ; j++){
              cv.drawImage(img,200+50*i,20+80*j,50,80);
            }
          }
        }
        img.src = "static/image/img0.jpg";
        // img.src = "data:image/jpg;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==";
  			// cv.mozImageSmoothingEnabled = false;
        var img1 = new Image();
        var img2 = new Image();
        img2.onload = function(){
            cv.drawImage(img2,50,10,210,180,530,75,210,180);           
        } 
        img1.onload = function(){
          cv.drawImage(img1,450,20);  
          img2.src = 'static/image/img4.jpg';      
        }
        
        img1.src = 'static/image/img5.jpg';    

        var video =  document.getElementById('myvideo'); 
        // cv.drawImage(video,800,20,700,500);
        video.onplay = function(){
          setTimeout(function(){
            cv.drawImage(video,800,20,700,300);
          },10000)
        }  

        var img3 = document.getElementById('img');
        img3.onload = function(){
          cv.drawImage(img3,20,350);
        }

        setTimeout(function(){
          var cv1 = document.getElementById('small').getContext('2d');
          var can = document.getElementById('canvas');
          cv1.drawImage(can,10,10,700,300);
        },10000);
        
  		}
  	},
  	render:function(){
  		return(
        <div>
    			<canvas id="canvas" height='600px' width='1500px'>
    				测试
    			</canvas>
          <canvas id="small" height="300px" width='700px'>
            缩影
          </canvas>
          <video style = {{display:'block'}} id = "myvideo" src="static/image/k_11.mp4" controls style={{height:500}}></video>
          <img id='img' src="static/image/img1.jpg" style={{display:'none'}}/>
        </div>
  		)
  	}
  });

  return ImgCanvas;

  });
}(define,window))

