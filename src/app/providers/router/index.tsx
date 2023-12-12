import {WelcomePageAsync} from '../../../pages/Welcome';
import {ErrorPage} from '../../../pages/ErrorPage';
import {FeedPageAsync} from "../../../pages/Feed";
import { createBrowserRouter } from "react-router-dom";
import React from "react";

export const router = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <WelcomePageAsync />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/feed',
      element: <FeedPageAsync />,
      errorElement: <ErrorPage />,
    }
  ]);
};