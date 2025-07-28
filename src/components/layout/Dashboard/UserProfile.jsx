import { useAuthContext } from "@/context/AuthContext";
import imgPlaceholder from "../../../assets/placeholder.svg";
const now = new Date();

const time = now.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const dayName = now.toLocaleDateString("ar-EG", {
  weekday: "long",
});

const restOfDate = now.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const UserProfile = () => {
  const { user } = useAuthContext();
  return (
    <div className="col-span-2 row-span-2 col-start-11 row-start-1 gird place-content-center place-items-center space-y-3  bg-card rounded-[20px]">
      <figure className="text-center">
        <img
          src={user?.picture || imgPlaceholder}
          alt="صورة الملف الشخصي"
          className="mx-auto h-24 w-24 rounded-full object-cover border-2 border-primary"
        />
        <figcaption className="mt-3 text-2xl font-bold  text-muted">
          {user?.name || "اسم المستخدم  "}
        </figcaption>
      </figure>

      <p className="text-center text-lg mb-5 font-bold text-secondary">
        نتمنى لك يومًا سعيدًا
      </p>

      <div className="space-y-3  text-center text-muted font-bold">
        <div className="text-4xl ">{time}</div>
        <div className="text-sm">
          {dayName} : {restOfDate}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
