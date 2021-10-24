const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const { nanoid } = require("nanoid");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
    res.render("orderDone", {
        order_id: nanoid(20),
        dataUser: {
            name: "rikha putri maesha",
            address:
                "Kota Jakarta Timur, DKI Jakarta, Kramat Jati, CONDET BALEKAMBANG NO 30 RT10/004 PUCUNG 3",
            telepon: "085852632969",
            email: "rikhamaesha23@gmail.com",
        },
        order: [
            {
                id: 1,
                name: "roster beton lubang 4",
                price: 10000, // 2.000.000
                count: 200,
            },
            {
                id: 2,
                name: "roster beton labirin",
                price: 12000, // 1.200.000
                count: 100,
            },
            {
                id: 3,
                name: "roster beton muka 2",
                price: 15000,
                count: 200,
            },
        ],
        total: 3200000,
    });
});

app.listen(3000, () => {
    console.log("server running at: localhost:3000");
});
