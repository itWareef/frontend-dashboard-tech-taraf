import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-md w-full text-center">
        <div className="relative mb-8">
          <span
            className="text-9xl font-bold opacity-20 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ color: "var(--primary)" }}
          >
            404
          </span>
          <div className="relative">
            <h1
              className="text-5xl font-bold mb-2"
              style={{ color: "var(--primary)" }}
            >
              الصفحة غير موجودة
            </h1>
            <p
              className="text-lg mb-8"
              style={{ color: "var(--muted-foreground)" }}
            >
              عذراً! الصفحة التي تبحث عنها غير موجودة أو تم نقلها
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 text-white font-medium rounded-lg shadow-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              backgroundColor: "var(--primary)",
              "&:hover": {
                backgroundColor: "var(--secondary)",
              },
              "--tw-ring-color": "var(--ring)",
            }}
          >
            العودة
          </button>
          <Link
            to="/"
            className="px-6 py-3 border font-medium rounded-lg shadow-sm transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 text-center"
            style={{
              borderColor: "var(--primary)",
              color: "var(--primary)",
              backgroundColor: "var(--background)",
              "&:hover": {
                backgroundColor: "var(--popover)",
              },
              "--tw-ring-color": "var(--ring)",
            }}
          >
            الصفحة الرئيسية
          </Link>
        </div>

        {/* Additional Help */}
        <div
          className="mt-10 text-sm"
          style={{ color: "var(--muted-foreground)" }}
        >
          <p>
            تحتاج مساعدة؟{" "}
            <a
              href="mailto:support@example.com"
              style={{ color: "var(--primary)" }}
              className="hover:underline"
            >
              تواصل مع الدعم الفني
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
