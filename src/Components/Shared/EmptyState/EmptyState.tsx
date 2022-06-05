import { useTranslation } from "react-i18next";
import Icon from "../Icon/Icon"

const EmptyState = () => {
  const { t } = useTranslation("translation");

  return (
    <div className="text-center my-4">
      <Icon iconName="empty-state" iconSize={60} />
      <h4>{t("notFound")}</h4>
    </div>
  )
}

export default EmptyState