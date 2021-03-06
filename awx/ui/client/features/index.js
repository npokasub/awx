import atLibServices from '~services';
import atLibComponents from '~components';
import atLibModels from '~models';

import atFeaturesApplications from '~features/applications';
import atFeaturesCredentials from '~features/credentials';
import atFeaturesTemplates from '~features/templates';

const MODULE_NAME = 'at.features';

angular.module(MODULE_NAME, [
    atLibServices,
    atLibComponents,
    atLibModels,
    atFeaturesApplications,
    atFeaturesCredentials,
    atFeaturesTemplates
]);

export default MODULE_NAME;
