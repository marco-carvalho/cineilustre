import React from 'react'
import Link from 'gatsby-link'

export default () => (
  <div>
    <div className="text-center text-uppercase">
      <Link className="navbar-brand" to="/">
        <h1 className="font-weight-bold text-dark">CineIlustre</h1>
      </Link>
    </div>
    <div className="text-center text-uppercase bg-dark mb-3">
      <div className="navbar-text navbar-expand-sm navbar-dark p-0">
        <button className="navbar-toggler" data-toggle="collapse" data-target="#toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse font-weight-bold" id="toggler">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/criticas">Críticas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/materias">Matérias</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/noticias">Notícias</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/festivais">Festivais</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/equipe">Equipe</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contato">Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)
