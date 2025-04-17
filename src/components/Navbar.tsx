import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const isMobile = useIsMobile();

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full glassmorphism">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-orbitron font-bold tracking-wider text-neon-blue">
                ARENA<span className="text-neon-purple">X</span>
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          {!isMobile && (
            <div className="hidden md:flex md:items-center md:justify-between md:space-x-8">
              <Link to="/" className="text-foreground hover:text-neon-blue px-2 py-1 rounded transition-colors hover:bg-white/5">
                Home
              </Link>
              <Link to="/tournaments" className="text-foreground hover:text-neon-blue px-2 py-1 rounded transition-colors hover:bg-white/5">
                Tournaments
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center text-foreground hover:text-neon-blue px-2 py-1 rounded transition-colors hover:bg-white/5">
                    Dashboards <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link to="/organiser-dashboard" className="w-full">Organiser Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/player-dashboard" className="w-full">Player Dashboard</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/verification" className="text-foreground hover:text-neon-blue px-2 py-1 rounded transition-colors hover:bg-white/5">
                Verification
              </Link>
              <Link to="/support" className="text-foreground hover:text-neon-blue px-2 py-1 rounded transition-colors hover:bg-white/5">
                Support
              </Link>
            </div>
          )}

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-muted transition-colors">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {!isMobile ? (
              <div className="flex items-center space-x-2">
                <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/10">
                  Sign In
                </Button>
                <Button className="gradient-button">
                  Sign Up
                </Button>
              </div>
            ) : (
              <button onClick={toggleMobileMenu} className="p-2">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && isOpen && (
          <div className="md:hidden bg-background/90 backdrop-blur-md border-t border-border">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <Link to="/" className="text-foreground hover:text-neon-blue px-2 py-1" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/tournaments" className="text-foreground hover:text-neon-blue px-2 py-1" onClick={() => setIsOpen(false)}>
                Tournaments
              </Link>
              <Link to="/organiser-dashboard" className="text-foreground hover:text-neon-blue px-2 py-1" onClick={() => setIsOpen(false)}>
                Organiser Dashboard
              </Link>
              <Link to="/player-dashboard" className="text-foreground hover:text-neon-blue px-2 py-1" onClick={() => setIsOpen(false)}>
                Player Dashboard
              </Link>
              <Link to="/verification" className="text-foreground hover:text-neon-blue px-2 py-1" onClick={() => setIsOpen(false)}>
                Verification
              </Link>
              <Link to="/support" className="text-foreground hover:text-neon-blue px-2 py-1" onClick={() => setIsOpen(false)}>
                Support
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/10">
                  Sign In
                </Button>
                <Button className="gradient-button">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
