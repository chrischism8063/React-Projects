import React, { Component } from "react";
import { sectorApi } from "../staticContent";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "spline",
  },
  title: {
    text: "My chart",
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6],
    },
  ],
};

export default class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = { localData: [], chartData: {} };
  }

  componentDidMount() {
    fetch(sectorApi + "Z1NN")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ localData: data, chartData: [] }, () =>
          this.buildSeriesData()
        );
      })
      .catch((e) => console.log("Error fetching data. ", e));
  }

  buildSeriesData = () => {
    const { localData } = this.state;

    const localSeriesTitle = Object.keys(localData)
      .filter((key) => {
        return key === "Meta Data";
      })
      .map((records) => localData[records]);

    const localSeriesData = Object.keys(localData)
      .filter((key) => {
        return key !== "Meta Data";
      })
      // TODO: need to convert the data into an array not a JSON object...
      .map((key) => {
        return { data: localData[key], name: key };
      });

    console.log("localSeriesData", localSeriesData);

    let mapPercent = {
      chart: {
        type: "area",
      },
      title: {
        text: localSeriesTitle.Information,
      },
      subtitle: {
        text: localSeriesTitle["Last Refreshed"],
      },
      xAxis: {
        categories: ["1750", "1800", "1850", "1900", "1950", "1999", "2050"],
        tickmarkPlacement: "on",
        title: {
          enabled: false,
        },
      },
      yAxis: {
        labels: {
          format: "{value}%",
        },
        title: {
          enabled: false,
        },
      },
      tooltip: {
        pointFormat:
          '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
        split: true,
      },
      plotOptions: {
        area: {
          stacking: "percent",
          lineColor: "#ffffff",
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: "#ffffff",
          },
          accessibility: {
            pointDescriptionFormatter: function (point) {
              function round(x) {
                return Math.round(x * 100) / 100;
              }
              return (
                point.index +
                1 +
                ", " +
                point.category +
                ", " +
                point.y +
                " millions, " +
                round(point.percentage) +
                "%, " +
                point.series.name
              );
            },
          },
        },
      },
      series: localSeriesData,
    };
    localSeriesData && this.setState({ chartData: mapPercent });
  };
  render() {
    const { localData, chartData } = this.state;
    console.log(localData);
    return (
      <>
        <div>A Bar Chart will be here.</div>{" "}
        <HighchartsReact highcharts={Highcharts} options={chartData} />
        {/* <div className="Footer">{chartData.refresh}</div> */}
        {console.log(chartData)}
      </>
    );
  }
}

// api key Z1NN
