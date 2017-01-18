/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-07 17:12:17
 * @version $Id$
 */
 ;(function(define,window){define('header',['jsx!book','jsx!calendar'],function(Book,Calendar){
 	var Header = React.createClass({
	 	render:function(){
	 		return(
	 			<header>
	 			<section className="page-header">
	 				<Book></Book>
	 				<Calendar></Calendar>
	      			<h1 className="project-name">小透明</h1>
	      			<h2 className="project-tagline">前端探险</h2>
	      			<a href="https://github.com/xinxinzheng/slignt" className="btn">View on GitHub</a>
	    		</section>
	    		</header>
	 		);
	 	}
	 });
 	return Header;
 });

 }(define,window))

