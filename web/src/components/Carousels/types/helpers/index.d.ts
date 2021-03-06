import { MouseEvent, TouchEvent } from 'react';
import { SlideDirection, Item } from '../types/carousel';
export declare class Circular<T> {
    private arr;
    private currentIndex;
    constructor(arr: T[], currentIndex: number);
    next(): T;
    prev(): T;
    current(): T;
}
export declare const rotateItems: (items: any[], showingItems: any[], start: number, show: number, slide: number, direction: SlideDirection) => any[];
export declare const getTransformAmount: (width: number, slideCount: number, direction: SlideDirection) => number;
export declare const getCurrent: (current: number, slide: number, length: number, direction: SlideDirection) => number;
export declare const getShowArrow: (items: number, show: number, infinite: boolean, current: number) => {
    left: boolean;
    right: boolean;
};
export declare const cleanItems: (showingItems: any[], slide: number, direction: SlideDirection) => any[];
export declare const initItems: (items: Item[], slide: number, infinite: boolean) => Item[];
export declare function getPageX(e: TouchEvent | MouseEvent): number;
export declare function getOuterWidth(el: HTMLElement): number;
export declare function updateNodes(oldItems: Item[], newItems: Item[], prevChildren: Item[] | undefined, slide: number, infinite: boolean): Item[];
export declare function areItemsNotMatched(items: Item[]): boolean;
