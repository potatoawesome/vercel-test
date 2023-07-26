export const fallbackLng = "en";
export const languages = [fallbackLng, "nl"];
export const defaultNS = "home";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
