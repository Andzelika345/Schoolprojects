import { RouteObject } from "react-router-dom";

import ProductsRoutes from "@modules/products/routes";
import LoginRoutes from "@modules/login/routes";
import UserRoutes from "@modules/user/routes";
import OrderRoutes from "@modules/cart/routes";

const ROUTES: RouteObject[] = [
	...ProductsRoutes,
	...LoginRoutes,
	...UserRoutes,
	...OrderRoutes,
]

export default ROUTES;
