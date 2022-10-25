export type FileNameAndroid = 'assetlinks.json';

type Relation = 'delegate_permission/common.handle_all_urls';

type Namespace = 'android_app';

type AppPackageName = 'com.example.appName';

type AppPackageNameExtension = 'alpha' | 'beta' | 'gamma' | null;

type Sha256CertFingerprints = 'stringCertificate';

export interface AndroidAppLinksConfig {
  relation: Relation[];
  target: {
    namespace: Namespace;
    package_name: AppPackageName;
    sha256_cert_fingerprints: Sha256CertFingerprints[]
  };
  packageNameExtension: AppPackageNameExtension;
}

export interface AssetLinksConfig {
  relation: Relation[];
  target: {
    namespace: Namespace;
    // todo: re-use existing types instead of string?
    package_name: string;
    sha256_cert_fingerprints: Sha256CertFingerprints[]
  }
}
