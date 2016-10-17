app.directive("dropdown", ["$sce", function($sce) {
    return {
        restrict: "AE",
        scope: {
            model: "=",
            options: "="
        },
        template: '<a class="selector" ng-click="toggle()">\
				<span ng-bind-html=" trust( label ) "></span><div class="arrow-down"></div>\
	    	</a>\
	    	<ul ng-show="show">\
	        	<li ng-repeat="option in options" ng-class="{ selected : label == option.label }">\
		        	<a ng-click="select(option);" ng-bind-html="trust( option.label ) "></a>\
	        	</li>\
	        </ul>',
        controller: ["$scope", function($scope) {
            $scope.trust = function(str) {
                return $sce.trustAsHtml(str);
            }
        }],
        link: function(scope, elem) {
            elem.addClass("angular-dropdown");
            scope.label = "please select an option";
            scope.$watch("options.length", function(n, o) {
                if (n > 0) {
                    for (var a = 0; a < n; a++) {
                        if (scope.model == scope.options[a].label || scope.model == scope.options[a].value) {
                            scope.label = scope.options[a].label;
                            scope.model = scope.options[a].value;
                            break;
                        }
                    }
                }
            });

            /*
            var width = elem.find("a")[0].clientWidth;
            width = ( width < 200 ) ? 200 : width;
            elem.find("ul").css("min-width", width);
            */

            scope.show = false

            scope.toggle = function() {
                scope.show = !scope.show;
            };

            scope.select = function(obj) {
                scope.show = false;
                scope.model = obj.value;
                scope.label = obj.label;
            };
        }
    }
}]);
