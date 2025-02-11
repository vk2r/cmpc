import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

// Definitions
export type Props = {
  title: string;
  amount: string;
  subtitle?: string;
}

const MonthCard = (props: Props) => {
  const { title, subtitle, amount } = props;
  return (
    <Card className="w-[300px] bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="text-4xl font-bold">{amount}</div>
          <div className="text-sm text-muted-foreground">{subtitle}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthCard;