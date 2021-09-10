export interface movieDTO{
    id:number;
    title:string;
    poster:string;
}

export interface landingPaeDTO{
    inTheaters? : movieDTO[];
    upComing?:movieDTO[];
}