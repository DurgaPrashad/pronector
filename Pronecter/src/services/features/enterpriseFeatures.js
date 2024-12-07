export const enterpriseFeatures = {
   maxConnections: 'unlimited',
   messageLimit: 'unlimited',
   eventAccess: 'priority',
   profileVisibility: 'premium',
   mentorshipAccess: true,
   dedicatedSupport: true,
   customBranding: true,
 };
 
 export const canAccessEnterpriseFeature = (feature, userSubscription) => {
   if (userSubscription.plan === 'enterprise') {
     return true;
   }
   return false;
 };
 
 