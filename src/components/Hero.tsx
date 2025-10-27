import { Button } from "./ui/button";
import { Play } from "lucide-react";

interface HeroProps {
  onNavigateToPortfolio: () => void;
}

export function Hero({ onNavigateToPortfolio }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1758553026412-bc1da0ebd366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWx0aW1lZGlhJTIwcHJvZHVjdGlvbiUyMHN0dWRpb3xlbnwxfHx8fDE3NjE1MTgyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl mb-6">
            Bringing Your Vision
            <span className="block text-primary">To Life</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We create stunning multimedia experiences that captivate audiences and elevate brands through innovative video production and creative storytelling.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={onNavigateToPortfolio}
              className="gap-2"
            >
              <Play className="h-5 w-5" />
              View Portfolio
            </Button>
            <Button size="lg" variant="outline">
              Get Started
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
