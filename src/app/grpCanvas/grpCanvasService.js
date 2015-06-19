var myModule = angular.module('grp.grpCanvasService', []);
myModule.factory('grpCanvasService', function($rootScope) {
    var grpCanvasService = {};
    var mouseDownOnInput = false;
    grpCanvasService.canvas = null;

    grpCanvasService.setCanvas = function (canvas) {
        this.canvas = canvas;
//        canvas.mouseup(function (e, a, b) {
//console.log("in canvas mouse up");
//        });
        this.broadcastCanvasUpdate();
    };

    grpCanvasService.getCanvas = function () {
        return this.canvas;
    };

    grpCanvasService.broadcastCanvasUpdate = function () {
        $rootScope.$broadcast('canvasUpdated');
    };

    grpCanvasService.mouseDownOnOutput = function() {
        mouseDownOnInput = true;
    };


    grpCanvasService.mouseUpOnInput = function() {
        console.log("should draw line now");
        mouseDownOnInput = false;
    };

    return grpCanvasService;
});