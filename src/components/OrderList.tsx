import { IonChip, IonIcon, IonLabel, useIonModal } from "@ionic/react";
import { star, trophyOutline, warning } from "ionicons/icons";
import ReportForm from "./ReportForm";

export const OrderList = ({title, date, amount}) => {
    const [presentReportModal, hideReportModal] = useIonModal(ReportForm, {
        onDismiss: () => hideReportModal(),
    });
    return (
        <div className="mb-6">
            <div className="flex justify-between">
                <h2 className="font-bold">{title}</h2>
                <span>${amount }</span>
            </div>
            <div>{date }</div>
            {/*Rate IonChip with star Icon*/ }
            <IonChip className="rounded-[10px]">
                <IonLabel>Rate</IonLabel>
                <IonIcon icon={star} />
            </IonChip>
            {/*Rewards IonChip with star Icon*/}
            <IonChip className="rounded-[10px]">
                <IonLabel>Rewards</IonLabel>
                <IonIcon icon={trophyOutline} />
            </IonChip>
            {/*Report IonChip. When clicked this should pull up the report modal*/}
            <IonChip
                onClick={() =>
                    presentReportModal({
                        canDismiss: true,
                        breakpoints: [0, 0.75, 1],
                        initialBreakpoint: 0.75,
                        handle: false,
                    })
                }
                className="rounded-[10px]"
            >
                <IonLabel>Report</IonLabel>
                <IonIcon icon={warning} />
            </IonChip>
        </div>
        );
};