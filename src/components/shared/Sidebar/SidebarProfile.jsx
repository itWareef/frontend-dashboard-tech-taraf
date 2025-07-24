import { useAuthContext } from "@/context/AuthContext";
import { useUpdateUserProfile } from "@/hooks/Actions/userProfile/useProfileCurds";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Taraf_login_3d.png";
import imgPlaceholder from "../../../assets/placeholder.svg";

const SidebarProfile = ({ isOpen, handleOpenSidBarProfile }) => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { mutate } = useUpdateUserProfile();

  const handleNavigation = () => {
    navigate("/users");
    handleOpenSidBarProfile();
  };

  const formik = useFormik({
    initialValues: {
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      picture: null,
    },
    onSubmit: (values) => {
      const nameParts = values.name.trim().split(" ");
      const first_name = nameParts[0] || "";
      const last_name = nameParts.slice(1).join(" ") || "";

      const formData = new FormData();
      formData.append("first_name", first_name);
      formData.append("last_name", last_name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);

      if (values.picture instanceof File) {
        formData.append("picture", values.picture?.name);
        console.log(values.picture);
      }

      mutate({ data: formData });
    },
  });

  const handleImageClick = () => {
    document.getElementById("profile-picture-input").click();
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={handleOpenSidBarProfile}
          className="fixed inset-0 bg-muted/20 bg-opacity-50 z-[999999]"
        />
      )}

      <section
        className={`
          bg-sidebar h-full pt-20 overflow-x-hidden overflow-y-auto
          flex flex-col items-center gap-y-3 md:gap-y-1 lg:gap-y-20
          fixed inset-y-0 right-0 z-[9999999999999]
          transition-all duration-300 ease-out
          ${
            isOpen
              ? "translate-x-0 w-[320px]"
              : "translate-x-full md:translate-x-0"
          }
          shadow-xl md:shadow-none
          rounded-l-[12px]
          [-ms-overflow-style:none] [scrollbar-width:none] 
          [&::-webkit-scrollbar]:hidden
          will-change-transform
        `}
      >
        <div className="w-[120px] mb-10">
          <img src={Logo} alt="Taraf Logo" className="w-full" />
        </div>

        {/* الجزء المعدل فقط - صورة الملف الشخصي */}
        <figure className="text-center space-y-3 relative">
          <div className="relative group">
            <img
              src={
                formik.values.picture
                  ? URL.createObjectURL(formik.values.picture)
                  : user?.picture || imgPlaceholder
              }
              alt="صورة الملف الشخصي"
              className="mx-auto h-24 w-24 rounded-full object-cover border-2 border-primary cursor-pointer"
              onClick={handleImageClick}
            />
            <div className="absolute bottom-0 right-0 bg-primary rounded-full p-2 group-hover:opacity-100 opacity-0 transition-opacity duration-200">
              {/* <FiEdit2 className="text-white" /> */}
            </div>
          </div>
          <figcaption className="text-xl font-bold text-muted">
            {formik.values.name || "اسم المستخدم غير متوفر"}
          </figcaption>
          <p className="text-secondary">نتمنى لك يومًا سعيدًا</p>

          {/* حقل رفع الصورة المخفي */}
          <input
            id="profile-picture-input"
            type="file"
            accept="image/*"
            name="picture"
            onChange={(e) => {
              const file = e.currentTarget.files[0];
              if (file) {
                formik.setFieldValue("picture", file);
              }
            }}
            className="hidden"
          />
        </figure>

        {/* بقية النموذج كما هو بدون تعديل */}
        <form onSubmit={formik.handleSubmit} className="px-5 space-y-3 w-full">
          <div className="relative p-2 border-b border-secondary">
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="h-[30px] ps-8 py-3 w-full text-xl text-muted focus:outline-none"
              placeholder="الاسم الكامل"
            />
          </div>

          <div className="relative p-2 border-b border-secondary">
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="h-[30px] ps-8 py-3 w-full text-xl text-muted focus:outline-none"
              placeholder="البريد الإلكتروني"
            />
          </div>

          <div className="relative p-2 border-b border-secondary">
            <input
              type="text"
              name="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
              className="h-[30px] ps-8 py-3 w-full text-xl text-muted focus:outline-none"
              placeholder="رقم الهاتف"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 my-5 h-[46px] cursor-pointer bg-[#068E7B] hover:bg-[#068E7B]/80 text-white rounded-[6px] transition-colors"
          >
            تعديل
          </button>

          <button
            onClick={handleNavigation}
            type="button"
            className="w-full py-2 my-5 h-[46px] cursor-pointer bg-[#068E7B] hover:bg-[#068E7B]/80 text-white rounded-[6px] transition-colors"
          >
            تعديل بيانات المستخدمين
          </button>
        </form>
      </section>
    </>
  );
};

export default SidebarProfile;
