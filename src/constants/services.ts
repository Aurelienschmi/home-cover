export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    image: string; // Added image path
    link: string;
}

export const services: Service[] = [
    {
        id: 'mobilier',
        title: 'Relooking Mobilier',
        description: 'Donnez une seconde vie à vos meubles ! Armoires, commodes, tables... Nos techniques de covering redonnent du style à votre mobilier.',
        icon: '🛋️',
        image: '/assets/service-meubles.png',
        link: '/services#mobilier'
    },
    {
        id: 'cuisine',
        title: 'Rénovation Cuisine',
        description: 'Transformez votre cuisine avec nos films adhésifs haute qualité. Effet bois, béton, marbre... Un large choix de finitions pour un résultat professionnel.',
        icon: '🍳',
        image: '/assets/service-cuisine.png',
        link: '/services#cuisine'
    },
    {
        id: 'escalier',
        title: 'Rénovation Escalier',
        description: 'Escaliers en bois fatigués ? Notre covering spécialisé leur redonne éclat et modernité sans les travaux de ponçage traditionnels.',
        icon: '🪜',
        image: '/assets/service-escalier.jpg',
        link: '/services#escalier'
    },
    {
        id: 'portes',
        title: 'Portes & Fenêtres',
        description: 'Modernisez vos portes et fenêtres intérieures avec nos films décoratifs. Résistants et esthétiques pour un intérieur harmonieux.',
        icon: '🚪',
        image: '/assets/service-porte.png',
        link: '/services#portes'
    }
];
