import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
    const {countries} = props;
    return (
        <div className="container">
            <div className="row">
                <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                    <div className="list-group">
                        {countries.map((elem) => (
                                <Link key={elem.alpha3Code} className="list-group-item list-group-item-action" to={`/${elem.alpha3Code}`}><img style={{width: '10vw'}} src={`https://flagpedia.net/data/flags/icon/72x54/${elem.alpha2Code.toLowerCase()}.png`} alt={elem.name.commoon}/> {elem.name.common}</Link>                          
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountriesList;