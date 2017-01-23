;(function(define,window){define('happy',['css!happycss'],function(){

  var Happy = React.createClass({
  	componentDidMount:function(){
  		// var cv = document.getElementById('happy').getContext('2d');
  		// cv.save();
  		// var headerColor = cv.createLinearGradient(0,330,0,270);
  		// headerColor.addColorStop(0,'#A9927B');
  		// headerColor.addColorStop(1,'#AC957D');
  		// cv.fillStyle = headerColor;
  		// cv.save();
  		// cv.beginPath();
  		// cv.arc(400,300,30,0,Math.PI*2,true);
  		// cv.closePath();
  		// cv.fill();
  		// var headerColor1 = cv.createRadialGradient(390,290,8,390,290,0);
  		// headerColor1.addColorStop(0,'#F5F5F5');
  		// headerColor1.addColorStop(1,'#FFFFFF');
  		// cv.fillStyle = headerColor1;
  		// cv.strokeStyle = '#C1AF9E';
  		// cv.save();
  		// cv.beginPath();
  		// cv.arc(390,293,8,0,Math.PI*2,true);
  		// cv.fill();
  		// cv.stroke();
  		// cv.closePath();
  		// cv.save();
  		// cv.beginPath();
  		// cv.arc(410,293,8,0,Math.PI*2,true);
  		// cv.fill();
  		// cv.stroke();
  		// cv.closePath();

  		// cv.save();
  		// var headerColor2 = cv.createRadialGradient(410,293,4,410,293,0);
  		// headerColor2.addColorStop(0,'#755854');
  		// headerColor2.addColorStop(1,'#755854');
  		// cv.fillStyle = headerColor2;
  		// cv.beginPath();
  		// cv.arc(410,293,4,0,Math.PI*2,true);
  		// cv.closePath();
  		// cv.fill();

  		// var headerColor3 = cv.createRadialGradient(410,293,4,410,293,0);
  		// headerColor3.addColorStop(0,'#755854');
  		// headerColor3.addColorStop(1,'#755854');
  		// cv.fillStyle = headerColor3;
  		// cv.beginPath();
  		// cv.arc(390,293,4,0,Math.PI*2,true);
  		// cv.closePath();
  		// cv.fill();
  		// cv.save();

  		// var headerColor2 = cv.createRadialGradient(410,293,4,410,293,0);
  		// headerColor2.addColorStop(0,'#755854');
  		// headerColor2.addColorStop(1,'#755854');
  		// cv.fillStyle = headerColor2;
  		// cv.beginPath();
  		// cv.arc(410,293,4,0,Math.PI*2,true);
  		// cv.closePath();
  		// cv.fill();

  		// var headerColor3 = cv.createRadialGradient(410,293,4,410,293,0);
  		// headerColor3.addColorStop(0,'#755854');
  		// headerColor3.addColorStop(1,'#755854');
  		// cv.fillStyle = headerColor3;
  		// cv.beginPath();
  		// cv.arc(390,293,4,0,Math.PI*2,true);
  		// cv.closePath();
  		// cv.fill();

  	},
  	render:function(){
  		return(
  			<div>
  			<canvas id = 'happy' height='100px' width='600px'>
  				新年快乐
  			</canvas>
  			<div className = 'happy'>
  				<div className = 'happy-header'>
  					<div className = 'happy-eye left'>
  						<div className = 'happy-eye-inner inner-left'></div>
  					</div>
  					<div className = 'happy-eye right'>
  						<div className = 'happy-eye-inner inner-right'></div>
  					</div>
            <div className = 'happy-mouse'></div>
  				</div>
  				<div className = 'happy-body'>
  					<div className = 'happy-arg arg-left'>
              <div className = 'happy-hand'>
                <div className="finger f-left1"></div>
                <div className="finger f-left2"></div>
                <div className="finger f-left3"></div>
                <div className="finger f-left4"></div>
                <div className="finger f-left5"></div>
              </div>
            </div>
            <div className = 'happy-arg arg-right'>
              <div className = 'happy-hand'>
                <div className="finger f-right1"></div>
                <div className="finger f-right2"></div>
                <div className="finger f-right3"></div>
                <div className="finger f-right4"></div>
                <div className="finger f-right5"></div>
              </div>
            </div>
  					
  				</div>
  			</div>
  			</div>
  		)
  	}
  });

  return Happy;
  });
}(define,window))

