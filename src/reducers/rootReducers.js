import {combineReducers} from 'redux';
import {quoteForm} from './quote';
import {adminLogin , adminHeader} from './admin_login';
import {sideBar} from './sidebar';
import { quoteDirectory } from './quote_directory';
import { quoteSingleDirectory } from './single_quote';
import { dashboard } from './dashboard';
import {category_frontend} from './category_frontend';
import {gallery_reduce} from './gallery'
export default combineReducers({
    quoteForm,
    adminLogin,
    adminHeader,
    sideBar,
    quoteDirectory,
    quoteSingleDirectory,
    dashboard,
    category_frontend,
    gallery_reduce
});
