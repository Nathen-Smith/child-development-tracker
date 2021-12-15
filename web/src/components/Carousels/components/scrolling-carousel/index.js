import React, { useState, useRef, useCallback, } from 'react';
import { SlideDirection } from '../../types/carousel';
import styles from '../../styles/slider/styles.module.css';
import { getOuterWidth } from '../../helpers';
export var ScrollingCarousel = function (_a) {
    var children = _a.children, className = _a.className;
    var slider = useRef(null);
    var _b = useState(false), isDown = _b[0], setIsDown = _b[1];
    var _c = useState({
        startX: 0,
        scrollLeft: 0,
    }), position = _c[0], setPosition = _c[1];
    var showArrows = function () {
        var sliderElement = slider.current;
        return {
            left: true, right: true
        }
        return {
            left: !!sliderElement && sliderElement.scrollLeft > 0,
            right: !!sliderElement &&
                sliderElement.scrollWidth >
                    sliderElement.scrollLeft + sliderElement.offsetWidth,
        };
    };
    var _d = useState(showArrows()), showArrow = _d[0], setShowArrow = _d[1];
    var onScroll = function (_) {
        setShowArrow(showArrows());
    };
    var ref = useCallback(function (node) {
        if (node !== null) {
            Object.defineProperty(slider, 'current', { value: node });
            setShowArrow(showArrows());
            node.addEventListener('scroll', onScroll);
        }
    }, [slider, children]);
    var mouseDown = function (e) {
        setIsDown(true);
        setPosition({
            startX: e.pageX - slider.current.offsetLeft,
            scrollLeft: slider.current.scrollLeft,
        });
    };
    var mouseUp = function (_) {
        setIsDown(false);
        setShowArrow(showArrows());
        slider.current.classList.remove(styles.sliding);
    };
    var mouseMove = function (e) {
        if (!isDown)
            return;
        e.preventDefault();
        slider.current.classList.add(styles.sliding);
        var eventPosition = e.pageX - slider.current.offsetLeft;
        var slide = eventPosition - position.startX;
        slider.current.scrollLeft = position.scrollLeft - slide;
    };
    var calculateSlideAmount = function (direction) {
        var _slider = slider.current;
        var currentView = direction === SlideDirection.Left
            ? _slider.scrollLeft + _slider.offsetWidth
            : _slider.scrollLeft;
        var childNodes = Array.from(_slider.children);
        var nodeWidthSum = 0;
        for (var _i = 0, childNodes_1 = childNodes; _i < childNodes_1.length; _i++) {
            var node = childNodes_1[_i];
            var nodeWidth = getOuterWidth(node);
            nodeWidthSum += nodeWidth;
            if (nodeWidthSum >= currentView) {
                var showingPart = direction === SlideDirection.Left
                    ? nodeWidthSum - currentView
                    : nodeWidth;
                return (_slider.offsetWidth - showingPart) * direction;
            }
        }
        return _slider.offsetWidth;
    };
    var slide = function (direction) {
        var slideAmount = calculateSlideAmount(direction);
        var start = slider.current.scrollLeft;
        smoothHorizontalScroll(500, slideAmount, start);
    };
    var smoothHorizontalScroll = function (time, amount, start) {
        var curTime = 0;
        for (var scrollCounter = 0; curTime <= time; scrollCounter++) {
            window.setTimeout(smoothHorizontalScrollBehavior, curTime, (scrollCounter * amount) / 100 + start);
            curTime += time / 100;
        }
    };
    var smoothHorizontalScrollBehavior = function (amount) {
        slider.current.scrollLeft = amount;
    };
    return (React.createElement("div", { className: styles.sliderBase + " " + className },
        // showArrow.left && (React.createElement("div", { "data-arrow": "left" },
        // // React.createElement("button", { onClick: function () { return slide(SlideDirection.Right); } })
        //     <button>hello</button>
            
        //    )),
        // showArrow.right && (React.createElement("div", { "data-arrow": "right" }, 
        //     // React.createElement("button", { onClick: function () { return slide(SlideDirection.Left); } })
            
        //     <button>hello</button>
        //     )),

        <div className="flex flex-row-reverse">
                            <button
                  onClick={function () { return slide(SlideDirection.Left); } }
                  id="submit_button"
                  className={"inline-flex items-center justify-start px-4 py-2 bg-indigo-500 rounded ml-2 mr-4 borderRadiusA "  + styles.borderRadiusA}
                // style="margin-right:30px"
                >
                  <p className="text-sm font-semibold leading-none text-center text-white">
                  &rarr;
                  </p>
                </button>
            <button
                  onClick={function () { return slide(SlideDirection.Right); } }
                  id="submit_button"
                  className={"inline-flex items-center justify-start px-4 py-2 bg-indigo-500 rounded mr-2 borderRadiusA "  + styles.borderRadiusA}
                // style="margin-right:30px"
                >
                  <p className="text-sm font-semibold leading-none text-center text-white">
                  &larr;
                  </p>
                </button>

            {/* <a href="#" onClick={function () { return slide(SlideDirection.Right); } }   className={"text-base font-medium text-light-purple hover:text-indigo-500"} ><span aria-hidden="true"> &larr;</span></a> */}
            {/* <a href="#" onClick={function () { return slide(SlideDirection.Left); } }  className={styles.alink + ' ' +  styles.next + ' ' + styles.round} >&rarr;</a> */}
        </div>, 

        React.createElement("div", { ref: ref, onMouseDown: mouseDown, onMouseLeave: mouseUp, onMouseUp: mouseUp, onMouseMove: mouseMove, className: styles.slider }, children)));
};
//# sourceMappingURL=index.js.map