import style from './modal.module.scss'

export const Modal = ({handleModal, isModalOpen, children}) => {
    return (
        <>
        {isModalOpen && (
            <>
            <div className={style.modalBg}>
            <section className={style.modal}>
            {children}
            <button onClick={handleModal}>close</button>
            </section>
            </div>
            </>
        )}
        </>
    )
}