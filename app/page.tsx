import ThemeToggle from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";

export default async function Home() {

  const launch = async (formData: FormData) => {
    'use server';
    let id = formData.get("id");
    if (id) {
      redirect(`video/${id}`);
    }
  }

  return (
    <main className="flex flex-col min-h-screen w-full gap-6 p-8 sm:p-16">
      <div className="flex flex-row items-center justify-between">
        <div className="w-[100%] flex flex-col gap-2">
          <h1 className="text-center text-4xl font-extrabold">Dep-Azure</h1>
          <span className="text-center text-sm text-zinc-400">Developed by Aditya gupta</span>
        </div>
        <ThemeToggle />
      </div>
      <form action={launch} className="w-full flex flex-row space-x-3">
        <Input
          type="text"
          placeholder="place your youtube id here..."
          className="w-full"
          name="id"
        />
        <Button type="submit">Launch</Button>
      </form>
    </main>
  );
}
