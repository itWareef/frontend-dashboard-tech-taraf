import imgProfile from "../../../assets/imgProfile.png";

const UserProfile = () => {
  const now = new Date();

  const time = now.toLocaleTimeString("ar-SA", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = now.toLocaleDateString("ar-SA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex w-full flex-col items-center space-y-4 rounded-lg bg-card p-6 py-10 shadow-md overflow-hidden">
      <figure className="text-center">
        <img
          src={imgProfile}
          alt="صورة الملف الشخصي"
          className="mx-auto h-24 w-24 rounded-full object-cover border-2 border-primary"
        />
        <figcaption className="mt-3 text-lg font-medium text-muted">
          محمد العبيد
        </figcaption>
      </figure>

      <p className="text-center text-secondary">نتمنى لك يومًا سعيدًا</p>

      <div className="space-y-1 text-center text-muted">
        <div className="text-2xl font-bold">{time}</div>
        <div className="text-sm">{date}</div>
      </div>
    </div>
  );
};

export default UserProfile;
