/*
 *  ../SourceForge/trunk/mathjax/extensions/MathMenu.js
 *  
 *  Copyright (c) 2010 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Unpack([
  ['(','function(','b,c,f','){var ','i=','b.Browser.','isPC,g=',5,'isMSIE;var e=(i?null:"5px");var j=b.Insert({delay:150,helpURL',':"http://www.mathjax.org','/help/user/",','showRenderer',':true,','showFontMenu',':false,','showContext',14,'windowSettings',':{status:"no",toolbar:"no",locationbar:"no",menubar:"no",directories:"no",personalbar:"no",resizable:"yes",scrollbars:"yes",width:100,height:50},styles:{".','MathJax_Menu','":{','position:"absolute','","','background-color','":"white",color:"black",width:"auto",','padding:(i?"2px','":"5px 0px"),border:"','1px solid #CCCCCC','",margin:0,','cursor:"default','",font:"menu","','text-align":"','left","text-indent":0,"text-transform','":"none","','line-height','":"normal","','letter-','spacing":"normal","word-',37,'wrap',35,'white-space":"nowrap","float',33,'z-index":','201,"','border-radius":e',',"-webkit-',45,',"-moz-',45,',"-khtml-',45,',"box-shadow":"0px 10px 20px #808080","-webkit-box-shadow":"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080","-khtml-box-shadow":"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color=\'gray\', Positive=\'true','\')"},".','MathJax_MenuItem','":{',25,' 2em":"1px 2em"),background:"transparent','"},".','MathJax_MenuTitle','":{"',23,'":"#CCCCCC",margin:(i?"-1px -1px 1px -1px":"-5px 0 0 0"),"',31,'center","','font-style":"italic','","font-size":"','80%",color:"#444444",padding:"2px 0",overflow:"hidden',58,'MathJax_MenuArrow','":{',21,'",right:".5em",color:"#666666','","font-family":(g?"\'Arial unicode MS\'":null)},".','MathJax_MenuActive',' .',69,'":{color:"','white',58,'MathJax_MenuCheck','":{',21,'",left:".7em',73,'MathJax_MenuRadioCheck','":{',21,'",left:(i?"1em":".7em")},".','MathJax_MenuLabel','":{',25,' 2em 4px 1.33em":"1px 2em 3px 1.33em"),"',65,58,'MathJax_MenuRule',60,'border-top":(i?"',27,'":"1px solid #DDDDDD"),margin:(i?"4px 1px 0px":"4px 3px")},".','MathJax_MenuDisabled',77,'GrayText',58,74,60,23,'":(i?"Highlight":"#606872"),color:(i?"HighlightText":"white")}}},(b.config.MathMenu||{}));var d=',1,'k){if(!k){k','=window.event}','if(','k){if(','k.preventDefault','){',113,'()}if(','k.stopPropagation','){',117,'()}k.cancelBubble=true;k.returnValue=false}','return ','false};var a=','MathJax.','Menu','=MathJax.Object.Subclass({','items:[],posted',14,'title:null,margin:5,Init:',1,'k){this.items=[].','slice.call(arguments,','0)},With:',1,'k){if(k){b.Insert(this,k)}return this},','Post:',1,'l,u){if(!l){l',110,'var s=(!this.title?null:[["div",{','className:"',59,'"},[this.','title]]]);var k','=document.getElementById("MathJax_MenuFrame','");if(!k){k','=a.Background(','this)}var n=c','.addElement(','k',',"div",{','onmouseup:a.Mouseup,','ondblclick',':this.False,ondragstart:this.False,onselectstart:this.False,','oncontextmenu',':this.False,','menuItem',':this,',140,19,'"},s);for(var p=0,o=this.items.length;p<o;p++){this.items[p].Create(n)}this.posted=true;n','.style.width','=(n.','offsetWidth','+2)+"px";var t=l.pageX,r=l.pageY;if(!t&&!r){t=l.clientX+','document.body.','scrollLeft+','document.documentElement','.scrollLeft;r=l.clientY+',165,'scrollTop','+',167,'.',170,'}if(!u){if(t+n.',163,'>',165,163,'-this.margin','){t=',165,163,'-n.',163,180,'}a.skipUp=true}else{var q="left",v=u.',163,';t=u.',163,'-2;r=0;while(u&&u!==k){t+=u.offsetLeft;r+=u.offsetTop;u=u.parentNode}if(t+n.',163,'>',165,163,180,'){q="right";t=Math.max(this.margin,t-v-n.',163,'+6)}if(!i){n.style["borderRadiusTop','"+q]=0;n.style["','WebkitBorderRadiusTop',200,'MozBorderRadiusTop',200,'KhtmlBorderRadiusTop"+q]=0}}n.style.left=t+"px";n.style.top=r+"px";if(','document.selection','&&',206,'.empty){',206,'.empty()}','return this.False(','l)},Remove:',1,'k,l){','var m',144,'");if(m){m.','parentNode.removeChild(','m',');if(this.','msieBackgroundBug','){detachEvent("onresize",a.Resize)}}},Mouseup:',1,215,'if(a.skipUp){delete a.skipUp}else{','this.Remove(k,l',')}},False:d},{config:j,div:null,Remove:',1,'k){a.Event(k,this,"','Remove")},Mouseover:',1,230,'Mouseover")},Mouseout:',1,230,'Mouseout")},Mousedown:',1,230,'Mousedown")},Mouseup:',1,230,'Mouseup")},Mousemove:',1,230,'Mousemove")},Event:',1,'m,n,k){if(!m){m',110,'var l=n.',156,';if(l&&l[k]){',121,'l[k](m,n)}',121,'null},BGSTYLE:{',21,'",left:0,top:0,"',43,'200,width:"100%",height:"100%",border:0,padding:0,margin:0},Background:',1,'l',3,'m=c',148,'document.','body,"','div",{style:this.BGSTYLE,','id:"MathJax_MenuFrame"},[["',268,156,':l,','onmousedown',':this.Remove}]]);var k=m.','firstChild',';if(l.',222,'){k.style.backgroundColor="white";k.style.filter="alpha(opacity=0)";m.width=m.height=0;this.Resize();attachEvent("onresize",this.Resize)}else{k','.style.position="','fixed"}',121,'m},Resize:','function(){','setTimeout(','a.SetWH,0)},SetWH:','function(){var ','k',144,'");if(k){k=k.',275,';k',161,'=k.style.height="1px";k',161,'=',165,'scrollWidth+"px";k.style.height=',165,'scrollHeight','+"px"}},saveCookie:',283,'c.Cookie.Set("menu",this.cookie)},getCookie:',283,'this.cookie=c.Cookie.Get("menu")}});var h=a.ITEM',125,'name:"",Create:',1,'l){if(!','this.hidden',3,'k={onmouseover:a.Mouseover,onmouseout:a.Mouseout,',151,273,153,'onselectend',155,140,54,'",',156,':this};if(this.disabled){','k.className+=" ',100,'"}c',148,'l,"div",k,this.Label(k,l))}},Mouseover:',1,'p,r','){if(!this.disabled){','this.Activate(r)}','if(!this.menu||!this.menu.posted){','var q',144,'").childNodes,','l=r','.parentNode.childNodes;for(var ','n=0,k=l.length;n<k;n++){var o=l[n].',156,';if(o&&o.menu&&o','.menu.posted){','o.Deactivate(l[n])}}k=q','.length-1;while(k>=0','&&r','.parentNode.',156,'!==q[k].',156,'){q[k].',156,'.posted=false;','q[k].',219,'q[k]);k--}if(this.Timer){this.Timer(p,r)}}},Mouseout:',1,215,331,'this.Deactivate(','l)}','if(this.timer){clearTimeout(this.timer',');delete this.timer','}},Mouseup:',1,215,121,227,')},Remove:',1,215,'l=l',344,156,';',121,'l.Remove(k,l)},Activate:',1,'k){',357,'k);',322,74,'"},Deactivate:',1,'k){k.className=k.className.replace(/ ',74,'/,"")},With:',1,134,'False:d});a.ITEM.COMMAND','=a.ITEM.Subclass({','action:function(){},Init:',1,'k,m',',l){this.name=k;this.','action=m;this.With(l)},Label:',1,215,'return[this.name',']},Mouseup:',1,'k,l',329,227,');this.action.call(this)}',212,'k',')}});a.ITEM.','SUBMENU',389,'menu:null,marker:(i&&!',5,'isSafari?"\\u25B6":"\\u25B8"),Init:',1,'k,m){this.name=k;var l=1;if(!(m instanceof a.ITEM)){this.With(m),l++}this.menu=a.apply(a,[].',131,'l))},Label:',1,215,'k.onmousemove=a.Mousemove;this.menu',350,397,'+" ",["span",{',140,69,142,'marker]]]},Timer:',1,215,359,')}k={clientX:k.clientX,clientY:k.clientY};this.timer=',284,123,'Callback(["Mouseup",this,k,l]),j.delay)},Mouseup:',1,'l,o',329,'if(!this',340,359,360,'}this.menu.Post(l,o)}else{var n',144,334,'k=n',342,3,'p=n[k];p.',156,350,'p.',219,'p);if(p.',156,'===this.menu){break}k--}}}',212,'l',406,'RADIO',389,'variable:null,marker',':(i?"\\u25CF":"\\u2713"),Init:',1,'l,k,m){this.name=l;this.variable=k;this.With(m',221,'value==null){this.value=this.name}},Label:',1,'l,m){var k={className:"',85,'"};if(','j.settings[this.variable',']!==this.value){k={','style:{display:"','none"}}}return[["span",k,[this.marker]]," "+this.name]},Mouseup:',1,'o,p',329,'var q=p',336,'l=0,k=q.length;l<k;l++){var n=q[l].',156,';if(n&&n.variable===this.variable){q[l].',275,'.style.display="none"}}p.',275,'.display="";',469,']=this.value;a.cookie','[this.variable]=',469,'];a.saveCookie();if(this.action){this.action.call(a)}}this.Remove(','o,p);',212,'o',406,'CHECKBOX',389,459,':"\\u2713",Init:',1,462,')},Label:',1,466,80,'"};if(!',469,']){k={',471,'none"}}}return[["span",k,[this.marker]]," "+this.name]},Mouseup:',1,'k,l',329,'l.',275,'.display=(',469,']?"none":"");',469,']=!',469,'];a.cookie',487,469,489,'k,l);',212,'k',406,'LABEL',389,'Init:',1,'k',393,'With(l)},Label:',1,'k,l){delete k.onmouseover,delete k.onmouseout;delete k.onmousedown;k.className+=" ',89,'";',397,']}});a.ITEM.RULE',389,'Label:',1,536,95,'";',121,'null}});a.About=',286,'n=','MathJax.OutputJax','["HTML-CSS','"]||{fontInUse:""};var p=(n.webFonts?"":"local "),l=(n.webFonts?" web":"");var m=(n.imgFonts?"Image":p+n.fontInUse+l);var k=[];','a.About.GetJax','(k,',123,'InputJax,"Input");',554,'(k,',551,',"Output");',554,'(k,',123,'ElementJax',',"Element");','a.About.div',146,'a.About);var q=',123,'HTML',148,567,150,'style:{position:"fixed",left:"50%",width:"auto","',31,'center",border:"3px outset",padding:"1em 2em","',23,'":"#DDDDDD",',29,'","font-family":"message-box',66,'120%","font-style',35,'text-indent":0,"text-transform',33,'line-height',35,'letter-',37,37,'wrap',35,'white-space":"nowrap","float',33,43,'201',52,'\')"},onclick:a.About.Remove},[["b",{style:{fontSize:"120%"}},["MathJax"]]," v"+',123,'version,["br','"],"using "+m+" fonts",["br"],["br"],["span",{',471,'inline-block","',31,'left',66,'80%","',23,'":"#E4E4E4",padding:".4em .6em",border:"1px inset"}},k],["br"],["br"],["a",{href',9,'/"},["wwww.mathjax.org"]]]);var r=(',167,'||{});var o=window.innerHeight||r.clientHeight||r.',299,'||0;if(a.prototype.msieAboutBug){q',161,'="20em";q',279,'absolute";q.style.left=Math.floor((',167,'.scrollWidth-q.',163,')/','2)+"px";q.style.top','=(','Math.floor((o-q.offsetHeight)/3',')+',165,170,')+"px"}else{q.style.marginLeft=Math.floor(-q.',163,'/',625,'=',627,')+"px"}};a.About.Remove=',1,112,567,'){',165,'removeChild(',567,');delete ',567,'}};',554,'=',1,'k,m,l){','for(var n in ','m){if(m[n].isa&&m[n].isa(m)){k.push(m[n].name+" "+l+" Jax v"+m[n].',601,'"])}}',121,'k};a.Help=',283,'window.open(j.helpURL,"MathJaxHelp")};a.ShowSource=',1,'m){if(!m){m',110,'if(!a.jax){return}if(','j.settings.','format==="MathML"){var k=',123,565,'.mml;if(k&&typeof(k.mbase.prototype.toMathML)!=="undefined"){','a.ShowSource.','Text(a.jax.root.toMathML(),m)}else{if(!','f.loadingToMathML','){',671,'=true;var l={screenX:m.screenX,screenY:m.screenY};',669,'Window(m);','MathJax.Callback.Queue','(','f.Require("[MathJax]/extensions/','toMathML.js"),',283,'delete f.loadingToMenu},[this,arguments.callee,l]);return}}}else{if','(a.jax.originalText','==null){alert("No TeX form available");return}',669,'Text',683,',m)}};',669,'Window=',1,308,669,'w',3,'m=[],k=j.',17,';',652,112,'k.hasOwnProperty(n)){m.push(n+"="+k[n])}}',669,'w=window.open("","_blank",m.join(","))}',121,669,'w};',669,'Text=',1,'q,p',3,'m=',669,'Window(p);q=q.replace(/^\\s*/,"").replace(/\\s*$/,"");q=q.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");m.',266,'open();','m.document.write','("<html><head><title>MathJax Equation Source</title></head><body style=\'font-size:85%\'>");',717,'("<table><tr><td><pre>"+q+"</pre></td></tr></table>");',717,'("</body></html>");m.',266,'close();var o=m.',165,275,';var n=(m.outerHeight-m.innerHeight)||30,l=(m.outerWidth-m.innerWidth)||30;l','=Math.min(Math.floor(0.5*screen.','width),o.',163,'+l+25);n',728,'height),o.offsetHeight+n+25);m.resizeTo(l,n);if(p&&p.screenX!=null',3,'k','=Math.max(0,Math.min(p.','screenX-Math.floor(l/2),screen.width-l-20)),r',736,'screenY-Math.floor(n/2),screen.height-n-20));m.moveTo(k,r)}delete ',669,'w};a.Scale=',286,'l=',551,552,'"],k=',551,'.NativeMML;var n=(l?l','.config.scale',':k',749,');var m=prompt("Scale all mathematics (compared to surrounding text) by",n+"%");if(m){if(m.match(/^\\s*\\d+\\s*%?\\s*$/)){m=parseInt(m);if(m){if(m!==n){if(l){l',749,'=m}if(k){k',749,'=m}a.cookie.scale=m;a.saveCookie();b.Reprocess()}}','else{alert("The scale should ','not be zero")}}',757,'be a perentage (e.g., 120%)")}}};a.Zoom=',283,'if(!',123,'Extension.MathZoom){',679,'MathZoom.js")}};a.Renderer=',286,'k=b.config.outputJax["jax/mml"];if(k[0]!==',664,'renderer','){',677,'(["Require','",f,"[MathJax]/','jax/output/"+',664,770,'+"/config.js"],[',286,'o=',551,'[',664,770,'];for(var n=0,l=k.length;n<l;n++){if(k[n]===o){k.splice(n,1);break}}k.unshift(o)}],["Reprocess",b])}};a.Font=',286,'k=',551,552,'"];if(!k){return}',266,'location.reload()};',5,'Select({MSIE:',1,'k',3,'l=(',266,'compatMode==="BackCompat");var m=k.versionAtLeast("8.0")&&',266,'documentMode>7;a.Augment({margin:20,',222,':(l||!m),msieAboutBug:l})}});j.settings=b.config.menuSettings;if(!',664,'format){',664,'format=(',123,'InputJax.TeX?"Original":"MathML")}if(typeof(',664,11,')!=="undefined"){j.',11,'=',664,11,'}if(typeof(',664,13,813,13,'=',664,13,'}if(typeof(',664,15,813,15,'=',664,15,'}a.getCookie();a.menu=a(h.COMMAND("Show Source",a.ShowSource),','h.SUBMENU("','Format",h.RADIO("MathML","format"),h.RADIO("Original","format",{value:"Original"})),h.RULE(),',835,'Settings",',835,'Zoom Trigger",h.RADIO("Hover','","zoom",{action:a.Zoom}),h.RADIO("','Click',841,'Double-Click',841,'No Zoom","zoom",{value:"None"}),h.','RULE(),h.','LABEL("Trigger Requires:"),h.CHECKBOX((',5,'isMac?"Option":"Alt"),"ALT"),h.CHECKBOX("Command","CMD",{hidden:!',5,'isMac}),h.CHECKBOX("','Control","CTRL",{hidden:',5,852,'Shift","Shift")),',835,'Zoom Factor",h.RADIO("125','%","zscale"),h.RADIO("','133',859,'150',859,'175',859,'200',859,'250',859,'300',859,'400%","zscale")),h.RULE(),',835,'Math Renderer','",{hidden:!j.',11,'},h.RADIO("','HTML-CSS','","renderer",{action:a.Renderer','}),h.RADIO("MathML',879,',value:"NativeMML"})),',835,'Font Preference',875,13,'},h.LABEL("For HTML-CSS:"),h.RADIO("Auto","','font",{action:a.Font}),h.',847,'RADIO("TeX (','local)","',888,890,'web)","',888,890,'image)","',888,847,'RADIO("STIX (local)","font",{action:a.Font})),',835,'Contextual Menu',875,15,877,'MathJax","context"),h.RADIO("Browser","context")),h.COMMAND("Scale All Math ...",a.Scale)),h.',847,'COMMAND("About MathJax",a.About),h.COMMAND("MathJax Help",a.Help));a.',11,'=',1,'k){a.cookie.',11,'=j.',11,'=k;a.saveCookie();a.menu.items[3].menu.','item[3','].hidden=!k};','a.',13,'=',1,912,13,'=j.',13,916,'items[4',918,'a.',15,'=',1,912,15,'=j.',15,916,'items[5',918,677,'(["Styles",f,j.styles],["Post",b.Startup.signal,"MathMenu Ready"],["loadComplete',774,'extensions/MathMenu.js"])})(',123,'Hub,',123,'HTML,',123,'Ajax);']
]);
