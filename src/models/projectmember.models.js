import mongoose, { schema } from "mongoose";
import { AvailableUserRole, UserRolesEnum } from "../utils/constants";

const projectMemberSchema = new Schema({
    user: {
        type: Schema.Types.ObjectID,
        ref: "User",
        required: true
    },
    project: {
        type: Schema.Types.ObjectID,
        ref: "Project",
        required: true
    },
    role: {
        type: String,
        enum: AvailableUserRole,
        default: UserRolesEnum.MEMBER
    }
}, { timestamps: true });

export const ProjectMember = mongoose.model("ProjectMember", projectMemberSchema);