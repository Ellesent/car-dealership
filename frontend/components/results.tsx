import { Car } from "./filter-section"

interface Props {
    carList: Car[]
}


export const Results = (props: Props) => {
    return (
        <section className="section is-flex is-flex-direction-column">
            <div className="container">
                <h1 className="title">Section</h1>
                <h2 className="subtitle">
                    Results Section
      </h2>
                <section className="section is-flex is-flex-direction-column">
                    {props.carList.map((car: Car) => (
                        // TODO car component
                        <a key={car._id}>{car.make}</a>
                    ))}
                </section>
            </div>
        </section>
    )
}