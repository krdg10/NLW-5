import express from "express";

const app = express();

app.get("/", (request, response) => {
    //return response.send("ola nlw");
    return response.json({
        message: "ola nlw"
    });
});

app.post("/", (request, response) => {
    return response.json({message: "usuario criado com sucesso"});
});

app.listen(3333, () => console.log("server is running on port 3333"));
