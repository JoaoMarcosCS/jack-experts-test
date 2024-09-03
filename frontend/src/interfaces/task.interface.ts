export interface Task{ 
    title: string;
    description: string;
    createdAt: Date;
    id: number;
    status: "open" | "completed";
    isFavorite: boolean;
}