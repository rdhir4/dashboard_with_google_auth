export const PieChartOptions = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
    height: 145,
  },
  title: null,
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  legend: {
    enabled: true,
    floating: true,
    verticalAlign: 'xbottom',
    align:'right',
    layout: 'vertical',
    x: -10,
    y: 18,
    itemStyle: {
      'font-family': 'Montserrat',
      fontWeight: 700,
    }
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      },
      showInLegend: true,
      center: ["35%", "50%"],
    }
  },
  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [
      {
        name: 'Super Hoodies',
        y: 140
      },
      {
        name: 'Custom Short Pants',
        y: 310
      },
      {
        name: 'Basic Trees',
        y: 550,
      }
    ]
  }]
}


export const splineChartOptions =  {
  chart: {
    type: 'spline',
    height: 280
  },
  title: null,
  xAxis: {
    categories: ['Week1','Week2','Week3','Week4','Week5'],
  },
  legend: {
    enabled: true,
    floating: true,
    verticalAlign: 'ytop',
    align:'top',
    layout: 'horizontal',
    x: 30,
    y: 0,
    itemStyle: {
      'font-family': 'Montserrat',
      fontWeight: 700,
    },
  },
  yAxis: {
    labels: {
      format: '{value}'
    },
    title: null
  },
  tooltip: {
    crosshairs: true,
    shared: true
  },
  plotOptions: {
    spline: {
      marker: {
        radius: 4,
        lineColor: '#E9A0A0',
        lineWidth: 1
      },
      showInLegend: true,
    }
  },
  series: [{
    name: 'Guest',
    data: [400, 150, 450, 200, 450]

  }, {
    name: 'User',
    data: [200, 400, 200, 300, 450]
  }]
}