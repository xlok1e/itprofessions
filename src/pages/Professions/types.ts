export type levels = 1 | 2 | 3;

export interface ProfessionInterface {
    id: number;
    name: string;
    description: string;
    level: levels;
    salary: string;
}

export interface CategoryInterface {
    category: string;
    professions: ProfessionInterface[];
}
