import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  Target, 
  Users, 
  Award, 
  Play, 
  Clock, 
  TrendingUp,
  BarChart3,
  Calendar,
  Info
} from "lucide-react";

interface LeaguePageProps {
  league: string;
  variant: 'laliga' | 'epl' | 'bundesliga' | 'seriea' | 'ligue1';
}

const leagueData = {
  laliga: {
    name: "La Liga",
    country: "Spain",
    gradient: "bg-gradient-laliga",
    predictions: {
      winner: "Real Madrid",
      topScorers: [
        { name: "Vinícius Jr.", team: "Real Madrid", goals: 28, probability: 87 },
        { name: "Robert Lewandowski", team: "Barcelona", goals: 25, probability: 76 },
        { name: "Antoine Griezmann", team: "Atlético Madrid", goals: 22, probability: 68 }
      ],
      topAssists: [
        { name: "Luka Modrić", team: "Real Madrid", assists: 15, probability: 82 },
        { name: "Pedri", team: "Barcelona", assists: 13, probability: 74 },
        { name: "Marcos Llorente", team: "Atlético Madrid", assists: 11, probability: 69 }
      ],
      playerOfSeason: "Jude Bellingham",
      teamOfSeason: [
        { name: "Thibaut Courtois", position: "GK", team: "Real Madrid", rating: 8.9 },
        { name: "Antonio Rüdiger", position: "CB", team: "Real Madrid", rating: 8.8 },
        { name: "Pau Cubarsí", position: "CB", team: "Barcelona", rating: 8.6 },
        { name: "Dani Carvajal", position: "CB", team: "Real Madrid", rating: 8.7 },
        { name: "Ferland Mendy", position: "LWB", team: "Real Madrid", rating: 8.5 },
        { name: "Jude Bellingham", position: "CM", team: "Real Madrid", rating: 9.2 },
        { name: "Rodri", position: "CM", team: "Manchester City", rating: 8.9 },
        { name: "Pedri", position: "RWB", team: "Barcelona", rating: 8.7 },
        { name: "Vinícius Jr.", position: "AM", team: "Real Madrid", rating: 9.0 },
        { name: "Lamine Yamal", position: "AM", team: "Barcelona", rating: 8.6 },
        { name: "Robert Lewandowski", position: "ST", team: "Barcelona", rating: 8.8 }
      ]
    },
    liveMatch: {
      homeTeam: "Real Madrid",
      awayTeam: "Barcelona",
      score: "2-1",
      time: "78'",
      events: [
        { time: "15'", event: "Goal", player: "Vinícius Jr.", team: "Real Madrid" },
        { time: "34'", event: "Goal", player: "Robert Lewandowski", team: "Barcelona" },
        { time: "67'", event: "Goal", player: "Jude Bellingham", team: "Real Madrid" }
      ]
    },
    facts: [
      {
        type: "Historical",
        title: "El Clásico Legacy",
        content: "Real Madrid and Barcelona have met 253 times in official competitions, with Real Madrid leading 103-100."
      },
      {
        type: "Current",
        title: "Season Form",
        content: "Real Madrid has won 8 of their last 10 matches, scoring an average of 2.3 goals per game."
      },
      {
        type: "Fun",
        title: "Stadium Record",
        content: "Santiago Bernabéu can hold 81,044 fans and is known for its iconic white architecture and retractable roof."
      }
    ]
  },
  epl: {
    name: "Premier League",
    country: "England",
    gradient: "bg-gradient-epl",
    predictions: {
      winner: "Manchester City",
      topScorers: [
        { name: "Erling Haaland", team: "Manchester City", goals: 31, probability: 89 },
        { name: "Mohamed Salah", team: "Liverpool", goals: 26, probability: 81 },
        { name: "Harry Kane", team: "Bayern Munich", goals: 23, probability: 74 }
      ],
      topAssists: [
        { name: "Kevin De Bruyne", team: "Manchester City", assists: 18, probability: 85 },
        { name: "Bruno Fernandes", team: "Manchester United", assists: 14, probability: 76 },
        { name: "Martin Ødegaard", team: "Arsenal", assists: 12, probability: 71 }
      ],
      playerOfSeason: "Erling Haaland",
      teamOfSeason: [
        { name: "Alisson", position: "GK", team: "Liverpool", rating: 8.8 },
        { name: "Virgil van Dijk", position: "CB", team: "Liverpool", rating: 8.9 },
        { name: "William Saliba", position: "CB", team: "Arsenal", rating: 8.7 },
        { name: "Kyle Walker", position: "CB", team: "Manchester City", rating: 8.6 },
        { name: "Andy Robertson", position: "LWB", team: "Liverpool", rating: 8.5 },
        { name: "Kevin De Bruyne", position: "CM", team: "Manchester City", rating: 9.1 },
        { name: "Rodri", position: "CM", team: "Manchester City", rating: 8.9 },
        { name: "Bukayo Saka", position: "RWB", team: "Arsenal", rating: 8.7 },
        { name: "Martin Ødegaard", position: "AM", team: "Arsenal", rating: 8.6 },
        { name: "Mohamed Salah", position: "AM", team: "Liverpool", rating: 8.9 },
        { name: "Erling Haaland", position: "ST", team: "Manchester City", rating: 9.3 }
      ]
    },
    liveMatch: {
      homeTeam: "Manchester City",
      awayTeam: "Arsenal",
      score: "1-0",
      time: "62'",
      events: [
        { time: "23'", event: "Goal", player: "Erling Haaland", team: "Manchester City" },
        { time: "45'", event: "Yellow Card", player: "Thomas Partey", team: "Arsenal" },
        { time: "58'", event: "Substitution", player: "Gabriel Jesus", team: "Arsenal" }
      ]
    },
    facts: [
      {
        type: "Historical",
        title: "Manchester Derby",
        content: "Manchester City and Manchester United have met 190 times, with United leading 77-57."
      },
      {
        type: "Current",
        title: "Title Race",
        content: "Manchester City has won 5 of the last 6 Premier League titles, establishing their dominance."
      },
      {
        type: "Fun",
        title: "Etihad Atmosphere",
        content: "The Etihad Stadium's roof can be heard from 2 miles away when 55,000 fans sing in unison."
      }
    ]
  },
  bundesliga: {
    name: "Bundesliga",
    country: "Germany",
    gradient: "bg-gradient-bundesliga",
    predictions: {
      winner: "Bayern Munich",
      topScorers: [
        { name: "Harry Kane", team: "Bayern Munich", goals: 29, probability: 87 },
        { name: "Victor Boniface", team: "Bayer Leverkusen", goals: 21, probability: 73 },
        { name: "Serhou Guirassy", team: "VfB Stuttgart", goals: 19, probability: 68 }
      ],
      topAssists: [
        { name: "Thomas Müller", team: "Bayern Munich", assists: 16, probability: 84 },
        { name: "Florian Wirtz", team: "Bayer Leverkusen", assists: 13, probability: 78 },
        { name: "Jamal Musiala", team: "Bayern Munich", assists: 11, probability: 72 }
      ],
      playerOfSeason: "Harry Kane",
      teamOfSeason: [
        { name: "Manuel Neuer", position: "GK", team: "Bayern Munich", rating: 8.7 },
        { name: "Antonio Rüdiger", position: "CB", team: "Real Madrid", rating: 8.8 },
        { name: "Jonathan Tah", position: "CB", team: "Bayer Leverkusen", rating: 8.5 },
        { name: "Dayot Upamecano", position: "CB", team: "Bayern Munich", rating: 8.4 },
        { name: "Alphonso Davies", position: "LWB", team: "Bayern Munich", rating: 8.4 },
        { name: "Joshua Kimmich", position: "CM", team: "Bayern Munich", rating: 8.8 },
        { name: "Granit Xhaka", position: "CM", team: "Bayer Leverkusen", rating: 8.6 },
        { name: "Jeremie Frimpong", position: "RWB", team: "Bayer Leverkusen", rating: 8.6 },
        { name: "Jamal Musiala", position: "AM", team: "Bayern Munich", rating: 8.9 },
        { name: "Florian Wirtz", position: "AM", team: "Bayer Leverkusen", rating: 8.8 },
        { name: "Harry Kane", position: "ST", team: "Bayern Munich", rating: 9.2 }
      ]
    },
    liveMatch: {
      homeTeam: "Bayern Munich",
      awayTeam: "Borussia Dortmund",
      score: "3-1",
      time: "89'",
      events: [
        { time: "12'", event: "Goal", player: "Harry Kane", team: "Bayern Munich" },
        { time: "28'", event: "Goal", player: "Jamal Musiala", team: "Bayern Munich" },
        { time: "44'", event: "Goal", player: "Karim Adeyemi", team: "Borussia Dortmund" },
        { time: "76'", event: "Goal", player: "Thomas Müller", team: "Bayern Munich" }
      ]
    },
    facts: [
      {
        type: "Historical",
        title: "Der Klassiker",
        content: "Bayern Munich and Borussia Dortmund have met 133 times, with Bayern leading 68-33."
      },
      {
        type: "Current",
        title: "Bundesliga Dominance",
        content: "Bayern Munich has won 11 consecutive Bundesliga titles from 2013-2023."
      },
      {
        type: "Fun",
        title: "Allianz Arena",
        content: "The Allianz Arena can change colors and is visible from 75km away on clear days."
      }
    ]
  },
  seriea: {
    name: "Serie A",
    country: "Italy",
    gradient: "bg-gradient-seriea",
    predictions: {
      winner: "Inter Milan",
      topScorers: [
        { name: "Lautaro Martínez", team: "Inter Milan", goals: 27, probability: 85 },
        { name: "Victor Osimhen", team: "Napoli", goals: 24, probability: 79 },
        { name: "Dusan Vlahović", team: "Juventus", goals: 21, probability: 71 }
      ],
      topAssists: [
        { name: "Khvicha Kvaratskhelia", team: "Napoli", assists: 14, probability: 81 },
        { name: "Nicolo Barella", team: "Inter Milan", assists: 12, probability: 75 },
        { name: "Federico Chiesa", team: "Juventus", assists: 10, probability: 69 }
      ],
      playerOfSeason: "Lautaro Martínez",
      teamOfSeason: [
        { name: "Mike Maignan", position: "GK", team: "AC Milan", rating: 8.6 },
        { name: "Alessandro Bastoni", position: "CB", team: "Inter Milan", rating: 8.7 },
        { name: "Kim Min-jae", position: "CB", team: "Napoli", rating: 8.5 },
        { name: "Milan Škriniar", position: "CB", team: "Inter Milan", rating: 8.4 },
        { name: "Federico Dimarco", position: "LWB", team: "Inter Milan", rating: 8.3 },
        { name: "Nicolo Barella", position: "CM", team: "Inter Milan", rating: 8.8 },
        { name: "Marcelo Brozović", position: "CM", team: "Inter Milan", rating: 8.6 },
        { name: "Denzel Dumfries", position: "RWB", team: "Inter Milan", rating: 8.4 },
        { name: "Khvicha Kvaratskhelia", position: "AM", team: "Napoli", rating: 8.9 },
        { name: "Rafael Leão", position: "AM", team: "AC Milan", rating: 8.7 },
        { name: "Lautaro Martínez", position: "ST", team: "Inter Milan", rating: 9.0 }
      ]
    },
    liveMatch: {
      homeTeam: "Inter Milan",
      awayTeam: "AC Milan",
      score: "2-1",
      time: "84'",
      events: [
        { time: "19'", event: "Goal", player: "Lautaro Martínez", team: "Inter Milan" },
        { time: "35'", event: "Goal", player: "Rafael Leão", team: "AC Milan" },
        { time: "71'", event: "Goal", player: "Nicolo Barella", team: "Inter Milan" }
      ]
    },
    facts: [
      {
        type: "Historical",
        title: "Derby della Madonnina",
        content: "Inter and AC Milan have shared the San Siro stadium since 1947, creating unique derby atmosphere."
      },
      {
        type: "Current",
        title: "Scudetto Race",
        content: "Inter Milan won their 20th Serie A title in 2024, ending Juventus and AC Milan's recent dominance."
      },
      {
        type: "Fun",
        title: "San Siro Legacy",
        content: "The San Siro has hosted 6 Champions League finals, more than any other stadium in the world."
      }
    ]
  },
  ligue1: {
    name: "Ligue 1",
    country: "France",
    gradient: "bg-gradient-ligue1",
    predictions: {
      winner: "Paris Saint-Germain",
      topScorers: [
        { name: "Kylian Mbappé", team: "Paris Saint-Germain", goals: 33, probability: 91 },
        { name: "Alexandre Lacazette", team: "Olympique Lyon", goals: 19, probability: 74 },
        { name: "Wissam Ben Yedder", team: "AS Monaco", goals: 17, probability: 68 }
      ],
      topAssists: [
        { name: "Ousmane Dembélé", team: "Paris Saint-Germain", assists: 15, probability: 83 },
        { name: "Rayan Cherki", team: "Olympique Lyon", assists: 11, probability: 72 },
        { name: "Youssouf Fofana", team: "AS Monaco", assists: 9, probability: 67 }
      ],
      playerOfSeason: "Kylian Mbappé",
      teamOfSeason: [
        { name: "Gianluigi Donnarumma", position: "GK", team: "Paris Saint-Germain", rating: 8.5 },
        { name: "Marquinhos", position: "CB", team: "Paris Saint-Germain", rating: 8.6 },
        { name: "Lucas Hernández", position: "CB", team: "Paris Saint-Germain", rating: 8.4 },
        { name: "Milan Škriniar", position: "CB", team: "Paris Saint-Germain", rating: 8.3 },
        { name: "Nuno Mendes", position: "LWB", team: "Paris Saint-Germain", rating: 8.3 },
        { name: "Warren Zaïre-Emery", position: "CM", team: "Paris Saint-Germain", rating: 8.5 },
        { name: "Vitinha", position: "CM", team: "Paris Saint-Germain", rating: 8.4 },
        { name: "Achraf Hakimi", position: "RWB", team: "Paris Saint-Germain", rating: 8.7 },
        { name: "Ousmane Dembélé", position: "AM", team: "Paris Saint-Germain", rating: 8.8 },
        { name: "Bradley Barcola", position: "AM", team: "Paris Saint-Germain", rating: 8.2 },
        { name: "Kylian Mbappé", position: "ST", team: "Paris Saint-Germain", rating: 9.4 }
      ]
    },
    liveMatch: {
      homeTeam: "Paris Saint-Germain",
      awayTeam: "Olympique Marseille",
      score: "4-0",
      time: "90'",
      events: [
        { time: "8'", event: "Goal", player: "Kylian Mbappé", team: "Paris Saint-Germain" },
        { time: "23'", event: "Goal", player: "Ousmane Dembélé", team: "Paris Saint-Germain" },
        { time: "56'", event: "Goal", player: "Kylian Mbappé", team: "Paris Saint-Germain" },
        { time: "82'", event: "Goal", player: "Bradley Barcola", team: "Paris Saint-Germain" }
      ]
    },
    facts: [
      {
        type: "Historical",
        title: "Le Classique",
        content: "PSG vs Marseille is France's biggest rivalry, with over 100 meetings since 1971."
      },
      {
        type: "Current",
        title: "Ligue 1 Dominance",
        content: "PSG has won 10 of the last 12 Ligue 1 titles, establishing unprecedented dominance."
      },
      {
        type: "Fun",
        title: "Parc des Princes",
        content: "The Parc des Princes is known for having the loudest ultras in Europe, reaching 130 decibels."
      }
    ]
  }
};

export const LeaguePage = ({ league, variant }: LeaguePageProps) => {
  const data = leagueData[variant] || leagueData.laliga;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* League Header */}
      <section className={`${data.gradient} text-white py-16 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-slide-in">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-0">
              <Trophy className="h-4 w-4 mr-2" />
              {data.country} • Premium League
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">{data.name}</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Advanced AI predictions and live analysis for {data.name} season
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Top Scorers Chart */}
        <section className="animate-slide-in">
          <Card className="p-8 shadow-league">
            <div className="flex items-center gap-3 mb-8">
              <Target className="h-6 w-6 text-destructive" />
              <h2 className="text-3xl font-bold">Top Goal Scorers Prediction</h2>
            </div>
            
            <div className="space-y-4">
              {data.predictions.topScorers.map((player, index) => (
                <div 
                  key={player.name}
                  className="flex items-center justify-between p-6 bg-muted rounded-lg hover:bg-accent/10 transition-all duration-300 animate-slide-in-right"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-primary">#{index + 1}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{player.name}</h3>
                      <p className="text-muted-foreground">{player.team}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-destructive">{player.goals}</div>
                    <Badge variant="outline" className="mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {player.probability}% likely
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Top Assists Prediction */}
        <section className="animate-slide-in">
          <Card className="p-8 shadow-league">
            <div className="flex items-center gap-3 mb-8">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Top Assist Providers Prediction</h2>
            </div>
            
            <div className="space-y-4">
              {data.predictions.topAssists.map((player, index) => (
                <div 
                  key={player.name}
                  className="flex items-center justify-between p-6 bg-muted rounded-lg hover:bg-accent/10 transition-all duration-300 animate-slide-in-right"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-primary">#{index + 1}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{player.name}</h3>
                      <p className="text-muted-foreground">{player.team}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{player.assists}</div>
                    <Badge variant="outline" className="mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {player.probability}% likely
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Player of the Season */}
        <section className="animate-slide-in">
          <Card className="p-8 shadow-league">
            <div className="flex items-center gap-3 mb-8">
              <Award className="h-6 w-6 text-accent" />
              <h2 className="text-3xl font-bold">Player of the Season Prediction</h2>
            </div>
            
            <div className="text-center p-8 bg-muted rounded-lg">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-accent to-primary rounded-full mb-6">
                <Award className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-2">{data.predictions.playerOfSeason}</h3>
              <p className="text-muted-foreground text-lg">Most Valuable Player</p>
              <Badge variant="secondary" className="mt-4 text-lg px-6 py-2">
                <Trophy className="h-4 w-4 mr-2" />
                Season's Best
              </Badge>
            </div>
          </Card>
        </section>

        {/* Team of the Season */}
        <section className="animate-slide-in">
          <Card className="p-8 shadow-league">
            <div className="flex items-center gap-3 mb-8">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Team of the Season (3-4-2-1)</h2>
            </div>
            
            <div className="bg-secondary/20 rounded-lg p-8 relative overflow-hidden">
              {/* Football Field Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full bg-gradient-to-b from-secondary/30 to-secondary/10 rounded-lg"></div>
              </div>
              
              {/* 3-4-2-1 Formation Layout */}
              <div className="relative z-10">
                {/* Striker (1) */}
                <div className="flex justify-center mb-8">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-center text-muted-foreground text-sm">Striker</h3>
                    {data.predictions.teamOfSeason.slice(10, 11).map((player) => (
                      <div key={player.name} className="bg-card p-4 rounded-lg shadow-card text-center animate-bounce-in w-32">
                        <p className="font-semibold text-sm">{player.name}</p>
                        <p className="text-xs text-muted-foreground">{player.team}</p>
                        <Badge variant="secondary" className="mt-1 text-xs">
                          ⭐ {player.rating}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Attacking Midfield (2) */}
                <div className="flex justify-center gap-4 mb-8">
                  <div className="text-center">
                    <h3 className="font-semibold text-muted-foreground text-sm mb-2">Attacking Midfield</h3>
                    <div className="flex gap-4">
                      {data.predictions.teamOfSeason.slice(8, 10).map((player, index) => (
                        <div 
                          key={player.name} 
                          className="bg-card p-4 rounded-lg shadow-card text-center animate-bounce-in w-32"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <p className="font-semibold text-sm">{player.name}</p>
                          <p className="text-xs text-muted-foreground">{player.team}</p>
                          <Badge variant="secondary" className="mt-1 text-xs">
                            ⭐ {player.rating}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Midfield (4) - LWB, CM, CM, RWB */}
                <div className="flex justify-center gap-4 mb-8">
                  <div className="text-center">
                    <h3 className="font-semibold text-muted-foreground text-sm mb-2">Midfield</h3>
                    <div className="flex gap-4">
                      {data.predictions.teamOfSeason.slice(4, 8).map((player, index) => (
                        <div 
                          key={player.name} 
                          className="bg-card p-4 rounded-lg shadow-card text-center animate-bounce-in w-32"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <p className="font-semibold text-sm">{player.name}</p>
                          <p className="text-xs text-muted-foreground">{player.team}</p>
                          <p className="text-xs text-accent font-medium">{player.position}</p>
                          <Badge variant="secondary" className="mt-1 text-xs">
                            ⭐ {player.rating}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Defense (3) */}
                <div className="flex justify-center gap-4 mb-8">
                  <div className="text-center">
                    <h3 className="font-semibold text-muted-foreground text-sm mb-2">Defense</h3>
                    <div className="flex gap-4">
                      {data.predictions.teamOfSeason.slice(1, 4).map((player, index) => (
                        <div 
                          key={player.name} 
                          className="bg-card p-4 rounded-lg shadow-card text-center animate-bounce-in w-32"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <p className="font-semibold text-sm">{player.name}</p>
                          <p className="text-xs text-muted-foreground">{player.team}</p>
                          <Badge variant="secondary" className="mt-1 text-xs">
                            ⭐ {player.rating}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Goalkeeper (1) */}
                <div className="flex justify-center">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-center text-muted-foreground text-sm">Goalkeeper</h3>
                    {data.predictions.teamOfSeason.slice(0, 1).map((player) => (
                      <div key={player.name} className="bg-card p-4 rounded-lg shadow-card text-center animate-bounce-in w-32">
                        <p className="font-semibold text-sm">{player.name}</p>
                        <p className="text-xs text-muted-foreground">{player.team}</p>
                        <Badge variant="secondary" className="mt-1 text-xs">
                          ⭐ {player.rating}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Live Match Center */}
        <section className="animate-slide-in">
          <Card className="p-8 shadow-league">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Play className="h-6 w-6 text-accent" />
                <h2 className="text-3xl font-bold">Live Match Center</h2>
              </div>
              <Badge variant="destructive" className="animate-pulse">
                <Clock className="h-3 w-3 mr-1" />
                LIVE
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Match Score */}
              <div className="text-center p-8 bg-muted rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{data.liveMatch.homeTeam}</h3>
                    <p className="text-muted-foreground">Home</p>
                  </div>
                  <div className="text-4xl font-bold text-primary">
                    {data.liveMatch.score}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{data.liveMatch.awayTeam}</h3>
                    <p className="text-muted-foreground">Away</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  {data.liveMatch.time}
                </Badge>
                
                {/* Streaming Placeholder */}
                <div className="mt-6 p-8 bg-black/10 rounded-lg border-2 border-dashed border-border">
                  <Play className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">Live Stream Available</p>
                  <Button variant="outline" className="mt-4">
                    <Play className="h-4 w-4 mr-2" />
                    Watch Live
                  </Button>
                </div>
              </div>
              
              {/* Match Events */}
              <div>
                <h3 className="text-xl font-bold mb-4">Match Events</h3>
                <div className="space-y-3">
                  {data.liveMatch.events.map((event, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-4 bg-muted rounded-lg animate-slide-in-right"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <Badge variant="outline">{event.time}</Badge>
                      <Target className="h-4 w-4 text-destructive" />
                      <div>
                        <p className="font-semibold">{event.event}: {event.player}</p>
                        <p className="text-sm text-muted-foreground">{event.team}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Team Facts */}
        <section className="animate-slide-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.facts.map((fact, index) => (
              <Card 
                key={fact.type}
                className="p-6 hover:shadow-card transition-all duration-300 transform hover:-translate-y-2 animate-bounce-in group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Info className={`h-5 w-5 ${
                    fact.type === 'Historical' ? 'text-secondary' :
                    fact.type === 'Current' ? 'text-primary' : 'text-accent'
                  }`} />
                  <Badge variant="outline" className="text-xs">
                    {fact.type} Fact
                  </Badge>
                </div>
                <h3 className="font-semibold mb-3 group-hover:text-primary transition-colors">
                  {fact.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {fact.content}
                </p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};