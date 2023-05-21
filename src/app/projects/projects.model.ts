import { TaskInt } from "../tasks/tasks.model";

export interface Project {
    pid: string;
    pname: string;
    pdesc: string;
    updatedTs: string;
    createdTs: string;
    status: string;
    tasks: TaskInt[];
}