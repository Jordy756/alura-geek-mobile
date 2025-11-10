import Svg, { G, Path, type SvgProps } from 'react-native-svg';

const SearchIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fill="none" stroke="currentColor">
      <Path d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4 4 11.611 4 21s7.611 17 17 17Z" />
      <Path d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879 8.485 8.485" />
    </G>
  </Svg>
);

export default SearchIcon;
