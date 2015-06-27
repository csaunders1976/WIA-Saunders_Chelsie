webshims.register("form-native-extend",function(a,b,c,d){"use strict";{var e=c.Modernizr;e.inputtypes}if(e.formvalidation&&!b.bugs.bustedValidity){var f=b.inputTypes,g=!1,h={},i=function(){var b,c=function(){a(this).prop("validity")},d=function(){a("input").each(c)};return function(){clearTimeout(b),b=setTimeout(d,9)}}();b.addInputType=function(c,d){f[c]=d,g=!0,a.isDOMReady&&e.formvalidation&&!b.bugs.bustedValidity&&i()},b.addValidityRule=function(a,b){h[a]=b},a.each({typeMismatch:"mismatch",badInput:"bad"},function(a,c){b.addValidityRule(a,function(b,d,e,g){if(""===d)return!1;var h=g[a];return"type"in e||(e.type=(b[0].getAttribute("type")||"").toLowerCase()),f[e.type]&&f[e.type][c]&&(h=f[e.type][c](d,b)),h||!1})});var j=b.modules["form-number-date-api"],k=j.loaded&&!j.test(),l=["customError","badInput","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","tooShort","patternMismatch","valueMissing","valid"],m=["value"],n=[],o=function(b){if(b||g){var c=(b.getAttribute&&b.getAttribute("type")||b.type||"").toLowerCase();f[c]&&a.prop(b,"validity")}},p={};if(["input","textarea","select"].forEach(function(c){var d=b.defineNodeNameProperty(c,"setCustomValidity",{prop:{value:function(e){e+="";var f="input"==c?a(this).getNativeElement()[0]:this;d.prop._supvalue.call(f,e),k&&(b.data(f,"hasCustomError",!!e),o(f))}}});p[c]=d.prop._supvalue}),k&&(m.push("min"),m.push("max"),m.push("step"),n.push("input")),k){var q;if(n.forEach(function(c){var d=b.defineNodeNameProperty(c,"validity",{prop:{get:function(){if(!q){var e="input"==c?a(this).getNativeElement()[0]:this,g=d.prop._supget.call(e);if(!g)return g;var i={};if(l.forEach(function(a){i[a]=g[a]||!1}),!a.prop(e,"willValidate"))return i;q=!0;var j,k=a(e),m={type:(e.getAttribute&&e.getAttribute("type")||e.type||"").toLowerCase(),nodeName:(e.nodeName||"").toLowerCase()},n=k.val(),o=!!b.data(e,"hasCustomError");if(q=!1,i.customError=o,i.valid&&i.customError)i.valid=!1;else if(!i.valid){var r=!0;a.each(i,function(a,b){return b?(r=!1,!1):void 0}),r&&(i.valid=!0)}return a.each(h,function(a,d){i[a]=d(k,n,m,i),i[a]&&(i.valid||!j)&&f[m.type]&&(p[c].call(e,b.createValidationMessage(e,a)),i.valid=!1,j=!0)}),i.valid&&(p[c].call(e,""),b.data(e,"hasCustomError",!1)),i}},writeable:!1}})}),m.forEach(function(a){b.onNodeNamesPropertyModify(n,a,function(){o(this)})}),d.addEventListener){var r,s=function(a){"form"in a.target&&(clearTimeout(r),o(a.target))};d.addEventListener("change",s,!0),d.addEventListener("input",function(a){clearTimeout(r),r=setTimeout(function(){o(a.target)},290)},!0)}var t=n.join(",");b.addReady(function(b,c){g&&a(t,b).add(c.filter(t)).each(function(){o(this)})})}b.defineNodeNameProperty("input","type",{prop:{get:function(){var a=this,c=(a.getAttribute&&a.getAttribute("type")||"").toLowerCase();return b.inputTypes[c]?c:a.type}}})}}),webshims.register("form-number-date-api",function(a,b,c,d){"use strict";b.addInputType||b.error("you can not call forms-ext feature after calling forms feature. call both at once instead: $.webshims.polyfill('forms forms-ext')"),b.getStep||(b.getStep=function(b,c){var d=a.attr(b,"step");return"any"===d?d:(c=c||i(b),f[c]&&f[c].step?(d=q.number.asNumber(d),(!isNaN(d)&&d>0?d:f[c].step)*(f[c].stepScaleFactor||1)):d)}),b.addMinMaxNumberToCache||(b.addMinMaxNumberToCache=function(a,b,c){a+"AsNumber"in c||(c[a+"AsNumber"]=f[c.type].asNumber(b.attr(a)),isNaN(c[a+"AsNumber"])&&a+"Default"in f[c.type]&&(c[a+"AsNumber"]=f[c.type][a+"Default"]))});var e=parseInt("NaN",10),f=b.inputTypes,g=function(a){return"number"==typeof a||a&&a==1*a},h=function(b){return a('<input type="'+b+'" />').prop("type")===b},i=function(a){return(a.getAttribute("type")||"").toLowerCase()},j=function(a){return a&&!isNaN(1*a)},k=b.addMinMaxNumberToCache,l=function(a,b){a=""+a,b-=a.length;for(var c=0;b>c;c++)a="0"+a;return a},m=1e-7,n=b.bugs.bustedValidity;b.addValidityRule("stepMismatch",function(a,c,d,e){if(""===c)return!1;if("type"in d||(d.type=i(a[0])),"week"==d.type)return!1;var g,h,j=(e||{}).stepMismatch||!1;if(f[d.type]&&f[d.type].step){if("step"in d||(d.step=b.getStep(a[0],d.type)),"any"==d.step)return!1;if("valueAsNumber"in d||(d.valueAsNumber=f[d.type].asNumber(c)),isNaN(d.valueAsNumber))return!1;k("min",a,d),g=d.minAsNumber,isNaN(g)&&(h=a.prop("defaultValue"))&&(g=f[d.type].asNumber(h)),isNaN(g)&&(g=f[d.type].stepBase||0),j=Math.abs((d.valueAsNumber-g)%d.step),j=!(m>=j||Math.abs(j-d.step)<=m)}return j}),[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(a){b.addValidityRule(a.name,function(b,c,d,e){var g=(e||{})[a.name]||!1;if(""===c)return g;if("type"in d||(d.type=i(b[0])),f[d.type]&&f[d.type].asNumber){if("valueAsNumber"in d||(d.valueAsNumber=f[d.type].asNumber(c)),isNaN(d.valueAsNumber))return!1;if(k(a.attr,b,d),isNaN(d[a.attr+"AsNumber"]))return g;g=d[a.attr+"AsNumber"]*a.factor<d.valueAsNumber*a.factor-m}return g})}),b.reflectProperties(["input"],["max","min","step"]);var o=b.defineNodeNameProperty("input","valueAsNumber",{prop:{get:function(){var b=this,c=i(b),d=f[c]&&f[c].asNumber?f[c].asNumber(a.prop(b,"value")):o.prop._supget&&o.prop._supget.apply(b,arguments);return null==d&&(d=e),d},set:function(c){var d=this,e=i(d);if(f[e]&&f[e].numberToString){if(isNaN(c))return a.prop(d,"value",""),void 0;var g=f[e].numberToString(c);g!==!1?a.prop(d,"value",g):b.error("INVALID_STATE_ERR: DOM Exception 11")}else o.prop._supset&&o.prop._supset.apply(d,arguments)}}}),p=b.defineNodeNameProperty("input","valueAsDate",{prop:{get:function(){var b=this,c=i(b);return f[c]&&f[c].asDate&&!f[c].noAsDate?f[c].asDate(a.prop(b,"value")):p.prop._supget&&p.prop._supget.call(b)||null},set:function(c){var d=this,e=i(d);if(!f[e]||!f[e].dateToString||f[e].noAsDate)return p.prop._supset&&p.prop._supset.apply(d,arguments)||null;if(null===c)return a.prop(d,"value",""),"";var g=f[e].dateToString(c);return g!==!1?(a.prop(d,"value",g),g):(b.error("INVALID_STATE_ERR: DOM Exception 11"),void 0)}}});a.each({stepUp:1,stepDown:-1},function(c,d){var e=b.defineNodeNameProperty("input",c,{prop:{value:function(c){var g,h,j,k,l,n,o,p=i(this);if(!f[p]||!f[p].asNumber){if(e.prop&&e.prop._supvalue)return e.prop._supvalue.apply(this,arguments);throw b.info("no step method for type: "+p),"invalid state error"}if(l={type:p},c||(c=1,b.warn("you should always use a factor for stepUp/stepDown")),c*=d,h=a.prop(this,"valueAsNumber"),isNaN(h))throw b.info("valueAsNumber is NaN can't apply stepUp/stepDown "),"invalid state error";if(g=b.getStep(this,p),"any"==g)throw b.info("step is 'any' can't apply stepUp/stepDown"),"invalid state error";if(b.addMinMaxNumberToCache("min",a(this),l),b.addMinMaxNumberToCache("max",a(this),l),n=l.minAsNumber,isNaN(n)&&(o=a.prop(this,"defaultValue"))&&(n=f[p].asNumber(o)),n||(n=0),g*=c,h=1*(h+g).toFixed(5),j=(h-n)%g,j&&Math.abs(j)>m&&(k=h-j,k+=j>0?g:-g,h=1*k.toFixed(5)),!isNaN(l.maxAsNumber)&&h>l.maxAsNumber||!isNaN(l.minAsNumber)&&h<l.minAsNumber)throw b.info("max/min overflow can't apply stepUp/stepDown"),"invalid state error";a.prop(this,"valueAsNumber",h)}}})});var q={number:{bad:function(a){return!g(a)},step:1,stepScaleFactor:1,asNumber:function(a){return g(a)?1*a:e},numberToString:function(a){return g(a)?a:!1}},range:{minDefault:0,maxDefault:100},color:{bad:function(){var a=/^\u0023[a-f0-9]{6}$/;return function(b){return!b||7!=b.length||!a.test(b)}}()},date:{bad:function(a){if(!a||!a.split||!/\d$/.test(a))return!0;var b,c=a.split(/\u002D/);if(3!==c.length)return!0;var d=!1;if(c[0].length<4||2!=c[1].length||c[1]>12||2!=c[2].length||c[2]>33)d=!0;else for(b=0;3>b;b++)if(!j(c[b])){d=!0;break}return d||a!==this.dateToString(this.asDate(a,!0))},step:1,stepScaleFactor:864e5,asDate:function(a,b){return!b&&this.bad(a)?null:new Date(this.asNumber(a,!0))},asNumber:function(a,b){var c=e;return(b||!this.bad(a))&&(a=a.split(/\u002D/),c=Date.UTC(a[0],a[1]-1,a[2])),c},numberToString:function(a){return g(a)?this.dateToString(new Date(1*a)):!1},dateToString:function(a){return a&&a.getFullYear?l(a.getUTCFullYear(),4)+"-"+l(a.getUTCMonth()+1,2)+"-"+l(a.getUTCDate(),2):!1}},time:{bad:function(b,c){if(!b||!b.split||!/\d$/.test(b))return!0;if(b=b.split(/\u003A/),b.length<2||b.length>3)return!0;var d,e=!1;return b[2]&&(b[2]=b[2].split(/\u002E/),d=parseInt(b[2][1],10),b[2]=b[2][0]),a.each(b,function(a,b){return j(b)&&2===b.length?void 0:(e=!0,!1)}),e?!0:b[0]>23||b[0]<0||b[1]>59||b[1]<0?!0:b[2]&&(b[2]>59||b[2]<0)?!0:d&&isNaN(d)?!0:(d&&(100>d?d*=100:10>d&&(d*=10)),c===!0?[b,d]:!1)},step:60,stepBase:0,stepScaleFactor:1e3,asDate:function(a){return a=new Date(this.asNumber(a)),isNaN(a)?null:a},asNumber:function(a){var b=e;return a=this.bad(a,!0),a!==!0&&(b=Date.UTC("1970",0,1,a[0][0],a[0][1],a[0][2]||0),a[1]&&(b+=a[1])),b},dateToString:function(a){if(a&&a.getUTCHours){var b=l(a.getUTCHours(),2)+":"+l(a.getUTCMinutes(),2),c=a.getSeconds();return"0"!=c&&(b+=":"+l(c,2)),c=a.getUTCMilliseconds(),"0"!=c&&(b+="."+l(c,3)),b}return!1}},month:{bad:function(a){return q.date.bad(a+"-01")},step:1,stepScaleFactor:!1,asDate:function(a){return new Date(q.date.asNumber(a+"-01"))},asNumber:function(a){var b=e;return a&&!this.bad(a)&&(a=a.split(/\u002D/),a[0]=1*a[0]-1970,a[1]=1*a[1]-1,b=12*a[0]+a[1]),b},numberToString:function(a){var b,c=!1;return g(a)&&(b=a%12,a=(a-b)/12+1970,b+=1,1>b&&(a-=1,b+=12),c=l(a,4)+"-"+l(b,2)),c},dateToString:function(a){if(a&&a.getUTCHours){var b=q.date.dateToString(a);return b.split&&(b=b.split(/\u002D/))?b[0]+"-"+b[1]:!1}return!1}},"datetime-local":{bad:function(a,b){return a&&a.split&&2===(a+"special").split(/\u0054/).length?(a=a.split(/\u0054/),q.date.bad(a[0])||q.time.bad(a[1],b)):!0},noAsDate:!0,asDate:function(a){return a=new Date(this.asNumber(a)),isNaN(a)?null:a},asNumber:function(a){var b=e,c=this.bad(a,!0);return c!==!0&&(a=a.split(/\u0054/)[0].split(/\u002D/),b=Date.UTC(a[0],a[1]-1,a[2],c[0][0],c[0][1],c[0][2]||0),c[1]&&(b+=c[1])),b},dateToString:function(a,b){return q.date.dateToString(a)+"T"+q.time.dateToString(a,b)}}};!n&&h("range")&&h("time")&&h("month")&&h("datetime-local")||(q.range=a.extend({},q.number,q.range),q.time=a.extend({},q.date,q.time),q.month=a.extend({},q.date,q.month),q["datetime-local"]=a.extend({},q.date,q.time,q["datetime-local"])),["number","month","range","date","time","color","datetime-local"].forEach(function(a){(n||!h(a))&&b.addInputType(a,q[a])}),null==a("<input />").prop("labels")&&b.defineNodeNamesProperty("button, input, keygen, meter, output, progress, select, textarea","labels",{prop:{get:function(){if("hidden"==this.type)return null;var b=this.id,c=a(this).closest("label").filter(function(){var a=this.attributes["for"]||{};return!a.specified||a.value==b});return b&&(c=c.add('label[for="'+b+'"]')),c.get()},writeable:!1}})});