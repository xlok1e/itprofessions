export type levels = 1 | 2 | 3;

export interface ProfessionInterface {
    id: number;
    name: string;
    description: string;
    learn: string;
    skills: string;
    work: string;
    level: levels;
    enter: string;
    salary: string;
}

export interface CategoryInterface {
    category: string;
    professions: ProfessionInterface[];
}
