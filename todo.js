function list($scope) {
  $scope.items = [{body: 'make', done: false, score: 2}, { body: 'your', done: true, score: 5 }, {body: 'list', done: false, score: 4 }];
  $scope.title = 'My Todo List';
  $scope.scores = [1,2,3,4,5,6];

  $scope.add = function() {
     if($scope.text != '') $scope.items.push({body: $scope.text, done: false});
     $scope.text = '';
  };

  $scope.remove = function() {
     items = $scope.items;
     new_list = [];
     for(var i = 0; i < items.length; i++) {
        var item = items[i];
        if(!item.done) { new_list.push(item)}
     }
     $scope.items = new_list;
   }; 

}