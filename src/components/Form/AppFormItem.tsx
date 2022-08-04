import { IonItem } from "@ionic/react";
import { AppFormProp } from "../../../types";
import clsxm from "../../lib/clsxm";
import AppFormItemDescription from "./AppFormItemDescription";

function AppFormItem({
  error,
  focused,
  children,
  description,
  ...props
}: {
  error: boolean;
  focused: boolean;
  children: React.ReactNode;
  description?: AppFormProp["description"];
  [x: string]: any;
}) {
  return (
    <>
      <IonItem
        className={clsxm(
          `ring ring-transparent transition-all outline-none focus:outline-none shadow-none`,
          error && focused && `ring-primary-default`,
          error &&
            !focused &&
            "ring-danger-default prefers-contrast:ring-danger-contrast",
          !error && "ring-transparent",
          !error && focused && "ring-medium-tint",
          props.className && props.className
        )}
        {...props}
      >
        {children}
      </IonItem>
      {description && <AppFormItemDescription {...{ description }} />}
    </>
  );
}

export default AppFormItem;
