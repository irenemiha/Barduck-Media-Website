import { VideoCard } from "./VideoCard";
import { UploadDialog } from "./UploadDialog";

interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
}

interface PortfolioProps {
  videos: Video[];
  onUpload: (video: { title: string; description: string; file: File }) => void;
  onDelete: (id: string) => void;
}

export function Portfolio({ videos, onUpload, onDelete }: PortfolioProps) {
  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h1 className="mb-4">Video Portfolio</h1>
            <p className="text-muted-foreground">
              Showcase your best multimedia work. Upload and manage your video projects.
            </p>
          </div>
          <UploadDialog onUpload={onUpload} />
        </div>

        {videos.length === 0 ? (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="bg-secondary/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="mb-3">No videos yet</h2>
              <p className="text-muted-foreground mb-6">
                Start building your portfolio by uploading your first video.
              </p>
              <UploadDialog onUpload={onUpload} />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                id={video.id}
                title={video.title}
                description={video.description}
                videoUrl={video.videoUrl}
                onDelete={onDelete}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
