"use client"
import { useEffect, useState } from "react";

// Externals components
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table";

// Internals components
import EditDialog from "./components/edit-dialog";

// Icons
import { MoreHorizontal } from "lucide-react";

// Definitions
import type { Product } from "./types";

export type Props = {
  initialProducts: Product[]
  onDelete: (id: string) => void;
  onEdit: (product: Product) => void;
};

const ProductDataTable = (props: Props) => {
  // Props
  const { initialProducts, onDelete, onEdit } = props;

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
    if (initialProducts?.length) setProducts(initialProducts);
  }, [initialProducts]);

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Productos</CardTitle>
        <CardDescription>Gestiona el inventario de productos</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <Input placeholder="Filtrar productos..." className="max-w-sm" />
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Precio</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products?.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.nombre}</TableCell>
                <TableCell>${product.precio.toFixed(2)}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(product)}>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
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

