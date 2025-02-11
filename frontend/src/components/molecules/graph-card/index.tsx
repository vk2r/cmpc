import { useState, useEffect } from "react";
import Plot, { type PlotParams } from "react-plotly.js";

// Components
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../ui/card";

export default function GraphCard() {

  // Constants
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
  const cantidadProductos = [120, 150, 200, 180, 250, 300];
  const data: PlotParams["data"] = [
    {
      x: meses,
      y: cantidadProductos,
      type: "bar",
      marker: {
        color: "rgb(0, 158, 115)",
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

  // States
  const [mounted, setMounted] = useState(false);

  // Effects
  useEffect(() => {
    setMounted(true)
  }, []);

  return (
    <Card className="w-full bg-white hover:shadow-lg">
      <CardHeader>
        <CardTitle>Resumen de Productos</CardTitle>
        <CardDescription>Cantidad de productos vendidos por mes</CardDescription>
      </CardHeader>
      <CardContent>
        {mounted && (
          <Plot
            data={data}
            layout={layout}
            style={{ width: "100%", height: "400px" }}
            config={{ responsive: true }}
          />
        )}
      </CardContent>
    </Card>
  )
}