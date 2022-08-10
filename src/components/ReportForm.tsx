import {
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
  useIonToast,
} from "@ionic/react";

function ReportForm({ onDismiss }: { onDismiss: () => void }) {
    //TO be used for the toast
    const [present, dismiss] = useIonToast();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar
          style={{
            "--background": "transparent",
            "--border-width": "0px",
          }}
        >
          <IonButtons slot="start">
            <IonButton onClick={onDismiss}>Cancel</IonButton>
          </IonButtons>
          <IonButtons slot="end">
                      {/*Displays the toast when the report button is clicked then dismisses the report modal*/}
                      <IonButton
                          onClick={() => {
                              present("Thank you for your report.", 2000);
                              onDismiss();
                          }}
                      >
                      Report
                      </IonButton>

          </IonButtons>
          <IonTitle>Report This Store</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* 
            // TODO: Add form. nned three checkboxes and a text area. 
        */}
              <IonList>
                  <IonListHeader>What do you want to report?</IonListHeader>
                  {/*3 checkbox items*/}
                  <IonItem>
                      <IonCheckbox checked={false} />
                      <IonLabel>Not eco-friendly</IonLabel>
                  </IonItem>
                  <IonItem>
                      <IonCheckbox checked={false} />
                      <IonLabel>Not as advertised</IonLabel>
                  </IonItem>
                  <IonItem>
                      <IonCheckbox checked={false} />
                      <IonLabel>Had issue with the order</IonLabel>
                  </IonItem>
                  {/*Text box area*/}
                  <IonListHeader>Something else:</IonListHeader>
                  <IonItem
                      style={{"--border-color": "transparent",}}
                  >
                      <IonTextarea
                          className="bg-light-default mr-4 rounded-lg px-2"
                          rows={4}
                          placeholder="Type the issue here..."
                      />
                  </IonItem>
              </IonList>
      </IonContent>
    </IonPage>
  );
}
export default ReportForm;
