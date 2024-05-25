export type levels = 1 | 2 | 3;

export interface ProfessionCardInterface {
    title: string;
    level: levels;
    salary: string;
    style?: string;
    titleStyle?: string;
    onClick?: () => void;
}
