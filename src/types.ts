export type FilterType = {
    id: number;
    name: Rubriks;
    title: string;
}

export enum Rubriks {
    innovation = 'innovation',
    psychology = 'psychology',
    edu_change = 'edu_change',
    motivation = 'motivation',
    analytics = 'analytics',
    useful_adv = 'useful_adv'
}

export type Article = {
    id: number,
    title: string
    views: number,
    href: string,
    date: Date,
    coverSrc: string,
    rubricId: Rubriks
}