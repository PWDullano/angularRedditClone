var app = angular.module("patrick", ['ngAnimate']);


app.controller("MyController", function($scope){

 $scope.posts = [];
 $scope.showForm = false;
 $scope.newComments = false;
 $scope.showComments = false;

 $scope.ToggleForm = function(){
   $scope.showForm = !$scope.showForm;
 }

 $scope.changeColor = function(post){
   if(post.votes > 0){
     return 'upVotes'
   } else if (post.votes < 0){
     return 'downVotes'
   } else {
     return 'zero'
   }
 }

 $scope.submitPost = function(){
   var post = {};
   post.comments = []
   post.votes = 0
   post.date = moment().calendar();
   post.title = $scope.title
   post.author = $scope.author
   post.image = $scope.image
   post.description = $scope.description
   $scope.posts.push(post);
   console.log($scope.posts);
   $scope.title = null;
   $scope.author = null;
   $scope.image = null;
   $scope.description = null;
   $scope.commentAuthor = null;
   $scope.textWall = null;
 }

 $scope.ToggleCommentForm = function(){
   $scope.newComments = !$scope.newComments;
 }

 $scope.ToggleComment = function(){
   $scope.showComments = !$scope.showComments;
 }

 $scope.submitComment = function(post, commentAuthor, textWall){
   var comment = {};
   comment.date = moment().calendar();
   comment.commentAuthor = commentAuthor
   comment.textWall = textWall
   post.comments.push(comment);
 }
});
