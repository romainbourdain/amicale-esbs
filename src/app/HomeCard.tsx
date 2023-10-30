"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomeCard = ({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description?: string;
  image: string;
  link: string;
}) => {
  const router = useRouter();
  return (
    <Card
      onClick={() => router.push(link)}
      className="w-full max-w-sm flex flex-col justify-between group cursor-pointer hover:border-fg-ui-hover-gray transition-all duration-500 ease-in-out"
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="break-normal">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex items-end justify-center">
        <div className="overflow-hidden rounded-xl">
          <Image
            src={image}
            sizes="100vw"
            alt={`Image ${title}`}
            width={10}
            height={10}
            className="w-full aspect-square object-cover max-w-[300px] group-hover:scale-110 transition-all duration-500 ease-in-out"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
