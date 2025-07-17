import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end px-6">
      <div className="text-center max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-hero-text-primary mb-6 leading-tight">
            Yosra Triki
          </h1>
          
          <p className="text-xl md:text-2xl text-hero-text-secondary mb-12 font-light leading-relaxed">
            Passionate Frontend Developer
          </p>
          
          <Button 
            variant="hero" 
            className="animate-scale-in"
            onClick={() => {
              // Future: Navigate to projects section
              console.log("View My Projects clicked");
            }}
          >
            View My Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;