// import "./style.css";

// set the dimensions and margins of the graph
const margin = { top: 40, right: 20, bottom: 0, left: 20 },
  width = 460 - margin.left - margin.right,
  height = 520 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3
  .select("#my_dataviz")

  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

//Read the data
d3.csv(
  "https://raw.githubusercontent.com/ajstarks/dubois-data-portraits/master/plate51/data.csv",

  // When reading the csv, I must format variables:
  (d) => {
    return {
      date: d3.timeParse("%Y")(d.Year),
      value: d.Slave,
    };
  }
)
  .then(
    // Now I can use this dataset:
    function (data) {
      svg
        .append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", width)
        .attr("height", height)
        .attr("stroke", "none")
        .attr("fill", "#3a8c4e");

      // Add X axis --> it is a date format
      const x = d3
        .scaleTime()
        .domain(d3.extent(data, (d) => d.date))
        .range([0, width]);

      let axisX = d3.axisTop(x);
      axisX.tickSize(0);
      axisX.tickPadding(3);
      svg
        .append("g")
        .style("font", "15px monospace")
        .attr("class", `x-axis`)
        .call(axisX);

      // Add Y axis
      const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);

      let axisY = d3.axisLeft(y).tickValues([]);
      axisY.tickSize(0);

      svg.append("g").attr("id", `y-axis`).call(axisY);

      // Add the area
      svg
        .append("path")
        .datum(data)
        .attr("fill", "#292524")

        .attr("stroke-width", 0)
        .attr("stroke", "none")

        .attr(
          "d",
          d3
            .area()
            .x((d) => x(d.date))
            .y0(y(0))
            .y1((d) => y(d.value))
        );
    }
  )
  .then(function () {
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", margin.top / 2)
      .style("fill", "black")
      .text("free - libre");
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", height / 2.5)
      .style("fill", "white")
      .text("Slaves");

    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", height / 2.5 + margin.left)
      .style("fill", "white")
      .text("Esclaves");
  });
