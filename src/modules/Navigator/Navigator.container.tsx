import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from '../../components/Loading/Loading.component';
import Pages from './Navigator.page';
import Routes from './Navigator.route';

const renderComp = (Component: React.LazyExoticComponent<any>) => (
  props: any,
) => <Component {...props} />;

const Navigator = (props: any) => (
  <div>

    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path={Routes.Todo} component={renderComp(Pages.Todo)} />
        <Route exact path={Routes.Home} component={renderComp(Pages.Home)} />
      </Switch>
    </Suspense>
  </div>
);

export default Navigator;
