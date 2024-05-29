import { useSpring, animated } from '@react-spring/web';
import PropTypes from 'prop-types';

const AnimatedNumber = ({ value }) => {
  const { number } = useSpring({
    from: { number: 400000000 },
    number: value,
    delay: 400,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  return (
    <animated.div className={"mx-3"}>
      {number.to(n => n.toFixed(0))}
    </animated.div>
  );
};

AnimatedNumber.propTypes = {
  value: PropTypes.number.isRequired,
};

export default AnimatedNumber;
