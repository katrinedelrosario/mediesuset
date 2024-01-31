import style from "./footer.module.scss"
import Logo from '../../assets/Hancock logo.png'

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <section>
                <h4>Tilmeld nyhedsbrev</h4>
                <p>Få de seneste nyheder sendt til din indbakke</p>
                <form>
                    <input type="text" />
                    <button>Tilmeld</button>
                </form>
                <img src={Logo} alt="Hancock logo" />
            </section>
        </footer>
    )
}