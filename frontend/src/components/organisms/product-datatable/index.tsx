import { useEffect, useState } from "react";

// Icons
import { MoreHorizontal, Trash2 } from "lucide-react";

// Externals components
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table";

// Internals components
import EditDialog from "./components/edit-dialog";

// Definitions
import type { Product } from "./types";

export type Props = {
  initialProducts: Product[];
  onDelete: (id: string) => void;
  onEdit: (product: Product) => void;
  filterValue: string;
  onFilterChange: (value: string) => void;
};

const ProductDataTable = (props: Props) => {
  // Props
  const { initialProducts, onDelete, onEdit, filterValue, onFilterChange } = props;

  // States
  const [products, setProducts] = useState<Product[]>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Methods
  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  // Effects
  useEffect(() => {
    if (initialProducts?.length) {
      setProducts(initialProducts);
    }
  }, [initialProducts]);

  return (
    <Card className="w-full hover:shadow-lg">
      <CardHeader>
        <CardTitle>Productos</CardTitle>
        <CardDescription>Gestiona el inventario de productos</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <Input
            placeholder="Filtrar productos..."
            className="max-w-sm"
            value={filterValue}
            onChange={(e) => onFilterChange(e.target.value)}
          />
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Precio</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Demanda</TableHead>
              <TableHead>Vendidos</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products?.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.demand}</TableCell>
                <TableCell>{product.selled}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => onDelete(product.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(product)}>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {selectedProduct && (
          <EditDialog
            product={selectedProduct}
            open={isDialogOpen}
            onSave={onEdit}
            onOpenChange={setIsDialogOpen}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default ProductDataTable;

