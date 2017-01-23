;(function(define,window){define('happy',['css!happycss'],function(){

  var Happy = React.createClass({
  	componentDidMount:function(){
  		$(document).delegate('div.happy','mouseenter',function(){
        $("div.happy .happy-header").css({'bottom':'60px'});
        $("div.happy .happy-body").css({'bottom':'0px'});
        $("div.happy happy-eye-inner").css({'top':'2px'});
      });
      $(document).delegate('div.happy','mouseleave',function(){
        $("div.happy .happy-header").css({'bottom':'-1000px'});
        $("div.happy .happy-body").css({'bottom':'-1000px'});
        $("div.happy happy-eye-inner").css({'top':'4px'});
      });
      $(document).delegate('div.new-year','mouseover',function(evt){
        var cx = evt.clientX , cy = evt.clientY  , eye = $("div.happy-eye")[0];
        var ex = $(eye).offset().left , ey = $(eye).offset().top;
        if(cx < ex){//左边
           $("div.happy .happy-eye-inner").css({'left':'0px'});
        }else{
           $("div.happy .happy-eye-inner").css({'left':'6px'});
        }
        if(cy < ey){//上边
           $("div.happy .happy-eye-inner").css({'top':'0px'});
        }else{
           $("div.happy .happy-eye-inner").css({'top':'6px'});
        }
       
      });
  	},
  	render:function(){
  		return(
  			<div className='new-year'>
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
        <div className='line'></div>
  			</div>
  		)
  	}
  });

  return Happy;
  });
}(define,window))

