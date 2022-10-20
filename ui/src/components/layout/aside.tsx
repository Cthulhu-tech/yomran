import { useState } from "react"

export const Aside = () => {

    const [visible, setVisible] = useState(true)

    const changeVisability = () => setVisible(!visible)

    return <aside>
        <div className="burger-container">
            <div className="burger-container__wrapper-button animation-background_medium" onClick={changeVisability}>
                <div className={visible ? "burger-container__button open" : "burger-container__button close"}/>
            </div>
        </div>
    </aside>
}