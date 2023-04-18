import {
  bowsertruck,
  datm,
  bowsertruck2,
  datum3,
  datum2,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const services = [
  {
    title: "Bowser Trucks",
    icon: bowsertruck2,
    description:"Bowser trucks are vehicles that can transport 4000 to 6000 litres of diesel per trip. They are filled from Indian Oil refinery, from where they will transport diesel directly to cranes, stone crushers, generators, immovable heavy objects at the customer site ensuring uninterupted fuel supply."
  },
  {
    title: "DATUMS",
    icon: datm,
    description:"DATUM is an automatic diesel dispenser placed at customer premises. It holds 2000 litres of diesel at any point. Customers can refuel their trucks by driving up to the ATM. When the fuel tank level drops below 500L, Romulus is intimated and dispatches a bowser truck for a refill."
  }
];




const uniquepoints = [
  {
    title: "Discount and Credit",
    icon: "discount",
    description: [
      // Current fuel market relies on any one of two options, a discount per litre or a credit period. 
      "Petrol pump owners have high fixed costs and can only afford to offer a discount per litre or a credit period. Romulus offers both discount and credit period to pre-selected customers with good payment history through a fuel loan card from Tata Motors Finance.",
      // "Romulus offers a discount per litre to pre-selected customers with an excellent track record history with Tata Motors Finance. These customers can also get 30 days credit on fuel purchases through a fuel loan card offered by TMF.",
    ],
    
  },
  {
    title: "Higher Margin",
    icon: "margin",
    description: [
      "Petrol pump owners currently are forced to work on smaller margins than Romulus, as the OMCs have direct investments in the petrol pumps, but this is not the case for Romulus. As a result, Romulus is able to obtain a higher margin from the Oil Marcketing Companys.",
    ],
  },
  {
    title: "Cost Saving",
    icon: "save",
    description: [
      "Romulus delivers diesel directly at the doorstep to the end-user's, saving customers from the trouble of traveling to a petrol pump, which can amount to 750 km of travel per day for each customer owning 150-200 trucks. This translates to a monthly savings of 22,500 km per customer."
      // "Romulus offers diesel directly at the doorstep of the end-user, which has a cumulative effect. For example, on average our customers own 150-200 trucks each. If each truck has to travel ~5kms to a petrol pump, we save each customer 750 kms running per day, or 22,500 kms per month.",
    ],
   
  },

];





const gallery = [
  {
    "img":bowsertruck,
    "description":"Take a closer look at our extensive collection of pioneering solutions and remarkable accomplishments in our gallery of cutting-edge innovations."
  },
    {
    "img":datm,
    "description":"sde a closer look at our extensive collection of pioneering solutions and remarkable accomplishments in our gallery of cutting-edge innovations."
  },
    {
    "img":datum2,
    "description":"io a closer look at our extensive collection of pioneering solutions and remarkable accomplishments in our gallery of cutting-edge innovations."
  },
    {
    "img":bowsertruck2,
    "description":"Take a closer look at our extensive collection of pioneering solutions and remarkable accomplishments in our gallery of cutting-edge innovations."
  },
   {
    "img":datum3,
    "description":"Take a closer look at our extensive collection of pioneering solutions and remarkable accomplishments in our gallery of cutting-edge innovations."
  },
  
]




export { services, uniquepoints, gallery };
