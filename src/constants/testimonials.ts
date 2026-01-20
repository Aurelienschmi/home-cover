export interface Testimonial {
    id: number;
    name: string;
    text: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Louis D.",
        text: "J'ai fait rénover mon escalier par My Home Cover, le résultat est bluffant. Aucun travaux salissants, et un rendu bois naturel superbe !"
    },
    {
        id: 2,
        name: "Antoine C.",
        text: "Mes anciens meubles ont retrouvé une seconde vie grâce au covering vinyle. Pose rapide et équipe très pro, je recommande à 100 %."
    },
    {
        id: 3,
        name: "Aurélien S.",
        text: "Notre cuisine semble toute neuve pour un budget mini. Le covering effet béton est très tendance, merci pour les conseils déco !"
    }
];
