// src/config/imageConfig.ts

export interface Logo {
    id: number;
    image: string;
    name: string;
}
const imageBaseUrl = '/onximage';
export const allLogos: Logo[] = [
    {
        id: 1,
        image: `${imageBaseUrl}/google.svg`,
        name: "Google",
    }, //
    {
        id: 3,
        image: `${imageBaseUrl}/Swiggy.svg`,
        name: "Swiggy",
    }, //
    {
        id: 4,
        image: `${imageBaseUrl}/TCS.svg`,
        name: "TCS",
    }, //
    {
        id: 5,
        image: `${imageBaseUrl}/Zomato.svg`,
        name: "Zomato",
    }, //
    {
        id: 6,
        image: `${imageBaseUrl}/uber.svg`,
        name: "Uber",
    }, //
    {
        id: 7,
        image: `${imageBaseUrl}/amazon.svg`,
        name: "Amazon",
    }, //
    {
        id: 8,
        image: `${imageBaseUrl}/ola.svg`,
        name: "ola",
    }, //
    {
        id: 9,
        image: `${imageBaseUrl}/Zepto1.svg`,
        name: "zepto1",
    }, //
    {
        id: 10,
        image: `${imageBaseUrl}/sony.svg`,
        name: "sony",
    }, //
    {
        id: 11,
        image:
            `${imageBaseUrl}/panasonic.svg`,
        name: "Panasonic",
    }, //
    {
        id: 12,
        image: `https://tm-integration-aws.s3.amazonaws.com/amazon.svg`,
        name: "Amazon",
    }, //
    {
        id: 13,
        image:
            `${imageBaseUrl}/Schindler2.svg`,
        name: "Schindler",
    }, //
    {
        id: 14,
        image: `${imageBaseUrl}/Paytm.svg`,
        name: "paytm",
    }, //
    {
        id: 15,
        image: `${imageBaseUrl}/bajaj.svg`,
        name: "bajaj",
    }, //
    {
        id: 16,
        image: `${imageBaseUrl}/ipro.svg`,
        name: "Wipro ",
    }, //
    {
        id: 19,
        image: `${imageBaseUrl}/Bolt.svg`,
        name: "Bolt",
    }, //
    {
        id: 20,
        name: "Rapido",
        image: `${imageBaseUrl}/Rapido.svg`,
    }, //
    {
        id: 17,
        name: "Jiomart",
        image: `${imageBaseUrl}/jiomart.svg`,
    }, //
    {
        id: 18,
        name: "Bigbasket",
        image: `${imageBaseUrl}/Bigbasket.svg`,
    }, //
];


export const onboardingLogos: number[] = [1, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18];
export const installationLogos: number[] = [10, 11, 12, 13, 14, 15, 16, 19];
export const trustedClients: number[] = [17, 10, 11];

export function getLogosByIds(ids: number[]): Logo[] {
    return allLogos.filter(logo => ids.includes(logo.id));
}

export const mainPageLogos = allLogos;
export const onboardingPageLogos = getLogosByIds(onboardingLogos);
export const installationPageLogos = getLogosByIds(installationLogos);

export const trustedClientsImages = getLogosByIds(trustedClients);

export const servicesImg = [`${imageBaseUrl}/onboarding.jpg`, `${imageBaseUrl}/install.jpg`]