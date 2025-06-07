import heartIcon from '../../assets/heart.svg';

export default function Favorite({ show }) {
    return (
        <div
            onClick={show}
            className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
            <img src={heartIcon} alt="" />
            <span>Favourite Locations</span>
        </div>
    )
}
