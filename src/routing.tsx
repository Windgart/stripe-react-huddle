import { FC } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Landing, Shop, NotFound } from 'pages';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useTransition } from 'react-spring';
import { RouteWrapper, AnimatedDiv } from 'components/Styled/containers';

const Routing: FC = () => {
  const location = useLocation();
  const transition = useTransition(location, {
    key: location.pathname,
    from: {
      opacity: 0,
      // transform: 'translate(-100%, 0%)',
      width: '0%',
      // height: '0%',
    },
    enter: {
      opacity: 1,
      // transform: 'translate(0%, 0%)',
      width: '100%',
      // height: '100%',
    },
    leave: {
      opacity: 0,
      // transform: 'translate(-50%, 0%)',
      width: '0%',
      // height: '0%',
    },

    config: { duration: 160 },
  });
  const animatedSwitch = transition((style, item) => (
    <AnimatedDiv style={style}>
      <Switch location={item}>
        <Route exact path="/" component={Landing} />
        <Route path="/shop" component={Shop} />
        <Route path="*" component={NotFound} />
      </Switch>
    </AnimatedDiv>
  ));

  return <RouteWrapper>{animatedSwitch}</RouteWrapper>;
  // return (
  //   <RouteWrapper>
  //     <TransitionGroup>
  //       <CSSTransition key={location.key} classNames="fade" timeout={300}>
  //         <Switch location={location}>
  //           <Route exact path="/" component={Landing} />
  //           <Route exact path="/shop" component={Shop} />
  //           <Route path="*" component={NotFound} />
  //         </Switch>
  //       </CSSTransition>
  //     </TransitionGroup>
  //   </RouteWrapper>
  // );
};

export default Routing;
