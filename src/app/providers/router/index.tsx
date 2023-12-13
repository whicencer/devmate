import {WelcomePageAsync} from '../../../pages/Welcome';
import {FeedPageAsync} from "../../../pages/Feed";
import {Route, Routes} from "react-router-dom";
import React from "react";
import {RequireAuth, PublicRoute} from "../../../widgets/Routes";

export const AppRouter = () => {
  return (
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<WelcomePageAsync />} />
        </Route>
        <Route element={<RequireAuth />}>
          <Route path="/feed" element={<FeedPageAsync/>} />
        </Route>
      </Routes>
  );
}