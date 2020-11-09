import { Car } from "./filter-section"
import styles from '../styles/modules/car-card.module.css'

interface Props {
    car: Car
}


export const CarCard = (props: Props) => {

    // Note: temporary image is used in card. In the future could be used to show an image of the car
    return (
        <div className={`${styles.card} card is-flex is-flex-direction-row m-3`}>
            <div className={`${styles.cardImage} card-image`}>
                <img className={`${styles.img}`} src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
            </div>
            <div className="card-content">
                <div className={`${styles.cardContent} content is-flex is-flex-direction-column is-flex-wrap-wrap`}>
                    <h1 id="year-make" className="has-text-primary">{props.car.year} {props.car.make}</h1>
                    <h5 id="color">Color: <strong>{props.car.color}</strong> </h5>
                    <h5 id="roof">Includes Sun Roof: <strong>{props.car.hasSunroof ? "Yes" : "No"}</strong></h5>
                    <h5 id="drive">Is Four Wheel Drive:<strong>{props.car.isFourWheelDrive ? "Yes" : "No"}</strong></h5>
                    <h5 id="mileage">Has Low Mileage: <strong>{props.car.hasLowMiles ? "Yes" : "No"}</strong></h5>
                    <h5 id="window">Window Type: <strong>{props.car.hasPowerWindows ? "Power" : "Manual"}</strong></h5>
                    <h5 id="navigation">Includes Navigation: <strong>{props.car.hasNavigation ? "Yes" : "No"}</strong></h5>
                    <h5 id="seat">Seat Type: <strong>{props.car.hasHeatedSeats ? "Heated" : "Standard"}</strong></h5>
                    <h5 id="price">Price: <strong>{'$' + props.car.price}</strong></h5>
                    <br />
                </div>
            </div>
        </div>
    )
}