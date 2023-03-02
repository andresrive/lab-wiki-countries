import { Link } from "react-router-dom"

export default function CountriesList({ countries }) {
    return (
        <ul className="list-group ">
            {countries.map(country => <Link to={'/' + country.alpha3Code} key={country.name.official}><li id="liCountries" className="list-group-item"> <img id="flags" src={"https://flagpedia.net/data/flags/icon/72x54/" + country.alpha2Code.toLowerCase() + ".png"} alt="flagImg" /> {country.alpha2Code} - {country.name.common}</li></Link>)}

        </ul>


    )
}
