var app = angular.module("patrick", []);
app.controller("MyController", function($scope){

 $scope.posts = [];
 $scope.showForm = false;

 $scope.submitPost = function(){
   var post = {};
   post.title = $scope.title;
   post.author = $scope.author;
   post.image = $scope.image;
   post.description = $scope.description;
   $scope.posts.push(post);
 }
});
