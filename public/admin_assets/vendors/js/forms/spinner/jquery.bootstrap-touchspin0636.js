!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=function(n,o){return void 0===o&&(o="undefined"!=typeof window?require("jquery"):require("jquery")(n)),t(o),o}:t(jQuery)}((function(t){"use strict";var n=0;t.fn.TouchSpin=function(o){var s={min:0,max:100,initval:"",replacementval:"",firstclickvalueifempty:null,step:1,decimals:0,stepinterval:100,forcestepdivisibility:"round",stepintervaldelay:500,verticalbuttons:!1,verticalup:"+",verticaldown:"-",verticalupclass:"",verticaldownclass:"",prefix:"",postfix:"",prefix_extraclass:"",postfix_extraclass:"",booster:!0,boostat:10,maxboostedstep:!1,mousewheel:!0,buttondown_class:"btn btn-primary",buttonup_class:"btn btn-primary",buttondown_txt:"-",buttonup_txt:"+",callback_before_calculation:function(t){return t},callback_after_calculation:function(t){return t}},a={min:"min",max:"max",initval:"init-val",replacementval:"replacement-val",firstclickvalueifempty:"first-click-value-if-empty",step:"step",decimals:"decimals",stepinterval:"step-interval",verticalbuttons:"vertical-buttons",verticalupclass:"vertical-up-class",verticaldownclass:"vertical-down-class",forcestepdivisibility:"force-step-divisibility",stepintervaldelay:"step-interval-delay",prefix:"prefix",postfix:"postfix",prefix_extraclass:"prefix-extra-class",postfix_extraclass:"postfix-extra-class",booster:"booster",boostat:"boostat",maxboostedstep:"max-boosted-step",mousewheel:"mouse-wheel",buttondown_class:"button-down-class",buttonup_class:"button-up-class",buttondown_txt:"button-down-txt",buttonup_txt:"button-up-txt"};return this.each((function(){var i,e,p,u,c,r,l,d,f,b,h=t(this),v=h.data(),x=0,m=!1;function g(){""===i.prefix&&(e=c.prefix.detach()),""===i.postfix&&(p=c.postfix.detach())}function w(){var t,n,o;""!==(t=i.callback_before_calculation(h.val()))?0<i.decimals&&"."===t||(n=parseFloat(t),isNaN(n)&&(n=""!==i.replacementval?i.replacementval:0),(o=n).toString()!==t&&(o=n),null!==i.min&&n<i.min&&(o=i.min),null!==i.max&&n>i.max&&(o=i.max),o=function(t){switch(i.forcestepdivisibility){case"round":return(Math.round(t/i.step)*i.step).toFixed(i.decimals);case"floor":return(Math.floor(t/i.step)*i.step).toFixed(i.decimals);case"ceil":return(Math.ceil(t/i.step)*i.step).toFixed(i.decimals);default:return t.toFixed(i.decimals)}}(o),Number(t).toString()!==o.toString()&&(h.val(o),h.trigger("change"))):""!==i.replacementval&&(h.val(i.replacementval),h.trigger("change"))}function _(){if(i.booster){var t=Math.pow(2,Math.floor(x/i.boostat))*i.step;return i.maxboostedstep&&t>i.maxboostedstep&&(t=i.maxboostedstep,r=Math.round(r/t)*t),Math.max(i.step,t)}return i.step}function y(){return"number"==typeof i.firstclickvalueifempty?i.firstclickvalueifempty:(i.min+i.max)/2}function k(){w();var t,n=r=parseFloat(i.callback_before_calculation(c.input.val()));isNaN(r)?r=y():(t=_(),r+=t),null!==i.max&&r>i.max&&(r=i.max,h.trigger("touchspin.on.max"),N()),c.input.val(i.callback_after_calculation(Number(r).toFixed(i.decimals))),n!==r&&h.trigger("change")}function C(){w();var t,n=r=parseFloat(i.callback_before_calculation(c.input.val()));isNaN(r)?r=y():(t=_(),r-=t),null!==i.min&&r<i.min&&(r=i.min,h.trigger("touchspin.on.min"),N()),c.input.val(i.callback_after_calculation(Number(r).toFixed(i.decimals))),n!==r&&h.trigger("change")}function j(){N(),x=0,m="down",h.trigger("touchspin.on.startspin"),h.trigger("touchspin.on.startdownspin"),f=setTimeout((function(){l=setInterval((function(){x++,C()}),i.stepinterval)}),i.stepintervaldelay)}function D(){N(),x=0,m="up",h.trigger("touchspin.on.startspin"),h.trigger("touchspin.on.startupspin"),b=setTimeout((function(){d=setInterval((function(){x++,k()}),i.stepinterval)}),i.stepintervaldelay)}function N(){switch(clearTimeout(f),clearTimeout(b),clearInterval(l),clearInterval(d),m){case"up":h.trigger("touchspin.on.stopupspin"),h.trigger("touchspin.on.stopspin");break;case"down":h.trigger("touchspin.on.stopdownspin"),h.trigger("touchspin.on.stopspin")}x=0,m=!1}!function(){if(!h.data("alreadyinitialized"))h.data("alreadyinitialized",!0),n+=1,h.data("spinnerid",n),h.is("input")?(""!==(i=t.extend({},s,v,function(){var n={};return t.each(a,(function(t,o){var s="bts-"+o;h.is("[data-"+s+"]")&&(n[t]=h.data(s))})),n}(),o)).initval&&""===h.val()&&h.val(i.initval),w(),function(){var n=h.val(),o=h.parent();""!==n&&(n=i.callback_after_calculation(Number(n).toFixed(i.decimals))),h.data("initvalue",n).val(n),h.addClass("form-control"),o.hasClass("input-group")?function(n){n.addClass("bootstrap-touchspin");var o,s,a=h.prev(),e=h.next(),p='<span class="input-group-addon bootstrap-touchspin-prefix bootstrap-touchspin-injected"><span class="input-group-text">'+i.prefix+"</span></span>",c='<span class="input-group-addon bootstrap-touchspin-postfix bootstrap-touchspin-injected"><span class="input-group-text">'+i.postfix+"</span></span>";a.hasClass("input-group-btn")||a.hasClass("input-group-text")?(o='<button class="'+i.buttondown_class+' bootstrap-touchspin-down bootstrap-touchspin-injected" type="button">'+i.buttondown_txt+"</button>",a.append(o)):(o='<span class="input-group-btn bootstrap-touchspin-injected"><button class="'+i.buttondown_class+' bootstrap-touchspin-down" type="button">'+i.buttondown_txt+"</button></span>",t(o).insertBefore(h)),e.hasClass("input-group-btn")||e.hasClass("input-group-text")?(s='<button class="'+i.buttonup_class+' bootstrap-touchspin-up bootstrap-touchspin-injected" type="button">'+i.buttonup_txt+"</button>",e.text(s)):(s='<span class="input-group-btn bootstrap-touchspin-injected"><button class="'+i.buttonup_class+' bootstrap-touchspin-up" type="button">'+i.buttonup_txt+"</button></span>",t(s).insertAfter(h)),t(p).insertBefore(h),t(c).insertAfter(h),u=n}(o):function(){var n,o="";h.hasClass("input-sm")&&(o="input-group-sm"),h.hasClass("input-lg")&&(o="input-group-lg"),n=i.verticalbuttons?'<div class="input-group '+o+' bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-addon bootstrap-touchspin-prefix"><span class="input-group-text">'+i.prefix+'</span></span><span class="input-group-addon bootstrap-touchspin-postfix"><span class="input-group-text">'+i.postfix+'</span></span><span class="input-group-btn-vertical"><button class="'+i.buttondown_class+" bootstrap-touchspin-up "+i.verticalupclass+'" type="button">'+i.verticalup+'</button><button class="'+i.buttonup_class+" bootstrap-touchspin-down "+i.verticaldownclass+'" type="button">'+i.verticaldown+"</button></span></div>":'<div class="input-group bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-btn"><button class="'+i.buttondown_class+' bootstrap-touchspin-down" type="button">'+i.buttondown_txt+'</button></span><span class="input-group-addon bootstrap-touchspin-prefix"><span class="input-group-text">'+i.prefix+'</span></span><span class="input-group-addon bootstrap-touchspin-postfix"><span class="input-group-text">'+i.postfix+'</span></span><span class="input-group-btn"><button class="'+i.buttonup_class+' bootstrap-touchspin-up" type="button">'+i.buttonup_txt+"</button></span></div>",u=t(n).insertBefore(h),t(".bootstrap-touchspin-prefix",u).after(h),h.hasClass("input-sm")?u.addClass("input-group-sm"):h.hasClass("input-lg")&&u.addClass("input-group-lg")}()}(),c={down:t(".bootstrap-touchspin-down",u),up:t(".bootstrap-touchspin-up",u),input:t("input",u),prefix:t(".bootstrap-touchspin-prefix",u).addClass(i.prefix_extraclass),postfix:t(".bootstrap-touchspin-postfix",u).addClass(i.postfix_extraclass)},g(),h.on("keydown.touchspin",(function(t){var n=t.keyCode||t.which;38===n?("up"!==m&&(k(),D()),t.preventDefault()):40===n&&("down"!==m&&(C(),j()),t.preventDefault())})),h.on("keyup.touchspin",(function(t){var n=t.keyCode||t.which;38!==n&&40!==n||N()})),h.on("blur.touchspin",(function(){w(),h.val(i.callback_after_calculation(h.val()))})),c.down.on("keydown",(function(t){var n=t.keyCode||t.which;32!==n&&13!==n||("down"!==m&&(C(),j()),t.preventDefault())})),c.down.on("keyup.touchspin",(function(t){var n=t.keyCode||t.which;32!==n&&13!==n||N()})),c.up.on("keydown.touchspin",(function(t){var n=t.keyCode||t.which;32!==n&&13!==n||("up"!==m&&(k(),D()),t.preventDefault())})),c.up.on("keyup.touchspin",(function(t){var n=t.keyCode||t.which;32!==n&&13!==n||N()})),c.down.on("mousedown.touchspin",(function(t){c.down.off("touchstart.touchspin"),h.is(":disabled")||(C(),j(),t.preventDefault(),t.stopPropagation())})),c.down.on("touchstart.touchspin",(function(t){c.down.off("mousedown.touchspin"),h.is(":disabled")||(C(),j(),t.preventDefault(),t.stopPropagation())})),c.up.on("mousedown.touchspin",(function(t){c.up.off("touchstart.touchspin"),h.is(":disabled")||(k(),D(),t.preventDefault(),t.stopPropagation())})),c.up.on("touchstart.touchspin",(function(t){c.up.off("mousedown.touchspin"),h.is(":disabled")||(k(),D(),t.preventDefault(),t.stopPropagation())})),c.up.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin",(function(t){m&&(t.stopPropagation(),N())})),c.down.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin",(function(t){m&&(t.stopPropagation(),N())})),c.down.on("mousemove.touchspin touchmove.touchspin",(function(t){m&&(t.stopPropagation(),t.preventDefault())})),c.up.on("mousemove.touchspin touchmove.touchspin",(function(t){m&&(t.stopPropagation(),t.preventDefault())})),h.on("mousewheel.touchspin DOMMouseScroll.touchspin",(function(t){if(i.mousewheel&&h.is(":focus")){var n=t.originalEvent.wheelDelta||-t.originalEvent.deltaY||-t.originalEvent.detail;t.stopPropagation(),t.preventDefault(),(n<0?C:k)()}})),h.on("touchspin.destroy",(function(){!function(){var n=h.parent();N(),h.off(".touchspin"),n.hasClass("bootstrap-touchspin-injected")?(h.siblings().remove(),h.unwrap()):(t(".bootstrap-touchspin-injected",n).remove(),n.removeClass("bootstrap-touchspin")),h.data("alreadyinitialized",!1)}()})),h.on("touchspin.uponce",(function(){N(),k()})),h.on("touchspin.downonce",(function(){N(),C()})),h.on("touchspin.startupspin",(function(){D()})),h.on("touchspin.startdownspin",(function(){j()})),h.on("touchspin.stopspin",(function(){N()})),h.on("touchspin.updatesettings",(function(n,o){!function(n){(function(n){i=t.extend({},i,n),n.postfix&&(0===h.parent().find(".bootstrap-touchspin-postfix").length&&p.insertAfter(h),h.parent().find(".bootstrap-touchspin-postfix .input-group-text").text(n.postfix)),n.prefix&&(0===h.parent().find(".bootstrap-touchspin-prefix").length&&e.insertBefore(h),h.parent().find(".bootstrap-touchspin-prefix .input-group-text").text(n.prefix)),g()})(n),w();var o=c.input.val();""!==o&&(o=Number(i.callback_before_calculation(c.input.val())),c.input.val(i.callback_after_calculation(Number(o).toFixed(i.decimals))))}(o)}))):console.log("Must be an input.")}()}))}}));
