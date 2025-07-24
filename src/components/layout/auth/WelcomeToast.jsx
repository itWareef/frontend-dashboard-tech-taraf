import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function WelcomeToast({ delay = 3000 }) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, delay);

    return () => clearTimeout(timer);
  }, [navigate, delay]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999999999999999999]">
      <div className="bg-background border border-border rounded-lg p-6 max-w-md w-full mx-4 shadow-lg animate-in fade-in zoom-in-95">
        <div className="flex flex-col items-center text-center gap-4">
          <CheckCircle className="h-12 w-12 text-green-500" />
          <h2 className="text-2xl font-bold">مرحباً بعودتك، </h2>
          <p className="text-muted-foreground">يتم تحويلك إلى لوحة التحكم...</p>
          <div className="w-full bg-secondary/20 h-2 rounded-full mt-2">
            <div
              className="bg-secondary h-2 rounded-full animate-progress"
              style={{
                animationDuration: `${delay}ms`,
                animationTimingFunction: "linear",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
