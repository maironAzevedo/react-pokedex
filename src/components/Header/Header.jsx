import React from 'react'
import './Header.css'
import wheelcart from '../../assets/wheelcart.png'
import search from '../../assets/lupa.png'


function Header() {
    return (
        <header>
        <h1>PokeStore</h1>

        <div className="search-field">
            <input type="text" name="" id="search-input" />
            <img src={search} alt="lupa de pesquisa" />
        </div>

        <img src={wheelcart} alt="carrinho de compras" />
        </header>
    )
}

export default Header
