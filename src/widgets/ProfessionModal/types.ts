export interface ProfessionDescriptionInterface {
    id: number;
    close?: (open: boolean) => void;
    setClickedProfession?: (id: number) => void;
}
