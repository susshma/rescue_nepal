rescue.controller('MissingCtrl', function($scope) {
  $scope.missingList = [
    { name: 'Reggae', id: 1, description: 'Tall dark brown', gender: '', country: '', details: '', img: 'test.jpg' },
    { name: 'Reggae', id: 2, description: 'Tall dark brown', gender: '', country: '', details: '', img: 'test.jpg' },
    { name: 'Reggae', id: 3, description: 'Tall dark brown', gender: '', country: '', details: '', img: 'test.jpg' },
    { name: 'Reggae', id: 4, description: 'Tall dark brown', gender: '', country: '', details: '', img: 'test.jpg' },
    { name: 'Reggae', id: 5, description: 'Tall dark brown', gender: '', country: '', details: '', img: 'test.jpg' },
    { name: 'Reggae', id: 6, description: 'Tall dark brown', gender: '', country: '', details: '', img: 'test.jpg' },
  ];
})

.controller('MissingDetailstCtrl', function($scope, $stateParams) {
    $scope.comments = [
        { name: "Test User", comment: "I've seen him some where last", phone: "9841092192", email: "test@gmail.com"},
        { name: "Test User", comment: "I've seen him some where last", phone: "9841092192", email: "test@gmail.com"},
        { name: "Test User", comment: "I've seen him some where last", phone: "9841092192", email: "test@gmail.com"}
    ]
})

.controller('CreateMissingCtrl', function($scope, $stateParams) {
});