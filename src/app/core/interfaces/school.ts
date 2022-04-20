import { IBase } from './base';

export interface ISchool extends IBase {
    teachers: string[];
    students: string[];
    schoolName: string;
    schoolDistrict: string;
    schoolTown: string;
}