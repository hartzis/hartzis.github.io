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
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, ipsum. Asperiores voluptatibus quae possimus officia obcaecati unde porro quisquam molestias similique non id fugit, nisi dolorem, voluptates reiciendis magni eum.

######highcharts ng

>[highcharts-ng](www.hcng.com)

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo impedit, sequi fugit expedita ab inventore rem quaerat repellat, vero harum! Nobis odit, aut facere, repellat aperiam debitis mollitia! Error, expedita!

~~~ javascript
getData: function($defer, params) {
  // custom filter applied
  filteredData = _.reduce(_.toArray($scope.filters.filterByFieldType), function(sum, val) {return sum + val}) > 0 ?
          $filter('filterByCheckboxColumn')(filteredData, $scope.filters.filterByFieldType, 'Field') :
          filteredData;
  // order data by selected column
  var orderedData = params.sorting() ?
          $filter('orderBy')(filteredData, params.orderBy()) :
          filteredData;

  // set total for recalc pagination
  params.total(orderedData.length);
  // return data with promise
  $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
}
~~~

#####Final thoughts
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore nobis at dolor, suscipit nemo magnam iusto laudantium voluptates, cumque eveniet quos voluptatum nisi dicta, voluptatem voluptatibus repellat, obcaecati. Similique, omnis.