import { type IconType } from "../../types/types"
import './Icon.scss';

export const Icon:React.FC<IconType>  = ({children, size}) => {
    return( 
        <div className={'icon icon--' + size}>
            {children}
        </div>
    )
}