import { GraduationCap, Briefcase, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary-glow/5 to-transparent">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">AI-Powered Career Guidance</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent animate-fade-in">
          Your Personal AI Career & Course Advisor
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
          Get intelligent recommendations for courses, career paths, and professional development tailored to your goals and interests.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 animate-slide-up">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border shadow-sm">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Course Recommendations</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border shadow-sm">
            <Briefcase className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Career Path Guidance</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border shadow-sm">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Personalized Insights</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
