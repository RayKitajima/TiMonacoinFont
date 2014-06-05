
var monacoinfont = require('MonacoinFont').getFont();

$.MonaSymbol.setFont({ fontSize:'24dp', fontFamily:monacoinfont.fontfamily() });
$.MonaSymbol.setText( monacoinfont.icon('icon-monacoinsign') );

$.MonaSymbol_bold.setFont({ fontSize:'24dp', fontFamily:monacoinfont.fontfamily() });
$.MonaSymbol_bold.setText( monacoinfont.icon('icon-monacoinsign_bold') );

$.index.open();
