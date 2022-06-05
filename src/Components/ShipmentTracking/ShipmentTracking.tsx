import { useTranslation } from "react-i18next";
import moment from "moment";

//Components
import AppAlert from "../Shared/AppAlert/AppAlert";
import ProgressBar from "../ProgressBar/ProgressBar";

interface IShipmentTrackProps {
  trackNum: string | number | undefined,
  ShipmentTrackStatus: string,
  lastUpdateShipment: string,
  shipperName: string,
  deliveryTime: string,
  isInvalidTrackingNumber: boolean,
  createDate: string,
  CurrentShipmentCode: number,
};

const ShipmentTracking = ({
  trackNum,
  ShipmentTrackStatus,
  lastUpdateShipment,
  shipperName,
  deliveryTime,
  isInvalidTrackingNumber,
  CurrentShipmentCode,
}: IShipmentTrackProps) => {
  const { t, i18n } = useTranslation(["shipmentTracking", "translation"]);
  const time = i18n.language === "ar" ? "LTA" : "LT";


  const ShipmentTrackingHeaderItems = [
    {
      id: 1,
      title: `${t("shipmentNumber")} ${trackNum}`,
      details: isInvalidTrackingNumber ? t('noShipmentWithThisNumber') : ShipmentTrackStatus,
    },
    {
      id: 2,
      title: t("lastUpdate"),
      details: isInvalidTrackingNumber ? t("translation:noFound", { filed: t("translation:date") }) :
        `${moment(lastUpdateShipment).format(`dddd - l`)} ${t("translation:at")} ${moment(lastUpdateShipment).format(time)}`
    },
    {
      id: 3,
      title: t("shipperName"),
      details: shipperName ? shipperName : t('unknown')
    },
    {
      id: 4,
      title: t("deliveryTime"),
      details: isInvalidTrackingNumber ? t("translation:noFound", { filed: t("translation:date") }) :
        `${moment(deliveryTime).format(`l`)}`
    },
  ]

  return (
    <>
      {/* error */}
      {isInvalidTrackingNumber && <AppAlert message={t("invalidTrackingNumber")} type="error" alertClassName="mt-5" />}
      <div className="border my-5 py-4 rounded-3 shipment-track">
        <div className="shipment-track__header px-3 d-lg-flex justify-content-between pb-4">
          {
            ShipmentTrackingHeaderItems.map((item) => (
              <div key={item.id}>
                <p className="text-muted">{item.title}</p>
                <h5 className="text-dark-blue fw-bold mt-2">
                  {item.details}
                </h5>
              </div>
            ))
          }
        </div>
        {!isInvalidTrackingNumber && <ProgressBar currentShipmentCode={CurrentShipmentCode} currentState={ShipmentTrackStatus} />}
      </div>
    </>
  )
}

export default ShipmentTracking;
