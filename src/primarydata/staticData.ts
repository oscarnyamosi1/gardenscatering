import { number, string } from "zod";

export interface CompanyInfo {
    name:string;
    tagline:string;
    foundedYear:number;
    businessContacts:{
        email:string;
        phone:string;
    }
    socialLinks:{
        whatsapp:string;
        facebook?:string;
        tiktok?:string;
    };
    location:{
        country:string;
        city:string;
        street:string;
    };
}

export const companyData: CompanyInfo = {
    name:"gardens catering",
    tagline:"The best choice",
    foundedYear:2012,
    businessContacts:{
        email:"gardenscatering@gmail.com",
        phone:"+254 708 775 684",
    },
    socialLinks:{
        whatsapp:"+254 708 775 684",
    },
    location:{
        country:"Kenya",
        city:"Kisii",
        street:"Kisii Kilgoris - RD",
    }
}