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
            <Card className="h-full overflow-hidden transition-all hover:border-primary">
                {coverImage && (
                    <div className="relative aspect-video w-full overflow-hidden">
                        <Image
                            src={coverImage}
                            alt={title}
                            fill
                            className="object-cover transition-all hover:scale-105"
                        />
                    </div>
                )}
                <CardHeader>
                    <CardTitle className="line-clamp-2">{title}</CardTitle>
                    <CardDescription className="flex flex-col gap-2">
                        <span className="text-sm text-muted-foreground">
                            {format(new Date(date), "MMMM dd, yyyy")}
                        </span>
                        <div className="flex items-center gap-2">
                            <div className="relative h-6 w-6 overflow-hidden rounded-full">
                                <Image
                                    src={authorData.avatar}
                                    alt={authorData.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-sm text-muted-foreground">{authorData.name}</span>
                            <span className="text-sm text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground">{readingTime} min read</span>
                        </div>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="line-clamp-3 text-sm text-muted-foreground">{description}</p>
                </CardContent>
            </Card>
        </Link>
    );
}