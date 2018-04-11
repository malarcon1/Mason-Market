Router.route('/', function () {
  this.redirect('/login');
});

        
Router.route('/createaccount', function () {
  this.render('createaccount');
});

Router.route('/login', function () {
  this.render('login');
});

Router.route('/listing', function () {
  this.render('listing');
});

Router.route('/createlisting', function () {
  this.render('createlisting');
});

Router.route('/myaccount', function () {
  this.render('myaccount');
});

Router.route('/search', function () {
  this.render('search');
});

Router.route('/home', function () {
  this.render('home');
});


/* Routing.configure({
	layoutTemplate:'login'

});

Route.map(function(){
	this.route('home',{path:'/'});

}) */