/**
 * 日历
 * @authors Your Name (you@example.org)
 * @date    2016-12-07 17:11:53
 * @version $Id$
 */
;(function(define,window){
	define('calendar',[],function(){
	var Calendar = React.createClass({
		getWeek:function(num){
			switch(num)
			{
				case 0: return "星期天";
				case 1: return "星期一";
				case 2: return "星期二";
				case 3: return "星期三";
				case 4: return "星期四";
				case 5: return "星期五";
				case 6: return "星期六";
			}
		},
		getTime:function(){
			var time = new Date() ;
			var day = time.getFullYear() + " 年 " + (time.getMonth() + 1) + " 月 " + time.getDate() + " 日 ",
			week = this.getWeek(time.getDay()) ,
			cur = time.getHours() + " : " + time.getMinutes() + ' : ' + time.getSeconds();
			return {day:day,week:week,cur:cur};
		},
		getInitialState:function(){
			return this.getTime();
		},
		componentDidMount:function(){
			var self = this , cv = document.getElementById('water').getContext('2d');
			// cv.fillStyle = 'rgba(255,255,255,.4)';
			// cv.beginPath();
			// cv.arc(90,90,90,Math.PI-(Math.PI/180*10),Math.PI*2+(Math.PI/180*10),true);
			// cv.closePath();
			// cv.fill();

			setInterval(function(){
				self.setState(self.getTime());
			},1000);
			// cv.fillStyle = 'rgba(255,255,255,.2)';
			// var  a = Math.random() * 90 , b = Math.random() * 135 
			// 	, c = Math.random() * 120 ,d = Math.random() * 110
			// 	, a1 = Math.random() * 90 , b1 = Math.random() * 135
			// 	, c1 = Math.random() * 100 ,d1 = Math.random() * 120 , i = 0;
			// setInterval(function(){
			// 	cv.clearRect(0,0,180,110);				
			// 	cv.beginPath();
			// 	cv.moveTo(0,120);
			// 	cv.bezierCurveTo(a*Math.sin(i),c*Math.cos(i),b,d,180,110);
			// 	cv.closePath();
			// 	cv.fill();
				
			// 	cv.beginPath();
			// 	cv.moveTo(0,110);
			// 	cv.bezierCurveTo(a1*Math.sin(i),c1*Math.cos(i),b1,d1,180,110);
			// 	cv.closePath();
			// 	cv.fill();
			// 	i++;
			// },17);
			setInterval(function(){
				var a = Math.floor(Math.random() * 20) , b = Math.floor(Math.random() * 20) , 
				c = Math.floor(Math.random() * 20);
				var a1 = a * Math.sin(30) , b1 = b * Math.sin(30) , c1 = c * Math.sin(30) , 
				a2 = a * Math.cos(30) , b2 = b * Math.cos(30) , c2 = c * Math.cos(30) ;
				$("#path0").attr('d','M0,90 L1,' + (90-a1) + ' L20,' + (85-a2) + 'L40,' + (90-a) +' L60,' 
					+ (85-b1) + ' L80,' + (90-c2) +' L100,' + (90-b) + ' L120,' + (90-c1) + 'L140,' 
					+ (90-c2) + 'L160,' + (90-c) + 'L180,90 L0,90 Z');

				var a = Math.floor(Math.random() * 20) , b = Math.floor(Math.random() * 20) , 
				c = Math.floor(Math.random() * 20);
				var a1 = a * Math.sin(30) , b1 = b * Math.sin(30) , c1 = c * Math.sin(30) , 
				a2 = a * Math.cos(30) , b2 = b * Math.cos(30) , c2 = c * Math.cos(30) ;
				$("#path1").attr('d','M0,90 L1,' + (90-c) + ' L20,' + (90-c2) + 'L40,' + (90-c1) +' L60,' 
					+ (90-b) + ' L80,' + (90-b2) +' L100,' + (90-b1) + ' L120,' + (90-a) + 'L140,' 
					+ (90-a2) + 'L160,' + (90-a1) + 'L180,90 L0,90 Z')
			},1000)

		},
		render:function(){
			return(
				<div className = "calendar">
				<p>{this.state.day}</p>
				<p>{this.state.week}</p>
				<p>{this.state.cur}</p>
				<canvas id='water' className = 'water' width='180' height='180px'></canvas>
				<svg xmlns="http://www.w3.org/2000/svg" className = "water" width="180" height="90" version="1.1" viewBox="0 0 180 90">
				  <path id = "path0" 
					fill="rgba(255,255,255,.2)"  strokeWidth="0" 
					d="M0,90 L1,85 L20,75 L40,65 L60,70 L80,75 L100,78 L120,75 L140,69 L160,60 L180,90 L0,90 Z">
					</path>
					<path id = "path1" 
					fill="rgba(255,255,255,.2)"  strokeWidth="0" 
					d="M0,90 L1,80 L20,75 L40,60 L60,75 L80,75 L100,78 L120,70 L140,69 L160,60 L180,90 L0,90 Z">
					</path>
				</svg>
				</div>
			);
		}
	});
		return Calendar;
	});
}(define,window))