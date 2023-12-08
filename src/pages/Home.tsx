import React from 'react';
import {useNavigate} from "react-router-dom";
import {getRoutePathByName} from "../utils/routes";

function Home() {
    const navigate = useNavigate()


    function goToRegister() {
        navigate(getRoutePathByName("app.register"))
    }
    function goToLogin() {
        navigate(getRoutePathByName("app.login"))
    }

    return (
        <div className="App">
            <section className="pb-12 bg-gradient-to-b from-[#E8E3F5] via-[#EDEAFB] to-[#F7FAFC]">
                <div className="items-center pt-12 px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
                    <div className="justify-center w-full text-center lg:p-10 max-auto">
                        <div className="justify-center w-full mx-auto">

                            <p className="sm:mt-8 mt-3 sm:px-44 text-[#10172A] text-4xl sm:text-6xl font-semibold tracking-tighter">
                                Bienvenue dans le jeu de mémoire du <span className="underline leading-8 underline-offset-8	decoration-8 decoration-primary-600"> climat</span>
                            </p>

                            <p className="sm:mt-8 mt-2.5 text-[#10172A]">
                                Vous voulez jouer a notre jeu ?<br />
                                Nous vous invitons alors à vous enregistrer ou à vous connecter !<br /><br />

                                Plongez dans l'univers captivant de notre jeu de mémoire innovant qui combine le plaisir du jeu avec une mission éducative cruciale. Explorez les merveilles de notre planète tout en mettant à l'épreuve vos capacités de mémorisation et en apprenant des faits essentiels sur le climat.
                                <br /><br />
                                Notre jeu offre une expérience ludique et éducative, parfaitement adaptée à tous les âges. Que vous soyez un joueur chevronné ou un novice passionné par les enjeux climatiques, ce jeu est conçu pour divertir tout en sensibilisant à l'urgence de prendre soin de notre environnement.

                            </p>
                        </div>
                    </div>

                </div>



                <div className="text-center space-x-4 mt-6">
                    <button className="bg-primary-600 translate-y-1 text-[#fff] sm:text-lg text-xs font-bold py-2.5 px-6  rounded-full inline-flex items-center" onClick={goToLogin}>
                        <span> Se connecter </span>
                    </button>

                    <button className="bg-primary-600 translate-y-1 text-[#fff] sm:text-lg text-xs font-bold py-2.5 px-6  rounded-full inline-flex items-center" onClick={goToRegister}>
                        <span> S'enregistrer </span>
                    </button>
                </div>

            </section>
        </div>
    );
}

export default Home;
