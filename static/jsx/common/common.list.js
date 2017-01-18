/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-07 17:14:47
 * @version $Id$
 */
 ;(function(define,window){define('commonlist',['jsx!link'],function(Link){

 	var ListItem = React.createClass({
		render:function(){
			return(
				<div>
					<h3>
					<Link to={this.props.url} >
					<span>{this.props.name}</span>
					</Link>
					</h3>
		      		<p>{this.props.desc}</p>
	      		</div>
			);
		}
	});
      
	var CommonList = React.createClass({
		getInitialState:function(){
			return({data:null});
		},
		loadData:function(file){
			var self = this;
			$.get("static/json/" + file + ".json",function(ret){
				self.setState({data:ret});
			});
		},
		componentWillMount:function(){
			this.loadData('html5');
		},
		componentDidMount:function(){
			
		},
		componentWillUpdate:function(prevProps){
			
		},
		componentDidUpdate:function(prevProps) {
	    	var file = prevProps.params && prevProps.params.tp ? prevProps.params.tp : 'html5';
			this.loadData(file);
	  	},
	    componentWillUnmount:function(){
	    	
	    },
		render:function(){
			return(
				<div>
				{
					this.state.data && this.state.data.map(function(_item,_i){
						return (
							<ListItem key = {_item.name} name={_item.name} url={_item.url} desc={_item.desc} />
							);
					})
				}
				</div>
			);
		}
	});

	return CommonList;

 });
 }(define,window))

