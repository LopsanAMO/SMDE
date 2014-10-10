
exports.index = function(req, res){
  res.render('index', { title: 'SMDE',
                        todo: req.session.datos });
};

exports.calum = function(req, res){
  res.render('consulfast', { title: 'Consulta',
                        todo: req.session.datos,
                        log: true,
                        otro: false });
};

exports.cprof = function(req, res){
  res.render('consulfast', { title: 'Consulta',
                        todo: req.session.datos,
                        log: false,
                        otro: false});
};

exports.cprof2 = function(req, res){
  res.render('consulfast', { title: 'Consulta',
                        todo: todos,
                        log: false,
                        otro: true});
};

exports.perfil = function(req, res){
  res.render('perfil', { title: 'SMDE',
                        todo: req.session.datos });
};

exports.teoriadb = function(req, res){
  res.render('teoriadb', { title: 'Dibujo Tecnico', 
                        todo: req.session.datos });
};

exports.teoriaGA = function(req, res){
  res.render('tana', { title: 'Geometria Analitica', 
                        todo: req.session.datos });
};

exports.actividades = function(req, res){
  res.render('canvas_geometry_hierarchy', { title: 'Actividades', 
                        todo: req.session.datos });
};

exports.ejer1 = function(req, res){
  res.render('edibujo', { title: 'Actividades', 
                        todo: req.session.datos });
};

exports.ejer2 = function(req, res){
  res.render('eanalitica', { title: 'Actividades', 
                        todo: req.session.datos });
};

exports.ejer3 = function(req, res){
  res.render('ejer3', { title: 'Actividades', 
                        todo: req.session.datos });
};

exports.ejer4 = function(req, res){
  res.render('ejer4', { title: 'Actividades', 
                        todo: req.session.datos });
};

exports.salir = function(req, res){
	req.session.datos = null;
	res.redirect('/');
  todo: req.session.datos
};

exports.extra = function(req, res){
  res.render('canvas_geometry_hierarchy', { title: 'Extra', 
                        todo: req.session.datos });
};

exports.cilindro = function(req, res){
  res.render('cilindro', { title: 'Cilindro', 
                        todo: req.session.datos });
};

exports.piramide = function(req, res){
  res.render('piramide', { title: 'Piramide', 
                        todo: req.session.datos });
};

exports.tc = function(req, res){
  res.render('name', { title: 'Piramide', 
                        todo: req.session.datos });
};

exports.cono = function(req, res){
  res.render('cono', { title: 'Cono', 
                        todo: req.session.datos });
};

exports.proba = function(req, res){
res.render('proba', { title: 'Teoria', 
                        todo: req.session.datos});
};

exports.cubo = function(req, res){
res.render('cubo', { title: 'Cubo', 
                        todo: req.session.datos});
};

exports.crea = function(req, res){
res.render('iso', { title: 'Crea', 
                        todo: req.session.datos});
};

exports.poligono = function(req, res){
res.render('poli', { title: 'Poligono', 
                        todo: req.session.datos});
};

exports.login = function(req, res){
res.render('inises', { title: 'Login',
                      todo: req.session.datos,
                      poli: req.session.poli });
};

exports.consul = function(req, res){
res.render('consul', { title: 'Consulta', 
                        todo: req.session.datos});
};

exports.registra = function(req, res){
res.render('registrarse', { title: 'Registro', 
                        todo: req.session.datos,
                        poli: req.session.poli});
};

exports.cambia = function(req, res){
res.render('cambia', { title: 'Modificacion', 
                        todo: req.session.datos});
};

exports.privilegio = function(req, res){
res.render('privilegio', { title: 'ERROR', 
                        todo: req.session.datos});
};