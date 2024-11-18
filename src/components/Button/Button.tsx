import { type Button as ButtonType } from "../../types/types";
import './Button.scss';

export const Button = ({id, label, icon, onClick, children}: ButtonType):JSX.Element => {
    const baseClasses = 'button';
    const iconClasses = icon ? 'button--icon' : '';
    
    const classes = `${baseClasses} ${iconClasses}`;
    return (
        <button className={classes} onClick={onClick} id={id}>
            {icon ?  children : label}
        </button>
    )
}