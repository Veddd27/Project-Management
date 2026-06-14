import mongoose, { schema } from "mongoose";
import { AvailableUserRole, UserRolesEnum } from "../utils/constants";

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: String, 
    project: {
        type: Schema.Types.ObjectId,
        ref: "Project",
        required: true  
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: "User" 
    },
    assignedBy: {
        type: Schema.Types.ObjectId,
        ref: "User" 
    },
    status: {
        type: String,
        enum: AvailableTaskStatus,
        default: taskStatusEnum.TODO
    },
    attachments: {
        type: [{
            url: String,
            mimetype: String,
            size: Number,
        }],
        default: []
    }
}, { timestamps: true });

export const Task = mongoose.model("Task", taskSchema)