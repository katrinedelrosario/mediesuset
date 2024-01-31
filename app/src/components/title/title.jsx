import style from "./title.module.scss"

export const Title = ({title}) => {
    return <h2 className={style.title}>{title}</h2>
}