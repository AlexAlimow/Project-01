export const ROUTES = {
  HOME: "/",
  COUNTER: "/counter",
  NATIONALIZE: "/nationalize",
  SPACE_MISSION: "/space-mission",
  GENDER_REVEAL: "/gender-reveal",
  IDEAL_WEIGHT_CALCULATOR: "/ideal-weight-calculator",
  ABOUT: "/about",
  CONTACT: "/contact",
  PROFILE: "/profile",
  PROFILE_INFO: "/profile/info",
  PROFILE_SETTINGS: "/profile/settings",
  NOT_FOUND: "*",
  USERSPAGE: "/users",
  USER: (id: string | number) => `/users/${id}`,
  PRODUCT: (id: string | number) => `/products/${id}`
} as const;
