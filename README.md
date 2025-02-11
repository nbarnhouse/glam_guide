# Glam Guide (mobile)

## Description

For brides planning their weddings in Cancún, Mexico, who need a safe, reliable, and convenient way to book trusted hair and makeup artists, GlamGuide is a mobile marketplace that connects brides with vetted, verified, and reviewed professionals, providing peace of mind and a seamless booking experience. Unlike relying on unverified social media listings or word-of-mouth referrals from hotels and wedding planners, our product ensures transparency and trust through professional vetting, user reviews, secure payment options, and direct communication between brides and artists. This supports our strategy to build a trusted brand in the bridal beauty market and create a sustainable ecosystem for local artists.

### Prerequisites

- [npm](https://www.npmjs.com)
- [Expo Go](https://docs.expo.dev)
- [Homebrew](https://brew.sh)
- [Expo Authentication](https://docs.expo.dev/develop/authentication/)

Other ideas:

- [Expo SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/)
- [Expo ScreenOrientation](https://docs.expo.dev/versions/latest/sdk/screen-orientation/)
- [Expo Haptics](https://docs.expo.dev/versions/latest/sdk/haptics/)
- [Color Themes](https://docs.expo.dev/develop/user-interface/color-themes/)

## Installation (Development)

1. Install Expo Go on your mobile device.
2. Create local DB named glam_guide.
3. Run node server.js in your terminal (backend directory).
4. Run `npx expo start` in a new terminal.
5. Open App in Expo Go App, run on web, and/or run on ios/android simulators.

## Options if not already installed

- brew install node
- brew install watchman
- npm install @react-navigation/stack
- npm install -g eas-cli
- [npx expo install expo-localization](https://docs.expo.dev/versions/latest/sdk/localization/)
- [npx expo install i18n-js](https://docs.expo.dev/guides/localization/)
- [npx expo install expo-calendar](https://docs.expo.dev/versions/latest/sdk/calendar/)
- [npx expo install expo-sms](https://docs.expo.dev/versions/latest/sdk/sms/)
- [npx expo install expo-splash-screen](https://docs.expo.dev/versions/latest/sdk/splash-screen/)

## File Structure

- `app/` contains the visual and navigation app files
- `assets/` contains app images, icons, and other media
- `backend/` contains all node, pool, router info files
- `components/` contains reusable code snippets of common elements
- `constants/` contains app-wide standard non-chaning files
- `android/` contains android specific app files
- `ios/` contains ios specific app files

## Built With

- React Native
- Expo
- Node.js
- PostgreSQL

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped us to make this application a reality.

## Team

- Chad Novak
- Jennifer Her
- Nicole Barnhouse
- Shobha Chejara
- Yuh-Boh Feng
