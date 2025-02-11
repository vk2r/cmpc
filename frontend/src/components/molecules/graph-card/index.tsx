import Plot, { type PlotParams } from "react-plotly.js";

// Components
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../ui/card";

// Definitions
export type Props = {
  months: string[];
  amounts: number[];
};

const GraphCard = (props: Props) => {
  // Props
  const { months, amounts } = props;

  // Constants
  const data: PlotParams["data"] = [
    {
      x: months,
      y: amounts,
      type: "bar",
      marker: {
        color: "black",
        opacity: 0.7,
      },
    },
  ];

  const layout = {
    title: "Cantidad de Productos por Mes",
    xaxis: { title: "Mes" },
    yaxis: { title: "Cantidad de Productos" },
    autosize: true,
    margin: { l: 50, r: 50, b: 50, t: 50, pad: 4 },
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(0,0,0,0)",
  };

  return (
    <Card className="w-full bg-white hover:shadow-lg">
      <CardHeader>
        <CardTitle>Stock</CardTitle>
        <CardDescription>Total de productos disponibles para vender en el mes</CardDescription>
      </CardHeader>
      <CardContent>
        <Plot
          data={data}
          layout={layout}
          config={{ responsive: true }}
          style={{ width: "100%", height: "400px" }}
        />
      </CardContent>
    </Card>
  )
};

export default GraphCard;