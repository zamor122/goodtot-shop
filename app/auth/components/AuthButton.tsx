import { Avatar, Button, CircularProgress } from "@nextui-org/react";
import Link from "next/link";

type AuthButtonProps = {
  user: any;
  loading?: boolean;
};

export default function AuthButton({ user, loading = false }: AuthButtonProps) {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CircularProgress aria-label="loading..." size="lg" />
      </div>
    );
  }

  return user ? (
    <Avatar />
  ) : (
    <Link href="/auth">
      <Button className="bg-amber-50 dark:bg-stone-700 text-sm font-bold">
        Login
      </Button>
    </Link>
  );
}
