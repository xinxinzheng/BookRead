;(function(define,window){define('btn',['css!btncss'],function(){

  var BtnAdd = React.createClass({
    getInitialState:function(){
      return {contents:"测试",color:"red"};
    },
    addBtn:function(){
      var con = this.content.value , color = this.color.value ;
      this.setState({contents:con,color:color});
    },
    render:function(){
      var btnStyle = {backgroundColor:this.state.color , margin:'15px auto', display:'block'};
      return(
      	<div className="list">
      		<input type="text" placeholder="内容" ref = {(obj) => {
              this.content = obj;
      		}}></input>
      		<input type="text" placeholder="颜色" ref = {(obj) => {
              this.color = obj;
      		}}></input>
      		<button className = "btn"  onClick={this.addBtn}>Update</button>
          <div id="btnAdd">
            <button className = "btn" style = {btnStyle}>{this.state.contents}</button> 
          </div>
          <div className="tag"></div>
      	</div>
      	
      );
    }
  });
  return BtnAdd;
});

}(define,window))

