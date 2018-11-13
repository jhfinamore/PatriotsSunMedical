// More issues with import statements causing 'unexpected token' errors
/*
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Issue from './models/Issue';
import Patient from './models/patient';
*/

const express = require('express');
const cors    = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Patient = require('./models/patient');

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

// Previous Mongoose connection line
// mongoose.connect('mongodb://localhost:27017/Issues');

mongoose.connect('mongodb://localhost:27017/Patients');


const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

/*
router.route('/issues').get((req, res) => {
    Issue.find((err, issues) => {
        if (err)
            console.log(err);
        else
            res.json(issues);
    });
});

router.route('/issues/:id').get((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (err)
            console.log(err);
        else
            res.json(issue);
    });
});

router.route('/issues/add').post((req, res) => {
    let issue = new Issue(req.body);
    issue.save()
        .then(issue => {
            res.status(200).json({'issue': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/issues/update/:id').post((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (!issue)
            return next(new Error('Could not load document'));
        else {
            issue.title = req.body.title;
            issue.responsible = req.body.responsible;
            issue.description = req.body.description;
            issue.severity = req.body.severity;
            issue.status = req.body.status;

            issue.save().then(issue => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/issues/delete/:id').get((req, res) => {
    Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
        if (err)
            res.json(err);
        else
            res.json('Remove successfully');
    })
})
*/

// New Code below

router.route('/patients').get((req, res) => {
    Patient.find((err, patients) => {
        if (err)
            console.log(err);
        else
            res.json(patients);
    });
});

router.route('/patients/:id').get((req, res) => {
    Patient.findById(req.params.id, (err, patient) => {
        if (err)
            console.log(err);
        else
            res.json(patient);
    });
});

router.route('/patients/add').post((req, res) => {
    let patient = new Patient(req.body);
    patient.save()
        .then(issue => {
            res.status(200).json({'issue': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/patients/update/:id').post((req, res) => {
    Patient.findById(req.params.id, (err, patient) => {
        if (!patient)
            return next(new Error('Could not load patient record!'));
        else {

            patient.fname = req.body.fname;
            patient.lname = req.body.lname;
            patient.insurance = req.body.insurance;
            patient.gender = req.body.gender;
            patient.age = req.body.age;
            patient.weight = req.body.weight;
            patient.reason = req.body.reason;


            patient.save().then(patient => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/patients/delete/:id').get((req, res) => {
    Patient.findByIdAndRemove({_id: req.params.id}, (err, patient) => {
        if (err)
            res.json(err);
        else
            res.json('Removed patient record successfully');
    })
})

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));