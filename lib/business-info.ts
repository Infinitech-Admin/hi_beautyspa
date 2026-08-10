// Business Information - Hi Beauty SPA

export const businessInfo = {
  // Core Business Information
  legalName: 'Hi Beauty SPA',
  googleBusinessName: 'Hi Beauty SPA',
  businessType: 'Massage Spa / Beauty & Wellness Center',
  
  // Location Information
  googleMapsAddress: '7829 Salamanca, Makati, 1210 Kalakhang Maynila, Philippines',
  buildingLocation: '4th Floor, Antel Spa Residences, 5343 Gen. Luna corner Makati Ave',
  area: 'Makati City, Metro Manila, Philippines',
  
  // Contact Information
  phone: '+63 968 450 4504',
  phoneNetwork: 'Globe',
  
  // Operating Information
  operatingHoursStart: '2:00 PM',
  operatingHoursEnd: '2:00 AM',
  operatingDays: '7 days a week (including holidays)',
  operatingHoursFormatted: '2:00 PM – 2:00 AM, 7 days a week',
  
  // Ratings & Reviews
  googleRating: 5.0,
  googleRatingMax: 5.0,
  googleReviewCount: 9,
  
  // Online Presence
  googleMapsListed: true,
  facebookPage: 'https://www.facebook.com/61564870212732',
  facebookPageId: '61564870212732',
  
  // Chinese Name
  chineseName: '按摩美容', // Massage Beauty in Mandarin/Cantonese
  
  // Building Information
  buildingName: 'Antel Spa Residences',
  buildingFloor: '4th Floor',
  buildingType: 'Condotel',
  buildingFloors: 27,
  
  // Location Proximity
  proximityInfo: {
    powerPlantMall: '~8 minutes walk',
    glorietta: '~14 minutes walk',
    ayalaMRTStation: '~24 minutes walk',
  },
  
  // Operating Hours Details
  operatingHoursDetails: {
    latNightWindow: true,
    servesHotelGuests: true,
    servesAfterWorkCrowd: true,
    openHolidays: true,
  },
}

export const getFullAddress = () => 
  `${businessInfo.buildingLocation}, ${businessInfo.area}`

export const getContactInfo = () => ({
  phone: businessInfo.phone,
  address: getFullAddress(),
  googleMapsLink: 'https://maps.google.com/?q=' + encodeURIComponent(businessInfo.googleMapsAddress),
  facebookLink: businessInfo.facebookPage,
})
