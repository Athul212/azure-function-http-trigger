import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function HelloAthul(
    request: HttpRequest,
    context: InvocationContext
): Promise<HttpResponseInit> {

    context.log("HelloAthul function was triggered.");

    return {
        status: 200,
        body: "Hello from Athul's Azure Function! 🚀"
    };
}

app.http("HelloAthul", {
    methods: ["GET"],
    authLevel: "anonymous",
    handler: HelloAthul
});