/**
 * Created by Ramon on 27/07/2017.
 */
var virtualNotes = angular.module("virtualNotesApp", [
    //MODULOS DE ANGULAR
    'ui.router',

    //CONTOLADORES DE LA APP
    'registro_module',
    'login_module'
]);

virtualNotes.config(function($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.otherwise("/login");
    $stateProvider

        .state('login_state', {
            url: "/login",
            templateUrl: "html/pantallas/login.html"
        }).state('registro_state', {
            url: "/registro",
            templateUrl: "html/pantallas/registro.html"
        }).state('mapa_state', {
            url: "/mapa",
            templateUrl: "html/pantallas/mapa   .html"
        });

});

virtualNotes.controller("virtualNotes_controller", [ '$scope', '$state', '$rootScope', function($scope, $state, $rootScope) {

    $scope.iniciarPantalla = function(){

        var device_ready = function(){
            console.log("El dispositivo esta listo para ser usado.");

            //DECLARAMOS LAS VARIABLES GLOBALES
            $rootScope.webservice = "http://localhost/WebServiceListaCompra/API.php";

            //VAMOS AL LOGIN DESPUES DE QUE CARGUEN TODOS LOS PLUGINS Y LAS CONFIGURACIONES PERTINENTES
            $state.go('login_state');
        };

        document.addEventListener('deviceready', device_ready(), false);
    };

} ]);