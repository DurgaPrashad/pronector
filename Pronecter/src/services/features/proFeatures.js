export const proFeatures = {
   maxConnections: 200,
   messageLimit: 500,
   eventAccess: 'full',
   profileVisibility: 'enhanced',
   mentorshipAccess: true,
 };
 
 export const canAccessProFeature = (feature, userSubscription) => {
   if (userSubscription.plan === 'pro' || userSubscription.plan === 'enterprise') {
     return true;
   }
   return false;
 };
 
 