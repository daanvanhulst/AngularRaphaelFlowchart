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
angular.module( 'grp.home.designer', [
    'ui.router',
    'grp.grpCanvas',
    'grp.draggableObject',
    'grp.home.designer.node',
    'grp.home.designer.decision'
])

.directive( 'designer', function() {
    return {
        scope: true,
        templateUrl: 'home/designer/designer.tpl.html',
        //controller: function () {
        //  this.sayHello = function () {
        //    console.log('outer: hello');
        //  };
        //},
        link: function(scope) {

            //scope.$watch('shapes[0]', function(){
            //    console.log(scope.shapes[0]);
            //}, true);

            scope.shapes = [
                {
                    id: 0,
                    x: 0,
                    y: 0,
                    backgroundColor: 'green',
                    borderColor: 'blue',
                    borderWidth: '10',
                    inputConnectors: [
                        {
                            name: "A"
                        },
                        {
                            name: "B"
                        },
                        {
                            name: "C"
                        }
                    ],
                    outputConnectors: [
                        {
                            name: "A"
                        },
                        {
                            name: "B"
                        },
                        {
                            name: "C"
                        }
                    ]
                },
                {
                    id: 1,
                    x: 0,
                    y: 0,
                    backgroundColor: 'green',
                    borderColor: 'blue',
                    borderWidth: '10',
                    inputConnectors: [
                        {
                            name: "A"
                        },
                        {
                            name: "B"
                        },
                        {
                            name: "C"
                        }
                    ],
                    outputConnectors: [
                        {
                            name: "A"
                        },
                        {
                            name: "B"
                        },
                        {
                            name: "C"
                        }
                        ]
                },
                {
                    id: 2,
                    x: 0,
                    y: 0,
                    backgroundColor: 'green',
                    borderColor: 'blue',
                    borderWidth: '10',
                    inputConnectors: [
                        {
                            name: "A"
                        },
                        {
                            name: "B"
                        },
                        {
                            name: "C"
                        }
                    ],
                    outputConnectors: [
                        {
                            name: "A"
                        },
                        {
                            name: "B"
                        },
                        {
                            name: "C"
                        }
                        ]
                },
                {
                    id: 3,
                    x: 0,
                    y: 0,
                    backgroundColor: 'green',
                    borderColor: 'blue',
                    borderWidth: '10',
                    inputConnectors: [
                        {
                            name: "A"
                        },
                        {
                            name: "B"
                        },
                        {
                            name: "C"
                        }
                    ],
                    outputConnectors: [
                        {
                            name: "A"
                        },
                        {
                            name: "B"
                        },
                        {
                            name: "C"
                        }
                        ]
                }
            ];

            //scope.shapes = [
            //    {
            //        id: 0,
            //        type: 'node',
            //        properties: "M 100 100 L 120 100 120 120 100 120 Z"
            //    },
            //    {
            //        id: 1,
            //        type: 'node',
            //        properties: "M 100 100 L 120 100 120 120 100 120 Z"
            //    },
            //    {
            //        id: 2,
            //        type: 'node',
            //        properties: "M 100 100 L 120 100 120 120 100 120 Z"
            //    },
            //    {
            //        id: 3,
            //        type: 'node',
            //        properties: "M 100 100 L 120 100 120 120 100 120 Z"
            //    },
            //    {
            //        id: 4,
            //        type: 'node',
            //        properties: "M 100 100 L 120 100 120 120 100 120 Z"
            //    },
            //    {
            //        id: 5,
            //        type: 'node',
            //        properties: "M 100 100 L 120 100 120 120 100 120 Z"
            //    }
            //];
        }
    };
})

;
