
import type {FC} from "react";
import './GenreBadge.css'

interface GenreBadgeProps {
    name: string;
    isActive?: boolean;
    onClick?: () => void;
}

const GenreBadge: FC<GenreBadgeProps> = ({name, onClick, isActive = false}) => {

    return (
            <a href="#" onClick={(e) => {
                e.preventDefault();
                onClick?.();
            }} className={`genre-badge ${isActive ? 'active' : ''}`}
            >{name}
            </a>
    );
};
export default GenreBadge;
