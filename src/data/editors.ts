export interface Profile {
    name: string;
    image: string;
    affiliation: string;
    email: string;
    portfolio: string;
}

export const profiles: Profile[] = [
    {
        name: "Benten Shichifuku",
        image: "/yoshida.jpg",
        affiliation: "静岡大学 情報学部 狩野研究室",
        email: "yyoshida@kanolab.net",
        portfolio: "https://bentenshichifuku-portfolio-website.vercel.app/",
    },
    {
        name: "iggy157",
        image: "/harada.jpg",
        affiliation: "静岡大学 情報学部 狩野研究室",
        email: "yharada@kanolab.net",
        portfolio: "https://example.com/harada-portfolio",
    },
];
