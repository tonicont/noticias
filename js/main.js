angular.module('nfApp', [])
	.service('Posts', function() {
		return firebase.database().ref('/users/1' ).once('value').then(function(snapshot) {
  			return snapshot.val().username;
		});
	})
	
	.controller('postController', function(posts) {
		var postList = this;

		postList.posts = posts;
	})

	