/* eslint @typescript-eslint/no-var-requires: 0 */
const Adapter = require('enzyme-adapter-react-16');
const Enzyme = require('enzyme');

Enzyme.configure({ adapter: new Adapter() });
