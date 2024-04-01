import { demo } from "@/api/demo.api";

export default async function Demo() {
    const data = await demo();
    console.log(data);

    return (
        <div>
            <h1 className="text-3xl font-semibold text-center">Welcome to the Next.js Template</h1>
            <p className="text-center">{data.data}</p>
        </div>
    );
}