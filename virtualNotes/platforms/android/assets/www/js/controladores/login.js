/**
 * Created by Ramon on 27/07/2017.
 */
var listaCompra = angular.module("login_module", []);


listaCompra.controller("login_controller", [ '$scope','$http', '$rootScope', function($scope, $http, $rootScope) {

    $scope.data = {
        'nombre':'Ramon',
        'idUser':'001',
        'amigos':[
            {'nombre':'ramon','edad':21},
            {'nombre':'sergi','edad':23},
            {'nombre':'alex','edad':23}
        ]
    }

} ]);