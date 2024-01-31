import style from './newsCard.module.scss'

export const NewsCard = ({ imgSrc, title, text}) => {
    return (
        <div className={style.newsCard}>
            <img src={imgSrc}/>
            <section>
                <h3>{title}</h3>
                <p>{text}</p>
                <button onClick={() => handleModal()}>Læs mere</button>
            </section>
        </div>
    )
}