import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { RiInstagramLine } from "react-icons/ri";

export const social_links = [

        { icon: <CiLinkedin />, href: "https://www.linkedin.com/in/achraf-tichirra-92892b243/" },
        { icon: <GrGithub />, href: "https://github.com/Achraftic" },
        { icon: <RiInstagramLine />, href: "https://www.instagram.com/achraf_tic/" },
        { icon: <CiFacebook />, href: "https://web.facebook.com/profile.php?id=100004816778321" },
        { icon: <FaWhatsapp />, href: "https://web.whatsapp.com/" },

]
export type project = {
        title: string;
        description: string;
        image: string;
        technologies: string[];
        github?: string
        website?: string | null
}
export const projects: project[] = [
        {
                title: "E-commerce Web App",
                description: "A comprehensive e-commerce platform featuring product browsing, a shopping cart, order tracking, and an admin dashboard for managing products and users, complete with charts and analytics for insightful decision-making",
                image: "https://utfs.io/f/j2e7NzBLrsK3wRn0rKYi28W6Ia0FRlpX7BubOYeZUGTcNSgQ",
                technologies: ["Next js", "Tailwind CSS", "Prsima", "Postgresql", "Typescript", "Framer Motion", "zod", "zustand", "next-auth"],
                github: "https://github.com/Achraftic/e_commerce_nextjs14",
                website: null
        },
        {
                title: "Pet Care Web App",
                description: "A user-friendly application to book pet care services, track pet health, and find nearby veterinary clinics and pet-friendly locations.",
                image: "https://utfs.io/f/j2e7NzBLrsK3td3MXelCOHZqkY0wpMP268QdivBayTF7zujL",
                technologies: ["Next js", "Tailwind CSS", "Prsima", "Postgresql", "Typescript", "zod", "zustand", "next-auth"],
                github: "https://github.com/Achraftic/e_commerce_nextjs14",
                website: null
        },
        {
                title: "TV Show Web App",
                description: "An application to explore and track popular TV shows, featuring search functionality, ratings, and personalized recommendations.",
                image: "https://utfs.io/f/j2e7NzBLrsK3q1Y7j7mOG1Sj04DwVALH28tBlhMIKoNedJRb",
                technologies: ["React js", "Tailwind CSS", "axios"],
                github: "https://github.com/Achraftic/tvshowApp",
                website: null
        },
        {
                title: "E-Book App",
                description: "A digital library platform where users can browse, purchase, and read e-books with features like bookmarks,include admin dashboard to manage books and users.",
                image: "https://utfs.io/f/j2e7NzBLrsK3YBv1cdQGhJ8LSwBMKR5xTpXqcdaeDVA41ogs",
                technologies: ["Laravel", "Tailwind CSS", "javascript", "mysql", "php", "ajax", "jquery"],
                github: "https://github.com/Achraftic/Ebook_laravel",
                website: null
        },
        {
                title: "School Management System",
                description: "An integrated system for managing school operations, including student records, teacher schedules, attendance, and grade tracking.",
                image: "https://utfs.io/f/j2e7NzBLrsK39K42uOVJFvChKTVwWYfQMr4u8Rg2qlXt0Bny",
                technologies: ["Laravel", "Tailwind CSS", "javascript", "mysql", "php", "ajax", "jquery"],
                github: "https://github.com/Achraftic/sms_pfe",
                website: null
        }
];

export const HeroData = {
        image:"https://utfs.io/f/j2e7NzBLrsK3sH4kLhmOriPy1Upbe8sNZh0WE6FXMIfLznQc"
}
