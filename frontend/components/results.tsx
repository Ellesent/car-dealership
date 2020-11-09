import { CarCard } from "./car-card"
import { Car } from "./filter-section"

interface Props {
    carList: Car[]
}


export const Results = (props: Props) => {
    return (
        <section className="is-flex is-flex-direction-column m-3">
            <div className="container">
                <h1 className="title">Search Results</h1>
                <section className="is-flex is-flex-direction-column">
                    {props.carList.map((car: Car) => (
                        // TODO car component
                        <>
                        <CarCard key={car._id} car={car}/>
                        <br/>
                        </>
                    ))}
                </section>
            </div>
        </section>
    )
}