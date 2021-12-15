
import React, { useCallback, useState, } from 'react';
import { SlideDirection } from '../../types/carousel';
import { getPageX } from '../../helpers';
import { useWindowWidthChange } from '../../hooks';
import styles from '../../styles/styles.module.css';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export var ItemProvider = function (props) {
    var _a = useState(200), width = _a[0], setWidth = _a[1];
    var ref = useCallback(function (node) {
        if (node !== null) {
            var calculated = node.getBoundingClientRect().width / props.show;
            setWidth(calculated);
            props.widthCallBack(calculated);
        }
    }, [width]);
    // tslint:disable-next-line: no-unused-expression
    // props.responsive &&
        useWindowWidthChange(function (change) {
            setWidth(width - change);
        });
    var _b = useState({
        initial: props.transform,
        start: 0,
        isDown: false,
        drag: 0,
        finished: true,
        pointers: true,
    }), drag = _b[0], setDrag = _b[1];
    var handleDragStart = function (e) {
        e.persist();
        setDrag(__assign(__assign({}, drag), { isDown: true, start: getPageX(e), initial: props.transform, finished: false }));
    };
    var handleDragFinish = function (e) {
        e.persist();
        if (drag.finished) {
            return;
        }
        if (Math.abs(drag.drag) < width * props.swipeOn) {
            props.dragCallback(props.transform);
            return setDrag({
                initial: props.transform,
                start: 0,
                isDown: false,
                drag: 0,
                finished: true,
                pointers: true,
            });
        }
        props.slideCallback(drag.drag > 0 ? SlideDirection.Right : SlideDirection.Left);
        setDrag(__assign(__assign({}, drag), { drag: 0, isDown: false, finished: true, pointers: true }));
        return;
    };
    var handleDragMove = function (e) {
        e.persist();
        if (!drag.isDown) {
            return;
        }
        var pos = getPageX(e);
        setDrag(__assign(__assign({}, drag), { drag: drag.start - pos, pointers: false }));
    };
    var swipeProps = props.swiping
        ? {
            onTouchCancel: handleDragFinish,
            onTouchEnd: handleDragFinish,
            onTouchMove: handleDragMove,
            onTouchStart: handleDragStart,
            onMouseDown: handleDragStart,
            onMouseLeave: handleDragFinish,
            onMouseUp: handleDragFinish,
            onMouseMove: handleDragMove,
        }
        : {};
    return (React.createElement("div", { ref: ref, className: styles.itemProvider },
        React.createElement("div", __assign({ "data-testid": "trackList" }, swipeProps, { className: styles.itemTracker, style: {
                transform: "translateX(" + (props.transform - drag.drag) + "px)",
                transition: "transform " + props.transition + "s ease 0s",
                width: width * props.items.length,
            } }), props.items.map(function (item, i) { return (React.createElement("div", { key: i, style: { width: width, pointerEvents: drag.pointers ? 'all' : 'none' }, className: styles.itemContainer }, item)); }))));
};
//# sourceMappingURL=index.js.map