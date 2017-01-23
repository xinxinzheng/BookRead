//主页
;(function(define , window){define('index',['jsx!commonlist','jsx!robot','jsx!header',
	'jsx!sidemenu','jsx!footer','jsx!tag','jsx!btn','jsx!BasesCanvas','jsx!drawShape',
	'jsx!styleCanvas','jsx!textCanvas','jsx!imgCanvas','jsx!transformCanvas'
	,'jsx!compositionCanvas','jsx!loading','jsx!happy']
	,function(CommonList,Robot,Header,SideMenu,Footer,Tag,BtnAdd,BasesCanvas,DrawShape,
		StyleCanvas,TextCanvas,ImgCanvas,TransformCanvas,CompositionCanvas,Loading,Happy){
	
	window.Store = window.localStorage ; 

	var { Router,
	    Route,
	    IndexRoute,
	    IndexLink,
	    browserHistory,
	    Link } = ReactRouter;

	var Body = React.createClass({
		render:function(){
			return(
				<div className = "body">
					<SideMenu />
					<div id = "RightBody">
					{this.props.children}
					</div>
				</div>
			);		
		}
	});

	var App = React.createClass({
		getDefaultProps:function(){
			
		},
		componentWillMount:function(){
			
		},
		render:function(){
			return(
				<div>
					<Header />
					<div className = "main">
						<SideMenu />
						<div id = "RightBody">{this.props.children}</div>
					</div>
					<Footer />
				</div>
			);
		}
	});

	$.get('static/json/menu.json',function(ret){
		Store.setItem('sidemenu',JSON.stringify(ret));
		ReactDOM.render(
	  		<Router >
	        	<Route path="/" component={App} >
	      			<IndexRoute component={CommonList}/>
	      			<Route path = "category/:tp" component = {CommonList} />
	      			<Route path = "css/robot" component = {Robot} />
	      			<Route path = "css/tag" component = {Tag} />
	      			<Route path = "css/btn" component = {BtnAdd} />
	      			<Route path = "canvas/bases" component = {BasesCanvas} />
	      			<Route path = "canvas/draw" component = {DrawShape} />
	      			<Route path = "canvas/color" component = {StyleCanvas} />
	      			<Route path = "canvas/text" component = {TextCanvas} />
	      			<Route path = "canvas/img" component = {ImgCanvas} />
	      			<Route path = "canvas/transform" component = {TransformCanvas} />
	      			<Route path = "canvas/composition" component = {CompositionCanvas} />

	      			<Route path = "animation/loading" component = {Loading} />
	      			<Route path = "animation/happy" component = {Happy} />
	    		</Route>
	  		</Router>,
	  	document.getElementById('mySite')
	    );
	});

})
}(define , window));























