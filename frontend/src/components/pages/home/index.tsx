// React
import { useState } from "react";

// Store
import {
  useAppDispatch,
  useAppSelector,
  setSelectedMonth,
  useGetProductsQuery,
  useUpdateProductMutation,
  useDeleteProductMutation
} from "../../../providers/store";

// Definitions
import type { Product } from "../../../types/product";
import type { RootState } from "../../../providers/store";
import type { Product as DataTableProduct } from "../../organisms/product-datatable/types";

// Templates
import Home from "../../templates/home";

// Constants
const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const HomePage = () => {
  // Hooks
  const dispatch = useAppDispatch();
  const { selectedMonth } = useAppSelector((state: RootState) => state.products);
  const { data: products = [] } = useGetProductsQuery();

  // Mutations
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const [filterValue, setFilterValue] = useState<string>("");

  // Available months
  const availableMonths = Array.from(new Set(
    products.map(product => {
      const monthIndex = new Date(product.date).getMonth();
      return MONTHS[monthIndex];
    })
  )).sort((a, b) => MONTHS.indexOf(a) - MONTHS.indexOf(b));

  // Filter products by month
  const filteredProducts = selectedMonth === 'todos'
    ? products
    : products.filter(product => {
      const productMonth = new Date(product.date).getMonth();
      return MONTHS[productMonth].toLowerCase() === selectedMonth.toLowerCase();
    });

  // Filter products by name
  const filteredByName = filteredProducts.filter(product =>
    filterValue ? product.name.toLowerCase().includes(filterValue.toLowerCase()) : true
  );

  // Total Ingress
  const totalIngress = filteredByName.reduce((acc, product) => acc + (product.price * product.selled), 0);

  // Total Demand
  const totalDemand = filteredByName.reduce((acc, product) => acc + product.demand, 0);

  // Total Selled
  const totalSelled = filteredByName.reduce((acc, product) => acc + product.selled, 0);

  // Goal from total demand (10% more)
  const goal = parseInt((filteredByName.reduce((acc, product) => acc + product.demand, 0) * 1.1).toFixed(0));

  // Graph Data
  const graphData = (() => {
    if (selectedMonth === 'todos') {
      // If 'all' is selected, show stock data for all months
      return filteredByName.reduce((acc, product) => {
        const month = new Date(product.date).getMonth();
        acc.amounts[month] += product.stock;
        return acc;
      }, {
        months: MONTHS,
        amounts: Array(12).fill(0)
      });
    } else {
      const selectedMonthIndex = MONTHS.findIndex(
        month => month.toLowerCase() === selectedMonth.toLowerCase()
      );
      const amounts = Array(12).fill(0);
      amounts[selectedMonthIndex] = filteredProducts.reduce(
        (acc, product) => acc + (product.stock - product.selled),
        0
      );
      return {
        months: MONTHS,
        amounts
      };
    }
  })();

  // Products Datatable
  const productsDatatable: DataTableProduct[] = filteredByName.map(({ id, name, price, stock, selled, demand }) => ({ id, name, price, stock, selled, demand }));

  // Methods
  const handleDelete = async (id: string) => {
    try {
      await deleteProduct(id).unwrap();
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  const handleEdit = async (productData: DataTableProduct) => {
    const originalProduct = products.find(p => p.id === productData.id);
    if (originalProduct) {
      const updatedProduct: Product = {
        ...originalProduct,
        ...productData
      };
      try {
        await updateProduct(updatedProduct).unwrap();
      } catch (error) {
        console.error('Error al actualizar el producto:', error);
      }
    }
  };

  return (
    <Home
      graph={graphData}
      products={{
        ingress: totalIngress,
        selled: totalSelled,
        list: productsDatatable,
        onDelete: handleDelete,
        onEdit: handleEdit,
        filterValue: filterValue,
        onFilterChange: setFilterValue,
      }}
      month={{
        demand: totalDemand,
        goal,
        data: {
          current: selectedMonth,
          onChange: (value: string) => dispatch(setSelectedMonth(value)),
          options: [{
            label: 'Meses',
            items: [
              { name: 'Todos', value: 'todos' },
              ...availableMonths.map(month => ({
                name: month,
                value: month.toLowerCase()
              }))
            ]
          }],
        }
      }}
    />
  );
};

export default HomePage;
