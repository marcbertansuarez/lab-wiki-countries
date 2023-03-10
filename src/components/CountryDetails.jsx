import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryDetails = ({countries}) => {

    const { id } = useParams();
    const country = countries.find(elem => elem.alpha3Code === id);
    console.log(country)
    
    return (
        <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
                <thead><img style={{width: '10vw'}} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.commoon}/></thead>
                <tr>
                    <td>Capital</td>
                    <td>{country.capital}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{country.area}m
                        <sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            {country.borders.map(borders => {
                                return (
                                    <li><Link to={`/${borders}`}>{borders}</Link></li>
                                )
                            })}
                        </ul>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default CountryDetails;