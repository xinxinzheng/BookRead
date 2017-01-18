;(function(define,window){define('robot',['css!robotcss'],function(){

  var Robot = React.createClass({
    render:function(){
      return(
        <div className="robot">
            <div className="head">
              <div className="ear ear-left"></div>
              <div className="ear ear-right"></div>
              <div className="chin"></div>
              <div className="hat"></div>
              <div className="glass"></div>
              <div className="antenna antenna-left"></div>
              <div className="antenna antenna-right"></div>
            </div>
            <div className="neck"></div>
            <div className="body">
              <div className="shoulder"></div>
              <div className="hand hand-left"></div>
              <div className="hand hand-right"></div>
            </div>
            <div className="foot"></div>
        </div>
      );
    }
  });
  return Robot;
});

}(define,window))

