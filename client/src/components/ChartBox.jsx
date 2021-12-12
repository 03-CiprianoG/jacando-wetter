import React from "react";

import { Flex } from "@chakra-ui/react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

const ChartBox = (props) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    RadialLinearScale
  );

  ChartJS.defaults.color = props.isDarkMode ? "#fff" : "gray.600";

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "7 Tage Temperaturverlauf",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const data = {
    labels: props.weatherData.days.day
      .slice(1)
      .map((day) =>
        window.innerWidth > 550 ? day.dayName : day.dayName.slice(0, 3)
      ),
    datasets: [
      {
        label: "Min",
        data: props.weatherData.days.day
          .slice(1)
          .map((day) => Math.round(day.temp.min)),
        borderColor: "rgb(34, 171, 225)",
        borderWidth: 1,
        fill: true,
        backgroundColor: "rgba(34, 171, 225, 0.4)",
        yAxisID: "y",
        lineTension: 0.5,
      },
      {
        label: "Max",
        data: props.weatherData.days.day
          .slice(1)
          .map((day) => Math.round(day.temp.max)),
        borderColor: "rgb(243, 147, 36)",
        borderWidth: 1,
        fill: true,
        backgroundColor: "rgba(243, 147, 36, 0.4)",
        yAxisID: "y1",
        lineTension: 0.5,
      },
    ],
    options: options,
  };
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        color={props.isDarkMode ? "white" : "black"}
        w="90%"
        maxWidth={600}
        margin="25px auto auto auto"
        shadow="lg"
        h="300px"
        rounded="xl"
        p={5}
      >
        <Line data={data} options={options} />
      </Flex>
    </>
  );
};

export default ChartBox;
