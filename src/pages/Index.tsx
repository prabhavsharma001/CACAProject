import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Loader2 } from "lucide-react";
import AdviceCard from "@/components/AdviceCard";
import SkillsGapCard from "@/components/SkillsGapCard";
import CoursesCard from "@/components/CoursesCard";

interface Course {
  name: string;
  description: string;
  source_doc: string;
}

interface AdviceData {
  title: string;
  summary: string;
  skills_gap: string[];
  recommended_courses: Course[];
}

const Index = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [adviceData, setAdviceData] = useState<AdviceData | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    setIsLoading(true);

    // Simulate AI response with mock data
    setTimeout(() => {
      const mockData: AdviceData = {
        title: "Career Roadmap for Machine Learning Engineer",
        summary: "This path requires mastery of Python, deep learning frameworks, and MLOps practices. The following resources are tailored to bridge your current knowledge gap in these areas.",
        skills_gap: ["TensorFlow/PyTorch", "Kubernetes", "MLOps Principles", "Advanced Python"],
        recommended_courses: [
          {
            name: "Advanced Deep Learning with PyTorch",
            description: "Focuses on CNNs, RNNs, and deployment on cloud platforms.",
            source_doc: "https://deeplearning.com/adv-dl"
          },
          {
            name: "Introduction to MLOps and Deployment",
            description: "Covers productionizing models using Docker and Kubernetes.",
            source_doc: "https://coursera.org/mlops-intro"
          }
        ]
      };
      setAdviceData(mockData);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Career & Course Advisor AI
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get personalized career guidance and course recommendations tailored to your goals
          </p>
        </div>

        {/* Input Card */}
        <div className="mb-8">
          <form onSubmit={handleSubmit} className="relative">
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask me anything... e.g., How do I become a Data Scientist?"
              className="h-14 pr-32 text-base rounded-xl shadow-[var(--shadow-soft)] border-2 focus-visible:ring-2 focus-visible:ring-primary"
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={!query.trim() || isLoading}
              className="absolute right-2 top-2 h-10 px-6 rounded-lg bg-primary hover:bg-primary-glow text-primary-foreground font-semibold transition-all"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Analyzing
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get Advice
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Results Section */}
        {adviceData && (
          <div className="space-y-6">
            <AdviceCard title={adviceData.title} summary={adviceData.summary} />
            <SkillsGapCard skills={adviceData.skills_gap} />
            <CoursesCard courses={adviceData.recommended_courses} />
          </div>
        )}

        {/* Empty State */}
        {!adviceData && !isLoading && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Ready to explore your career path?
            </h3>
            <p className="text-muted-foreground">
              Enter your career question above to get started
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
