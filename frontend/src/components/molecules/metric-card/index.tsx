import { Card, CardContent } from '../../ui/card';

// Definitions
export type Props = {
  title: string;
  amount: string;
  subtitle?: string;
}

const MetricCard = (props: Props) => {
  const { title, subtitle, amount } = props;
  return (
    <Card className="w-full max-w-md">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-bold">{amount}</p>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;