
(function () {
var scripts = [{"deps":{"./assets/framework/App":3,"./assets/framework/log/AppLog":1,"./assets/framework/model/BaseVO":30,"./assets/framework/model/ObjectManaget":28,"./assets/framework/model/BaseModel":26,"./assets/framework/audio/AudioManager":16,"./assets/framework/event/EventManager":15,"./assets/framework/pool/UserPool":29,"./assets/framework/pool/PoolManager":27,"./assets/framework/scene/SceneManager":5,"./assets/framework/view/ViewManager":9,"./assets/framework/view/base/BaseComponent":11,"./assets/framework/view/base/SceneComponent":2,"./assets/framework/view/base/SceneCtrl":7,"./assets/framework/view/base/BaseViewCtrl":31,"./assets/migration/use_v2.0.x_cc.Toggle_event":6,"./assets/framework/view/pligin/UIPlugin":32,"./assets/script/Test":8,"./assets/script/Test2":10,"./assets/script/Test3":13,"./assets/framework/Localization":12,"./assets/script/test_3d/test_3d_scene1":4,"./assets/resources/scene/test_uiloader/ResViewLogic":18,"./assets/resources/scene/test_uiloader/test_scene1":14,"./assets/resources/scene/test_view/test_scene4":22,"./assets/resources/scene/test_view/test_view_1":19,"./assets/resources/scene/test_view/test_scene3":23,"./assets/resources/scene/test_view/test_view_2":21,"./assets/resources/scene/test_view/test_view_3":20,"./assets/resources/scene/test_view/test_item_view":17,"./assets/resources/scene/test_uiloader/Item":25,"./assets/resources/scene/test_uiloader/test_scene2":24},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/framework/log/AppLog.js"},{"deps":{},"path":"preview-scripts/assets/framework/view/base/SceneComponent.js"},{"deps":{"./log/AppLog":1,"./view/base/SceneCtrl":7,"./view/base/BaseComponent":11,"./view/base/SceneComponent":2,"./view/base/ViewCtrl":-1,"./event/EventManager":15,"./scene/SceneManager":5,"./Localization":12,"./audio/AudioManager":16,"./view/ViewManager":9},"path":"preview-scripts/assets/framework/App.js"},{"deps":{},"path":"preview-scripts/assets/script/test_3d/test_3d_scene1.js"},{"deps":{},"path":"preview-scripts/assets/framework/scene/SceneManager.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js"},{"deps":{},"path":"preview-scripts/assets/framework/view/base/SceneCtrl.js"},{"deps":{},"path":"preview-scripts/assets/script/Test.js"},{"deps":{},"path":"preview-scripts/assets/framework/view/ViewManager.js"},{"deps":{},"path":"preview-scripts/assets/script/Test2.js"},{"deps":{},"path":"preview-scripts/assets/framework/view/base/BaseComponent.js"},{"deps":{},"path":"preview-scripts/assets/framework/Localization.js"},{"deps":{},"path":"preview-scripts/assets/script/Test3.js"},{"deps":{},"path":"preview-scripts/assets/resources/scene/test_uiloader/test_scene1.js"},{"deps":{},"path":"preview-scripts/assets/framework/event/EventManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/audio/AudioManager.js"},{"deps":{},"path":"preview-scripts/assets/resources/scene/test_view/test_item_view.js"},{"deps":{},"path":"preview-scripts/assets/resources/scene/test_uiloader/ResViewLogic.js"},{"deps":{},"path":"preview-scripts/assets/resources/scene/test_view/test_view_1.js"},{"deps":{},"path":"preview-scripts/assets/resources/scene/test_view/test_view_3.js"},{"deps":{},"path":"preview-scripts/assets/resources/scene/test_view/test_view_2.js"},{"deps":{},"path":"preview-scripts/assets/resources/scene/test_view/test_scene4.js"},{"deps":{},"path":"preview-scripts/assets/resources/scene/test_view/test_scene3.js"},{"deps":{},"path":"preview-scripts/assets/resources/scene/test_uiloader/test_scene2.js"},{"deps":{},"path":"preview-scripts/assets/resources/scene/test_uiloader/Item.js"},{"deps":{},"path":"preview-scripts/assets/framework/model/BaseModel.js"},{"deps":{"./UserPool":29},"path":"preview-scripts/assets/framework/pool/PoolManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/model/ObjectManaget.js"},{"deps":{},"path":"preview-scripts/assets/framework/pool/UserPool.js"},{"deps":{},"path":"preview-scripts/assets/framework/model/BaseVO.js"},{"deps":{},"path":"preview-scripts/assets/framework/view/base/BaseViewCtrl.js"},{"deps":{},"path":"preview-scripts/assets/framework/view/pligin/UIPlugin.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    