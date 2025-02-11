import {
  Select as Container,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

// Definitions
type Item = {
  name: string;
  value: string;
};

export type Group = {
  label: string;
  items: Item[];
};

export type Props = {
  placeholder: string;
  items: Group[];
  defaultValue?: string;
  className?: string;
  onChange?: (value: string) => void;
};

const Select = (props: Props) => {
  // Propos
  const { placeholder, items, className, defaultValue, onChange } = props;
  return (
    <Container onValueChange={onChange} defaultValue={defaultValue}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map(item => {
            return (
              <>
                <SelectLabel>{item.label}</SelectLabel>
                {item.items.map(item => {
                  return (
                    <SelectItem value={item.value}>{item.name}</SelectItem>
                  );
                })}
              </>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Container>
  );
};

export default Select;