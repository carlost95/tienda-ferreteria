export const ItemDetail = ({ title, image }) => {
    return (
        <div>
            <h3>{title}</h3>
            <img src={image} />
        </div>
    );
}