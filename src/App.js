import { Routes, Route } from "react-router-dom";
import { useEffect, lazy, suspense, Suspense } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from "./components/routes/authentication/authentication";
import Shop from "./components/routes/shop/shop.component";
import Checkout from "./components/routes/checkout/checkout.component";
import { Spinner } from "./components/spinner/spinner.component";
const Home = lazy(() => import("./components/routes/home/home.component"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
