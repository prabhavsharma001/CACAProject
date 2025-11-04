import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillsGapCardProps {
  skills: string[];
}

const SkillsGapCard = ({ skills }: SkillsGapCardProps) => {
  return (
    <Card className="shadow-[var(--card-shadow)] border-border animate-slide-up">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">
          Required Skills
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge 
              key={index}
              className="bg-[hsl(var(--badge-bg))] text-[hsl(var(--badge-text))] hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2 text-sm font-medium"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsGapCard;
