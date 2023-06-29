export interface CardOptions {
    image?: string;
    title?: string;
    articleNumber?: number;
    lastUpdated?: string;


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