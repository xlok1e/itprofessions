import { ProfessionDescriptionInterface } from '@/widgets/ProfessionModal/types.ts';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { FC } from 'react';

const ProfessionModal: FC<ProfessionDescriptionInterface> = ({ trigger }) => {
    return (
        <Dialog>
            <DialogTrigger>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Надо</DialogTitle>
                    <DialogDescription>
                        Ебашить <br /> (кого?)
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export { ProfessionModal };
