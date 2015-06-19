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
angular.module('grp.home.designer.decision', [
  'grp.draggableObject'
])

.directive( 'decision', function() {
    return {
        require: ['^draggableObject', 'decision'],
        scope: false,
        controller: function($scope) {

        },
        link: function(scope, element, attrs, ctrls) {
            var self = ctrls[1];
            var parent = ctrls[0];

            var d = "M 35,10 L 60 35 L 35 60 L 10 35 L 35 10";
            var mark = parent.canvas.path(d);
            mark.attr({
                fill: 'red'
            });

            //var rect = parent.canvas.rect(parent.x, parent.y, parent.width, parent.height);
            //rect.attr({fill: "blue", "fill-opacity": 0.5, "stroke-width": 0});
            //var text = parent.canvas.text(parent.x, parent.y, parent.width, parent.height, "Hello");
            //text.attr({fill: 'black', 'text-anchor': 'start'});

            parent.set.push(mark);

            parent.makeDraggable();
        }
    };
})

;
