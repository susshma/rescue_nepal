rescue.filter('searchFor', function(){

    // All filters must return a function. The first parameter
    // is the data that is to be filtered, and the second is an
    // argument that may be passed with a colon (searchFor:searchString)
    return function(arr, searchString){
        if(!searchString){
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();

        // Using the forEach helper method to loop through the array
        angular.forEach(arr, function(item){
            if(item.firstname.toLowerCase().indexOf(searchString) !== -1 ||
            item.lastname.toLowerCase().indexOf(searchString) !== -1 || 
            item.phone.toLowerCase().indexOf(searchString) !== -1 ||
            item.email.toLowerCase().indexOf(searchString) !== -1){
                result.push(item);
            }
        });
        return result;
    };
});