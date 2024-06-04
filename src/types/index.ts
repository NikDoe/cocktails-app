export type TDrink = {
    idDrink: string;
    strAlcoholic: string;
    strDrink: string;
    strDrinkThumb: string;
    strGlass: string;
}

export type TCocktail = {
    idDrink: string;
    strAlcoholic: string;
    strDrink: string;
    strDrinkThumb: string;
    strGlass: string;
    strCategory: string;
    strInstructions: string
    [key: string]: string | null;
}

export type TFormatedDrink = {
    id: string,
	alcoholic: string,
	title: string,
	image: string,
	glass: string,
}

export type TFetchDrinks = {
    drinks: TDrink[];
    searchTerm: string;
}

export type TFetchCocktail = {
    id: string;
    cocktail: TCocktail;
}