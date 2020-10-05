/**
 * Generated using theia-extension-generator
 */
import { ContainerModule } from "inversify";
import { bindDevelopmentWorkplaceRequirementsMenu } from './development-workplace-requirements-menu-contribution';
import { bindDevelopmentWorkplaceMBSEMenu } from './development-workplace-mbse-menu-contribution';
import { bindDevelopmentWorkplaceContinousXMenu } from './development-workplace-continousx-menu-contribution';
import { bindDevelopmentWorkplaceDocumentationMenu } from './development-workplace-documentation-menu-contribution';
import { bindDevelopmentWorkplaceScenarioMenu } from './development-workplace-scenario-menu-contribution';
import { bindDevelopmentWorkplaceSimulationMenu } from './development-workplace-simulation-menu-contribution';

export default new ContainerModule(bind => {
    bindDevelopmentWorkplaceRequirementsMenu(bind);
    bindDevelopmentWorkplaceMBSEMenu(bind);
    bindDevelopmentWorkplaceContinousXMenu(bind);
    bindDevelopmentWorkplaceDocumentationMenu(bind);
    bindDevelopmentWorkplaceScenarioMenu(bind);
    bindDevelopmentWorkplaceSimulationMenu(bind);
});