angular.module('nfApp', [])
	.controller('postController', function(posts) {
		var postList = this;

		postList.posts = posts;
	})

	.service('Posts', function() {
		return firebase.database().ref('/users/1' ).once('value').then(function(snapshot) {
  			return snapshot.val().username;
		});
	});