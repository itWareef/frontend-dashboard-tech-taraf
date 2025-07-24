import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

export const WelcomeOverlay = ({ userName, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000;
    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        onComplete();
      }
    };

    requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(updateProgress);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
      <div className="bg-background p-8 rounded-lg max-w-md w-full mx-4 border border-border">
        <div className="flex flex-col items-center gap-4 text-center">
          <CheckCircle className="w-12 h-12 text-green-500" />
          <h2 className="text-2xl font-bold">مرحباً بعودتك، {userName}!</h2>
          <p className="text-muted-foreground">جاري تحميل لوحة التحكم...</p>
          <div className="w-full bg-secondary/20 h-2 rounded-full mt-2">
            <div
              className="bg-secondary h-2 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
