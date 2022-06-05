import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";

import 'react-loading-skeleton/dist/skeleton.css'

const ShipmentDetailsSkeleton = () => {
  const { t } = useTranslation("shipmentTracking");

  return (
    <Table className="mb-0 border rounded-3 mt-3">
      <thead className="table-light">
        <tr>
          <th className="ps-4">{t("shipmentDetails.branch")}</th>
          <th>{t("shipmentDetails.date")}</th>
          <th>{t("shipmentDetails.time")}</th>
          <th>{t("shipmentDetails.details")}</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(4).keys()].map((id) => (
          <tr key={id} className="px-0">
            <td><Skeleton width={200} height={15}/></td>
            <td><Skeleton width={200} height={15}/></td>
            <td><Skeleton width={200} height={15}/></td>
            <td><Skeleton width={200} height={15}/></td>
          </tr>
        ))}

      </tbody>
    </Table>
  )
}

export default ShipmentDetailsSkeleton;
