import React, { Component } from 'react';
import logoInfectados from "./img/infectados.png";
import logoMuertos from "./img/muertos.png";
import logoRecuperados from "./img/recuperados.png";
class BottomStats extends Component {
    render() {
        return (
            <div class="col-12 col-lg-6 container align-self-center">
                <div class="btn-block row justify-content-center ">
                    <div className='d-none d-lg-block col-lg-12 col-3 p-0 m-0'>
                        <h1>Total</h1>
                    </div>

                    <div className='card-stats col-lg-12 col-3 btn btn-secondary pr-2 pl-2 pb-0 pt-0'>
                        <img src={logoInfectados} />
                        <p className="m-0 ">Infectados</p>
                        <h5>35</h5>
                    </div>
                    <div className='card-stats col-lg-12 col-3 btn btn-danger pr-2 pl-2 pb-0 pt-0'>
                        <img src={logoMuertos} />
                        <p className="m-0">Muertos</p>
                        <h5>35</h5>
                    </div>
                    <div className='card-stats col-lg-12 col-3 btn btn-success pr-2 pl-2 pb-0 pt-0'>
                        <img src={logoRecuperados} />
                        <p className="m-0">Curados</p>
                        <h5>35</h5>
                    </div>

                </div>

            </div>
        );
    }
}

export default BottomStats;