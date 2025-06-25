import imgProfile from "../../../assets/imgProfile.png";

const UserProfile = () => {
  return (
    <div className="w-full  py-10 overflow-hidden bg-card rounded-lg p-6 shadow-md flex flex-col items-center  space-y-4">
      <figure className="text-center">
        <img
          src={imgProfile}
          alt="profile-img  "
          className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-primary"
        />
        <figcaption className="mt-3 text-lg font-medium text-muted">
          محمد العبيد
        </figcaption>
      </figure>

      <p className="text-center text-secondary">نتمنى لك يومًا سعيدًا</p>

      <div className="text-center space-y-1 text-muted">
        <div className="text-2xl font-bold">
          {new Date().toLocaleTimeString("ar-SA", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
        <div className="text-sm">
          {new Date().toLocaleDateString("ar-SA", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
