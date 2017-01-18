;(function(define,window){define('tag',['css!tagcss'],function(){

  var Plus = React.createClass({
    render:function(){
      return(
         <a className = "plus">+</a>
      );
    }
    });

  var Minus = React.createClass({
    render:function(){
      return(
         <a className = "minus">-</a>
      );
    }
    });

  var Tag = React.createClass({
    render:function(){
      return(
         <span className = "tag">测试标签dddddddddddd
         <Minus />
         <Plus />
         </span>
      );
    }
    });

  return Tag;

  });
}(define,window))

