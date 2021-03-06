import { FunctionComponent } from 'react';
import { Item, SlideDirection } from '../../types/carousel';
export declare const ItemProvider: FunctionComponent<ItemProviderProps>;
export interface ItemProviderProps {
    items: Item[];
    show: number;
    slide: number;
    widthCallBack: (width: number) => void;
    dragCallback: (transform: number) => void;
    slideCallback: (direction: SlideDirection) => void;
    transition: number;
    transform: number;
    swiping: boolean;
    swipeOn: number;
    responsive: boolean;
    infinite: boolean;
}
