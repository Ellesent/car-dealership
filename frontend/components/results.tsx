import { CarCard } from "./car-card"
import { Car } from "./filter-section"

interface Props {
    carList: Car[]
}


export const Results = (props: Props) => {
    return (
        <section key="card-section-0" className="is-flex is-flex-direction-column m-3">
            <div className="container">
                <h1 className="title">Search Results</h1>
                <section key="card-section-1" className="car-card-section is-flex is-flex-direction-column">
                    {props.carList.map((car: Car) => (
                        <CarCard key={car._id} car={car}/>
                    ))}
                </section>
            </div>
        </section>
    )
}