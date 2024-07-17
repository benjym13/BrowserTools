import { type Button as ButtonType } from "../../types/types";
import './Button.scss';

export const Button:React.FC<ButtonType> = ({label, icon, children}:ButtonType) => {
    return (
        <button className={icon ? 'button button--icon': 'button'}>
            {icon ?  children : label}
        </button>
    )
}