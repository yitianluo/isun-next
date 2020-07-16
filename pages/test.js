import connectDB from "../lib/mongo-connect";

export default function Hello() {
    const DB = connectDB();
    console.log("db is" + DB);

    return (
        <div>
            hello
        </div>
    )
}