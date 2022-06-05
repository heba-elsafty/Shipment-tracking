import { useTranslation } from "react-i18next";


const DeliveryAddress = () => {
  const { t } = useTranslation("shipmentTracking");

  return (
    <div className="shipment-track-details">
      <h6 className="text-dark-blue">{t("deliveryAddress")}</h6>
      <div className="border bg-light rounded-3 py-4 px-3 mt-3">
        Address here
      </div>
    </div>
  )
}

export default DeliveryAddress;