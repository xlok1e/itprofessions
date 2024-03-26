import React from 'react';
import { ProfessionInterface } from '@/entities/Professions/api/types.ts';

export interface ProfessionDescriptionInterface extends ProfessionInterface {
    trigger: React.ReactNode;
    category: string;
}
