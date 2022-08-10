import { IonButton } from "@ionic/react";
import { stores } from "../data/stores";

function RedeemComponent() {
  return (
    <>
      <div className="bg-secondary-tint h-64 absolute top-0 left-0 right-0 z-0 opacity-20" />
      <div className="-mt-4 text-center z-10">
        <h1 className="font-bold text-6xl">1032</h1>
        <span className="text-sm pt-6 text-medium-default">
          Available points
        </span>
      </div>
      <div className="flex whitespace-nowrap max-w-full overflow-x-auto overflow-y-hidden py-4 px-4 mt-14 z-10 gap-4">
        <RedeemCardLarge
          title="Thai Tea"
          desc="The Dessert Co."
          points={600}
          image={
            "https://www.foxyfolksy.com/wp-content/uploads/2020/06/brown-sugar-milk-tea.jpg"
          }
        />
        <RedeemCardLarge
          title="Matcha Boba Tea"
          desc="Purple Kow"
          points={600}
          image={
            "data:image/jpeg;base64,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"
          }
        />
      </div>
      <h2 className="text-lg font-bold px-4 py-4">200 - 400 Points</h2>
      <div className="grid grid-cols-2 gap-4 px-4">
        <RedeemCardSmall
          title={stores[0].name}
          desc={stores[0].description}
          image={stores[0].images[1]}
        />
        <RedeemCardSmall
          title={stores[0].name}
          desc={stores[0].description}
          image={stores[0].images[2]}
        />
        <RedeemCardSmall
          title={stores[1].name}
          desc={stores[1].description}
          image={stores[1].images[1]}
        />
      </div>

      <h2 className="text-lg font-bold px-4 py-4">400 - 800 Points</h2>
      <div className="grid grid-cols-2 gap-4 px-4">
        <RedeemCardSmall
          title={stores[2].name}
          desc={stores[2].description}
          image={stores[2].images[1]}
        />
        <RedeemCardSmall
          title={stores[2].name}
          desc={stores[2].description}
          image={stores[2].images[2]}
        />
      </div>
    </>
  );
}
export default RedeemComponent;

const RedeemCardLarge = ({ title, desc, points, image }) => {
  return (
    <div
      className="w-80 h-48 relative overflow-hidden rounded-lg flex-shrink-0 bg-[white] dark:bg-[black] flex"
      style={{
        boxShadow: "0px 8px 14px -5px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="relative w-2/5">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-0 bg-[white] dark:bg-[black] [mask-image:linear-gradient(270deg,rgba(255,255,255,1),rgba(255,255,255,0))]" />
      </div>
      <div className="z-10 flex flex-col justify-between items-start flex-grow p-4">
        <div>
          <h1 className="text-md font-bold whitespace-normal">{title}</h1>
          <p className="text-medium-tint">{desc}</p>
          <p className="text-medium-tint">{points}</p>
        </div>
        <div className="w-full flex justify-end">
          <IonButton shape="round" size="small">
            Redeem
          </IonButton>
        </div>
      </div>
    </div>
  );
};

const RedeemCardSmall = ({ title, desc, image }) => {
  return (
    <div className="w-full relative flex-shrink-0 bg-[white] dark:bg-[black] flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-full aspect-square object-cover object-center border border-light-default overflow-hidden rounded-lg"
      />
      <h1 className="text-md font-medium whitespace-normal text-center pt-2">
        {title}
      </h1>
      <p className="text-medium-tint text-center pb-2">{desc}</p>
    </div>
  );
};
