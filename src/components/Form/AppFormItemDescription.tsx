/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";

import { AppFormProp } from "../../../types";

function AppFormItemDescription({
  description,
}: {
  description?: AppFormProp["description"];
}) {
  if (!description && !React.isValidElement(description)) {
    return null;
  }
  return (
    <div className="flex flex-col items-start">
      {React.isValidElement(description) && description}
      {typeof description === "string" && (
        <p className="text-sm text-left w-full px-4 py-1.5 text-medium-default">
          {description}
        </p>
      )}
      {typeof description === "object" && (
        <p className="flex items-center gap-2 text-sm">
          {/* @ts-ignore-next-line */}
          <description.icon className="h-4 w-4" />
          {/* @ts-ignore-next-line */}
          {description.text}
        </p>
      )}
    </div>
  );
}

export default AppFormItemDescription;
