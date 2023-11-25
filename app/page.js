import Image from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/dashboard"}>
        {" "}
        <Button color="primary">Move to /dashboard</Button>
      </Link>
    </main>
  );
}
