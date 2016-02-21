var app = angular.module("patrick", []);


app.controller("MyController", function($scope){

 $scope.posts = [];
 $scope.showForm = false;

 $scope.ToggleForm = function(){
   $scope.showForm = !$scope.showForm;
 }

 $scope.submitPost = function(){
   var post = {};
   var timeStamp = Date.now();
   post.votes = 0
   post.date = timeStamp
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
 }
});

app.controller("commentController", function($scope){

  $scope.comments = []
  $scope.newComments = false;
  $scope.showComments = false;

  $scope.ToggleCommentForm = function(){
    $scope.newComments = !$scope.newComments;
  }

  $scope.ToggleComment = function(){
    $scope.showComments = !$scope.showComments;
  }

  $scope.submitComment = function(){
    var comment = {};
    var timeStamp = Date.now();
    comment.date = timeStamp
    comment.commentNumber = 0;
    comment.commentAuthor = $scope.commentAuthor
    comment.comment = $scope.comment
    $scope.comments.push(comment);
    console.log($scope.comments);
    $scope.commentAuthor = null;
    $scope.comment = null;
  }
})
