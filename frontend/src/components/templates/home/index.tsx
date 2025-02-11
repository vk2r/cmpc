// Components
import GraphCard from "../../molecules/graph-card";
import MetricCard from "../../molecules/metric-card";
import MonthCard, { type Props as MonthCardProps } from "../../molecules/month-card";
import ProductDataTable, { type Props as ProductDataTableProps } from "../../organisms/product-datatable";

// Definitions
export type Props = {
  month: {
    demand: number;
    goal: number;
    data: MonthCardProps["month"];
  };
  products: {
    ingress: number;
    selled: number;
    list: ProductDataTableProps["initialProducts"];
    onDelete: ProductDataTableProps["onDelete"];
    onEdit: ProductDataTableProps["onEdit"];
    filterValue: ProductDataTableProps["filterValue"];
    onFilterChange: ProductDataTableProps["onFilterChange"];
  };
  graph: {
    months: string[];
    amounts: number[];
  };
};

const Home = (props: Props) => {
  // Props
  const {
    products = {
      ingress: 0,
      selled: 0,
      list: [],
      onDelete: () => { },
      onEdit: () => { },
      filterValue: "",
      onFilterChange: () => { },
    },
    graph = {
      months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      amounts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    month = {
      goal: 0,
      demand: 0,
      data: {
        current: 'todos',
        options: [{ label: 'Meses', items: [{ name: 'Todos', value: 'todos' }] }],
        onChange: () => { },
      },
    },
  } = props;
  return (
    <div className="p-4">
      <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <MonthCard
          title="Informacion Mensual"
          month={month.data}
          goal={month.goal}
          demand={month.demand}
        />
        <div className="hidden lg:inline-block">&nbsp;</div>
        <MetricCard
          title="Total Productos"
          subtitle="vendidos"
          amount={products.selled}
        />
        <MetricCard
          title="Total Ingresos"
          subtitle="ingresados"
          amount={`$${products.ingress}`}
        />
      </div>

      <div className="grid grid-col-1 lg:grid-cols-2 gap-4 pt-4">
        <ProductDataTable
          initialProducts={products.list}
          onDelete={products.onDelete}
          onEdit={products.onEdit}
          filterValue={products.filterValue}
          onFilterChange={products.onFilterChange}
        />
        <GraphCard
          months={graph.months}
          amounts={graph.amounts}
        />
      </div>
    </div>
  );
};

export default Home;