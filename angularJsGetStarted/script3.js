(function () {

    var app = angular.module("githubViewer", []);

    var MainController = function ($scope, $http, $interval) {

        var onUserComplete = function (response) {
            $scope.user = response.data;
            $http.get($scope.user.repos_url)
                .then(onRepos, onError);
        };
        
        var onRepos = function (response) {
            $scope.repos = response.data;
        };

        var onError = function (reason) {
            $scope.error = "Could not fetch the user";
        };

        var decrementCountdown = function () {
            $scope.countdown -=1;
            if ($scope.countdown <1){
                $scope.search($scope.username);
            }
        };
        
        var startCountdown = function () {
            $interval(decrementCountdown(), 1000, $scope.countdown)
        };

        $scope.search = function (username) {
            $log.info("Search for " + username);
            $http.get("https://api.github.com/users/" + username)
                .then(onUserComplete, onError);
        };

        $scope.username = "angular";
        $scope.message = "GitHub Viewer";
        $scope.repoSortOrder = "-stargazers_count";
        $scope.countdown = 8;
        startCountdown();
    };

    app.controller("MainController", MainController);

}());