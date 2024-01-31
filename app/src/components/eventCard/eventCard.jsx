import style from './eventCard.module.scss'


export const EventCard = ({image, title, date}) => {

    return (
        <figure className={style.eventCard}>
            <img src={image} />
            <figcaption>
                <p>{title}</p>
                <p>{date}</p>
            </figcaption>
        </figure>
    )
}