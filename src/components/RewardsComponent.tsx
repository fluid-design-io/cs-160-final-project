import { IonButton, IonIcon } from "@ionic/react";
import { giftOutline } from "ionicons/icons";

import { stores } from "../data/stores";

function RewardsComponent() {
  return (
    <div className="-mt-14 pb-20">
      <h2 className="text-lg font-bold px-4 py-4">Active</h2>
      <RewardCard
        reward={{
          name: stores[0].name,
          description: stores[0].description,
          image: stores[0].images[1],
          message: "Free boba tea",
          date: "8/31/2022",
        }}
        isPassed={false}
      />
      <RewardCard
        reward={{
          name: stores[1].name,
          description: stores[1].description,
          image: stores[1].images[2],
          message: "Free boba tea",
          date: "9/16/2022",
        }}
        isPassed={false}
      />
      <h2 className="text-lg font-bold px-4 py-4">Passed</h2>
      <RewardCard
        reward={{
          name: stores[2].name,
          description: stores[2].description,
          image: stores[2].images[2],
          message: "Free boba tea",
          date: "6/1/2022",
        }}
        isPassed={true}
      />
    </div>
  );
}
export default RewardsComponent;

const RewardCard = ({ reward, isPassed }) => {
  return (
    <div className="px-4">
      <div className="flex justify-start">
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary-default flex justify-center items-center">
            <IonIcon icon={giftOutline} color="light" />
          </div>
          <div>
            <h1 className="font-medium">{reward.name}</h1>
            <p className="text-sm">{reward.description}</p>
          </div>
        </div>
      </div>
      <img
        src={reward.image}
        className="w-full h-48 my-3 object-cover object-center rounded-lg overflow-hidden"
        alt=""
      />
      <p className="text-center">{reward.message}</p>
      {!isPassed ? (
        <>
          <IonButton
            shape="round"
            color="primary"
            className="w-full"
            size="small"
          >
            Redeem Reward
          </IonButton>
          <p className="text-sm text-right text-primary-default">
            Valid thru {reward.date}
          </p>
        </>
      ) : (
        <p className="text-sm text-right text-primary-default">
          Expired {reward.date}
        </p>
      )}
    </div>
  );
};
