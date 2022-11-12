const connectedKnex = require('./knex-connector')

function getAllReports(){
    return connectedKnex('reports').select('*');
} 

function getReportById(id){
    return connectedKnex('reports').select('*').where('id',id).first();
}

function addReport(report){
    return connectedKnex('reports').insert(report);
}

function updateReport(report,id){
    return connectedKnex('reports').where('id',id).update(report);
}

function deleteReport(id){
    return connectedKnex('reports').where('id',id).delete();
}

module.exports = {getAllReports, getReportById, addReport, updateReport, deleteReport}