export interface CardOptions {
    icon?: string;
    title?: string;
    totalArticle?: number;
    updateTime?: string;
    info?: boolean;
    description?: string;
    infoIcon?: string;


}

export interface Category {
    id: string;
    title: string;
    description: string;
    createdOn: string;
    updatedOn: string;
    enabled: boolean;
    order: number;
    icon: string;
    totalArticle: number;
}


export interface ArticleInterface {
    id?: string;
    title?: string;
    createdOn?: string;
    updatedOn?: string;
    content?: string;
    icon?: string;
    authorId?: string;
    status?: string;
}


export interface CardInterface {
    id: string;
    title: string;
    description: string;
    createdOn: string;
    updatedOn: string;
    enabled: boolean;
    order: number;
    icon: string;
    totalArticle: number;
    updateTime: string;
}

export interface UpdatedCategory {
    updateTime: string;
    id: string;
    title: string;
    description: string;
    createdOn: string;
    updatedOn: string;
    enabled: boolean;
    order: number;
    icon: string;
    totalArticle: number;
}

export interface AppState {
    updatedCategories: UpdatedCategory[];
}



export interface Category {
    id: string;
    title: string;
    description: string;
    createdOn: string;
    updatedOn: string;
    enabled: boolean;
    order: number;
    icon: string;
    totalArticle: number;
}

export interface Article {
    id: string;
    title: string;
    createdOn: string;
    updatedOn: string;
    content: string;
    icon: string;
    authorId: string;
    status: string;
}

export interface Author {
    id: string;
    name: string;
}

export interface JSONDataInterface {
    categories: Category[];
    articles: Article[];
    authors: Author[];
}
