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
			var self = this;
			setInterval(function(){
				self.setState(self.getTime());
			},1000);
		},
		render:function(){
			return(
				<div className = "calendar">
				<p>{this.state.day}</p>
				<p>{this.state.week}</p>
				<p>{this.state.cur}</p>
				</div>
			);
		}
	});
		return Calendar;
	});
}(define,window))