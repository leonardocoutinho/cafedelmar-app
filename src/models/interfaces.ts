export interface Login {
   name?: string;
   email?: string;
   img?: string;
   uid?: string;
   provider?: string;
}

export interface MenuFoods {
    key?: string;
    title: string;
    type: string;
    details: string;
    description: string;
    image: string;
}

export interface Drink {
  key?: string;
  title?: string;

  drinkType: DrinkType[];
}


export interface DrinkType {
    drink: string;

    type: string;

    category: string;

    disable?: boolean;
}

export interface News {
  key?: string;
  title: string;
  description: string;
  content: string;
  image?: string;
  date: Date;
  featured: boolean;
}
