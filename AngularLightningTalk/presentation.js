angular.module('presentation',[])
.controller('modelBinding',function($scope){
	$scope.width = 150;
	$scope.increaseWidth = function()
	{
		$scope.width = $scope.width += 15;
	}
	
	$scope.decreaseWidth = function()
	{
		$scope.width = $scope.width -= 15;
	}
})
.controller('complicatedExample',function($scope){
	var center = {x:250, y:150};
	var radius = 130;
	
	function convertDegToRad(deg){
        return (deg * Math.PI)/180;
    }
    
	function Blip(x,y)
	{
		var self = this;
		self.x = x;
		self.y = y;
	}	
	$scope.blips = [];
	
	$scope.addBlip = function(){
		var degree = $scope.blips.length * 20;
		var radians = convertDegToRad(degree);
		var sine = Math.sin(radians);
		var cosine = Math.cos(radians);
		var newCords = {x: center.x + (sine* radius),
					 y: center.y - (cosine * radius)};
		$scope.blips.push(new Blip(newCords.x, newCords.y));
		
	};
	$scope.removeBlip = function(){
		$scope.blips.pop();
	};
});