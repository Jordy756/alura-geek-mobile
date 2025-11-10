import Svg, { Path, type SvgProps } from 'react-native-svg';

const ArrowRightIcon = (props: SvgProps) => (
  <Svg width={24} height={24} {...props}>
    <Path fill="currentColor" d="m14 18-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45 14 6l6 6z" />
  </Svg>
);

export default ArrowRightIcon;
