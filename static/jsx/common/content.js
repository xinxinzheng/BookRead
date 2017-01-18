/**
 * Connent
 * @authors Your Name (you@example.org)
 * @date    2016-12-07 17:15:37
 * @version $Id$
 */
 ;(function(define,window){define('content',[],function(){
	var Content = React.createClass({
		getInitialState:function(){
			return {content:''};
		},
		loadData:function(){
			var tp = this.props.params.tp , name = this.props.params.name , self = this; 
			require(['jsx!' + name,'css!' + name + 'css'],function(component){
				self.setState({content:component});
			});			
		},
		componentDidMount:function(){
			this.loadData();
		},
		render:function(){
			var self = this;
			
			return(
				<div>
					{this.state.component}
				</div>
			);
		}
	});

	return Content;

 });
 }(define,window))
