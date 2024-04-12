import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

function LoadingPage() {
  return (
    <Card className="w-[380px]">
        <CardHeader>
            <CardTitle>
                <div className="p-10 bg-slate-200 animate-pulse w-full rounded-xl"/>
            </CardTitle>
            <CardDescription>
            <div className="p-4 bg-slate-200 animate-pulse w-full rounded-xl"/>
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="h-52 w-full rounded-xl bg-slate-300 animate-pulse"/>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
            <div className="p-4 bg-slate-200 w-full rounded-xl"/>
            <div className="p-4 bg-slate-200 w-full rounded-xl"/>
            <div className="p-4 bg-slate-200 w-full rounded-xl"/>
            <div className="p-4 bg-slate-200 w-full rounded-xl"/>
        </CardFooter>
    </Card>
  )
}

export default LoadingPage