import React, { Component } from 'react';
import logoInfectados from "./img/infectados.png";
import logoMuertos from "./img/muertos.png";
import logoRecuperados from "./img/recuperados.png";
import CoronaCard from "./img/coronaCard.png";
import MuertosCard from './img/muertosCard.png'
import RecuperadosCard from './img/recuperadosCard.png'
class BottomStats extends Component {
    render() {
        const { total } = this.props;
        return (

            <div class="container-stats position-absolute ">
                <div class="mx-auto d-flex flex-column align-self-end">
                    <div className='d-md-none'>
                       


                        <div className='container-stats-info d-flex flex-row border justify-content-end rounded '>
                            <p className="pr-3" >{total.Confirmados}</p>
                            <img className='stats-icon border-left' src={CoronaCard} />
                        </div>
                        <div className='container-stats-info d-flex flex-row border justify-content-end rounded '>
                            <p className="pr-3 stats-txt" >{total.Fallecidos}</p>
                            <img className='stats-icon border-left' src={MuertosCard} />
                        </div>
                        <div className='container-stats-info d-flex flex-row border justify-content-end rounded '>
                            <p className="pr-3" >{total.Recuperados}</p>
                            <img className='stats-icon border-left ' src={RecuperadosCard} />


                        </div>
                    </div>


                    <div className='d-none d-md-block'>
                        <figure class="snip1578">
                            <img src={CoronaCard} alt="profile-sample6" />
                            <figcaption>
                                <h3>Infectados:</h3>
                                <div class="icons">
                                    <p className="pr-3" >{total.Confirmados}</p>
                                </div>
                            </figcaption>
                        </figure>
                        <figure class="snip1578">
                            <img src={MuertosCard} alt="profile-sample6" />
                            <figcaption>
                                <h3>Fallecidos:</h3>
                                <div class="icons">
                                    <p className="pr-3" >{total.Fallecidos}</p>
                                </div>
                            </figcaption>
                        </figure>
                        <figure class="snip1578">
                            <img src={RecuperadosCard} alt="profile-sample6" />
                            <figcaption>
                                <h3>Recuperados:</h3>
                                <div class="icons">
                                    <p className="pr-3" >{total.Recuperados}</p>
                                </div>
                            </figcaption>
                        </figure>
                    </div>

                </div>
            </div >
        );
    }
}

export default BottomStats;