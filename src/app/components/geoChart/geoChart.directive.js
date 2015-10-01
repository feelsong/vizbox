(function() {
  'use strict';

  angular
    .module('vizbox')
    .directive('geoChart', geoChart);

    /** @ngInject */

    function geoChart() {
      var directive = {
          restrict: 'E',
          replace: true,
          scope: { chartId : '=chartId', geoLocation: '=geoLocation'},
          link: function(scope,element,attrs) {

            console.log('link>>>',scope);

              var stateCode = {
                                "10": {
                                  "stateAbbr": "DE",
                                  "name": "Delaware"
                                },
                                "11": {
                                  "stateAbbr": "DC",
                                  "name": "District of Columbia"
                                },
                                "12": {
                                  "stateAbbr": "FL",
                                  "name": "Florida"
                                },
                                "13": {
                                  "stateAbbr": "GA",
                                  "name": "Georgia"
                                },
                                "15": {
                                  "stateAbbr": "HI",
                                  "name": "Hawaii"
                                },
                                "16": {
                                  "stateAbbr": "ID",
                                  "name": "Idaho"
                                },
                                "17": {
                                  "stateAbbr": "IL",
                                  "name": "Illinois"
                                },
                                "18": {
                                  "stateAbbr": "IN",
                                  "name": "Indiana"
                                },
                                "19": {
                                  "stateAbbr": "IA",
                                  "name": "Iowa"
                                },
                                "20": {
                                  "stateAbbr": "KS",
                                  "name": "Kansas"
                                },
                                "21": {
                                  "stateAbbr": "KY",
                                  "name": "Kentucky"
                                },
                                "22": {
                                  "stateAbbr": "LA",
                                  "name": "Louisiana"
                                },
                                "23": {
                                  "stateAbbr": "ME",
                                  "name": "Maine"
                                },
                                "24": {
                                  "stateAbbr": "MD",
                                  "name": "Maryland"
                                },
                                "25": {
                                  "stateAbbr": "MA",
                                  "name": "Massachusetts"
                                },
                                "26": {
                                  "stateAbbr": "MI",
                                  "name": "Michigan"
                                },
                                "27": {
                                  "stateAbbr": "MN",
                                  "name": "Minnesota"
                                },
                                "28": {
                                  "stateAbbr": "MS",
                                  "name": "Mississippi"
                                },
                                "29": {
                                  "stateAbbr": "MO",
                                  "name": "Missouri"
                                },
                                "30": {
                                  "stateAbbr": "MT",
                                  "name": "Montana"
                                },
                                "31": {
                                  "stateAbbr": "NE",
                                  "name": "Nebraska"
                                },
                                "32": {
                                  "stateAbbr": "NV",
                                  "name": "Nevada"
                                },
                                "33": {
                                  "stateAbbr": "NH",
                                  "name": "New Hampshire"
                                },
                                "34": {
                                  "stateAbbr": "NJ",
                                  "name": "New Jersey"
                                },
                                "35": {
                                  "stateAbbr": "NM",
                                  "name": "New Mexico"
                                },
                                "36": {
                                  "stateAbbr": "NY",
                                  "name": "New York"
                                },
                                "37": {
                                  "stateAbbr": "NC",
                                  "name": "North Carolina"
                                },
                                "38": {
                                  "stateAbbr": "ND",
                                  "name": "North Dakota"
                                },
                                "39": {
                                  "stateAbbr": "OH",
                                  "name": "Ohio"
                                },
                                "40": {
                                  "stateAbbr": "OK",
                                  "name": "Oklahoma"
                                },
                                "41": {
                                  "stateAbbr": "OR",
                                  "name": "Oregon"
                                },
                                "42": {
                                  "stateAbbr": "PA",
                                  "name": "Pennsylvania"
                                },
                                "44": {
                                  "stateAbbr": "RI",
                                  "name": "Rhode Island"
                                },
                                "45": {
                                  "stateAbbr": "SC",
                                  "name": "South Carolina"
                                },
                                "46": {
                                  "stateAbbr": "SD",
                                  "name": "South Dakota"
                                },
                                "47": {
                                  "stateAbbr": "TN",
                                  "name": "Tennessee"
                                },
                                "48": {
                                  "stateAbbr": "TX",
                                  "name": "Texas"
                                },
                                "49": {
                                  "stateAbbr": "UT",
                                  "name": "Utah"
                                },
                                "50": {
                                  "stateAbbr": "VT",
                                  "name": "Vermont"
                                },
                                "51": {
                                  "stateAbbr": "VA",
                                  "name": "Virginia"
                                },
                                "53": {
                                  "stateAbbr": "WA",
                                  "name": "Washington"
                                },
                                "54": {
                                  "stateAbbr": "WV",
                                  "name": "West Virginia"
                                },
                                "55": {
                                  "stateAbbr": "WI",
                                  "name": "Wisconsin"
                                },
                                "56": {
                                  "stateAbbr": "WY",
                                  "name": "Wyoming"
                                },
                                "60": {
                                  "stateAbbr": "AS",
                                  "name": "American Samoa"
                                },
                                "66": {
                                  "stateAbbr": "GU",
                                  "name": "Guam"
                                },
                                "69": {
                                  "stateAbbr": "MP",
                                  "name": "Northern Mariana Islands"
                                },
                                "72": {
                                  "stateAbbr": "PR",
                                  "name": "Puerto Rico"
                                },
                                "74": {
                                  "stateAbbr": "UM",
                                  "name": "U.S. Minor Outlying Islands"
                                },
                                "78": {
                                  "stateAbbr": "VI",
                                  "name": "U.S. Virgin Islands"
                                },
                                "01": {
                                  "stateAbbr": "AL",
                                  "name": "Alabama"
                                },
                                "02": {
                                  "stateAbbr": "AK",
                                  "name": "Alaska"
                                },
                                "04": {
                                  "stateAbbr": "AZ",
                                  "name": "Arizona"
                                },
                                "05": {
                                  "stateAbbr": "AR",
                                  "name": "Arkansas"
                                },
                                "06": {
                                  "stateAbbr": "CA",
                                  "name": "California"
                                },
                                "08": {
                                  "stateAbbr": "CO",
                                  "name": "Colorado"
                                },
                                "09": {
                                  "stateAbbr": "CT",
                                  "name": "Connecticut"
                                }
                              };

              var us = scope.geoLocation.data;
              console.log('scope', scope.geoLocation);
              console.log('us',us);

              var margin = {top: 5, left: 5, bottom: 5, right: 5};
              var mapRatio = 1.1;



              var width,height,projection,path,states;
              width= element[0].parentNode.clientWidth,
              width = width - margin.left - margin.right,
              height = Math.round(width * mapRatio);

              if (height > 320) {
                  height = 310;
              }

              projection = d3.geo.albersUsa().scale(width/1.2).translate([width/2,height/2]);
              path = d3.geo.path().projection(projection);


              var map = d3.select(element[0].parentNode).append("svg").attr({"width":width,"height":height});

              // draw states
              var states = map.selectAll('path.state')
              .data(topojson.feature(us, us.objects.states).features)
              .enter().append('path')
              .attr('class','state')
              .attr('id',function(d) {
                  var code = d.id+'' ;
                  if (d.id<10) {code = '0' + code}
                  var stateName = stateCode[code].name.toLowerCase().replace(/\s/g, '-');
                  return stateName;
              })
              .attr('d', path);


              //mouse over events
               states.on('mouseover', tooltipShow)
               .on('mouseout', tooltipHide);


              //draw border
              map
              .append('path')
              .datum(topojson.mesh(us, us.objects.states))
              .attr('class','land')
              .attr('d',path);

               function renderColor()  {
                  states.style('fill',function(d,i) {
                       var randomColor= [Math.floor(Math.random()*10+5),Math.floor(Math.random()*20+40),Math.floor(Math.random()*155+100)];

                       return 'rgb('+randomColor[0]+','+randomColor[1]+','+randomColor[2]+')'});
              }
              renderColor();

              var colorRenderLoop = setInterval(
                  function() {
                      renderColor();

                  }
              ,3000);

              //mouse resize
              d3.select(window).on('resize', resize);

              function resize() {
                  width = element[0].parentNode.clientWidth;
                  width = width - margin.left - margin.right;
                  height = width * mapRatio;


                  if (height > 320) {
                      height = 310;
                  }

                  projection.translate([width/2, height/2]).scale(width/1.2);
                  //
                  // // resize the map container
                  map.style('width', width + 'px')
                     .style('height', height + 'px');

                      map.selectAll('.land').attr('d',path);
                      map.selectAll('.state').attr('d', path);
              }

              //tooltip for mouse event
              var tooltip;

              function tooltipShow(d, i) {
                  var color = d3.select(this).style('fill');
                  var code = d.id+'' ;
                  if (d.id<10) {code = '0' + code}
                  var datum = stateCode[code];
                  var stateName = datum.name;
                  if (!datum) return;
                  console.log(d3.mouse(this));

                  tooltip = d3.select(this.parentNode).append("text");

                  tooltip
                  .attr("x", 15)
                  .attr("y", 30)
                  .text(stateName+': ' + color)
                  .attr("font-family", "sans-serif")
                  .attr("font-size", "15px")
                  .style('fill','red');

              }

              function tooltipHide(d, i) {
                  console.log('hide');

                  tooltip.remove();
              }

          }
      };

      return directive;
    }

})();
