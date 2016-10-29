angular.module('github-explorer').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/page1/page1.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\">\n" +
    "    <md-card>\n" +
    "        <md-card-content>\n" +
    "            <h2 class=\"md-title\">{{ vm.title }}</h2>\n" +
    "        </md-card-content>\n" +
    "    </md-card>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/page2/page2.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\">\n" +
    "    <h2 class=\"md-title\">LOOK THIS CHART</h2>\n" +
    "    <!--\n" +
    "    <canvas id=\"doughnut\" class=\"chart chart-doughnut\" chart-data=\"vm.data\" chart-labels=\"vm.labels\"></canvas> \n" +
    "    -->\n" +
    "    <canvas id=\"polar-area\" class=\"chart chart-polar-area\" chart-data=\"vm.data\" chart-labels=\"vm.labels\"></canvas> \n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/page3/page3.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\">\n" +
    "    <md-card>\n" +
    "        <md-card-content>\n" +
    "            <h2 class=\"md-title\">Content from: page3 page</h2>\n" +
    "        </md-card-content>\n" +
    "    </md-card>\n" +
    "</div>\n"
  );

}]);
