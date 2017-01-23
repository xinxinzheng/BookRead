;(function(define,window){define('loading',['css!loadding'],function(){

  var Loading = React.createClass({
  	componentDidMount:function(){
  		// setInterval(function(){
    //     document.getElementById('parma').style.setProperty('--animation-time',Math.random()+'s');
    //   },1000);
      
  	},
  	render:function(){
  		return(
  			<div className='animation'>
  				<div className='loadding load1'>
  					<div id = "parma" className='arc arc1'></div>
  					<div className='arc arc2'></div>
  					<div className='arc arc3'></div>
  					<div className='arc arc4'></div>
  					<div className='arc arc5'></div>
  				</div>
  				<div className='loadding'></div>
  				<div className='loadding'></div>
  				<div className='loadding'></div>
  				<div className='loadding'></div>
  				<div className='loadding'></div>
  				<div className='loadding'></div>
  				<div className='loadding'></div>
  				<div className='loadding'></div>
  				<div className='loadding'></div>
  				<div className='loadding'></div>
  				<div className='loadding'></div>
  				<div className='loadding'></div>
  				<div className='loadding'></div>
  				<div className='loadding'></div>
  				<div className='loadding'></div>
  				<div className='loadding'></div>
  				<div className='loadding'></div>
  				<div className='loadding'></div>
  				<div className='loadding'></div>
  			</div>
  		)
  	}
  });

  return Loading;

  });
}(define,window))

