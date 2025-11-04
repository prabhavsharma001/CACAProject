import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface Course {
  name: string;
  description: string;
  source_doc: string;
}

interface CoursesCardProps {
  courses: Course[];
}

const CoursesCard = ({ courses }: CoursesCardProps) => {
  return (
    <Card className="shadow-[var(--card-shadow)] border-border animate-slide-up">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">
          Recommended Courses
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {courses.map((course, index) => (
          <Card key={index} className="border-border bg-muted/30 hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">
                {course.name}
              </CardTitle>
              <CardDescription className="text-muted-foreground mt-2">
                {course.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href={course.source_doc.includes('http') ? course.source_doc : `https://${course.source_doc}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-glow font-medium transition-colors"
              >
                View Resource
                <ExternalLink className="w-4 h-4" />
              </a>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default CoursesCard;
