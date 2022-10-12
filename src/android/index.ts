const fs = require('fs');

//file
const outputFolder = 'src/android'
const fileName = 'assetlinks.json'

//android app package name
const packageName = 'com.example.appName'

//test data
const appData = [
    {
        relation: [
            'delegate_permission/common.handle_all_urls'
        ],
        target: {
            namespace: 'android_app',
            package_name: packageName,
            sha256_cert_fingerprints: [
                'string1', 'string2'
            ]
        },
    },
    {
        relation: [
            'delegate_permission/common.get_login_creds'
        ],
        target: {
            namespace: 'web',
            site: 'http://example.com/'
        },
    },
]

const data = JSON.stringify(appData, null, 2);

fs.writeFileSync(`${outputFolder}/${fileName}`, data);