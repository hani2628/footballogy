import { Button } from "@/components/ui/button";
import { Trophy, Target, Users, Calendar } from "lucide-react";

interface NavbarProps {
  activeLeague: string;
  onLeagueChange: (league: string) => void;
}

const leagues = [
  { id: 'home', name: 'Home', variant: 'hero' as const, icon: Trophy },
  { id: 'laliga', name: 'La Liga', variant: 'laliga' as const, icon: Target },
  { id: 'epl', name: 'Premier League', variant: 'epl' as const, icon: Target },
  { id: 'bundesliga', name: 'Bundesliga', variant: 'bundesliga' as const, icon: Target },
  { id: 'seriea', name: 'Serie A', variant: 'seriea' as const, icon: Target },
  { id: 'ligue1', name: 'Ligue 1', variant: 'ligue1' as const, icon: Target },
];

export const Navbar = ({ activeLeague, onLeagueChange }: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-border shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 animate-slide-in">
            <div className="relative">
              <Trophy className="h-8 w-8 text-primary animate-pulse-glow" />
              <div className="absolute inset-0 animate-float">
                <Trophy className="h-8 w-8 text-accent opacity-30" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-football bg-clip-text text-transparent">
                FootballPro
              </h1>
              <p className="text-sm text-muted-foreground">Predict & Discover</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap items-center gap-2 animate-slide-in-right">
            {leagues.map((league, index) => {
              const Icon = league.icon;
              return (
                <Button
                  key={league.id}
                  variant={activeLeague === league.id ? league.variant : 'ghost'}
                  size="sm"
                  onClick={() => onLeagueChange(league.id)}
                  className={`relative transition-all duration-300 ${
                    activeLeague === league.id 
                      ? 'animate-bounce-in' 
                      : 'hover:scale-105'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{league.name}</span>
                  {activeLeague === league.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-accent rounded-full animate-pulse" />
                  )}
                </Button>
              );
            })}
          </div>

          {/* Quick Stats */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground animate-slide-in">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>5 Leagues</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Live Updates</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};