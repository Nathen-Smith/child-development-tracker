import { FunctionComponent } from 'react';
import { SlideDirection, Item } from '../../types/carousel';
export declare const Carousel: FunctionComponent<CarouselProps>;
export interface CarouselProps {
    children: Item[];
    show: number;
    slide: number;
    transition?: number;
    swiping?: boolean;
    swipeOn?: number;
    responsive?: boolean;
    infinite?: boolean;
    className?: string;
    useArrowKeys?: boolean;
    a11y?: {
        [key: string]: string;
    };
    dynamic?: boolean;
    paginationCallback?: ((direction: SlideDirection) => any) | null;
    pageCount?: number;
}
export interface CarouselState {
    items: Item[];
    width: number;
    transform: number;
    transition: number;
    isSliding: boolean;
    current: number;
}
