KISSY.add("kg/notification/1.0.0/index",["node","base","event","ua","kg/xtemplate/3.3.3/runtime","kg/notification/1.0.0/index.css"],function(t,e,a,i){{var n,s,r=e("node"),o=e("base"),m=e("event"),l=e("ua"),d=e("kg/xtemplate/3.3.3/runtime");e("kg/notification/1.0.0/index.css")}n=function(t){var e=t=function(t){function e(t,e){t.data,t.affix;return e.data+="' '+ boxCls",e}function a(t,e,a){var i=t.data,n=t.affix;e.data+="\n              ",c.line=6;var s=(r=n.mPartHtml)!==a?r:(r=i.mPartHtml)!==a?r:t.resolveLooseUp(["mPartHtml"]);return e=e.write(s),e.data+="\n            ",e}function i(t,e,a){var i=t.data,n=t.affix;e.data+='\n              <div class="image-wrap"><img class="vc-img" src="',c.line=10;var s=(r=n.mPartImg)!==a?r:(r=i.mPartImg)!==a?r:t.resolveLooseUp(["mPartImg"]);return e=e.writeEscaped(s),e.data+='"/></div>\n              ',e}function n(t,e,a){var i=t.data,n=t.affix;e.data+='\n                  <span class="title">',c.line=14;var s=(r=n.mPartTitle)!==a?r:(r=i.mPartTitle)!==a?r:t.resolveLooseUp(["mPartTitle"]);return e=e.writeEscaped(s),e.data+="</span>\n                  ",e}function s(t,e,a){var s=t.data,m=t.affix;e.data+='\n              <i class="close"></i>\n              ',c.line=9,c.line=9;var l=(r=m.mPartImg)!==a?r:(r=s.mPartImg)!==a?r:t.resolveLooseUp(["mPartImg"]);e=u.call(o,t,{params:[l],fn:i},e),e.data+='\n              <div class="content">\n                  ',c.line=13,c.line=13;var d=(r=m.mPartTitle)!==a?r:(r=s.mPartTitle)!==a?r:t.resolveLooseUp(["mPartTitle"]);e=u.call(o,t,{params:[d],fn:n},e),e.data+='\n                  <p class="msg">',c.line=16;var v=(r=m.mPartMsg)!==a?r:(r=s.mPartMsg)!==a?r:t.resolveLooseUp(["mPartMsg"]);return e=e.writeEscaped(v),e.data+="</p>\n              </div>\n            ",e}{var r,o=this,m=o.root,l=o.buffer,d=o.scope,c=(o.runtime,o.name,o.pos),v=d.data,g=d.affix,f=m.nativeCommands,h=m.utils,u=(h.callFn,h.callCommand,f.range,f.foreach,f.forin,f.each,f["with"],f["if"]);f.set,f.include,f.parse,f.extend,f.block,f.macro,f["debugger"]}l.data+='<div class="vc-notify-box';var P=(r=g.boxCls)!==t?r:(r=v.boxCls)!==t?r:d.resolveLooseUp(["boxCls"]);l=u.call(o,d,{params:[P],fn:e},l),l.data+='">\n    <div class="box-wrap">\n        <div class="top-part">',c.line=3;var p=(r=g.tPartHtml)!==t?r:(r=v.tPartHtml)!==t?r:d.resolveLooseUp(["tPartHtml"]);l=l.write(p),l.data+='</div>\n        <div class="main-part">\n            ',c.line=5,c.line=5;var b=(r=g.mPartHtml)!==t?r:(r=v.mPartHtml)!==t?r:d.resolveLooseUp(["mPartHtml"]);l=u.call(o,d,{params:[b],fn:a,inverse:s},l),l.data+='\n        </div>\n        <div class="bottom-part">',c.line=20;var x=(r=g.bPartHtml)!==t?r:(r=v.bPartHtml)!==t?r:d.resolveLooseUp(["bPartHtml"]);return l=l.write(x),l.data+="</div>\n    </div>\n</div>\n",l};return e.TPL_NAME=i.id||i.name,t}(),s=function(e){function a(t){for(;t=t.parentNode;)if(t==document)return!0;return!1}function i(t){var e=t&&t.getDOMNode();e&&!t.hasClass("xclose")&&a(e)&&(C&&e.addEventListener?(t.css({height:0,opacity:0}),e.addEventListener(C.end,function(){t.remove()},!1)):(t.addClass("remove-transtion"),t.animate({height:0,opacity:0},{duration:.3,easing:"easeNone",complete:function(){t.remove()}})))}function s(t){var e=t&&t.getDOMNode();e&&!t.hasClass("xclose")&&a(e)&&(t.removeClass("show"),e.addEventListener(C.end,function(){return 0==t.height()?void t.remove():void t.css({height:0})},!1))}function c(t){var e=t&&t.getDOMNode();e&&!t.hasClass("xclose")&&a(e)&&(t.removeClass("show"),e.addEventListener(C.end,function(){return 0==t.height()?void t.remove():void t.css({height:0})},!1))}function v(t){var e={boxCls:t.boxCls,tPartHtml:t.tPartHtml,mPartHtml:t.mPartHtml,bPartHtml:t.bPartHtml,mPartImg:t.mPartImg,mPartTitle:t.mPartTitle,mPartMsg:t.mPartMsg},a=new P(b);return g.one(a.render(e))}var g=r,f=o,h=m,u=l,P=d,p=g.all,b=n,x='<div class="vc-notifications $1"></div>',T=p("body"),C=function(){var t=document.body||document.documentElement,e=t.style,a=void 0!==e.transition||void 0!==e.WebkitTransition||void 0!==e.MozTransition||void 0!==e.MsTransition||void 0!==e.OTransition;return a&&{end:function(){var t="TransitionEnd";return u.webkit?t="webkitTransitionEnd":u.gecko?t="transitionend":u.opera&&(t="oTransitionEnd"),t}()}}(),H=f.extend({initializer:function(){var e=this,a=(e.get("$target"),this.get("cls"));a||(a="");var i=g.one(x.replace("$1",a));T.append(i),this.$container=i,this.stayTime=t.isNumber(this.get("stayTime"))?this.get("stayTime"):3e3,this.gapTime=t.isNumber(this.get("gapTime"))?this.get("gapTime"):1e3,this.boxEffect=this.get("boxEffect"),this.boxs=[];var n={boxCls:this.get("boxCls")||"",tPartHtml:this.get("tPartHtml")||"",mPartHtml:this.get("mPartHtml")||"",bPartHtml:this.get("bPartHtml")||"",mPartImg:this.get("mPartImg"),mPartTitle:this.get("mPartTitle"),mPartMsg:this.get("mPartMsg")||""};this.createNoticeDom(n),h.delegate(i,"click",".close",function(t){var e=g.one(t.target),a=e.parent(".vc-notify-box"),i=a.getDOMNode();C&&i.addEventListener?(a.addClass("xclose"),a.css({opacity:0,height:a.height()}),document.body.offsetWidth,a.css("height",0),i.addEventListener(C.end,function(){a.remove()},!1)):(a.css({opacity:0}),a.animate({height:0},{duration:.3,easing:"easeNone",complete:function(){a.remove()}}))});var s,r=i.getDOMNode(),o=0;i.on("click",function(t){if(t.target===r){if(i.addClass("bg"),i.hasClass("bg")&&(clearTimeout(s),o>=1)){var a=e.boxs.shift();a&&a.remove()}s=setTimeout(function(){i.removeClass("bg"),o=0},500),o++}})},createNoticeDom:function(t){({boxCls:t.boxCls,tPartHtml:t.tPartHtml,mPartHtml:t.mPartHtml,bPartHtml:t.bPartHtml,mPartImg:t.mPartImg,mPartTitle:t.mPartTitle,mPartMsg:t.mPartMsg})},notify:function(e,a){var n,r=this;a?n=g.one(e):e&&(t.isString(e)?n=v({mPartMsg:e}):t.isObject(e)&&(n=v(e),"mPartImg"in e&&n.one(".vc-img")&&n.one(".vc-img").attr("src",e.mPartImg),"mPartTitle"in e&&n.one(".title")&&n.one(".title").text(e.mPartTitle),"mPartMsg"in e&&n.one(".msg")&&n.one(".msg").text(e.mPartMsg),"boxCls"in e&&n.attr("class","vc-notify-box "+e.boxCls))),this.boxs.push(n),1===this.boxs.length&&(this.$container.css("display","block"),this.taskId=setInterval(function(){0===r.$container.all(".vc-notify-box").length&&(clearInterval(r.taskId),r.$container.removeAttr("style"));var t=r.boxs.shift();setTimeout(function(){"rs"===r.boxEffect?s(t):"ls"===r.boxEffect?c(t):i(t)},r.stayTime)},r.gapTime)),"rs"===this.boxEffect?(n.addClass("right"),this.$container.append(n),document.body.offsetWidth,n.addClass("show"),n.css("height",n.height()+"px")):"ls"===this.boxEffect?(n.addClass("left"),this.$container.append(n),document.body.offsetWidth,n.addClass("show"),n.css("height",n.height()+"px")):(this.$container.append(n),n.addClass("remove-transtion"),n.css("height",n.height()+"px"),document.body.offsetWidth,n.removeClass("remove-transtion"))}},{ATTRS:{$target:{value:"",getter:function(t){return p(t)}}}});return e=H}(),i.exports=s});