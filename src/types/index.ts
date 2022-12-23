/*
extensions added to the end of the package_name/bundleId to have different build flavors/variants
production build has no extension, which corresponds to null
*/
export type AppPackageNameExtension = 'alpha' | 'beta' | 'gamma' | null;
