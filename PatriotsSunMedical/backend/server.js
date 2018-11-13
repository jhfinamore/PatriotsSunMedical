import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Patient from './models/Patient';
import { runInNewContext } from 'vm';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/patients');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

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
        .then(patient => {
            res.status(200).json({'patient': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new patient');
        });
});

router.route('/patients/update/:id').post((req, res) => {
    Patient.findById(req.params.id, (err, patient) => {
        if (!patient)
            return next(new Error('Could not load document'));
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
                res.status(400).send('Update Failed');
            });
        }
    });
});

router.route('/patients/delete/:id').get((req, res) => {
    Patient.findByIdAndRemove({_id: req.params.id}, (err, patient) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    });
});

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));