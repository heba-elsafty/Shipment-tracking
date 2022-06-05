import Alert from "react-bootstrap/Alert"
import Icon from "../Icon/Icon";


interface AlertProps {
  message: string,
  alertClassName?: string,
  type?: "error" | "success" | any,
  iconName?: string,
  hasIcon?: boolean,
  variant?: string
}


const AppAlert = ({variant, message, alertClassName, type, iconName, hasIcon }: AlertProps) => {

  const ALERTTYPE: any = {
    default: {
      variant: "primary",
      icon: null,
      color: "#e30613"
    },

    error: {
      variant: "light-red",
      icon: "error",
      color: "#e30613"
    },

    success: {
      variant: "success",
      name: "success",
      color: "#36b600"
    },

    warning: {
      variant: "warning",
      name: "warning",
      color: "#f9ba02"
    }
  };

  return (
    <Alert variant={type ? ALERTTYPE[type].variant : variant} className={`shadow rounded-3 ${alertClassName}`}>
      <p>
        {
          (hasIcon || type) &&
            <Icon iconName={type ? ALERTTYPE[type].icon : iconName} iconColor={ALERTTYPE[type].color} className="pe-2" iconSize={40} />
        }
        {message}
      </p>
    </Alert>
  )
};

export default AppAlert;