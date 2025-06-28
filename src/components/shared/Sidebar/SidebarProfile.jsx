import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Taraf_login_3d.png";
import userProfile from "../../../assets/imgProfile.png";

const SidebarProfile = ({ isOpen, handleOpenSidBarProfile }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/users");
    handleOpenSidBarProfile();
  };
  return (
    <>
      {isOpen && (
        <div
          onClick={handleOpenSidBarProfile}
          className="fixed inset-0 bg-muted/20 bg-opacity-50  z-[999999] "
        />
      )}

      <section
        z
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
        <div className="w-[120px]">
          <img src={Logo} alt="Taraf Logo" className="w-full" />
        </div>

        <figure className="text-center space-y-3">
          <img
            src={userProfile}
            alt="صورة الملف الشخصي"
            className="mx-auto h-24 w-24 rounded-full object-cover border-2 border-primary"
          />
          <figcaption className="text-xl font-bold  text-muted">
            محمد العبيد
          </figcaption>
          <p className="text-secondary">نتمنى لك يومًا سعيدًا</p>
        </figure>

        <div className="px-5 space-y-3">
          <div className="relative p-2   border-b border-secondary">
            <input
              type="text"
              className="h-[30px] ps-8 py-3 w-full text-xl  text-muted focus:outline-none "
              placeholder="..."
              value={"محمد العبيد"}
            />
            <svg
              className="absolute right-0 top-0 translate-x-0 translate-y-1/2"
              width="25"
              height="25"
              viewBox="0 0 50 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3682 33.6069C13.4817 33.6069 13.5948 33.5962 13.7063 33.5749L22.9544 31.3849L42.5275 11.8117C45.0563 9.28295 45.0562 5.18306 42.5275 2.65434C39.9987 0.125617 35.8988 0.12564 33.3701 2.65439L13.7969 22.2276L11.6221 31.4055L11.6072 31.4748C11.5064 32.0001 11.6453 32.5429 11.9859 32.9553C12.3266 33.3677 12.8334 33.6066 13.3682 33.6069ZM16.7858 23.8955L35.6994 4.98249C36.9421 3.73977 38.9569 3.73977 40.1997 4.98249C41.4424 6.22521 41.4424 8.24006 40.1997 9.48278L21.2862 28.3959L15.3881 29.7936L16.7858 23.8955ZM47.1839 38.1442H2.72749C1.36412 38.1458 0.259279 39.2507 0.25769 40.614L0.257691 48.0234C0.259277 49.3868 1.36412 50.4917 2.72749 50.4932H47.1839C48.5473 50.4917 49.6522 49.3868 49.6537 48.0234V40.614C49.6522 39.2507 48.5473 38.1458 47.1839 38.1442ZM46.3607 47.2002H3.55076V41.4373H46.3607V47.2002Z"
                fill="#1C7E68"
              />
            </svg>
          </div>
          <div className="relative p-2   border-b border-secondary">
            <input
              type="email"
              className="h-[30px] ps-8 py-3  w-full text-xl  text-muted focus:outline-none "
              placeholder="..."
              value={"abdo.ali@gmail.com"}
            />
            <svg
              className="absolute right-0 top-0 translate-x-0 translate-y-1/2"
              width="25"
              height="25"
              viewBox="0 0 50 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3682 33.6069C13.4817 33.6069 13.5948 33.5962 13.7063 33.5749L22.9544 31.3849L42.5275 11.8117C45.0563 9.28295 45.0562 5.18306 42.5275 2.65434C39.9987 0.125617 35.8988 0.12564 33.3701 2.65439L13.7969 22.2276L11.6221 31.4055L11.6072 31.4748C11.5064 32.0001 11.6453 32.5429 11.9859 32.9553C12.3266 33.3677 12.8334 33.6066 13.3682 33.6069ZM16.7858 23.8955L35.6994 4.98249C36.9421 3.73977 38.9569 3.73977 40.1997 4.98249C41.4424 6.22521 41.4424 8.24006 40.1997 9.48278L21.2862 28.3959L15.3881 29.7936L16.7858 23.8955ZM47.1839 38.1442H2.72749C1.36412 38.1458 0.259279 39.2507 0.25769 40.614L0.257691 48.0234C0.259277 49.3868 1.36412 50.4917 2.72749 50.4932H47.1839C48.5473 50.4917 49.6522 49.3868 49.6537 48.0234V40.614C49.6522 39.2507 48.5473 38.1458 47.1839 38.1442ZM46.3607 47.2002H3.55076V41.4373H46.3607V47.2002Z"
                fill="#1C7E68"
              />
            </svg>
          </div>
          <div className="relative p-2   border-b border-secondary">
            <input
              type="text"
              className="h-[30px] ps-8 py-3   w-full text-xl  text-muted focus:outline-none "
              placeholder="..."
              value={"0123456789"}
            />
            <svg
              className="absolute right-0 top-0 translate-x-0 translate-y-1/2"
              width="25"
              height="25"
              viewBox="0 0 50 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3682 33.6069C13.4817 33.6069 13.5948 33.5962 13.7063 33.5749L22.9544 31.3849L42.5275 11.8117C45.0563 9.28295 45.0562 5.18306 42.5275 2.65434C39.9987 0.125617 35.8988 0.12564 33.3701 2.65439L13.7969 22.2276L11.6221 31.4055L11.6072 31.4748C11.5064 32.0001 11.6453 32.5429 11.9859 32.9553C12.3266 33.3677 12.8334 33.6066 13.3682 33.6069ZM16.7858 23.8955L35.6994 4.98249C36.9421 3.73977 38.9569 3.73977 40.1997 4.98249C41.4424 6.22521 41.4424 8.24006 40.1997 9.48278L21.2862 28.3959L15.3881 29.7936L16.7858 23.8955ZM47.1839 38.1442H2.72749C1.36412 38.1458 0.259279 39.2507 0.25769 40.614L0.257691 48.0234C0.259277 49.3868 1.36412 50.4917 2.72749 50.4932H47.1839C48.5473 50.4917 49.6522 49.3868 49.6537 48.0234V40.614C49.6522 39.2507 48.5473 38.1458 47.1839 38.1442ZM46.3607 47.2002H3.55076V41.4373H46.3607V47.2002Z"
                fill="#1C7E68"
              />
            </svg>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 my-5 h-[46px] cursor-pointer bg-[#068E7B] hover:bg-[#068E7B]/80 text-white rounded-[6px] transition-colors"
          >
            تعديل
          </button>
          <button
            onClick={() => handleNavigation()}
            type="submit"
            className="w-full py-2 my-5 h-[46px] cursor-pointer bg-[#068E7B] hover:bg-[#068E7B]/80 text-white rounded-[6px] transition-colors"
          >
            تعديل بيانات المستخدمين
          </button>
        </div>
      </section>
    </>
  );
};

export default SidebarProfile;
