import { Car } from "./filter-section"
import styles from '../styles/modules/car-card.module.css'

interface Props {
    car: Car
}


export const CarCard = (props: Props) => {

    return (
        <div className={`${styles.card} card is-flex is-flex-direction-row`}>
            <div className={`${styles.cardImage} card-image`}>
                <img className={`${styles.img}`} src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
            </div>
            <div className="card-content">
                <div className="content">
                    {props.car.year} {props.car.make}
                    <br />
                </div>
            </div>
        </div>
    )
}