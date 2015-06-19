//Raphael.st.draggable = function() {
//    var me = this,
//        lx = 0,
//        ly = 0,
//        ox = 0,
//        oy = 0,
//        moveFnc = function(dx, dy) {
//            lx = dx + ox;
//            ly = dy + oy;
//
//            if (lx < me.min_x ) {
//                lx = me.min_x;
//            }
//            else if ( lx > me.max_x) {
//                lx = me.max_x;
//            }
//
//            if ( ly < me.min_y ) {
//                ly = me.min_y;
//            }
//            else if ( ly > me.max_y) {
//                ly = me.max_y;
//            }
//
//            me.transform('t' + lx + ',' + ly);
//        },
//        startFnc = function() {},
//        endFnc = function() {
//            ox = lx;
//            oy = ly;
//        };
//
//    this.drag(moveFnc, startFnc, endFnc);
//};

angular.module( 'grp.draggableObject', [
    'grp.grpCanvasService'
])

.directive( 'draggableObject', function($document, $compile, grpCanvasService) {
    return {
        transclude: true,
        scope: {
            shapeModel: '='
        },
        controller: function ($scope, $element, $attrs) {
            var self = this;
            this.width = 50;
            this.height = 50;
            this.shape = $scope.shapeModel;
            this.ox = 0;
            this.oy = 0;
            if($scope.shapeModel.x < 0) {
                $scope.shapeModel.x = 0;
            }
            if($scope.shapeModel.y < 0) {
                $scope.shapeModel.y = 0;
            }
            //this.set.max_x = this.canvas.width - this.width;
            //this.set.min_x = 0;
            //this.set.max_y =  this.canvas.height - this.height;
            //this.set.min_y = 0;

            self.moveFnc = function(dx, dy) {
                $scope.shapeModel.x = dx + self.ox;
                $scope.shapeModel.y = dy + self.oy;
                $scope.$apply();
                self.set.transform('t' + $scope.shapeModel.x + ',' + $scope.shapeModel.y);
            };
            self.startFnc = function() {};
            self.endFnc = function() {
                self.ox = $scope.shapeModel.x;
                self.oy = $scope.shapeModel.y;
            };

            this.canvas = grpCanvasService.getCanvas();
            this.set = this.canvas.set();

            this.makeDraggable = function() {
                self.set.drag(self.moveFnc, self.startFnc, self.endFnc);
            };
            this.getX = function() {
                return $scope.shapeModel.x;
            };
            this.getY = function() {
                return $scope.shapeModel.y;
            };

            $compile($element.contents())($scope);
        }
    };
})

;
