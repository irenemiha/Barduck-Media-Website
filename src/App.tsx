import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner@2.0.3";

interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "portfolio">("home");
  const [videos, setVideos] = useState<Video[]>([]);

  const handleUpload = (video: { title: string; description: string; file: File }) => {
    const videoUrl = URL.createObjectURL(video.file);
    const newVideo: Video = {
      id: Date.now().toString(),
      title: video.title,
      description: video.description,
      videoUrl,
    };
    setVideos([newVideo, ...videos]);
    toast.success("Video uploaded successfully!");
  };

  const handleDelete = (id: string) => {
    const video = videos.find((v) => v.id === id);
    if (video) {
      URL.revokeObjectURL(video.videoUrl);
    }
    setVideos(videos.filter((v) => v.id !== id));
    toast.success("Video deleted successfully!");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {currentPage === "home" ? (
        <Hero onNavigateToPortfolio={() => setCurrentPage("portfolio")} />
      ) : (
        <Portfolio videos={videos} onUpload={handleUpload} onDelete={handleDelete} />
      )}
      
      <Toaster />
    </div>
  );
}
