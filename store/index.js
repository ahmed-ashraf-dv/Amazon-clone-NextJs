import { configureStore } from "@reduxjs/toolkit";
import backdrop from "./BackdropSlice";
import aSide from "./AsideSlice";
import user from "./UserSlice";
import cart from "./CartSlice";
import categories from "./CategoriesSlice";

export const store = configureStore({
  reducer: {
    backdrop,
    aSide,
    user,
    cart,
    categories,
  },
});
