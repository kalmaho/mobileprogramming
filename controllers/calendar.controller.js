
const Calendar = require("../models/calendar.model.js");

exports. createTable = (req, res) => {
    Calendar.createtable((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        else res.send(data);
    });
};
exports.calendarSerchAll = (req, res) => {
    Calendar.calendarserch((err, data) => {
        
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
            else res.send(data);
    });
};
exports.createCalendar = (req, res) => {
    var data = {
        user_id: req.body.user_id,
        name : req.body.name,
        person_num : req.body.person_num,
    }
    Calendar.createCalendar(data,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        else 
        {
            res.send(data);
        }
    });
};
exports.deleteCalendar = (req, res) => {
    var data = {
        
    }
    Calendar.deleteCalendar(data,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        else 
        {
            res.send(data);
        }
    });
};