declare module 'text-mask-addons/dist/createNumberMask' {
  import { maskArray } from 'react-text-mask';
  const createNumberMask: (config: {
    prefix?: string;
    suffix?: string;
    includeThousandsSeparator?: boolean;
    thousandsSeparatorSymbol?: string;
    allowDecimal?: boolean;
    decimalSymbol?: string;
    decimalLimit?: number;
    integerLimit?: number;
    requireDecimal?: boolean;
    allowNegative?: boolean;
  }) => maskArray;

  export default createNumberMask;
}
