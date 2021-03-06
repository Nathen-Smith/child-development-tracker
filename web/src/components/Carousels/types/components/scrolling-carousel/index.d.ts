import { FunctionComponent } from 'react';
import { Item } from '../../types/carousel';
export declare const ScrollingCarousel: FunctionComponent<SliderProps>;
export interface SliderProps {
    children: Item[];
    className?: string;
}
export declare type Arrows = {
    left: boolean;
    right: boolean;
};
