# Notes

Importants/Good things to know

## Different **sha256_cert_fingerprints** value for production

Android Studio can generate the value for **sha256_cert_fingerprints**. This will work for the development versions of the app. If the production app uses **Google Play App Signing**, this gives it a different fingerprint.<a href="#1">1</a>

## Different **App ID Prefix** for value for production

Development and production apps also have different prefixes on iOS.

For development, the prefix is the Team ID for the developer account.

For production, the prefix is different.

These **App ID Prefix's** can be seen on the Apple developer site, under identifiers.

https://developer.apple.com/account/resources/identifiers/list

Here you can find the different app identifiers. If you click on any of them, you can see the **App ID Prefix**.

***

<em>
  <ol>
    <li id="1">
    <a href="https://developer.android.com/training/app-links/verify-android-applinks#web-assoc">https://developer.android.com/training/app-links/verify-android-applinks#web-assoc</a> - "If you're using Play App Signing for your app, then the certificate fingerprint produced by running keytool locally will usually not match the one on users' devices. You can verify whether you're using Play App Signing for your app in your Play Console developer account under Release > Setup > App Integrity; if you do, then you'll also find the correct Digital Asset Links JSON snippet for your app on the same page."
    </li>
  </ol>
</em>