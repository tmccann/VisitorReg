import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import VisitorDashboard from "../../features/visitor/visitorDashboard/VisitorDashboard";

export  const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '/visitors', element: <VisitorDashboard />},
            {path: '/loggin'}
        ]
    }
])