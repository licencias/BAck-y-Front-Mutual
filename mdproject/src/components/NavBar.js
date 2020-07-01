import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import '../estilos/navbar.css'
import '../estilos/logo.css'
import logo from '../img/Logo_mutual.svg'

const NavBar = () =>{

    return (
        <div>
            <AppBar position="static">
                <div className="fondo">
                    <Toolbar>
                        <Typography variant="title" color="primary">
                            <div className="logo-mutual">
                                <img src={logo} className="App-logo" alt="logo" />
                            </div>
                        </Typography>
                    </Toolbar>
                </div>
            </AppBar>
        </div>
    )
}

export default NavBar;