export const basicFeatures = {
   maxConnections: 50,
   messageLimit: 100,
   eventAccess: 'limited',
   profileVisibility: 'standard',
 };
 
 export const canAccessBasicFeature = (feature, userSubscription) => {
   if (userSubscription.plan === 'basic' || userSubscription.plan === 'pro' || userSubscription.plan === 'enterprise') {
     return true;
   }
   return false;
 };
 
 