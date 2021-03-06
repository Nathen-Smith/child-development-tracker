import { FunctionComponent } from 'react';
export declare const Arrow: FunctionComponent<ArrowProps>;
export interface ArrowProps {
    onClick: (...args: any) => any;
    direction: string;
}
