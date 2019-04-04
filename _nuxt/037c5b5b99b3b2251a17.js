(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{373:function(t,e,n){"use strict";var r=n(1),o=n(0);e.a=o.a.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(r.a)(this.height),n=Object(r.a)(this.minHeight),o=Object(r.a)(this.minWidth),c=Object(r.a)(this.maxHeight),l=Object(r.a)(this.maxWidth),h=Object(r.a)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),o&&(t.minWidth=o),c&&(t.maxHeight=c),l&&(t.maxWidth=l),h&&(t.width=h),t}}})},374:function(t,e,n){"use strict";var r=n(0);e.a=r.a.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var data=e.data,n=e.props,r=e.children;return data.staticClass=("v-card__title "+(data.staticClass||"")).trim(),n.primaryTitle&&(data.staticClass+=" v-card__title--primary"),t("div",data,r)}})},375:function(t,e,n){"use strict";n(376),n(377);var r=n(9);var o=n(0).a.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?(t={},e="elevation-"+this.computedElevation,n=!0,e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t):{};var t,e,n}}}),c=n(373),l=n(7),h=n(3),d=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},m=Object(h.a)(r.a,o,c.a,l.a).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return d({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var data={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,data),this.$slots.default)}}),v=n(41),f=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};e.a=Object(h.a)(v.a,m).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return f({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},m.options.computed.classes.call(this))},styles:function(){var style=f({},m.options.computed.styles.call(this));return this.img&&(style.background='url("'+this.img+'") center center / cover no-repeat'),style}},render:function(t){var e=this.generateRouteLink(this.classes),n=e.tag,data=e.data;return data.style=this.styles,t(n,this.setBackgroundColor(this.color,data),this.$slots.default)}})},376:function(t,e,n){},377:function(t,e,n){},378:function(t,e,n){},379:function(t,e,n){},380:function(t,e,n){},381:function(t,e,n){"use strict";n(117);var r=n(83);e.a=Object(r.a)("flex")},382:function(t,e,n){"use strict";n(117);var r=n(83);e.a=Object(r.a)("layout")},384:function(t,e,n){"use strict";var r=n(1),o=n(375),c=(n(378),n(379),n(373)),l=n(3),h=Object(l.a)(c.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),d=n(6),m=h.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"==typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(d.a)("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch(function(e){Object(d.b)("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},image.onerror=this.onError,image.src=this.normalisedSrc.src,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;!function n(){var r=img.naturalHeight,o=img.naturalWidth;r||o?t.calculatedAspectRatio=o/r:null!=e&&setTimeout(n,e)}()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=h.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}}).extend({name:"v-card-media",mounted:function(){Object(d.c)("v-card-media",this.src?"v-img":"v-responsive",this)}}),v=n(374);n.d(e,"a",function(){return _});var f=Object(r.c)("v-card__actions"),_=Object(r.c)("v-card__text");o.a,v.a},385:function(t,e,n){"use strict";n(380);var r=n(42),o=n(9),c=n(24),l=n(0).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),h=n(3);e.a=Object(h.a)(o.a,c.a,l).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(r.a,{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var t=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){t.isActive=!1}}},[this.$createElement(r.a,{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(t){var e=[this.genIcon(),t("div",this.$slots.default),this.genDismissible()],n=t("div",(this.outline?this.setTextColor:this.setBackgroundColor)(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),e);return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[n]):n}})},395:function(t,e,n){"use strict";n.r(e);var r=n(396),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},396:function(t,e){},412:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[n("v-card",[n("v-card-title",{staticClass:"headline primary--text"},[t._v("Logging")]),t._v(" "),n("v-card-text",[n("v-card-title",{staticClass:"subheading primary--text"},[t._v("Logguer avec winston")]),t._v(" "),n("p",[t._v("\n            Node.js ne fournit pas de module pour logguer, nous allons donc utiliser la librairie "),n("a",{attrs:{href:"https://www.npmjs.com/package/winston"}},[t._v("winston")]),t._v(" pour logguer.\n            Winston est personnalisable, et repose sur deux concepts :\n            "),n("ul",[n("li",[t._v("le "),n("a",{attrs:{href:"https://www.npmjs.com/package/winston#formats"}},[t._v("format")]),t._v(" qui correspond aux différentes étapes qui vont permettre de générer le log (par exemple, appliquer la "),n("a",{attrs:{href:"https://www.npmjs.com/package/winston#string-interpolation"}},[t._v("string interpolation")]),t._v(" et générer le log en json)")]),t._v(" "),n("li",[t._v("le "),n("a",{attrs:{href:"https://www.npmjs.com/package/winston#transports"}},[t._v("transport")]),t._v(" qui correspond aux sorties de log (console, fichier...)")])])]),t._v(" "),n("p",[t._v("\n            Pour créer un logger, il faut utiliser la méthode "),n("code",[t._v("createLogger()")]),t._v(" comme dans l'exemple ci-dessous :\n            "),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{attrs:{language:"js"}},[t._v("\nconst { createLogger, format, transports } = require('winston');\nconst { combine, splat, json } = format;\n\nconst logger = createLogger({\n    format: combine(splat(), json()),\n    transports: [new transports.Console()]\n});\n\nlogger.info('Hello %s !', 'World');")])])]),t._v(" "),n("p",[t._v("\n            Ce code génère le log suivant en console :\n            "),n("code",[t._v('{"level":"info","message":"Hello World !"}')])]),t._v(" "),n("v-alert",{attrs:{value:!0,color:"info",icon:"info",outline:""}},[t._v("\n            La méthodologie "),n("a",{attrs:{href:"https://12factor.net/fr/logs"}},[t._v("twelve-factor")]),t._v(" recommande de logguer sur la sortie standard.\n          ")])],1),t._v(" "),n("v-card-text",[n("v-card-title",{staticClass:"subheading secondary--text"},[t._v("TP Fil rouge")]),t._v(" "),n("p",[t._v("\n            Mettre en place des logs en console sur le projet :\n            "),n("ol",[n("li",[t._v("logguer en "),n("code",[t._v("DEBUG")]),t._v(" les paramètres d'entrées des fonctions présentes dans le fichier "),n("code",[t._v("app/fs-utils")]),t._v(" ;")]),t._v(" "),n("li",[t._v("afin de gérer tous les logs avec la même librairie, utiliser "),n("a",{attrs:{href:"https://www.npmjs.com/package/express-winston"}},[t._v("express-winston")]),t._v(" pour générer les logs access.")])])])],1)],1)],1)],1)},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},421:function(t,e,n){"use strict";n.r(e);var r=n(412),o=n(395);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);var l=n(23),h=n(84),d=n.n(h),m=n(385),v=n(375),f=n(384),_=n(374),S=n(381),y=n(382),component=Object(l.a)(o.default,r.a,r.b,!1,null,null,null);e.default=component.exports,d()(component,{VAlert:m.a,VCard:v.a,VCardText:f.a,VCardTitle:_.a,VFlex:S.a,VLayout:y.a})}}]);