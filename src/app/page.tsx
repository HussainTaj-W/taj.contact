
import { GlareCard } from "@/components/ui/glare-card";
import { IconBook, IconBrandGithub, IconBrandLinkedin, IconBrandX, IconExchange, IconHome, IconMail, IconNewSection, IconTerminal, IconTerminal2, IconUser } from "@tabler/icons-react";
import React from "react";

export default function Home()
{
    return (
        <div className="h-[100vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {links.map((link, index) => (
                    <a href={link.href} key={index}>
                        <GlareCard className="flex md:flex-col md:items-center md:justify-end p-6">
                            {link.image && (
                                <img
                                    className="h-full w-full absolute inset-0 object-cover"
                                    src={link.image}
                                />
                            )}
                            <div className="absolute inset-0 z-0 invisible md:visible bg-gradient-to-t from-black/70 to-black/25"></div>
                            <div className="absolute inset-0 z-0 md:invisible bg-gradient-to-r from-black/95 via-black/75 to-black/25"></div>


                            <div className="z-10 md:text-center">
                                <p className="font-bold text-white text-2xl">{link.name}</p>
                                <p className="font-normal text-base text-neutral-200">{link.title}</p>
                            </div>

                        </GlareCard>
                    </a>
                ))}

            </div>
        </div>
    );
}

type ProfileLink = {
    name: string;
    title: string;
    image?: string;
    href: string;
}

const links: ProfileLink[] = [
    {
        name: "Hassan Taj",
        title: "Senior Software Engineer",
        image: "/images/hassan.webp",
        href: "https://hassan.taj.contact/",
    },
    {
        name: "Hussain Taj",
        title: "Software Engineer",
        image: "/images/hussain.jpg",
        href: "https://hussain.taj.contact/",
    },
    {
        name: "Husnain Taj",
        title: "Student / Freelancer",
        image: "/images/husnain.jpg",
        // image: "https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "https://husnain.taj.contact/",
    },
];
