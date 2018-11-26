angular.module('userApp').controller("LoginController",['$scope', '$http', function($scope, $http){
    $scope.showCarouselFooter = true;
    $scope.test = "hello world";
    ons.ready(function(){
        var carousel,selectedSpan;
        carousel = document.getElementById('carousel');
        selectedSpan = document.getElementsByClassName('carousel-footer')[0].firstElementChild;
        selectedSpan.style.backgroundColor = "black";

        $scope.login = function(){
            $http.defaults.xsrfCookieName = 'csrfmiddlewaretoken';
            $http.defaults.xsrfHeaderName = 'X-CSRFToken';
            $http.post("/login",$scope.loginInfo).then(
                function(result){
                    location.reload();
                },
                function(result){
                    ons.notification.alert(result.data);
                    $scope.loginInfo.password = "";
                }
            )
        }    

        $scope.switch = function(index){
            let target = document.getElementsByClassName('carousel-footer')[0].children[index];
            selectedSpan.style.backgroundColor = null;
            carousel.setActiveIndex(index);
            selectedSpan = target;
            selectedSpan.style.backgroundColor = "black";
        }

    
        $scope.loginInfo = {
            username:"henry",
            password:"henryhao"
        }


        
        carousel.addEventListener("postchange",function(event){
            if(event.activeIndex != document.getElementsByClassName('carousel-footer')[0].childElementCount){
                $scope.switch(event.activeIndex);
                $scope.showCarouselFooter = true;
            } else {
                $scope.showCarouselFooter = false;
            }
            $scope.$digest();
                
        })
    })
}])