import React, {useState, useEffect} from 'react';
import {FiLogIn, FiHome, FiInstagram, FiFacebook, FiDownload, FiUserPlus} from 'react-icons/fi';
import {Link, useHistory } from 'react-router-dom';
import api from '../../../../services/api'


import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';

import './styles.css'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing(6),
  },
}));



export default function Projetos(props){
  const classes = useStyles();
  const { width } = props;

  
  const status = localStorage.getItem('status')
    const history=useHistory();


    const [Projetos, setProjetos] = useState([]);
        const id= localStorage.getItem('id');
        
        useEffect(() => {
            api.get('/projetos').then(response => {
                                            setProjetos(response.data)
}
                           )
        },[id]);
        


  
    if (status !=="Logado"){
        return(
        
            <body>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                          <div class="container"> <button class="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar12">
                              <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbar12"> <Link class="navbar-brand d-none d-md-block" to="#">
                                <i class="fa d-inline fa-lg fa-circle"></i>
                                <b> BRAND</b>
                              </Link>
                              <ul class="navbar-nav mx-auto">
                              <li class="nav-item"> <Link class="nav-link" to="#">Download</Link> </li>
                                <li class="nav-item"> <Link to="/"> <FiHome class="fihome"/></Link> </li>
                                <li class="nav-item"> <Link class="nav-link" to="#">Contato</Link> </li>
                              </ul>
                              <ul class="navbar-nav">
                                
                              
                              <li class="nav-item"> <Link class="nav-link"  to="/login">Login <FiLogIn class="FiLogIn"/></Link> </li>
                <li class="nav-item"> <Link class="nav-link text-primary" to="/register"><FiUserPlus/>  Registrar</Link></li>

                             
                             
                              
                              
                              </ul>
                            </div>
                          </div>
                        </nav>
                        <div class="py-5" >
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h1>Listar os projetos abaixo</h1>
        </div>
      </div>
      <div class="row justify-content-center">
      


      <div className={classes.root}>
      {Projetos.map(Projetos=>(
 <div className={classes.root}>
 <Typography variant="subtitle1">Current width: {width}</Typography>
 <div className={classes.container}>
   <Hidden xsDown>
     <Paper className={classes.paper}>
     
  <div class="col-4 p-3 d-flex align-items-center">
     <img class="img-fluid " src="https://static.pingendo.com/img-placeholder-1.svg" alt="" /> 
     
     <div class="col-8 align-items-center">
    <p class="lead mb-1"> <h3> {Projetos.Titulo} - <small class="text-muted">{Projetos.Data_de_criacao}</small>  </h3> </p>
    <p class="mb-0">{Projetos.Descricao}</p>
  </div>
</div>
 
    
  


     </Paper>
   </Hidden>
  
 </div>
 </div>


))}
     
     
    </div>

        {Projetos.map(Projetos=>(

<div class="p-4 col-lg-9">
<div class="row">
  <div class="col-3 p-0 d-flex align-items-center"> <img class="img-fluid d-block" src="https://static.pingendo.com/img-placeholder-1.svg" alt="" /> </div>
  <div class="col-9">
    <p class="lead mb-1"> <h3> {Projetos.Titulo} - <small class="text-muted">{Projetos.Data_de_criacao}</small>  </h3> </p>
    <p class="mb-0">{Projetos.Descricao}</p>
  </div>
</div>
</div>

        ))}

        
        

      </div>
    </div>
  </div>
  <div class="py-3">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12 text-center"> <i class="d-block fa fa-stop-circle mb-3 text-muted fa-3x"></i>
                      <p> <Link to="https://goo.gl/maps/AUq7b9W7yYJ2" target="_blank"> Fake street, 100 <p>NYC - 20179, USA</p></Link> </p>
                      <p> <Link to="tel:+246 - 542 550 5462">+1 - 256 845 87 86</Link> </p>
                      <p class="mb-0"> <Link to="mailto:info@pingendo.com">info@pingendo.com</Link> </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex align-items-center justify-content-center my-3"> <Link to="#">
                        <FiFacebook class="d-block fa fa-facebook-official text-muted fa-lg mr-2"/>
                      </Link> <Link to="#">
                        <FiInstagram class="d-block fa fa-instagram text-muted fa-lg mx-2"/>
                      </Link> <Link to="#">
                        <FiDownload class="d-block fa fa-google-plus-official text-muted fa-lg mx-2"/>
                      </Link> </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 text-center">
                      <p class="mb-0">© 2020 - Laboratório de Informática Campus Paragominas</p>
                    </div>
                  </div>
                </div>
              </div>
              </body>
            )
    }else{
            alert("falta implementar")
            
            history.push('/')
    }




}