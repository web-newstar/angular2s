//import {AboutPage} from '../pages/about/about'
import { EsfListPage} from '../pages/secondhandhouse/esf-list/esf-list';
import { EsfListDetailPage } from '../pages/secondhandhouse/esf-list-detail/esf-list-detail';

export const NavgationRoutes = [
    //{ component: AboutPage, name: 'about', segment: 'about' },
    { component: EsfListPage, name: 'esf-list', segment: 'esf-list' },
    { component: EsfListDetailPage, name: 'esf-list-detail', segment: 'esf-list-detail' }
]