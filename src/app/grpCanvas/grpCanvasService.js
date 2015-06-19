var myModule = angular.module('grp.grpCanvasService', []);
myModule.factory('grpCanvasService', function($rootScope) {
    var grpCanvasService = {};

    grpCanvasService.canvas = null;

    grpCanvasService.setCanvas = function (canvas) {
        this.canvas = canvas;
        this.broadcastCanvasUpdate();
    };

    grpCanvasService.getCanvas = function () {
        return this.canvas;
    };

    grpCanvasService.broadcastCanvasUpdate = function () {
        $rootScope.$broadcast('canvasUpdated');
    };

    return grpCanvasService;
});