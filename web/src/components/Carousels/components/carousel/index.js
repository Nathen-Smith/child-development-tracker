
import React, { useState, useEffect, useRef, } from 'react';
import { Arrow } from '../arrow';
import { ItemProvider } from '../item';
import { rotateItems, getTransformAmount, getCurrent, initItems, getShowArrow, cleanItems, updateNodes, } from '../../helpers';
import { SlideDirection } from '../../types/carousel';
import { defaultProps } from './defaultProps';
import styles from '../../styles/styles.module.css';
import { usePrevious } from '../../hooks';

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

export var Carousel = function (userProps) {
    var props = __assign(__assign({}, defaultProps), userProps);
    var _a = useState(initItems(props.children, props.slide, props.infinite)), items = _a[0], setItems = _a[1];
    var _b = useState(0), width = _b[0], setWidth = _b[1];
    var _c = useState({
        transform: 0,
        transition: 0,
        isSliding: false,
    }), animation = _c[0], setAnimation = _c[1];
    var _d = useState(0), current = _d[0], setCurrent = _d[1];
    var _e = useState(getShowArrow(props.children.length, props.show, props.infinite, current)), showArrow = _e[0], setShowArrow = _e[1];
    var prevChildren = usePrevious(userProps.children);
    var _f = useState(0), page = _f[0], setPage = _f[1];
    var itemsRef = useRef(initItems(props.children, props.slide, props.infinite));
    var isPaginating = useRef(false);
    // if (props.dynamic) {
        useEffect(function () {
            var newItems = updateNodes(itemsRef.current, props.children, prevChildren, props.slide, props.infinite);
            setItems(newItems);
            itemsRef.current = newItems;
            if (page < props.pageCount &&
                prevChildren &&
                (prevChildren === null || prevChildren === void 0 ? void 0 : prevChildren.length) < props.children.length) {
                slide(SlideDirection.Right);
                setPage(page + 1);
            }
        }, [props.children]);
    // }
    var slide = function (direction) {
        if (animation.isSliding ||
            (direction === SlideDirection.Right && !showArrow.right) ||
            (direction === SlideDirection.Left && !showArrow.left)) {
            return;
        }
        if (props.paginationCallback &&
            direction === SlideDirection.Right &&
            page < props.pageCount - 1 &&
            !isPaginating.current) {
            isPaginating.current = true;
            props.paginationCallback(direction);
            return;
        }
        var elements = props.children;
        var next = getCurrent(current, props.slide, elements.length, direction);
        var rotated = props.infinite
            ? rotateItems(elements, items, next, props.show, props.slide, direction)
            : items;
        if (props.infinite && direction === SlideDirection.Right) {
            setItems(rotated);
            itemsRef.current = rotated;
        }
        setAnimation({
            transform: animation.transform + getTransformAmount(width, props.slide, direction),
            transition: props.transition,
            isSliding: true,
        });
        setCurrent(next);
        setShowArrow(getShowArrow(elements.length, props.show, props.infinite, next));
        setTimeout(function () {
            if (props.infinite) {
                var cleanedItems = cleanItems(direction === SlideDirection.Right ? itemsRef.current : rotated, props.slide, direction);
                setItems(cleanedItems);
                itemsRef.current = cleanedItems;
            }
            setAnimation({
                transform: props.infinite
                    ? getTransformAmount(width, props.slide, SlideDirection.Right)
                    : animation.transform +
                        getTransformAmount(width, props.slide, direction),
                transition: 0,
                isSliding: false,
            });
        }, props.transition * 1000);
        isPaginating.current = false;
    };
    var widthCallBack = function (calculatedWidth) {
        setWidth(calculatedWidth);
        setAnimation({
            transform: props.infinite
                ? getTransformAmount(calculatedWidth, props.slide, SlideDirection.Right)
                : 0,
            transition: 0,
            isSliding: false,
        });
    };
    var dragCallback = function (translateX) {
        setAnimation({
            transform: translateX,
            transition: props.transition,
            isSliding: false,
        });
        setTimeout(function () { return setAnimation(__assign(__assign({}, animation), { transition: 0 })); }, props.transition * 1000);
    };
    var slideCallback = function (direction) {
        slide(direction);
    };
    var handleOnKeyDown = function (e) {
        if (e.keyCode === 37 /* Left */) {
            slide(SlideDirection.Left);
        }
        else if (e.keyCode === 39 /* Right */) {
            slide(SlideDirection.Right);
        }
    };
    return (React.createElement("div", __assign({}, props.a11y, { "data-testid": "carousel", tabIndex: 0 }, (props.useArrowKeys ? { onKeyDown: handleOnKeyDown } : {}), { className: styles.carouselBase + " " + props.className }),
        showArrow.left && (React.createElement(Arrow, { direction: "left", onClick: function () { return slide(SlideDirection.Left); } })),
        React.createElement(ItemProvider, __assign({}, props, { transition: animation.transition, items: itemsRef.current, transform: animation.transform, slideCallback: slideCallback, dragCallback: dragCallback, widthCallBack: widthCallBack })),
        showArrow.right && (React.createElement(Arrow, { direction: "right", onClick: function () { return slide(SlideDirection.Right); } }))));
};
//# sourceMappingURL=index.js.map