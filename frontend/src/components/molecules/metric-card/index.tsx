import { Card, CardContent } from '../../ui/card';

// Definitions
export type Props = {
  title: string;
  amount: string | number;
  subtitle?: string;
}

const MetricCard = (props: Props) => {
  // Props
  const { title, subtitle, amount } = props;
  return (
    <Card className="w-full bg-white text-black hover:shadow-lg">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
        <div className="space-y-1">
          <p className="text-4xl font-bold">{amount}</p>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;