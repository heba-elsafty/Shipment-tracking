import { useTranslation } from "react-i18next";

import Image from "react-bootstrap/Image"
import  Button from "react-bootstrap/Button";

import HelpPath from "../../assets/images/help.svg";


const DeliveryAddress = () => {
  const { t } = useTranslation("shipmentTracking");

  return (
    <div>
      <h6 className="text-dark-blue">{t("deliveryAddress")}</h6>
      <div className="border bg-light rounded-3 py-4 px-3 mt-3">
        Address here
      </div>

      <div className="border bg-light rounded-3 py-4 px-3 mt-3 d-lg-flex align-items-center text-center text-lg-start">
       <Image src={HelpPath} width={150} height={100}/>
       <div>
         <h6 className="text-dark-blue mb-3">{t("problemWithYourShipment")}</h6>
         <div className="d-grid gap-2">
          <Button className="rounded-3">{t("reportAProblem")}</Button>
         </div>
       </div>
      </div>
    </div>
  )
}

export default DeliveryAddress;