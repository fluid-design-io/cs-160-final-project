# ionic-tailwind-starter

## Usage

Method 1:

    npm install
    npm run start

Method 2:
Learn more about [ionic cli](https://ionicframework.com/docs/cli/).

    npm install
    npm install -g @ionic/cli
    ionic serve

## Theme

By default, it comes with a standard theme that supports both light and dark mode, you can change the theme by editing the `./src/theme/variables.css` file.
To generate the theme, please checkout the [ionic theme generator](https://ionicframework.com/docs/theming/color-generator)

## Navigation

By default, the app uses **Tabs** layout. Which shows 3 tabs: `Home`, `Search` and `Account`.
You can change the layout by editing the `./src/components/Tabs.tsx` file.

However, if you do not need the tabs layout, please remove the `<Tabs />` from `App.tsx` file, and enable the `<Navigation />` in `App.tsx` file.

To customize the links, please refer to Ionic doc: [Navigation](https://ionicframework.com/docs/react/navigation)

## Components

Check out Ionic doc: [Components](https://ionicframework.com/docs/components)
An example component in the starter file is `<CardExamples />`

## Example
<!-- Make a table with 2 colums -->
| Android | iOS |
| ------ | ------ |
| ![image](https://user-images.githubusercontent.com/13263720/182948251-695bad6b-4539-4d64-920a-5847805711aa.png) | ![image](https://user-images.githubusercontent.com/13263720/182948317-e39dd46c-0d32-4a64-a7fb-def0a0dd8f04.png) |

