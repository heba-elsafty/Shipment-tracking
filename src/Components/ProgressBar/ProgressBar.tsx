import { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import Icon from "../Shared/Icon/Icon";

import "./ProgressBarStyle.scss";


interface IProgressBarProps {
  currentState: string,
  currentShipmentCode: number
}

interface IStepsProps {
  id: number,
  label: string,
  state: string,
  complete: boolean,
  icon: string,
  active: boolean,
}

const ProgressBar = ({ currentState, currentShipmentCode }: IProgressBarProps) => {
  const { t } = useTranslation("shipmentTracking");

  const steps = useMemo(() => [
    {
      id: 1,
      label: t("steps.createTheShipment"),
      state: "Created",
      complete: true,
      icon: "created",
      active: false,
    },
    {
      id: 2,
      label: t("steps.receivedFromTheShipper"),
      state: "Receipted",
      complete: false,
      icon: "receipted",
      active: false,
    },
    {
      id: 3,
      label: t("steps.outForDelivery"),
      state: "On hold",
      complete: false,
      icon: "truck",
      active: false,
    },
    {
      id: 4,
      label: t("steps.delivered"),
      state: "Delivered",
      complete: false,
      icon: "delivered",
      active: false,
    },

  ], [t]);


  const STATE: any = {
    [t('currentState.delivered')]: "progress__state--delivered",
    [t('currentState.onHold')]: "progress__state--onhold",
    [t('currentState.returned')]: "progress__state--returned"
  };

  const PROGRESSSTATECLASS: any = {
    complete: `${STATE[currentState]} progress__state--complete`,
    active: STATE[currentState]
  }


  const [currentStep, setCurrentStep] = useState({
    id: 0,
    label: "",
    state: "",
    complete: false,
    icon: "",
    active: false
  })


  const setPreviousStepsPropsFromIdx = (idx: number, steps: IStepsProps | any, prop: any) => {
    for (let i = idx; i > 0; i--) {
      steps[i][prop.name] = prop.value
    }
  }


  useEffect(() => {
    if (currentState === t("currentState.onHold") || currentState === "Returned") {
      const idx = steps.findIndex((step) => step.state === "On hold");
      setCurrentStep(steps[idx]);
      setPreviousStepsPropsFromIdx(idx - 1, steps, { name: 'complete', value: true })
      setPreviousStepsPropsFromIdx(idx, steps, { name: 'active', value: true })

    } else if (currentState === t("currentState.delivered")) {
      const idx = steps.findIndex((step) => step.state === "Delivered");
      setCurrentStep(steps[idx]);
      setPreviousStepsPropsFromIdx(idx, steps, { name: 'complete', value: true })
    }
  }, [currentState, steps, currentStep, currentShipmentCode, t])


  return (
    <div className="progress border-top">
      {/* line of progress */}
      <div className="progress__line" />

      <div className="progress__steps d-flex justify-content-between px-3">
        {
          steps.map((step) => (
            <>
              <div key={step.id} className={`progress__state flex-fill ${step.complete && PROGRESSSTATECLASS["complete"]} ${step.active && PROGRESSSTATECLASS["active"]}`}>
                <div className={`progress__state__icon`} >
                  <Icon iconName={step.complete ? "check" : step.icon} iconSize={step.complete ? 15 : 25} />
                </div>
                <h6 className="text-dark-blue mt-4 mt-md-2 px-1 px-lg-0"> {step.label} </h6>
              </div>
            </>

          ))
        }
      </div>
    </div>
  )
};

export default ProgressBar;