export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export const faq: FAQItem[] = [
    {
        id: 'abime',
        question: "Le covering abîme-t-il les surfaces d’origine ?",
        answer: "Non, les films vinyles sont conçus pour être retirés sans laisser de traces, à condition que la pose soit réalisée sur une surface saine et propre."
    },
    {
        id: 'surfaces',
        question: "Peut-on appliquer du covering sur toutes les surfaces ?",
        answer: "Oui, tant que la surface est lisse, propre et non poreuse : bois, stratifié, métal, mélaminé, PVC, etc. Nous réalisons toujours une évaluation préalable."
    },
    {
        id: 'duree',
        question: "Combien de temps dure le covering ?",
        answer: "Nos films professionnels ont une durée de vie moyenne de 12 à 15 ans en intérieur, avec une résistance à l’humidité, à la chaleur, aux abrasions et aux UV indirects."
    },
    {
        id: 'meubles',
        question: "Faut-il vider les meubles ou démonter les portes ?",
        answer: "Non, tout est fait sur place, sans démontage majeur. Nous protégeons les zones non concernées et assurons une pose propre et rapide."
    },
    {
        id: 'conseil',
        question: "Proposez-vous un service de conseil déco ?",
        answer: "Oui, nous vous accompagnons dans le choix des textures, couleurs et effets selon votre intérieur pour un rendu harmonieux et personnalisé."
    },
    {
        id: 'devis',
        question: "Est-ce que je peux avoir un devis gratuit ?",
        answer: "Bien sûr ! Il suffit de remplir notre formulaire dans la section Devis gratuit. Nous vous répondons sous 48h avec une proposition personnalisée."
    }
];
