import React, { Component } from 'react';
import { ReactComponent as GitHubIcon } from '../../img/vector.svg';
import './style.css'

import "./style.css"

function NavBar() {
    return (

        <nav class="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <section>
                    <a class="navbar-brand" href="/">BR Cadastros</a>
                    <a class="navbar-brand" href="/formulario"> Cadastro </a>
                    <a class="navbar-brand" href="/pessoas" >Pessoas</a>
                </section>
                <a href="https://github.com/Bruno-Andrade49" target="_blank" className="github-link">
                    <div className="link-gitHub">
                        <GitHubIcon />
                        <p> /brunoAndrade </p>
                    </div>
                </a>
            </div>
        </nav>


    )
}


export default NavBar;