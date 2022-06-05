
//Bootstrap

import { useTranslation } from "react-i18next";
import moment from "moment";

//Bootstrap
import Table from "react-bootstrap/Table";
import EmptyState from "../Shared/EmptyState/EmptyState";
import ShipmentDetailsSkeleton from "./ShipmentDetailsSkelton/ShipmentDetailsSkeleton";

interface IShipmentDetailsProps {
  shipmentDetails: Array<{
    state: string,
    timestamp: string,
  }>
  loading: boolean
};

const ShipmentDetails = ({ shipmentDetails, loading }: IShipmentDetailsProps) => {
  const { t, i18n } = useTranslation("shipmentTracking");

  const time = i18n.language === "ar" ? "LTA" : "LT";

  // function for display Shipment Tracking Details According Newest Date
  const shipmentTrackingDetailsAccordingNewestDate = shipmentDetails.sort((a, b) => {
    return b.timestamp.localeCompare(a.timestamp)
  })


  return (
    <div className="shipment-track-details pb-4">
      <h6 className="text-dark-blue">{t("shipmentDetails.shipmentDetails")}</h6>
      {
        loading ? (
          <ShipmentDetailsSkeleton />
        ) :
          <Table className="mb-0 border rounded-3 mt-3" responsive>
            <thead className="table-light">
              <tr>
                <th className="ps-4">{t("shipmentDetails.branch")}</th>
                <th>{t("shipmentDetails.date")}</th>
                <th>{t("shipmentDetails.time")}</th>
                <th>{t("shipmentDetails.details")}</th>
              </tr>
            </thead>
            <tbody className="border-top-0">
              {
                shipmentDetails.length > 0 ? (
                  shipmentTrackingDetailsAccordingNewestDate.map((shipment, index) => (
                    <tr key={index.toString()}>
                      <td className="ps-4">{i18n.language === "ar" ? "مدينة نصر" : "Nasr City"}</td>
                      <td>{moment(shipment.timestamp).format("L")}</td>
                      <td>{moment(shipment.timestamp).format(time)}</td>
                      <td width={400}>{shipment.state}</td>
                    </tr>
                  ))
                ) :
                  <tr>
                    <td colSpan={4}> <EmptyState /></td>
                  </tr>
              }
            </tbody>
          </Table>
      }
    </div>
  )
}

export default ShipmentDetails;