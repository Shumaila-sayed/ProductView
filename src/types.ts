export type Product = {
	id: number;
	title: string;
	price: number;
    thumbnail: string;
    rating: number;
};

export type ProductCardProps = {
	product: Product;
};

export type HeaderProps = {
	setSearchText: (text: string) => void;
}

export type ProtectedRoutesProps = {
	user: boolean;
};

export type LoginProps = {
	isLogged: boolean;
	setIsLogged: (user: boolean) => void;
}