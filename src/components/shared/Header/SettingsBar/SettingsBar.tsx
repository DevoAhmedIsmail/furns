import { t } from "i18next"
import ChangeLanguageDropdown from "./ChangeLanguageDropdown/ChangeLanguageDropdown"

const SettingsBar = () => {
  return (
    <div className='text-white bg-mainBlack p-medium-14 sm:p-regular-18'>
      <div className="wrapper">
        <div className="flex-between">
          <h1 className="text-mainColor">{t("welcome-msg")}</h1>
          <div>
            <ChangeLanguageDropdown />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsBar
