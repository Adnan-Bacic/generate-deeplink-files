import { AppPackageNameExtension } from '../types';

export type FileNameAndroid = 'assetlinks.json';

type Relation = 'delegate_permission/common.handle_all_urls';

type Namespace = 'android_app';

type AppPackageName = 'com.example.appName';

type Sha256CertFingerprintsDev = 'certificateDev';
type Sha256CertFingerprintsProd = 'certificateProd';

type Sha256CertFingerprints = Sha256CertFingerprintsDev | Sha256CertFingerprintsProd;

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
    package_name: string;
    sha256_cert_fingerprints: Sha256CertFingerprints[]
  }
}
