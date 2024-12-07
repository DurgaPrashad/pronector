import { basicFeatures, canAccessBasicFeature } from '../services/features/basicFeatures';
import { proFeatures, canAccessProFeature } from '../services/features/proFeatures';
import { enterpriseFeatures, canAccessEnterpriseFeature } from '../services/features/enterpriseFeatures';

export const checkFeatureAccess = (feature, userSubscription) => {
  if (canAccessEnterpriseFeature(feature, userSubscription)) {
    return enterpriseFeatures[feature];
  } else if (canAccessProFeature(feature, userSubscription)) {
    return proFeatures[feature];
  } else if (canAccessBasicFeature(feature, userSubscription)) {
    return basicFeatures[feature];
  }
  return null;
};

