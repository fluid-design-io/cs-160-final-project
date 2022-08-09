import React, { useEffect, useState } from 'react'
import { leaf, star, trash, trashOutline } from 'ionicons/icons';
import {
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonListHeader,

} from "@ionic/react";
import e, { json } from 'express';
import { checkStorage, getStorage, setStorage } from '../lib/storageHelper';

      let tax = 0;
      let original = 0;
      const items = [
        {
          id: "1",
          Item: "Boba",
          Price: 7.5,
          Size: "Large",
          image: "https://s3-media0.fl.yelpcdn.com/bphoto/btKkjgB02D1hNO0dBm1n-Q/348s.jpg",
        },
        {
          id: "2",
          Item: "Matcha tea",
          Price: 5.0,
          Size: "Medium",
          image: "https://www.health.com/thmb/KWFSGNn_gaZifCinzx2EpNaKoDw=/650x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SBX20200302-SpringFY20-IcedPineappleMatchaCoconutmilkLatte-85dc2bee25814cf49cef6462207ff035.png",
        },
        {
          id: "3",
          Item: "Green Tea",
          Price: 3.0,
          Size: "Medium",
          image:"https://www.verywellhealth.com/thmb/zlowRCYKHm5T15QeEaz2mf2o2iM=/614x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-970151326-6f625e48ee894f84bb70e76f9c84cf95.jpg",
        },
      ];
      
      function viewCart() {
        const [savedItemsInCart, setUserItems] = useState([])
        
        const fetchStore = async (key) => {
        const isKeyExist = await checkStorage(key);
          if (isKeyExist) {
            console.log(isKeyExist);
            //setUserItems(savedItems);
            const savedItems = await getStorage(key);
            console.log(savedItems);
            console.log(typeof savedItems);
            const savedItemsParsed = JSON.parse(savedItems.value as any);
            setUserItems(savedItemsParsed);
            
          } else {
            await setStorage(key, items);
            setUserItems(items);
          }
        };

        const handleDelete = async (id) => {
          const newList = savedItemsInCart.filter((item) => item.id !== id);
          await setStorage("savedItems", newList);
          setUserItems(newList);
        };

        useEffect(() => {
          fetchStore("savedItems");
        },[]);

          //1. Check the browser storage has the key named savedItemsInCart.
          //2. If the browser has the saved list, we will get the list. 
          //3. Set the variable to be current use state of item in cart.
          //4. If not, we will create it. 
          //5. Set the created value to the saved value in cart.
        original = 0;
        const listItems = savedItemsInCart.map(
            (element) => {
              if(element.Price) {
                original = element.Price + original;
                return (
                  <>
                    <IonItem key={element.Item} style={{"--border-color":"transparent"}}>
                        <img src={element.image} className="object-contain !w-20 !h-20 mt-4 mr-4 rounded-lg"/>
                        
                      <IonLabel>
                        <h1>{element.Item}</h1>
                        <p className='flex justify-between'> <span>$ {element.Price.toPrecision(3)}</span> <span>Size: {element.Size}</span></p>
                        
                      </IonLabel>
                  
                      <IonButton fill='outline' color='dark' onClick={async() =>handleDelete(element.id)}>
                      <IonIcon slot='icon-only' icon={trashOutline}/>
                      </IonButton>

                    </IonItem>
                     <IonListHeader>
                        Eco-friendly
                        <IonIcon icon={leaf} color='success'></IonIcon>
                      </IonListHeader>
                     <IonItem>
                       <IonLabel>Bring your own tumbler/container:</IonLabel>
                       <IonCheckbox checked={false} />
                     </IonItem>

                  </>
                )
              } 
            }
        )

        tax = original*0.07;
        const total = tax + original;
        return (
          <div>
            {listItems} 
            <IonItem>
          <IonLabel>
            <h1 className='flex justify-between'> <span>Total</span> <span> ${total.toFixed(2)}</span></h1>
            <h3 className='flex justify-between'> <span>Original </span> <span> ${original.toFixed(2)}</span></h3>
            <h3 className='flex justify-between'> <span>Tax </span> <span> ${tax.toFixed(2)}</span></h3>
            <h3 className='flex justify-between'> <span>Discount </span> <span> ${0}</span></h3>
          </IonLabel>
        </IonItem>
          </div>
        )
    }


    export default viewCart;