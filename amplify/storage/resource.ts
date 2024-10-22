import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'goodtotshopDrive',
  access: (allow) => ({
    'profile-pictures/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read', 'write', 'delete']),
      allow.entity("identity").to(['read', 'write', 'delete'])
    ],
    'listing-pictures/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read','write', 'delete']),
      allow.entity("identity").to(['read', 'write', 'delete'])

    ],
  })
});