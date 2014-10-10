/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var mysql = require('mysql');
var http = require('http');
var path = require('path');
var url = require('url');
var app = express();

/*
aqui ponemos las variables de las tablas y demas, no es tan necesario, solo para farolear
var databaseName= 'proba',
	administratorsTable='comentarios';
*/
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.cookieParser('sabemos todo sobre ti'));
app.use(express.session());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
//aqui van los querys
  //consulta del profesor a sus alumnos
  var consulProfe = function(req, res){
    var database = new databaseInstance();
    var boleano=true;
    var loginQuery = 'SELECT * FROM alumno;';


      database.query(loginQuery, function(error, result, row){
        if(!error) {
          if(true){
            todos = result;
            pasa= boleano;
            console.log(todos);
            res.redirect('/cprof2');
          }
          else{
            boleano=false;
            pasa=boleano;
            res.redirect('/privilegio');
          }

      }else{
            boleano=false;
            pasa=boleano;
            res.redirect('/privilegio');
          }});
    };
  //consulta del alumno
  var consulAlum = function(req, res){
    var database = new databaseInstance();
    var boleano=true;
    var imag = req.body.hol;
     /*
    //Aqui van las variables del campo de texto
      req.session.datos = datoAlum;
      //para los id hacer un parseInt
    */
    req.session.datos = datoAlum;

    var loginQuery = 'SELECT * FROM alumno where Boleta= "'+datoAlum[0].Boleta+'";';
    /*
    //esto va en el jade de consultas
    if(datoAlum[0].c1<6 && datoAlum[0].c2<6 && datoAlum[0].c3<6 && datoAlum[0].c4<6){
      datoAlum[0].nivel==0;
    }
    if(((datoAlum[0].c1>=6 && datoAlum[0].c1<=10) && (datoAlum[0].c2>=6 && datoAlum[0].c2<=10)) || ((datoAlum[0].c3>=6 && datoAlum[0].c3<=10) && (datoAlum[0].c4>=6 && datoAlum[0].c4<=10))){
      datoAlum[0].nivel==1;
    }
    if(((datoAlum[0].c1>=6 && datoAlum[0].c1<=10) && (datoAlum[0].c2>=6 && datoAlum[0].c2<=10)) && ((datoAlum[0].c3>=6 && datoAlum[0].c3<=10) && (datoAlum[0].c4>=6 && datoAlum[0].c4<=10))){
      datoAlum[0].nivel==2;
    }
    if(datoAlum[0].c1==10 && datoAlum[0].c2==10 && datoAlum[0].c3==10 && datoAlum[0].c4==10){
      datoAlum[0].nivel==3;
    }*/
      database.query(loginQuery, function(error, result, row){
        if(!error) {
          if(true){
            todos = result;
            pasa= boleano;
            res.redirect('/consul');
          }
          else{
            boleano=false;
            pasa=boleano;
            res.redirect('/privilegio');
          }

      }else{
            boleano=false;
            pasa=boleano;
            res.redirect('/privilegio');
          }});
    };
  //consulta del profe
    var consulProfeP = function(req, res){
    var database = new databaseInstance();
     /*
    Aqui van las variables del campo de texto
      id = req.body.ID;
      req.session.datos = datoDato;
    */
    var boleano=true;

    var loginQuery = 'SELECT * FROM profesor where ID_prof= "'+datoDato[0].IdProfesor+'";';


      database.query(loginQuery, function(error, result, row){
        if(!error) {
          if(true){
            todos = result;
            pasa= boleano;
            res.redirect('/consul');
          }
          else{
            boleano=false;
            pasa=boleano;
            res.redirect('/privilegio');
          }

      }else{
            boleano=false;
            pasa=boleano;
            res.redirect('/privilegio');
          }});
    };
  //login:TODOS
  var loginUS = function(req, res){
    var database = new databaseInstance();
    /*
    Aqui van las variables del campo de texto
      id = req.body.ID;
    */
    var id = req.body.id;
    var contra = req.body.contri;
   var loginQuery;

    if( isNaN(id) ){
      loginQuery = 'SELECT * FROM profesor where ID_prof= "'+id+'" and Contra= "'+contra+'";';
      database.query(loginQuery, function(error, result, row){
        if(!error) {
          if(result.length > 0){
            req.session.datos = result;
            entra = true;
            req.session.poli = 0;
            res.redirect('/index');
          }
          else{
            entra = false;
            req.session.poli = 1;
            res.redirect('/login');//pagina de error de login
          }

      }else{
            entra = false;
            req.session.poli = 1;
            res.redirect('/login');//pagina de error de login
          }});
    }else{
      loginQuery = 'SELECT * FROM alumno where Boleta= "'+id+'" and Contra_alum= "'+contra+'";';
      database.query(loginQuery, function(error, result, row){
        if(!error) {
          if(result.length > 0){
            req.session.datos = result;
            req.session.poli = 0;
            res.redirect('/');
          }
          else{
            req.session.poli = 1;
            res.redirect('/login');//pagina de error de login
          }

      }else{
            req.session.poli = 1;
            res.redirect('/login');// pagina de error de login
          }});

    }
    };
  //REGISTROP
  var inserta = function(req, res){
    var database = new databaseInstance();
      /*
    Aqui van las variables del campo de texto
      id = req.body.ID;
    */
    var id = req.body.id;
    var contra = req.body.contri;
    var nom = req.body.nom;
    var apt = req.body.apt;
    var apm = req.body.apm;
    var grupo = req.body.grupo;
    var email = req.body.email;
    var boleano=true;

    var loginQuery = 'insert into alumno values(' + "'" + id + "'" + ',' + "'" + nom + "'" + ',' + "'" + apt + "'" +  ',' + "'" + apm + "'" + ',' + "'" + contra +
    "'" + ',' + "0" + ',' + "0" + ',' + "0" + ',' + "0" + ',' + "'" + grupo + "'" + ',' + "0" + ',' + "'" + email + "'" + ');';

      database.query(loginQuery, function(error, result, row){
      if(!error) {
        if(true){
          loginQuery2 = 'SELECT * FROM alumno where Boleta= "'+id+'" and Contra_alum= "'+contra+'";';
            database.query(loginQuery2, function(error2, result2, row2){
              if(!error2) {
                if(result2.length > 0){
                  req.session.datos = result2;
                  dato=req.session.datos;
                  req.session.poli = 0;
                  pasa= boleano;
                  res.redirect('/');
                }
                else{
                  boleano=false;
                  pasa=boleano;
                  req.session.poli = 1;
                  res.redirect('/registrarse');//pagina de error de registro
                }

            }else{
                  console.log(error2);
                  boleano=false;
                  pasa=boleano;
                  req.session.poli = 1;
                  res.redirect('/registrarse');//pagina de error de registro
                }});
        }
        else{
          req.session.poli = 1;
          res.redirect('/registrarse');
        }

    }else{
        console.log(error)
        req.session.poli = 1;
        res.redirect('/registrarse');
        }});
  };


  //modificacion del alumno
  var cambia = function(req, res){
    var database = new databaseInstance();
      /*
    Aqui van las variables del campo de texto
      id = req.body.ID;
      req.session.datos = datoAlum;
    */
    var contra = req.body.contra;
    var nombre = req.body.nomusi;
    var apt = req.body.Appat;
    var apm = req.body.Amat;
    var email = req.body.correito;
    var boleano=true;
    datoAlum = req.session.datos;

    if( contra == undefined ){
      contra = datoAlum[0].Contra_alum;
    }
    if( nombre == undefined ){ nombre = datoAlum[0].Nombre; }
    if( apt == undefined ){ apt = datoAlum[0].ApPat_alum; }
    if( apm == undefined ){ apm = datoAlum[0].ApMat_alum; }
    if( email == undefined ){ email = datoAlum[0].Email; }

    var loginQuery = 'update alumno set Nombre= "'+nombre+'", Email= "'+email+'", ApPat_alum= "'+apt+'", ApMat_alum= "'+apm+'", Contra_alum= "'+contra+'" where Boleta= "'+datoAlum[0].Boleta+'";';

      database.query(loginQuery, function(error, result, row){
        if(!error) {
          if(result.affectedRows > 0){
            loginQuery2 = 'SELECT * FROM alumno where Boleta= "'+datoAlum[0].Boleta+'";';
              database.query(loginQuery2, function(error2, result2, row2){
                if(!error2) {
                  if(result2.length > 0){
                    req.session.datos = result2;
                    pasa= boleano;
                    res.redirect('/');
                  }else{
                    boleano=false;
                    console.log(error2);
                    pasa=boleano;
                    res.redirect('/privilegio');//error de modificar
                  }

              }else{
                    boleano=false;
                    pasa=boleano;
                    console.log(error2+'aqui');
                    res.redirect('/privilegio');//error de modificar
                  }});
          }
          else{
            boleano=false;
            pasa=boleano;
            res.redirect('/privilegio');//error de modificar
          }

      }else{
            boleano=false;
            pasa=boleano;
            res.redirect('/privilegio');//error de modificar
          }});
    };
  //todo lo de calif, modificar cuando se tenga la tabla
  //modificar calificacion del alumno
  var calif1 = function(req, res){
    var database = new databaseInstance();
      /*
    Aqui van las variables del campo de texto
      c1 = req.body.calif1;//ver como sacar la variable de los ejercicios
      req.session.datos = datoAlum;
    */
    c1 = req.body.calif;//ver como sacar la variable de los ejercicios
    datoAlum = req.session.datos;
    var boleano=true;

    var loginQuery = 'update alumno set Calif1= "'+c1+'" where Boleta= "'+datoAlum[0].Boleta+'";';


      database.query(loginQuery, function(error, result, row){
        if(!error) {
          if(result.affectedRows > 0){
            loginQuery2 = 'SELECT * FROM alumno where Boleta= "'+datoAlum[0].Boleta+'";';
              database.query(loginQuery2, function(error2, result2, row2){
                if(!error2) {
                  if(result2.length > 0){
                    req.session.datos = result2;
                    pasa= boleano;
                    res.redirect('/calum');
                  }
                  else{
                    boleano=false;
                    pasa=boleano;
                    res.redirect('/privilegio');//error ingresando la calificacion
                  }

              }else{
                    boleano=false;
                    pasa=boleano;
                    res.redirect('/privilegio');// error ingresando calificacion
                  }});
          }
          else{
            boleano=false;
            pasa=boleano;
            res.redirect('/privilegio');// error ingresando calificacion
          }

      }else{
        console.log(error);
            boleano=false;
            pasa=boleano;
            res.redirect('/privilegio');
          }});
    };
  //modificar calificacion2 del alumno
  var calif2 = function(req, res){
    var database = new databaseInstance();
      /*
    Aqui van las variables del campo de texto
      c2 = req.body.calif2;//ver como sacar la variable de los ejercicios
      req.session.datos = datoAlum;
    */
    c2 = req.body.calif;//ver como sacar la variable de los ejercicios
    datoAlum = req.session.datos;
    var boleano=true;

    var loginQuery = 'update alumno set Calif2= "'+c2+'" where Boleta= "'+datoAlum[0].Boleta+'";';


      database.query(loginQuery, function(error, result, row){
        if(!error) {
          if(true){
            loginQuery2 = 'SELECT * FROM alumno where Boleta= "'+datoAlum[0].Boleta+'";';
              database.query(loginQuery2, function(error2, result2, row2){
                if(!error2) {
                  if(result2.length > 0){
                    req.session.datos = result2;
                    pasa= boleano;
                    res.redirect('/calum');
                  }
                  else{
                    boleano=false;
                    pasa=boleano;
                    console.log(error2);
                    res.redirect('/privilegio');
                  }

              }else{
                    boleano=false;
                    pasa=boleano;
                    console.log(error2);
                    res.redirect('/privilegio');
                  }});
          }
          else{
            boleano=false;
            pasa=boleano;
            console.log(error);
            res.redirect('/privilegio');
          }

      }else{
        console.log(error);
            boleano=false;
            pasa=boleano;
            console.log(error);
            res.redirect('/privilegio');
          }});
    };
  //modificar calificacion3 del alumno
  var calif3 = function(req, res){
    var database = new databaseInstance();
      /*
    Aqui van las variables del campo de texto
      c1 = req.body.calif1;//ver como sacar la variable de los ejercicios
      req.session.datos = datoAlum;
    */
    var boleano=true;

    var loginQuery = 'update alumno set Calif3= "'+c3+'" where Boleta= "'+datoAlum[0].Boleta+'";';
database.query(loginQuery, function(error, result, row){
        if(!error) {
          if(true){
            loginQuery2 = 'SELECT * FROM alumno where Boleta= "'+datoAlum[0].Boleta+'";';
              database.query(loginQuery2, function(error2, result2, row2){
                if(!error2) {
                  if(result2.length > 0){
                    req.session.datos = result2;
                    pasa= boleano;
                    res.redirect('/consul');
                  }
                  else{
                    boleano=false;
                    pasa=boleano;
                    res.redirect('/privilegio');
                  }

              }else{
                    boleano=false;
                    pasa=boleano;
                    res.redirect('/privilegio');
                  }});
          }
          else{
            boleano=false;
            pasa=boleano;
            res.redirect('/privilegio');
          }

      }else{
            boleano=false;
            pasa=boleano;
            res.redirect('/privilegio');
          }});
    };
  //modificar calificacion4 del alumno
  var calif4 = function(req, res){
    var database = new databaseInstance();
      /*
    Aqui van las variables del campo de texto
      c1 = req.body.calif1;//ver como sacar la variable de los ejercicios
      req.session.datos = datoAlum;
    */
    var boleano=true;

    var loginQuery = 'update alumno set Calif4= "'+c4+'" where Boleta= "'+datoAlum[0].Boleta+'";';
database.query(loginQuery, function(error, result, row){
        if(!error) {
          if(true){
            loginQuery2 = 'SELECT * FROM alumno where Boleta= "'+datoAlum[0].Boleta+'";';
              database.query(loginQuery2, function(error2, result2, row2){
                if(!error2) {
                  if(result2.length > 0){
                    req.session.datos = result2;
                    pasa= boleano;
                    res.redirect('/consul');
                  }
                  else{
                    boleano=false;
                    pasa=boleano;
                    res.redirect('/privilegio');
                  }

              }else{
                    boleano=false;
                    pasa=boleano;
                    res.redirect('/privilegio');
                  }});
          }
          else{
            boleano=false;
            pasa=boleano;
            res.redirect('/privilegio');
          }

      }else{
            boleano=false;
            pasa=boleano;
            res.redirect('/privilegio');
          }});
    };
  //borrar al alumno
  var borra = function(req, res){
    var database = new databaseInstance();
      /*
    Aqui van las variables del campo de texto
      id = req.body.ID;
      req.session.datos = datoAlum;
    */
    var boleano=true;

    var loginQuery = 'DELETE FROM alumno WHERE Boleta= "'+datoAlum[0].Boleta+'";';


      database.query(loginQuery, function(error, result, row){
        if(!error) {
          if(true){//si se va a agregar una validacion aqui
            res.redirect('/salir');
          }
          else{
            res.redirect('/privilegio');
          }

      }else{
            res.redirect('/privilegio');
          }});
    };
  //salir de sesion esta en routes
  //consultas rapidas
  var calum = function(req, res){
    var database = new databaseInstance();
    var boleano=true;
     /*
    //Aqui van las variables del campo de texto
      req.session.datos = datoAlum;
      //para los id hacer un parseInt
    */
    datoAlum = req.session.datos;

    var loginQuery = 'SELECT * FROM alumno where Boleta= "'+datoAlum[0].Boleta+'";';
    /*
    //esto va en el jade de consultas
    if(datoAlum[0].c1<6 && datoAlum[0].c2<6 && datoAlum[0].c3<6 && datoAlum[0].c4<6){
      datoAlum[0].nivel==0;
    }
    if(((datoAlum[0].c1>=6 && datoAlum[0].c1<=10) && (datoAlum[0].c2>=6 && datoAlum[0].c2<=10)) || ((datoAlum[0].c3>=6 && datoAlum[0].c3<=10) && (datoAlum[0].c4>=6 && datoAlum[0].c4<=10))){
      datoAlum[0].nivel==1;
    }
    if(((datoAlum[0].c1>=6 && datoAlum[0].c1<=10) && (datoAlum[0].c2>=6 && datoAlum[0].c2<=10)) && ((datoAlum[0].c3>=6 && datoAlum[0].c3<=10) && (datoAlum[0].c4>=6 && datoAlum[0].c4<=10))){
      datoAlum[0].nivel==2;
    }
    if(datoAlum[0].c1==10 && datoAlum[0].c2==10 && datoAlum[0].c3==10 && datoAlum[0].c4==10){
      datoAlum[0].nivel==3;
    }*/
      database.query(loginQuery, function(error, result, row){
        if(!error) {
          if(result.length > 0){
            req.session.datos = result;
            pasa= boleano;
            res.redirect('/calum');
          }
          else{
            boleano=false;
            pasa=boleano;
            res.redirect('/privilegio');
          }

      }else{
            boleano=false;
            pasa=boleano;
            res.redirect('/privilegio');
          }});
    };
    var cprof = function(req, res){
    var database = new databaseInstance();
    var boleano=true;
     /*
    //Aqui van las variables del campo de texto
      req.session.datos = datoAlum;
      //para los id hacer un parseInt
    */
    req.session.datos = datoAlum;

    var loginQuery = 'SELECT * FROM profesor where ID_prof= "'+datoAlum[0].ID_prof+'";';
    var loginQuery2 = 'SELECT * FROM alumno;';
    /*
    //esto va en el jade de consultas
    if(datoAlum[0].c1<6 && datoAlum[0].c2<6 && datoAlum[0].c3<6 && datoAlum[0].c4<6){
      datoAlum[0].nivel==0;
    }
    if(((datoAlum[0].c1>=6 && datoAlum[0].c1<=10) && (datoAlum[0].c2>=6 && datoAlum[0].c2<=10)) || ((datoAlum[0].c3>=6 && datoAlum[0].c3<=10) && (datoAlum[0].c4>=6 && datoAlum[0].c4<=10))){
      datoAlum[0].nivel==1;
    }
    if(((datoAlum[0].c1>=6 && datoAlum[0].c1<=10) && (datoAlum[0].c2>=6 && datoAlum[0].c2<=10)) && ((datoAlum[0].c3>=6 && datoAlum[0].c3<=10) && (datoAlum[0].c4>=6 && datoAlum[0].c4<=10))){
      datoAlum[0].nivel==2;
    }
    if(datoAlum[0].c1==10 && datoAlum[0].c2==10 && datoAlum[0].c3==10 && datoAlum[0].c4==10){
      datoAlum[0].nivel==3;
    }*/
      database.query(loginQuery, function(error, result, row){
        if(!error) {
          if(result.length > 0){
            database.query(loginQuery2, function(error2, result2, row2){
              if(!error2) {
                if(result.length > 0){
                  req.session.otro = result2;
                  pasa= boleano;
                  res.redirect('/cprof');
                }
                else{
                  boleano=false;
                  pasa=boleano;
                  res.redirect('/privilegio');
                }

            }else{
                  boleano=false;
                  pasa=boleano;
                  res.redirect('/privilegio');
                }});
          }
          else{
            boleano=false;
            pasa=boleano;
            res.redirect('/privilegio');
          }

      }else{
            boleano=false;
            pasa=boleano;
            res.redirect('/privilegio');
          }});
    };
//acaban los query
//aqui nos conectamos con myql
  function databaseInstance(){
  var connection = mysql.createConnection({
    host     : 'localhost',
    password : 'liberteoulamort',
    user     : 'root',
    database : 'batiz'
  });
  return connection;
}
//verificar que haya iniciado sesion
function loginP(req, res, next){
  datoAlum = req.session.datos;
  if(datoAlum[0].ID_prof){
    next();
  }else{
    res.redirect('/privilegio');
  }
}
function loginA(req, res, next){
  datoAlum = req.session.datos;
  if(datoAlum[0].Boleta){
    next();
  }else{
    res.redirect('/privilegio');
  }
}
function login(req, res, next){
  if(req.session.datos){
    next();
  }else{
    res.redirect('/privilegio');
  }
}
function loginN(req, res, next){
  if(!req.session.datos){
    next();
  }else{
    res.redirect('/privilegio');
  }
}

//otras rutas
app.get('/', routes.index);
app.get('/index', routes.index);
app.get('/privilegio', routes.privilegio);
app.get('/teoriadb', routes.teoriadb);
app.get('/teoriaGA', routes.teoriaGA);
app.get('/actividades', login, routes.actividades);
app.get('/perfil', login, routes.perfil);
app.get('/ejer1', login, routes.ejer1);
app.get('/ejer2', login, routes.ejer2);
app.get('/ejer3', login, routes.ejer3);
app.get('/ejer4', login, routes.ejer4);
app.get('/calum', loginA, routes.calum);
app.get('/cprof', loginP, routes.cprof);
app.get('/cprof2', loginP, routes.cprof2);


//material didactico DT
app.get('/extra', login, routes.extra);
app.get('/cilindro', login, routes.cilindro);
app.get('/piramide', login, routes.piramide);
app.get('/name', login, routes.tc);
app.get('/cono', login, routes.cono);
app.get('/cubo', login, routes.cubo);
app.get('/iso', login, routes.crea);
app.get('/poli', login, routes.poligono);

//metodos get de DB
app.get('/login', loginN,routes.login);
app.get('/consul', login, routes.consul);
app.get('/registrarse', loginN, routes.registra);
app.get('/cambia', loginA, routes.cambia);
app.get('/salir', login, routes.salir);

//metodos post de DB
app.post('/consulProfe', loginP, consulProfe);
app.post('/consulAlum', loginA, consulAlum);
app.post('/consulProfeP', loginP, consulProfeP);
app.post('/loginUS', loginN, loginUS);
app.post('/inserta', loginN, inserta);
app.post('/cambia', loginA, cambia);
app.post('/calif1', loginA, calif1);
app.post('/calif2', loginA, calif2);
app.post('/calif3', loginA, calif3);
app.post('/calif4', loginA, calif4);
app.post('/borra', loginA, borra);
app.post('/calum', loginA, calum);
app.post('/cprof', loginA, cprof);
app.post('/cprof2', loginP, consulProfe);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
