/*
 * my-jquery-1.0
 */
/*
 * 网上也有很多实现的版本，不过这是我在我自己的理解下写的，加上注释，希望可以解释清楚。
*/
/*
 * 整个jquery包含在一个匿名函数中，专业点叫闭包，就是下面的形式，如(function(window,undefined){}(window))。
 * 闭包的定义在这里不太容易讲清楚，我只说下这样说的好处。
 * 1.使整个jquery中定义的变量成为局域变量，不会影响全局变量，个人觉得这也是jquery被成为轻量级的原因之一。
 * 2.增加jquery运行速度，因为局域变量运行速度高于全局变量。
 * 3.就像你看到，传入的window和undefined，可以自定义名字，方便编写。当然，现在你看到的仍是原来的写法，但是你可以看看jquery的min版本，一定是压缩的。
*/
(function( window, undefined ) {
    var 
        /*jquery的定义，我们平时用的$和jQuery就是它。这里可以看出来真正的jQuery的对象是init方法产生的。
         *这样做采用了工厂模式，创建jQuery对象时不需要再new一个对象了。所以你可以发现，我们创建jQuery对象的方式是$(selector)或者是jQuery(selector)
         *原版的jQuery定义方法多了个上下文参数context，此处我省略了。
        */
        jQuery = function(selector){
            return new jQuery.fn.init(selector);
        },
        /*
         * 引用数据、对象以及字符串的方法
        */
        core_push = Array.prototype.push,
        core_slice = Array.prototype.slice,
        core_indexOf = Array.prototype.indexOf,
        core_toString = Object.prototype.toString,
        core_hasOwn = Object.prototype.hasOwnProperty,
        core_trim = String.prototype.trim;
        /*
         * jQuery对象的定义，这里去掉了所有的属性，只留下了init()。
         * jQuery的选择器采用了Sizzle，这里省略了，可以看出我只简单的返回了一个查询ID的方式。
         * jQuery的对象并不是这样简单的赋给了对象的一个属性，而是创建了一个数组。在这里忽略那些，只是赋给了obj属性。
         * 这里jQuery将原型赋给了jQuery的fn属性，所以我们如果要给jQuery对象扩展，只需要对jQuery.fn扩展就行。
        */
        jQuery.fn = jQuery.prototype = {
            init:function(selector){
                    this.obj = window.document.getElementById(selector);
                    return this;
            }
        };
        /*
         * 将jQuery的原型赋给init，这样是为了可以让jQuery对象，也就是init对象可以使用jQuery的扩展方法。
        */
        jQuery.fn.init.prototype = jQuery.fn;
        /*
         * jQuery的扩展方法，这个是jQuery的原版方法，我没做更改。
         * 方法的逻辑在这里不再说明，方法的效果就是，我们使用jQuery.extend可以扩展jQuery，而jQuery.fn.extend可以扩展jQuery对象。
        */
        jQuery.extend = jQuery.fn.extend = function() {
            var options, name, src, copy, copyIsArray, clone,
                target = arguments[0] || {},
                i = 1,
                length = arguments.length,
                deep = false;
    
            // Handle a deep copy situation
            if ( typeof target === "boolean" ) {
                deep = target;
                target = arguments[1] || {};
                // skip the boolean and the target
                i = 2;
            }
    
            // Handle case when target is a string or something (possible in deep copy)
            if ( typeof target !== "object" && !d.isFunction(target) ) {
                target = {};
            }
    
            // extend jQuery itself if only one argument is passed
            if ( length === i ) {
                target = this;
                --i;
            }
    
            for ( ; i < length; i++ ) {
                // Only deal with non-null/undefined values
                if ( (options = arguments[ i ]) != null ) {
                    // Extend the base object
                    for ( name in options ) {
                        src = target[ name ];
                        copy = options[ name ];
    
                        // Prevent never-ending loop
                        if ( target === copy ) {
                            continue;
                        }
    
                        // Recurse if we're merging plain objects or arrays
                        if ( deep && copy && ( d.isPlainObject(copy) || (copyIsArray = d.isArray(copy)) ) ) {
                            if ( copyIsArray ) {
                                copyIsArray = false;
                                clone = src && d.isArray(src) ? src : [];
    
                            } else {
                                clone = src && d.isPlainObject(src) ? src : {};
                            }
    
                            // Never move original objects, clone them
                            target[ name ] = d.extend( deep, clone, copy );
    
                        // Don't bring in undefined values
                        } else if ( copy !== undefined ) {
                            target[ name ] = copy;
                        }
                    }
                }
            }
    
            // Return the modified object
            return target;
        };
        /*
         * 这里实现了简单的ready绑定序列。
        */
        jQuery.extend({
            isReady:false,//文档加载是否完成的标识
            readyList:[],//函数序列
            //以下为工具方法，可忽略
            isArray : Array.isArray || function( obj ) {
                return jQuery.type(obj) === "array";
            },
    
            isWindow : function( obj ) {
                return obj != null && obj == obj.window;
            },
    
            isNumeric : function( obj ) {
                return !isNaN( parseFloat(obj) ) && isFinite( obj );
            },
    
            type : function( obj ) {
                return obj == null ?
                    String( obj ) :
                    class2type[ core_toString.call(obj) ] || "object";
            },
    
            isPlainObject : function( obj ) {
                // Must be an Object.
                // Because of IE, we also have to check the presence of the constructor property.
                // Make sure that DOM nodes and window objects don't pass through, as well
                if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
                    return false;
                }
    
                try {
                    // Not own constructor property must be Object
                    if ( obj.constructor &&
                        !core_hasOwn.call(obj, "constructor") &&
                        !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
                        return false;
                    }
                } catch ( e ) {
                    // IE8,9 Will throw exceptions on certain host objects #9897
                    return false;
                }
    
                // Own properties are enumerated firstly, so to speed up,
                // if last one is own, then all properties are own.
    
                var key;
                for ( key in obj ) {}
    
                return key === undefined || core_hasOwn.call( obj, key );
            },
            isFunction : function(obj){
                if(obj && typeof obj == 'function'){
                    return true;
                }
                return false;
            },
            //onload事件实现
            ready : function(fn){
                    //如果是函数，加入到函数序列
                    if(fn && typeof fn == 'function' ){
                        jQuery.readyList.push(fn);
                    }
                    //文档加载完成，执行函数序列。
                    if(jQuery.isReady){
                        for(var i = 0;i < jQuery.readyList.length ;i++){
                            fn = jQuery.readyList[i];
                            jQuery.callback(fn);
                        }
                        return jQuery;
                    }
                },
            //回调
            callback : function(fn){
                fn.call(document,jQuery);
            }
        });
        //模拟实现jQuery的html方法
        jQuery.fn.extend({
        html : function(html){
            if(html && typeof html == 'string'){
               this.obj.innerHTML = html;
               return this;
            }
            return this.obj.innerHTML;
        }
        });
        //导出对象
        window.$ = window.jQuery = jQuery;
        //判断加载是否完成
        var top = false;
        try {
            top = window.frameElement == null && document.documentElement;
        } catch(e) {}
        if ( top && top.doScroll ) {
            (function doScrollCheck() {
                try {
                    top.doScroll("left");
                    jQuery.isReady = true;
                    jQuery.ready();
                } catch(e) {
                    setTimeout( doScrollCheck, 50 );
                }
            })();
        }
    }(window));