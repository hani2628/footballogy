import { PredictionCard } from "./PredictionCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Target, 
  TrendingUp, 
  Calendar, 
  Users, 
  BarChart3,
  Zap,
  Globe
} from "lucide-react";

const mockPredictions = [
  {
    league: "La Liga",
    variant: 'laliga' as const,
    predictions: {
      winner: "Real Madrid",
      topScorer: { name: "Vinícius Jr.", goals: 28 },
      topAssist: { name: "Luka Modrić", assists: 15 },
      playerOfSeason: "Jude Bellingham",
      confidence: 87
    }
  },
  {
    league: "Premier League",
    variant: 'epl' as const,
    predictions: {
      winner: "Manchester City",
      topScorer: { name: "Erling Haaland", goals: 32 },
      topAssist: { name: "Kevin De Bruyne", assists: 18 },
      playerOfSeason: "Erling Haaland",
      confidence: 84
    }
  },
  {
    league: "Bundesliga",
    variant: 'bundesliga' as const,
    predictions: {
      winner: "Bayern Munich",
      topScorer: { name: "Harry Kane", goals: 30 },
      topAssist: { name: "Jamal Musiala", assists: 14 },
      playerOfSeason: "Harry Kane",
      confidence: 91
    }
  },
  {
    league: "Serie A",
    variant: 'seriea' as const,
    predictions: {
      winner: "Inter Milan",
      topScorer: { name: "Lautaro Martínez", goals: 25 },
      topAssist: { name: "Hakan Çalhanoğlu", assists: 12 },
      playerOfSeason: "Lautaro Martínez",
      confidence: 79
    }
  },
  {
    league: "Ligue 1",
    variant: 'ligue1' as const,
    predictions: {
      winner: "Paris Saint-Germain",
      topScorer: { name: "Kylian Mbappé", goals: 29 },
      topAssist: { name: "Neymar Jr.", assists: 16 },
      playerOfSeason: "Kylian Mbappé",
      confidence: 93
    }
  }
];

const features = [
  {
    icon: TrendingUp,
    title: "AI-Powered Predictions",
    description: "Advanced machine learning models analyze thousands of data points",
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "Real-Time Updates",
    description: "Live match data and instant prediction adjustments",
    color: "text-accent"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep statistical analysis and performance metrics",
    color: "text-secondary"
  },
  {
    icon: Globe,
    title: "5 Top Leagues",
    description: "Complete coverage of Europe's elite football competitions",
    color: "text-destructive"
  }
];

export const HomePage = () => {
  const overallAccuracy = Math.round(
    mockPredictions.reduce((sum, pred) => sum + pred.predictions.confidence, 0) / mockPredictions.length
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-football opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-slide-in">
            <Badge 
              variant="secondary" 
              className="mb-6 text-lg px-6 py-2 bg-primary/10 text-primary border-primary/20 animate-bounce-in"
            >
              <Trophy className="h-4 w-4 mr-2" />
              AI-Powered Football Predictions
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-football bg-clip-text text-transparent leading-tight">
              Predict the Future of Football
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Get accurate predictions for winners, top scorers, and more across Europe's top 5 leagues
              with our advanced AI analysis system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button variant="hero" size="xl" className="animate-pulse-glow">
                <Target className="h-5 w-5 mr-2" />
                Explore Predictions
              </Button>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <Badge variant="outline" className="text-primary border-primary/30">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {overallAccuracy}% Accuracy
                </Badge>
                <Badge variant="outline" className="text-secondary border-secondary/30">
                  <Calendar className="h-3 w-3 mr-1" />
                  Live Updates
                </Badge>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="p-6 text-center hover:shadow-card transition-all duration-300 transform hover:-translate-y-2 animate-slide-in group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <feature.icon className={`h-12 w-12 mx-auto mb-4 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Predictions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-in">
            <h2 className="text-4xl font-bold mb-4">Season Predictions</h2>
            <p className="text-xl text-muted-foreground">
              AI-generated forecasts for Europe's top football leagues
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {mockPredictions.map((league, index) => (
              <div 
                key={league.league}
                className="animate-slide-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <PredictionCard {...league} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-bounce-in">
              <div className="text-4xl font-bold text-primary mb-2">{overallAccuracy}%</div>
              <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
            </div>
            <div className="animate-bounce-in" style={{ animationDelay: '100ms' }}>
              <div className="text-4xl font-bold text-accent mb-2">5</div>
              <div className="text-sm text-muted-foreground">Top Leagues</div>
            </div>
            <div className="animate-bounce-in" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl font-bold text-secondary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Teams Analyzed</div>
            </div>
            <div className="animate-bounce-in" style={{ animationDelay: '300ms' }}>
              <div className="text-4xl font-bold text-destructive mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Live Updates</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};