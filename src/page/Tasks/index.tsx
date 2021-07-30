import React from 'react';
import './styles.css';
import Medir from '../assets/medir.png';
import Cake from '../assets/cake.png';
import Ampulheta from '../assets/ampulheta.png';

function Tasks() {

    return (
        <div className="tasks-container">
            <div className="efficiency-content">
                <img src={Medir} />
                <h2>Eficiência</h2>
            </div>

            <div className="data-content">
                <div className="percent-content">
                    <div className="percent-small-content">
                        <div className="act-content">
                            <h2>Atividades</h2>
                            <h2>23/106</h2>
                        </div>
                        <h3>50%</h3>
                    </div>
                    <div className="percent-small-proj-content">
                        <div className="proj-content">
                            <h2>Projetos</h2>
                            <h2>23/106</h2>
                        </div>
                        <h3>50%</h3>
                    </div>
                </div>
                <div className="percent-big-content">
                    <div className="total-content">
                        <h2>Total</h2>
                        <h2>23/106</h2>
                    </div>
                    <h3>50%</h3>
                </div>
                <div className="pendent-container">
                    <div className="pendent-content-1">
                        <h1>Atividade</h1>
                        <div className="pendent-data-content">
                            <div>
                                <h4>Pendentes</h4>
                            </div>
                            <div>
                                <h4>3</h4>
                            </div>
                        </div>
                        <div className="pendent-data-content">
                            <div>
                                <h4>Pendentes</h4>
                            </div>
                            <div>
                                <h4>3</h4>
                            </div>
                        </div>
                        <div className="pendent-data-content">
                            <div>
                                <h4>Pendentes</h4>
                            </div>
                            <div>
                                <h4>3</h4>
                            </div>
                        </div>
                    </div>
                    <div className="pendent-content-2">
                        <h1>Projeto</h1>
                        <div className="pendent-data-content">
                            <div>
                                <h4>Pendentes</h4>
                            </div>
                            <div>
                                <h4>3</h4>
                            </div>
                        </div>
                        <div className="pendent-data-content">
                            <div>
                                <h4>Pendentes</h4>
                            </div>
                            <div>
                                <h4>3</h4>
                            </div>
                        </div>
                        <div className="pendent-data-content">
                            <div>
                                <h4>Pendentes</h4>
                            </div>
                            <div>
                                <h4>3</h4>
                            </div>
                        </div>
                    </div>
                    <div className="pendent-content-3">
                        <h1>Total</h1>
                        <div className="pendent-data-content">
                            <div>
                                <h4>Pendentes</h4>
                            </div>
                            <div>
                                <h4>6</h4>
                            </div>
                        </div>
                        <div className="pendent-data-content">
                            <div>
                                <h4>Pendentes</h4>
                            </div>
                            <div>
                                <h4>6</h4>
                            </div>
                        </div>
                        <div className="pendent-data-content">
                            <div>
                                <h4>Pendentes</h4>
                            </div>
                            <div>
                                <h4>6</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="birth-content">
                <img src={Cake} />
                <h2>Aniversariantes</h2>
            </div>

            <div className="birth-data-content">
                <h3>Nenhum dos seus amigos comemora aniversário hoje</h3>
            </div>

            <div className="pendents-content">
                <img src={Ampulheta} />
                <h2>Pendências</h2>
            </div>

            <div className="pendents-data-content">
                <h3>Você não possui nenhuma pendência para hoje</h3>
            </div>

        </div>

    );
}

export default Tasks