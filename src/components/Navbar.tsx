import { Video } from "lucide-react";
import { Button } from "./ui/button";

interface NavbarProps {
  currentPage: "home" | "portfolio";
  onNavigate: (page: "home" | "portfolio") => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate("home")}>
            <div className="bg-primary p-2 rounded">
              <Video className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl">BARDUCK MEDIA</span>
          </div>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate("home")}
              className={`transition-colors ${
                currentPage === "home" ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate("portfolio")}
              className={`transition-colors ${
                currentPage === "portfolio" ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Portfolio
            </button>
            <Button>Contact Us</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
