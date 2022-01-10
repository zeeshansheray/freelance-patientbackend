const knex = require('./knex');

function createPatient(patient){
    return knex('patientDetail').insert(patient);
}

function getAllPatient(){
    return knex('patientDetail').select('*');
}

function deletePatient(id){
    return knex('patientDetail').where('id', id).del();
}

function updatePatient(id, patient){
    return knex('patientDetail').where('id', id).update(patient);
}

module.exports = {
    createPatient,
    getAllPatient,
    updatePatient,
    deletePatient
}