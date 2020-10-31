import React from 'react'
import './Layout.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import LogoBanner from '../LogoBanner/LogoBanner'

const Layout = (props) => (
    <div className='layout'>
        <Header />
        <div className="layout-children">
        <LogoBanner title={props.title.toUpperCase()}/>
            {props.children}
        </div>
        <Footer />
    </div>
)

export default Layout