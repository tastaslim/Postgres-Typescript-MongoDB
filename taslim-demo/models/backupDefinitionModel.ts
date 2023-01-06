import mongoose from 'mongoose';
const backupDefinitionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    project_id: { type: Number, required: true },
    org_id: { type: String, required: true },
    type: { type: String, required: true },
    is_active: { type: Boolean, required: true },
    is_deleted: { type: Boolean, required: true },
    created_by: { type: Number, required: true },
    updated_by: { type: Number, required: true },
    new_tech_stack: { type: Boolean, required: false, default: true },
  },
  { timestamps: true }, // This will automatically add the createdAt and updatedAt fields for us
);

export const BackupDefinitionModel = mongoose.model('definitions', backupDefinitionSchema);
