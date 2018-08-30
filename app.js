const app = angular.module('app', [])
app.directive('bgParent', function () {
    return {
        restrict: 'E',
        controller: function () {
            this.controllerName = 'bgParent\'s controller'
        }
    }
})
app.directive('bgColor', function () {
    return {
        restrict: 'A',
        require: '^bgParent',
        link: function (scope, element, attrs, ctrlOfRequiredDirective) {
            console.log('required controller: ' + ctrlOfRequiredDirective.controllerName)
            element.css('background-color', attrs.bgColor)
        }
    }
})