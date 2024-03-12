## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Running Tests
To run functional tests, follow these steps:

1. Ensure that you're in the project directory.
2. Run the following command:

```bash
npm test
```
or if you're using yarn:

```bash
yarn test
```
3. This will execute all the functional tests located in the __tests__ directory or files ending with .test.js or .spec.js.

## Viewing Test Results
Once the tests have completed running, the results will be displayed in your terminal. You'll see information about which tests passed, failed, or encountered errors.


