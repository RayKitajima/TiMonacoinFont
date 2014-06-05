
# TiMonacoinFont

A Module for using [MonacoinFont](https://github.com/RayKitajima/MonacoinFont) in your Titanium Mobile App.

# How to use

1. clone, copy or download this project or files you want to use.
2. place [lib/MonacoinFont.js](https://github.com/RayKitajima/TiMonacoinFont/blob/master/app/lib/MonacoinFont.js) into app/lib of your Alloy project.
3. place [fonts/monacoinsign-webfont.ttf](https://github.com/RayKitajima/TiMonacoinFont/blob/master/app/fonts/monacoinsign-webfont.ttf) into app/assets/fonts of your Alloy project.
4. implement your app code, then run it.

You may have to attach fontface via alloy controller like this:

```
var monacoinfont = require('MonacoinFont').getFont();

$.MonaSymbol.setFont({ fontSize:'24dp', fontFamily:monacoinfont.fontfamily() });
$.MonaSymbol.setText( monacoinfont.icon('icon-monacoinsign') );
```

Furthermore, you can find sample implementation in app/{controllers,styles,views}.

# License

Copyright (c) 2014 Rei Kitajima <rei.kitajima@gmail.com>

Codes in this repository are destributed under The MIT License.

Included font file is distributed under the public domain in [here](https://github.com/RayKitajima/MonacoinFont).

