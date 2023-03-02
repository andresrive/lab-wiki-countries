import { Link, useParams } from "react-router-dom"

export default function CountryDetails({ countries }) {

    const { idCode } = useParams()

    const currentCountry = countries.find(country => country.alpha3Code === idCode)

    const borderFilter = countries.filter((country) =>
        currentCountry.borders.includes(country.alpha3Code)
    )

    return (
        <div className="d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
                <img src={"https://flagpedia.net/data/flags/icon/72x54/" + currentCountry.alpha2Code.toLowerCase() + ".png"} className="card-img-top" alt="flag" />
                <div className="card-body">
                    <h5 className="card-title">{currentCountry.name.common}</h5>
                    <p className="card-text">{currentCountry.capital}</p>
                    <p className="card-text">{currentCountry.area} km2</p>
                    <p className="card-text">Borders</p>
                    <ul className="list-group ">
                        {borderFilter.map((border) => <Link to={"/" + border.alpha3Code} key={border.name.common}><li className="list-group-item">{border.name.common}</li></Link>)}
                    </ul>
                </div>
            </div>
        </div>


    )
}

