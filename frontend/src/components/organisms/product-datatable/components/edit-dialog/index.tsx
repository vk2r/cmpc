"use client"
import { useState } from "react";

// Externals components
import { Label } from "../../../../ui/label";
import { Button } from "../../../../ui/button";
import { Input } from "../../../../ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../../../../ui/dialog";

// Definitions
import type { Product } from "../../types"

export type Props = {
  product: Product
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (product: Product) => void
};

const EditDialog = (props: Props) => {
  // Props
  const { product, open, onOpenChange, onSave } = props;

  // States
  const [editedProduct, setEditedProduct] = useState<Product>(product);

  // Methods
  const handleSave = () => {
    onSave(editedProduct);
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Producto</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="nombre" className="text-right">
              Nombre
            </Label>
            <Input
              id="nombre"
              value={editedProduct.nombre}
              onChange={(e) => setEditedProduct({ ...editedProduct, nombre: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="precio" className="text-right">
              Precio
            </Label>
            <Input
              id="precio"
              type="number"
              value={editedProduct.precio}
              onChange={(e) => setEditedProduct({ ...editedProduct, precio: Number(e.target.value) })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stock" className="text-right">
              Stock
            </Label>
            <Input
              id="stock"
              type="number"
              value={editedProduct.stock}
              onChange={(e) => setEditedProduct({ ...editedProduct, stock: Number(e.target.value) })}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSave}>Guardar cambios</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditDialog;