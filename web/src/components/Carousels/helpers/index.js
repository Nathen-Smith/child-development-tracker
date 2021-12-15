import { SlideDirection } from '../types/carousel';
var Circular = /** @class */ (function () {
    function Circular(arr, currentIndex) {
        this.arr = arr;
        this.currentIndex = currentIndex;
    }
    Circular.prototype.next = function () {
        var i = this.currentIndex;
        var arr = this.arr;
        this.currentIndex = i < arr.length - 1 ? i + 1 : 0;
        return this.current();
    };
    Circular.prototype.prev = function () {
        var i = this.currentIndex;
        var arr = this.arr;
        this.currentIndex = i > 0 && i < arr.length ? i - 1 : arr.length - 1;
        return this.current();
    };
    Circular.prototype.current = function () {
        return this.arr[this.currentIndex];
    };
    return Circular;
}());
export { Circular };
export var rotateItems = function (items, showingItems, start, show, slide, direction) {
    var circular = new Circular(items, start);
    var newItems = Array.from(showingItems);
    switch (+direction) {
        case SlideDirection.Left:
            for (var i = slide; i >= 0; i--) {
                if (slide - i < 0 || !newItems[i - slide]) {
                    newItems.unshift(circular.current());
                }
                circular.prev();
            }
            break;
        case SlideDirection.Right:
            for (var i = 0; i < show + slide; i++) {
                if (!newItems[2 * slide + i]) {
                    newItems.push(circular.current());
                }
                circular.next();
            }
            break;
    }
    return newItems;
};
export var getTransformAmount = function (width, slideCount, direction) {
    return direction * width * slideCount;
};
export var getCurrent = function (current, slide, length, direction) {
    var slideTo = current - direction * slide;
    if (slideTo < 0) {
        return length + slideTo;
    }
    else if (length <= slideTo) {
        return slideTo - length;
    }
    return slideTo;
};
export var getShowArrow = function (items, show, infinite, current) {
    var isItemsMore = items > show;
    if (infinite) {
        return {
            left: isItemsMore,
            right: isItemsMore,
        };
    }
    return {
        left: isItemsMore && current !== 0,
        right: isItemsMore && current + show < items,
    };
};
export var cleanItems = function (showingItems, slide, direction) {
    if (direction === SlideDirection.Left) {
        return showingItems.slice(0, -1 * slide);
    }
    return showingItems.slice(slide);
};
export var initItems = function (items, slide, infinite) {
    if (!infinite) {
        return items;
    }
    var newArray = Array.from(items);
    var circular = new Circular(items, 0);
    for (var i = 0; i < slide; i++) {
        newArray.unshift(circular.prev());
    }
    return newArray;
};
export function getPageX(e) {
    if (e.nativeEvent instanceof MouseEvent) {
        return e.nativeEvent.pageX;
    }
    else if (e.nativeEvent instanceof TouchEvent) {
        return e.nativeEvent.changedTouches[0].pageX;
    }
    return 0;
}
export function getOuterWidth(el) {
    var style = getComputedStyle(el);
    return (el.offsetWidth +
        (parseInt(style.marginLeft, 10) || 0) +
        (parseInt(style.marginRight, 10) || 0));
}
export function updateNodes(oldItems, newItems, prevChildren, slide, infinite) {
    if (prevChildren && prevChildren.length < newItems.length) {
        return initItems(newItems, slide, infinite);
    }
    var matchedItems = oldItems.map(function (oldItem) {
        return newItems.find(function (newItem) { return oldItem.key === newItem.key; });
    });
    if (areItemsNotMatched(matchedItems)) {
        return initItems(newItems, slide, infinite);
    }
    return matchedItems;
}
export function areItemsNotMatched(items) {
    return items.some(function (item) { return item === undefined; });
}
//# sourceMappingURL=index.js.map