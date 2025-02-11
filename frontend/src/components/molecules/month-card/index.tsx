import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

// Definitions
export type Props = {
  title: string;
  month: string;
  demand: string;
  goal: string;
}

const MonthCard = (props: Props) => {
  // Props
  const { title, month, demand, goal } = props;
  return (
    <Card className="w-full bg-white text-black hover:shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Mes</span>
            <span className="font-bold">{month}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Demanda</span>
            <span>{demand}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Meta</span>
            <span>{goal}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthCard;