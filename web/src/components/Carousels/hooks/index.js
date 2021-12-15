import { useEffect, useLayoutEffect, useRef, useState } from 'react';
export var useWindowWidthChange = function (callBack) {
    var _a = useState(window.innerWidth), windowWidth = _a[0], setWindowWidth = _a[1];
    useLayoutEffect(function () {
        var update = function () {
            var changed = windowWidth - window.innerWidth;
            setWindowWidth(window.innerWidth);
            callBack(changed);
        };
        window.addEventListener('resize', update);
        return function () { return window.removeEventListener('resize', update); };
    }, []);
    return;
};
export var usePrevious = function (value) {
    var ref = useRef();
    useEffect(function () {
        ref.current = value;
    });
    return ref.current;
};
//# sourceMappingURL=index.js.map