const fastify = require("fastify")();
const fs = require("fs");

const files = fs.readdirSync(__dirname+"/text").map(x => x);

console.log(files);

fastify.register(require("point-of-view"), {
    engine: {
        ejs: require("ejs")
    }
});

// fastify.register(require('fastify-cors'), {"origin": "*"})

fastify.get("/", function (req, res) {
    res.view("index.ejs", {files});
});

fastify.get("/text", function (req, res) {
    res.view("text.ejs", {name: req.query.file.toString()});
});

fastify.post("/text", function (req, res) {
    if(!("file" in req.query)) {
        res.code(502).send({"error": "not file specified"});
    } else {
        let file = req.query.file.toString()+".txt";
        if(!(files.includes(file))) {
            res.code(503).send({"error": "file not found"});
        } else {
            let text = fs.readFileSync(__dirname+"/text/"+file);
            res.code(200).send(text);
        }
    }

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST");
});

fastify.listen(3000, "0.0.0.0", function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }

    fastify.log.info(`server listening on ${address}`);
    /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
    console.log(`server listening on ${address}`);
});
