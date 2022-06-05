import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";

//Bootstrap
import Container from 'react-bootstrap/Container';
import DeliveryAddress from '../../Components/ShipmentTracking/DeliveryAddress';
import ShipmentDetails from '../../Components/ShipmentTracking/ShipmentDetails';
import ShipmentTracking from '../../Components/ShipmentTracking/ShipmentTracking';

//Components
import Header from '../../Components/Layout/Header';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

interface CurrentStatusObject {
  state: string,
  timestamp: string,
  code: number,
};

interface ITrack {
  CurrentStatus: CurrentStatusObject,
  shipperName: string,
  trackingNumber: number,
  PromisedDate: string,
  TransitEvents: Array<{
    state: string,
    timestamp: string,
    code: number
  }>,
  CreateDate: string
}


const ShipmentIndex = () => {
  const { id } = useParams();
  const { t,  i18n } = useTranslation("shipmentTracking")


  const [track, setTrack] = useState<ITrack>({
    CurrentStatus: {
      state: "",
      timestamp: "",
      code: 0
    },
    shipperName: "",
    trackingNumber: 0,
    PromisedDate: "",
    TransitEvents: [],
    CreateDate: ""
  });


  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://tracking.bosta.co/shipments/track/${id}?lang=${i18n.language}`)
        setTrack(res.data)
      } catch (e: any) {
          setError(true)
      }
    }
    console.log(id)
    fetchData();
  }, [id, i18n]);


  return (
    <>
      <Helmet>
        <title> {t("translation:bosta")} - {t("trackingShipment")} </title>
      </Helmet>
      <Header />
      <Container>
        <ShipmentTracking
          trackNum={id}
          ShipmentTrackStatus={track.CurrentStatus.state}
          lastUpdateShipment={track.CurrentStatus.timestamp}
          shipperName={track.shipperName}
          deliveryTime={track.PromisedDate}
          isInvalidTrackingNumber={error}
          createDate={track.CreateDate}
          CurrentShipmentCode={track.CurrentStatus.code}
        />

        <Row>
          <Col lg={8}>
            <ShipmentDetails shipmentDetails={track.TransitEvents} />
          </Col>
          <Col lg={4}>
            <DeliveryAddress />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ShipmentIndex;