import { Card } from "./ui/card";
import { Trash2, Play } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface VideoCardProps {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  onDelete: (id: string) => void;
}

export function VideoCard({ id, title, description, videoUrl, onDelete }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card className="overflow-hidden group relative bg-card hover:border-primary transition-all">
      <div className="aspect-video bg-secondary relative overflow-hidden">
        {!isPlaying ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer" onClick={() => setIsPlaying(true)}>
            <div className="bg-primary/90 p-4 rounded-full group-hover:bg-primary transition-colors">
              <Play className="h-8 w-8 text-white" />
            </div>
          </div>
        ) : null}
        <video 
          src={videoUrl} 
          controls 
          className="w-full h-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button 
          variant="destructive" 
          size="sm" 
          onClick={() => onDelete(id)}
          className="gap-2"
        >
          <Trash2 className="h-4 w-4" />
          Delete
        </Button>
      </div>
    </Card>
  );
}
