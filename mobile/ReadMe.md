Step 1: Install Expo CLI

npm install -g expo-cli

Step 2: Create a new Expo project

npx expo init my-app

Step 3: Install dependencies

npm install

Step 4: Configure the tsconfig.json file

{
"compilerOptions": {
"allowJs": true,
"allowSyntheticDefaultImports": true,
"esModuleInterop": true,
"isolatedModules": true,
"jsx": "react-native",
"lib": ["es6"],
"moduleResolution": "node",
"noEmit": true,
"strict": true,
"target": "es2017"
},
"exclude": ["node_modules"]
}

Step 5: Install additional TypeScript dependencies

npm install --save-dev typescript @types/react @types/react-native @types/expo

Step 6: Install Jest dependencies

npm install --save-dev jest @types/jest ts-jest react-test-renderer

Step 7: Configure the jest.config.js file
module.exports = {
preset: 'jest-expo',
setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
transform: {
'^.+\\.(js|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/**mocks**/fileMock.js',
},
};

Step 8: Create the **mocks**/fileMock.js file
module.exports = 'test-file-stub';

Step 9: npm install --save-dev jest @types/jest ts-jest react-test-renderer

Step 10: npm install --save-dev @testing-library/react-native

Step 11: npm install --save-dev jest jest-expo @testing-library/react-native

Step 12: npm install --save-dev @testing-library/jest-native

Step 13: Update package.json file
"test": "jest --watch"

Step 14: Create a sample test file
import { render } from '@testing-library/react-native';
import React from 'react';
import App from '../App';

describe('App', () => {
it('renders correctly', () => {
const { getByText } = render(<App />);
const welcomeText = getByText('Welcome to Expo React Native with TypeScript!');
expect(welcomeText).toBeTruthy();
});
});
