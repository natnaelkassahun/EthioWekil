import { BrowserRouter as Router } from 'react-router-dom';
import { Route , Routes} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../routes/Home';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ManageAccount from '../components/Account/ManageAccount/ManageAccount';
import MyAccount from '../components/Account/MyAccount/MyAccount';
import Shop from '../components/Shop/Shop';
import Item from '../components/Item/Item';
import ItemView from '../routes/ItemView';
import CategoryView from '../routes/CategoryView';
import SearchView from '../routes/Search';
import CartItemsProvider from '../Context/CartItemsProvider';
import Login from '../components/Authentication/Login/Login';
import Register from '../components/Authentication/Register/Register';
import Wishlist from '../components/Wishlist';
import WishItemsProvider from '../Context/WishItemsProvider';
import SearchProvider from '../Context/SearchProvider';
import React from 'react'
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";
import { LanguageProvider } from '../languages/Language';

function App() {

  return (
    <LanguageProvider>
   <CartItemsProvider>
      <WishItemsProvider>
        <SearchProvider>
          <Router >
            <Header />
            <Routes>
              <Route index element={<Home />}/>
              <Route path="/account">
                <Route path="me" element={<MyAccount/>}/>
                <Route path="manage" element={<ManageAccount/>}/>
                <Route path="login" element={<Login />}/>
                <Route path="register" element={<Register />}/>
                <Route path="*" element={<Login />}/>
              </Route>
              <Route path="/shop" element={<Shop />}/>
              <Route path="/categories" element={<FeaturedCategories />}/>
              <Route path="/category">
                <Route path=":id" element={<CategoryView />}/>
              </Route>
              <Route path="/item">
                <Route path="/item/men">
                  <Route path=":id" element={<ItemView />}/>
                </Route>
                <Route path="/item/women">
                  <Route path=":id" element={<ItemView />}/>
                </Route>
                <Route path="/item/kids">
                  <Route path=":id" element={<ItemView />}/>
                </Route>
                <Route path="/item/construction">
                  <Route path=":id" element={<ItemView />}/>
                </Route>
                <Route path="/item/featured">
                  <Route path=":id" element={<ItemView />}/>
                </Route>
                
              </Route>
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/detail" element={<Item />}/>
              <Route path="/search/*" element={<SearchView />} />
            </Routes>
            <Footer />
            <Routes>
            <Route path="/admin" element={<Wishlist />} />
            </Routes>
          </Router>
        </SearchProvider>
      </WishItemsProvider>
   </CartItemsProvider>
   </LanguageProvider>
  );
}

export default App;