import { Community } from "./Communtiy";
import { Product } from "./product";
import { Market } from "./user";

export interface AppRootState {
    homePage:HomePageState;
    shopPage:ShopPageState;
}

/**HOMEPAGE */

export interface HomePageState{
    peakMarkets:Market[];
    bestMarkets:Market[];
    trendProducts:Product[];
    bestBoArticles:Community[];
    trendBoArticles:Community[];
    newsBoArticle:Community[];
}

/**SHOP PAGE */

export interface ShopPageState{
    targetShops:Market[];
    randomShops:Market[];
    chosenShops:Market|null;
    targetProducts:Product[];
    chosenProduct:Product | null;


}
