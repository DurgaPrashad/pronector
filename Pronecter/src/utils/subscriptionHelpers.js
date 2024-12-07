import { SUBSCRIPTION_PLANS } from '../constants/subscriptionPlans';

export const getSubscriptionFeatures = (planName) => {
  const plan = SUBSCRIPTION_PLANS.find(p => p.name === planName);
  return plan ? plan.features : [];
};

export const canAccessFeature = (subscription, featureName) => {
  if (!subscription) return false;
  const features = getSubscriptionFeatures(subscription.planName);
  return features.includes(featureName);
};

