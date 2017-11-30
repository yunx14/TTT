(function() {
	var stylesheet = 'https://yunx14.github.io/TTT/style.css',
		js = 'https://yunx14.github.io/TTT/ttt.js';

	function loadCSSJS(file) {
		if (file.substring(file.lastIndexOf(".") + 1) == 'css') {
	    	var fileref = document.createElement("link");
	        fileref.setAttribute("rel", "stylesheet");
	        fileref.setAttribute("type", "text/css");
	        fileref.setAttribute("href", file);
	        document.getElementsByTagName("head")[0].appendChild(fileref);
	    } else if (file.substring(file.lastIndexOf(".") + 1) == 'js') {
	    	var fileref = document.createElement('script');
		    fileref.setAttribute('src', file);                 
		  	document.body.appendChild(fileref);
	    } else {
	    	return false;
	    }
    }

    loadCSSJS(stylesheet);
    loadCSSJS(js);
})();