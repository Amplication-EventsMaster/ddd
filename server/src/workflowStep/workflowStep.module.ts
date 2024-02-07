import { Module } from "@nestjs/common";
import { WorkflowStepModuleBase } from "./base/workflowStep.module.base";
import { WorkflowStepService } from "./workflowStep.service";
import { WorkflowStepResolver } from "./workflowStep.resolver";

@Module({
  imports: [WorkflowStepModuleBase],
  providers: [WorkflowStepService, WorkflowStepResolver],
  exports: [WorkflowStepService],
})
export class WorkflowStepModule {}
