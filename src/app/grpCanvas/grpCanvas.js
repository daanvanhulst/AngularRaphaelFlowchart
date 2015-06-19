angular.module( 'grp.grpCanvas', [
    'grp.grpCanvasService'
])

.directive( 'grpCanvas', function($compile, grpCanvasService) {
    return {
        scope: false,
        controller: function($scope, $element) {
            var canvas = Raphael($element[0], '100%', '100%');
            canvas.width = 1800;
            canvas.height = 700;
            $compile($element.contents())($scope);
            grpCanvasService.setCanvas(canvas);
        }
    };
})

;
