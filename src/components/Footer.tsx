import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Twitter, Twitch, LayoutGrid } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/80 border-t border-border py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-neon-blue">ARENA<span className="text-neon-purple">X</span></h3>
            <p className="text-muted-foreground max-w-xs">
              The future of esports tournaments starts here. Join the revolution in transparent, secure tournament management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-neon-blue transition-colors">
                <Twitch size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-neon-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-neon-blue transition-colors">
                <LayoutGrid size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-neon-blue transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-neon-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tournaments" className="text-muted-foreground hover:text-neon-blue transition-colors">
                  Tournaments
                </Link>
              </li>
              <li>
                <Link to="/verification" className="text-muted-foreground hover:text-neon-blue transition-colors">
                  Verification Process
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-muted-foreground hover:text-neon-blue transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Dashboards</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/organiser-dashboard" className="text-muted-foreground hover:text-neon-blue transition-colors">
                  Tournament Organiser
                </Link>
              </li>
              <li>
                <Link to="/player-dashboard" className="text-muted-foreground hover:text-neon-blue transition-colors">
                  Player Dashboard
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-neon-blue transition-colors">
                  Prize Pool Tracking
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-neon-blue" />
                <span className="text-muted-foreground">support@neonarena.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-neon-blue" />
                <span className="text-muted-foreground">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-neon-blue" />
                <span className="text-muted-foreground">Esports Boulevard, Digital City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ArenaX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
