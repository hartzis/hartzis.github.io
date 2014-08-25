---
layout: post
title: Charting magic in angular
description: "Fun with charting in angular."
tags: [angular, javascript, directive]
comments: false
---

<section id="table-of-contents" class="toc tocFixed">
  <header>
    <a href="#">
      <h3>Charting magic in angular</h3>
    </a>
  </header>
<div id="drawer" markdown="1">
*  Auto generated table of contents
{:toc}
</div>
</section><!-- /#table-of-contents -->

I have data, data that needs proper representation in the online web-o-sphere! This data wants to show the world how gorgeous it is! The data is not simple, it is complex and wants to explore how dynamic it can be.

>Enter [highcharts](www.highcharts.com) the super duper phenominally extra awesome graphing/charting all in one library

#####highcharts and angular
Highcharts is quite dynamic by default.  With this amazing charting library you can easily manipulate how the data is visually displayed.  

>Found a great directive that encapsulated the usability with watches that update data after ajax requests.

######highcharts ng

>[highcharts-ng](https://github.com/pablojim/highcharts-ng)

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo impedit, sequi fugit expedita ab inventore rem quaerat repellat, vero harum! Nobis odit, aut facere, repellat aperiam debitis mollitia! Error, expedita!

######directive template
We create another directive to wrap the highcharts-ng directive, to contain all the required configuration stuff.
~~~ html
<div class="row">
  <div class="col-xs-12 text-center"></div>
  <highchart config="chartConfig"></highchart>
</div>
~~~

~~~ javascript
.directive('dataChart', [
    function() {
      return {
        restrict: 'E',
        scope: {
          chartData: '=chartData'
        },
        templateUrl: '/directiveTemplates/dataChart',
        replace: 'true',
        controller: ['$scope',
          function($scope) {

            // setup chart params
            $scope.chartConfig = {
              options: {
                chart: {
                  backgroundColor: '#f9f9f9',
                  type: 'area'
                }
              },
              xAxis: {
                categories: [],
                tickmarkPlacement: 'on'
              },
              yAxis: {
                title: {
                  text: ''
                }
              },
              series: [],
              title: {
                text: 'Title'
              },
              loading: true
            };
}
~~~

#####Final thoughts
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore nobis at dolor, suscipit nemo magnam iusto laudantium voluptates, cumque eveniet quos voluptatum nisi dicta, voluptatem voluptatibus repellat, obcaecati. Similique, omnis.