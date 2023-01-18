"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors = require("cors");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 8001;
app.use(body_parser_1.default.json());
app.use(cors());
app.use(express_1.default.urlencoded({ extended: true }));
// ! TEST DATA FOR TESTING FRONTEND
let events = [
    {
        id: 1,
        name: 'Charity Ball',
        category: 'Fundraising',
        description: 'Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.',
        featuredImage: 'https://placekitten.com/500/500',
        images: [
            'https://placekitten.com/500/500',
            'https://placekitten.com/500/500',
            'https://placekitten.com/500/500',
        ],
        location: '1234 Fancy Ave',
        date: '12-25-2019',
        time: '11:30'
    },
    {
        id: 2,
        name: 'Rescue Center Goods Drive',
        category: 'Adoptions',
        description: 'Come to our donation drive to help us replenish our stock of pet food, toys, bedding, etc. We will have live bands, games, food trucks, and much more.',
        featuredImage: 'https://placekitten.com/500/500',
        images: [
            'https://placekitten.com/500/500'
        ],
        location: '1234 Dog Alley',
        date: '11-21-2019',
        time: '12:00'
    }
];
app.get('/', (req, res) => {
    res.send('Express + TS server');
});
// ! ROUTE FOR TESTING THE FRONTEND
app.get('/events', (req, res) => {
    res.send(events);
});
// ! ROUTE FOR TESTING A SINGLE EVENT
app.get('/events/:id', (req, res) => {
    const id = Number(req.params.id);
    const event = events.find(event => event.id === id);
    res.send(event);
});
app.listen(port, () => {
    console.log("Server is running at http://localhost:" + port);
});
