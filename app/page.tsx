"use client"

import {Button, Card, CardBody} from "@nextui-org/react"
import Link from "next/link"
import TopNav from "./components/TopNav"
import {useEffect, useState} from "react";
import {getCurrentUser} from "aws-amplify/auth";
import {User} from "./auth/components/AuthButton";
import Image from "next/image";


export default function Page() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
        try {
            setUser(prevState => ({ ...prevState, loading: true }));
            const user = await getCurrentUser();
            console.log("User from context: ", user);
            setUser(user);
        } catch (e) {
            setUser(null);
        } finally {
            setUser(prevState => ({ ...prevState, loading: false }));
        }
      };

      fetchUser();
  }, []);
  return (
    <>
    <TopNav user={user} />
    <div className="flex flex-col min-h-screen">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <Link
                href="#"
                className="bg-muted rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                prefetch={false}
              >
                <ShirtIcon className="h-8 w-8" />
                <span className="text-sm font-medium">Clothing</span>
              </Link>
              <Link
                href="#"
                className="bg-muted rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                prefetch={false}
              >
                <LaptopIcon className="h-8 w-8" />
                <span className="text-sm font-medium">Electronics</span>
              </Link>
              <Link
                href="#"
                className="bg-muted rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                prefetch={false}
              >
                <HomeIcon className="h-8 w-8" />
                <span className="text-sm font-medium">Home &amp; Garden</span>
              </Link>
              <Link
                href="#"
                className="bg-muted rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                prefetch={false}
              >
                <BikeIcon className="h-8 w-8" />
                <span className="text-sm font-medium">Vehicles</span>
              </Link>
              <Link
                href="#"
                className="bg-muted rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                prefetch={false}
              >
                <BookIcon className="h-8 w-8" />
                <span className="text-sm font-medium">Books</span>
              </Link>
              <Link
                href="#"
                className="bg-muted rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                prefetch={false}
              >
                <ToyBrickIcon className="h-8 w-8" />
                <span className="text-sm font-medium">Toys</span>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Featured Items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card>
                <Image
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={400}
                  height={300}
                  className="rounded-t-md object-cover w-full h-48"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <CardBody className="p-4">
                  <h3 className="text-lg font-medium mb-2">Product Name</h3>
                  <p className="text-muted-foreground mb-4">Description of the product</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">$49.99</span>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View
                    </Link>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <Image
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={400}
                  height={300}
                  className="rounded-t-md object-cover w-full h-48"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <CardBody className="p-4">
                  <h3 className="text-lg font-medium mb-2">Product Name</h3>
                  <p className="text-muted-foreground mb-4">Description of the product</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">$29.99</span>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View
                    </Link>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <Image
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={400}
                  height={300}
                  className="rounded-t-md object-cover w-full h-48"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <CardBody className="p-4">
                  <h3 className="text-lg font-medium mb-2">Product Name</h3>
                  <p className="text-muted-foreground mb-4">Description of the product</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">$79.99</span>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View
                    </Link>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <Image
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={400}
                  height={300}
                  className="rounded-t-md object-cover w-full h-48"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <CardBody className="p-4">
                  <h3 className="text-lg font-medium mb-2">Product Name</h3>
                  <p className="text-muted-foreground mb-4">Description of the product</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">$59.99</span>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Sell Your Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background rounded-md p-6 flex flex-col items-start gap-4">
                <h3 className="text-xl font-semibold">List Your Items</h3>
                <p className="text-muted-foreground">
                  Sell your unwanted items to a global audience and earn extra cash.
                </p>
                <Button className="mt-auto">List an Item</Button>
              </div>
              <div className="bg-background rounded-md p-6 flex flex-col items-start gap-4">
                <h3 className="text-xl font-semibold">Become a Seller</h3>
                <p className="text-muted-foreground">Join our community of sellers and start earning today.</p>
                <Button className="mt-auto">Sign Up</Button>
              </div>
            </div>
          </div>
        </section>
      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MountainIcon className="h-6 w-6" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Help Center
            </Link>
          </nav>
        </div>
      </footer>
    </div>
    </>
  )
}

function BikeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </svg>
  )
}


function BookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LaptopIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  )
}


function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function ShirtIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  )
}


function ToyBrickIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="12" x="3" y="8" rx="1" />
      <path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" />
      <path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" />
    </svg>
  )
}