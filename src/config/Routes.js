import Cashier from '../module/cashier/Cashier';
import Home from '../module/home/Home';
import Jual from '../module/jual/Jual';
import Penjualan from '../module/penjualan/Penjualan';
import Stock from '../module/stock/Stock';

const Routes = [
    { path: '/home', name: 'Home', component: Home },
    { path: '/cashier', name: 'Cashier', component: Cashier },
];

const RoutesLogged = [
    { path: '/cashier/jual', name: 'Jual', component: Jual },
    { path: '/cashier/stock', name: 'Stock', component: Stock },
    { path: '/cashier/penjualan', name: 'Penjualan', component: Penjualan },
]

export default {Routes, RoutesLogged};