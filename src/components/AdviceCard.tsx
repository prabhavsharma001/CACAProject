import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface AdviceCardProps {
  title: string;
  summary: string;
}

const AdviceCard = ({ title, summary }: AdviceCardProps) => {
  return (
    <Card className="shadow-[var(--shadow-soft)] border-border animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
          {title}
        </CardTitle>
        <CardDescription className="text-base md:text-lg mt-3 text-muted-foreground leading-relaxed">
          {summary}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default AdviceCard;
