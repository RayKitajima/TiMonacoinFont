// 
// TiMonacoinFont
// 
// usage:
// 
// you may have to attach fontface via alloy controller like this:
//     
//     var monacoinfont = require('MonacoinFont').getFont();
//     
//     $.MonaSymbol.setFont({ fontSize:'24dp', fontFamily:monacoinfont.fontfamily() });
//     $.MonaSymbol.setText( monacoinfont.icon('icon-monacoinsign') );
//     
// 

function MonacoinFont(){
	switch(Ti.Platform.osname){
		case 'iphone':
		case 'ipad':
			this.fontfamily_name = 'monacoinsign';
			break;
		case 'android':
			this.fontfamily_name = 'monacoinsign-webfont';
	}
	this.charcode = {
		"icon-monacoinsign"      : 0xf100,
		"icon-monacoinsign_bold" : 0xf101,
	};
}

MonacoinFont.prototype.icon = function(code){
	return String.fromCharCode(this.charcode[code]);
};

MonacoinFont.prototype.fontfamily = function(){
	return this.fontfamily_name;
};

module.exports = {
	getClass : MonacoinFont,
	getFont  : function(){ return new MonacoinFont(); },
};
