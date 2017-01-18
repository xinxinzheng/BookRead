/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-07 17:13:08
 * @version $Id$
 */
;(function(define,window){define('sidemenu',['jsx!link'],function(Link){

	 var SideMenu = React.createClass({
	 	render:function(){	
	 		var menu = JSON.parse(Store.sidemenu);
	 		return(
	 			<ul className = "sidemenu">
	 			 {
	 			 	menu.map(function(_item,_i){
	 					return(
	 						<li key = {_i}>
	 							<Link to = {_item.url} ><span>{_item.name}</span></Link>
	 						</li>
	 					);
	 				})
	 			}
	 			</ul>
	 		); 		
	 	}
	 });
 	return SideMenu;
});
}(define,window))

