export interface Card {
    topParagraph: string;
    name: string;
    bottom: string;
    weight: number;
    outBody: string
    isActive: boolean;
    isSelected: boolean;
}

export type Dispatch<A> = (value: A) => void;
