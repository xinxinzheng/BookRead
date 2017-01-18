/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-07 17:12:52
 * @version $Id$
 */
 ;(function(define,window){define('footer',[],function(){
	var Footer = React.createClass({
	 	render:function(){
	 		return(
	 			<footer className="site-footer">
	    			<p className="site-footer-owner">
	    			<a style={{color:'white'}} href="https://github.com/xinxinzheng/slignt">Blob</a>
	    		 	@ <a style={{color:'white'}} href="https://github.com/xinxinzheng">小透明</a>.
	    		 	</p>
				</footer>
	 		);		
	 	}
	 });
 	return Footer;
});
}(define,window))