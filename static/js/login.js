myApp.controller("LoginController", function($scope, $http){
    $scope.pages = [
        {
            style:{
                backgroundColor:'#373B44',
                
            },
            content:"welcome1"
            
        },
        {
            style:{
                backgroundColor:'#D38312',
            },
            content:"welcome2"
        },
        {
            style:{
                backgroundColor:'#085078',
            },
            content:"welcome3"
        }
    ];

    $scope.loginInfo = {
        username:'henry',
        password:'henryhao'
    }

    $scope.login = function(){
        $http.post('/login',$scope.loginInfo).then(
            function(result){
                location.reload();
            },
            function(result){
                $scope.loginInfo.password = "";
            }
        )
    }
})