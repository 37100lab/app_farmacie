import React from 'react'

import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonList,
    IonItem,
    IonIcon
  } from '@ionic/react'

  import { medkitOutline, leafOutline } from 'ionicons/icons'

const categoryConfig = {
parco: {
    icon: leafOutline,
    color: 'success',
},
farmacia: {
    icon: medkitOutline,
    color: 'danger',
},
}

export const LocationModal = ({ loc }) => {
  console.log(JSON.stringify(loc))
   // let's put upper case every word's first char
   let titleCase=(str)=>{
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' ').trim(); 
  }

  //if don't have loc.properties or its attributes throw internal error text,
  // just to easily customize the app farmacie in to other apps
  if(
     (
      loc.properties &&
      ( !('denominazi' in loc.properties) || !('indirizzo' in loc.properties)||!('quartiere' in loc.properties))
     )
     || !loc.properties
    )
        return(
          <IonContent>
            <h1>Internal Error</h1>
          </IonContent>
        )

  return (
    <IonContent>
    <IonHeader>
      <IonToolbar>
            <IonItem>
            <IonTitle>
              {titleCase(loc.properties.denominazi)}
            </IonTitle>
                <IonIcon
                        color={ categoryConfig["farmacia"].color }
                        icon={categoryConfig["farmacia"].icon}
                        slot="end"
                    />
            </IonItem>
        </IonToolbar>
    </IonHeader>
    <IonList>
      <IonItem>
        <IonLabel className="ion-text-wrap">Indirizzo: {titleCase(loc.properties.indirizzo)}</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Distretto: {titleCase(loc.properties.quartiere)}</IonLabel>
      </IonItem>
    </IonList>
  </IonContent>
  )
}

export default LocationModal