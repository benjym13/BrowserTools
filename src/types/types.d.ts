import { ReactNode } from "react";

export interface Button  {
    label?:string;
    icon:boolean;
    children?: ReactNode
}

export type Size = 'small' | 'medium' | 'large' ;

export interface IconType {
    children:ReactNode,
    size:Size
}