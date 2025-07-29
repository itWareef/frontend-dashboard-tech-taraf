import SettingsMenu from "@/components/layout/SettingPage/SettingsMenu";
import Header from "@/components/shared/Header/Header";

const SettingsPage = () => {
  return (
    <>
      <Header
        PageName={"الاعدادات"}
        returnState={true}
        settings={true}
        option={false}
      />

      <SettingsMenu />
    </>
  );
};

export default SettingsPage;
