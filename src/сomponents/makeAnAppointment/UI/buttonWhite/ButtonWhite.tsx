import React from "react"
import styles from "./buttonWhite.module.css"
interface ButtonWhiteProps {
    text: string
}

const ButtonWhite: React.FC<ButtonWhiteProps> = ({ text }) => {
    return (
        <div className={styles.main}>
            <p>{text}</p>
        </div>
    )
}

export default ButtonWhite
