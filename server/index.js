const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Limpe1x!an",
    database: "lushgreenery",
});

//Advisors
app.get('/advisors', (req, res) => {
    db.query(
        `SELECT u.username, r.role_name, o.org_name, rc.rep_code
    FROM users u
    INNER JOIN roles r ON u.fk_role_id = r.role_id
    INNER JOIN organisations o ON u.fk_org_id = o.org_id
    INNER JOIN rep_code rc ON u.user_id = rc.fk_user_id
    `, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        };
    })
})

app.delete('/delete/:advisors_id', (req, res) => {
    const id = req.params.advisors_id
    db.query("DELETE FROM advisors WHERE advisors_id= ? ", advisors_id, (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
        };
    })
})


//Policies
app.get('/managepolicies', (req, res) => {
    db.query(
        `SELECT p.policy_id, o.org_name, c.category_name, p.policy_name, p.policy_details, u.fullname 'added by'
    FROM policies p
    INNER JOIN organisations o ON o.org_id =  p.fk_org_id
    INNER JOIN policies_category c ON c.category_id = p.fk_category_id
    INNER JOIN users u ON u.user_id = p.added_by_user`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        };
    })
})

app.delete('/delete/:policy_id', (req, res) => {
    const id = req.params.advisors_id
    db.query(`DELETE FROM policies WHERE policy_id = ?`, policy_id, (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
        };
    })
})
app.post("/create", (req, res) => {
    const policy_name = req.body.name;
    const company = req.body.company;
    const add_date = req.body.date;

    db.query(
        "INSERT INTO policies (policy_name, company, add_date) VALUES (?,?,?)",
        [policy_name, company, add_date],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});