rescue.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('MissingCtrl', function($scope) {
  $scope.playlists = [
    { name: 'Reggae', id: 1, description: 'Tall dark brown', gender: '', country: '', details: '', img: 'test.jpg' },
    { name: 'Reggae', id: 2, description: 'Tall dark brown', gender: '', country: '', details: '', img: 'test.jpg' },
    { name: 'Reggae', id: 3, description: 'Tall dark brown', gender: '', country: '', details: '', img: 'test.jpg' },
    { name: 'Reggae', id: 4, description: 'Tall dark brown', gender: '', country: '', details: '', img: 'test.jpg' },
    { name: 'Reggae', id: 5, description: 'Tall dark brown', gender: '', country: '', details: '', img: 'test.jpg' },
    { name: 'Reggae', id: 6, description: 'Tall dark brown', gender: '', country: '', details: '', img: 'test.jpg' },
  ];
})

.controller('MissingDetailstCtrl', function($scope, $stateParams) {
});
