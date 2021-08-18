import { FC } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import {
  Landing,
  Shop,
  NotFound,
  CartDetails,
  Checkout,
  Thankyou,
} from 'pages';
import { useTransition } from 'react-spring';
import { RouteWrapper, AnimatedDiv } from 'components/Styled/containers';

const Routing: FC = () => {
  const routes = [
    { path: '/', component: Landing, exact: true },
    { path: '/shop', component: Shop, exact: true },
    { path: '/cart', component: CartDetails, exact: true },
    { path: '/checkout', component: Checkout, exact: true },
    { path: '/thankyou', component: Thankyou, exact: true },
    { path: '*', component: NotFound },
  ];
  const location = useLocation();
  const transition = useTransition(location, {
    key: location.pathname,
    from: {
      opacity: 0,
      width: '0%',
    },
    enter: {
      opacity: 1,
      width: '100%',
    },
    leave: {
      opacity: 0,
      width: '0%',
    },

    config: { duration: 160 },
  });
  const animatedSwitch = transition((style, item) => (
    <AnimatedDiv style={style}>
      <Switch location={item}>
        {routes.map((route, index) => {
          return <Route key={`key-${index + 1}`} {...route} />;
        })}
      </Switch>
    </AnimatedDiv>
  ));

  return <RouteWrapper>{animatedSwitch}</RouteWrapper>;
};

export default Routing;
