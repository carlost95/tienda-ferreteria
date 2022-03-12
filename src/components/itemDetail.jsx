export const ItemDetail = ({ title, image, description }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={image} />
        </div>
    );
}