import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HomePage } from "@/components/HomePage";
import { LeaguePage } from "@/components/LeaguePage";

const Index = () => {
  const [activeLeague, setActiveLeague] = useState('home');

  const renderContent = () => {
    switch (activeLeague) {
      case 'home':
        return <HomePage />;
      case 'laliga':
        return <LeaguePage league="La Liga" variant="laliga" />;
      case 'epl':
        return <LeaguePage league="Premier League" variant="epl" />;
      case 'bundesliga':
        return <LeaguePage league="Bundesliga" variant="bundesliga" />;
      case 'seriea':
        return <LeaguePage league="Serie A" variant="seriea" />;
      case 'ligue1':
        return <LeaguePage league="Ligue 1" variant="ligue1" />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeLeague={activeLeague} onLeagueChange={setActiveLeague} />
      <main>
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
