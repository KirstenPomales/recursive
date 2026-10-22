import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getAuthor } from "@/lib/blog";

interface BlogCardProps {
    title: string;
    description: string;
    date: string;
    slug: string;
    coverImage?: string;
    author: string;
    readingTime: number;
}

export function BlogCard({ title, description, date, slug, coverImage, author, readingTime }: BlogCardProps) {
    const authorData = getAuthor(author);
    if (!authorData) return null;

    return (
        <Link href={`/blog/${slug}`}>
            <Card className="h-full overflow-hidden transition-all border-2 border-black shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] bg-white">
                {coverImage && (
                    <div className="relative aspect-video w-full overflow-hidden border-b-2 border-black">
                        <Image
                            src={coverImage}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
                <CardHeader>
                    <CardTitle className="line-clamp-2 font-black text-xl text-black uppercase">{title}</CardTitle>
                    <CardDescription className="flex flex-col gap-2">
                        <span className="text-sm font-bold text-black/60">
                            {format(new Date(date), "MMMM dd, yyyy")}
                        </span>
                        <div className="flex items-center gap-2">
                            <div className="relative h-8 w-8 overflow-hidden border-2 border-black">
                                <Image
                                    src={authorData.avatar}
                                    alt={authorData.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-sm font-bold text-black">{authorData.name}</span>
                            <span className="text-sm font-bold text-black">•</span>
                            <span className="text-sm font-bold text-black">{readingTime} min read</span>
                        </div>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="line-clamp-3 text-sm font-medium text-black/80">{description}</p>
                </CardContent>
            </Card>
        </Link>
    );
}
