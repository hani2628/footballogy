import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Award, Users, TrendingUp } from "lucide-react";

interface PredictionCardProps {
  league: string;
  predictions: {
    winner: string;
    topScorer: { name: string; goals: number };
    topAssist: { name: string; assists: number };
    playerOfSeason: string;
    confidence: number;
  };
  variant: 'laliga' | 'epl' | 'bundesliga' | 'seriea' | 'ligue1';
}

const leagueGradients = {
  laliga: 'bg-gradient-laliga',
  epl: 'bg-gradient-epl',
  bundesliga: 'bg-gradient-bundesliga',
  seriea: 'bg-gradient-seriea',
  ligue1: 'bg-gradient-ligue1',
};

export const PredictionCard = ({ league, predictions, variant }: PredictionCardProps) => {
  return (
    <Card className={`relative overflow-hidden shadow-league hover:shadow-glow transition-all duration-500 transform hover:scale-105 animate-slide-in group`}>
      {/* Gradient Header */}
      <div className={`${leagueGradients[variant]} p-6 text-white relative`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">{league}</h3>
            <Badge variant="secondary" className="bg-white/20 text-white border-0">
              <TrendingUp className="h-3 w-3 mr-1" />
              {predictions.confidence}% Accuracy
            </Badge>
          </div>
          
          {/* League Winner */}
          <div className="flex items-center gap-3 mb-3">
            <Trophy className="h-6 w-6 text-accent animate-pulse" />
            <div>
              <p className="text-sm opacity-90">League Champion</p>
              <p className="text-xl font-bold">{predictions.winner}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Prediction Details */}
      <div className="p-6 space-y-4">
        {/* Top Scorer */}
        <div className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-accent/10 transition-colors group-hover:animate-slide-in-right">
          <div className="flex items-center gap-3">
            <Target className="h-5 w-5 text-destructive" />
            <div>
              <p className="text-sm text-muted-foreground">Top Scorer</p>
              <p className="font-semibold">{predictions.topScorer.name}</p>
            </div>
          </div>
          <Badge variant="outline" className="font-bold">
            {predictions.topScorer.goals} goals
          </Badge>
        </div>

        {/* Top Assist */}
        <div className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-accent/10 transition-colors group-hover:animate-slide-in-right" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Top Assists</p>
              <p className="font-semibold">{predictions.topAssist.name}</p>
            </div>
          </div>
          <Badge variant="outline" className="font-bold">
            {predictions.topAssist.assists} assists
          </Badge>
        </div>

        {/* Player of the Season */}
        <div className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-accent/10 transition-colors group-hover:animate-slide-in-right" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center gap-3">
            <Award className="h-5 w-5 text-accent" />
            <div>
              <p className="text-sm text-muted-foreground">Player of the Season</p>
              <p className="font-semibold">{predictions.playerOfSeason}</p>
            </div>
          </div>
          <Badge variant="secondary" className="font-bold">
            Best Player
          </Badge>
        </div>
      </div>

      {/* Animated Background Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={`absolute inset-0 ${leagueGradients[variant]} opacity-5`}></div>
      </div>
    </Card>
  );
};