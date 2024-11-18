import { ReactNode } from "react";

export interface Button  {
    id?:string;
    label?:string;
    icon:boolean;
    children?: ReactNode;
    onClick?:  (event: MouseEvent<HTMLButtonElement>) => void;
}

export type Size = 'small' | 'medium' | 'large' ;

export interface IconType {
    children:ReactNode,
    size:Size
}