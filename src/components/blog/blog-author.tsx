import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/icons";
import { Card, CardContent } from "@/components/ui/card";

interface BlogAuthorProps {
    name: string;
    bio: string;
    avatar: string;
    socials: {
        twitter?: string;
        github?: string;
        linkedin?: string;
    };
}

export function BlogAuthor({ name, bio, avatar, socials }: BlogAuthorProps) {
    return (
        <Card className="mt-8">
            <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full">
                        <Image src={avatar} alt={name} fill className="object-cover" />
                    </div>
                    <div>
                        <h3 className="font-heading text-xl font-bold">{name}</h3>
                        <p className="text-sm text-muted-foreground">{bio}</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    {socials.twitter && (
                        <Link
                            href={socials.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary"
                        >
                            <Icons.twitter className="h-5 w-5" />
                        </Link>
                    )}
                    {socials.github && (
                        <Link
                            href={socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary"
                        >
                            <Icons.gitHub className="h-5 w-5" />
                        </Link>
                    )}
                    {socials.linkedin && (
                        <Link
                            href={socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary"
                        >
                            <Icons.linkedin className="h-5 w-5" />
                        </Link>
                    )}
                </div>
            </CardContent>
        </Card>
    );
} 