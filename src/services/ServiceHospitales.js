import axios from "axios";
import { Global } from "../Global";

export default class ServiceHosptitales{

    async getHospitales(){
        let response = await axios.get(Global.apiHospital);
        return response.data;
    }

    getHospitalesPromise = () => {
        return new Promise((resolve) => {
        axios.get(Global.apiHospital).then((response) => {
                resolve(response.data)
            });
        });
    }

    getDoctoresByIdHospital = (id) => {
        return new Promise((resolve) => {
            axios.get(Global.apiDoctores + "/DoctoresHospital/" + id).then((response) => {
                resolve(response.data);
            })
        });
    }

    insertHospital(hospital){
        return new Promise((resolve) => {
            axios.post(Global.apiHospital, hospital).then((response) => {
                resolve(response);
            });
        });
    }

    hospitalesPromise = new Promise((resolve) => {
        axios.get(Global.apiHospital).then((response) => {
            resolve(response.data)
        });
    })
}   