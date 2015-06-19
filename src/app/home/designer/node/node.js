/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module('grp.home.designer.node', [
  'grp.draggableObject'
])

.directive( 'node', function() {
    return {
        require: ['^draggableObject', 'node'],
        scope: false,
        controller: function() {
            this.margin = 20;
        },
        link: function(scope, element, attrs, ctrls) {
            var self = ctrls[1];
            var parent = ctrls[0];

            parent.width = 100;
            parent.height = 100;

            var rect = parent.canvas.rect(parent.getX(), parent.getY(), parent.width, parent.height, 15);
            rect.attr({fill: "red", "fill-opacity": 0.5, "stroke-width": 0});

            //var text = parent.canvas.text(parent.x, parent.y, parent.width, parent.height, "Hello");
            //text.attr({fill: 'black', 'text-anchor': 'start'});
            for(var i = 0; i < parent.shape.inputConnectors.length; i++) {
                var inputCircle = parent.canvas.circle(parent.getX(), parent.getY() + (30 * i + self.margin), 10);
                inputCircle.mousedown(mouseDown);
                inputCircle.mouseup(mouseUp);
                inputCircle.attr({fill: "green", "fill-opacity": 0.5, "stroke-width": 0});
                parent.set.push(inputCircle);
            }

            for(i = 0; i < parent.shape.outputConnectors.length; i++) {
                var outputCircle = parent.canvas.circle(parent.getX() + parent.width, parent.getY() + (30 * i + self.margin), 10);
                outputCircle.attr({fill: "green", "fill-opacity": 0.5, "stroke-width": 0});
                outputCircle.mousedown(mouseDown);
                outputCircle.mouseup(mouseUp);
                parent.set.push(outputCircle);
            }

            function mouseDown(e) {

            }

            function mouseUp(e) {

            }

            parent.set.push(rect);

            parent.makeDraggable();
        }
    };
})

;
