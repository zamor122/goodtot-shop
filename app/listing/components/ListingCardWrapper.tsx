import {Card, CardBody, CardFooter, Link} from "@nextui-org/react";
import {ReactNode} from "react";

interface IListingCardProps {
  children: ReactNode,
  link: string,
}

export default function ListingCardWrapper({ link, children }: IListingCardProps) {
  return (
    <div className="flex flex-col gap-4 items-center sm:items-start h-auto w-80">
      <Link href={link} className="flex h-full w-full">
        <Card className="flex flex-col items-center content-center justify-center h-96 w-80">
          {children}
        </Card>
      </Link>
    </div>
  );
}