// Components
import MonthCard from "../../molecules/month-card";
import MetricCard from "../../molecules/metric-card";
import GraphCard from "../../molecules/graph-card";
import ProductDataTable, { type Props as ProductDataTableProps } from "../../organisms/product-datatable";

// Definitions
export type Props = {
  month: {
    name: string;
    demand: string;
    goal: string;
  };
  products: {
    list: ProductDataTableProps["initialProducts"];
    onDelete: ProductDataTableProps["onDelete"];
    onEdit: ProductDataTableProps["onEdit"];
    ingress: number;
  };
};

const Home = (props: Props) => {
  // Props
  const { month, products } = props;
  return (
    <div className="p-4">
      <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <MonthCard
          title="Informacion Mensual"
          month={month?.name ?? '-'}
          demand={month?.demand ?? '0'}
          goal={month?.goal ?? '0'}
        />
        <div className="hidden lg:inline-block">&nbsp;</div>
        <MetricCard
          title="Total Productos"
          amount={products?.list?.length ?? 0}
          subtitle="vendidos"
        />
        <MetricCard
          title="Total Ingresos"
          amount={products?.ingress ?? 0}
          subtitle="ingresados"
        />
      </div>

      <div className="grid grid-col-1 lg:grid-cols-2 gap-4 pt-4">
        <ProductDataTable
          initialProducts={products?.list ?? []}
          onDelete={products?.onDelete}
          onEdit={products?.onEdit}
        />
        <GraphCard />
      </div>
    </div>
  );
};

export default Home;