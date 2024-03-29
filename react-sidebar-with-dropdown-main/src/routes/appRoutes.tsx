import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AccountDetails from "../pages/AccountDetails";
import AccountStatement from "../pages/AccountStatement";
import AccountSummary from "../pages/AccountSummary";
import Transaction from "../pages/Transaction";
import TransferSuccessful from "../pages/TransferSuccesful";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  /*{
    path: "/installation",
    element: <InstallationPage />,
    state: "installation",
    sidebarProps: {
      displayText: "Installation",
      icon: <FileDownloadOutlinedIcon />
    }
  },
  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "dashboard.index"
      },
      {
        path: "/dashboard/default",
        element: <DefaultPage />,
        state: "dashboard.default",
        sidebarProps: {
          displayText: "Default"
        },
      },
      {
        path: "/dashboard/analytics",
        element: <AnalyticsPage />,
        state: "dashboard.analytics",
        sidebarProps: {
          displayText: "Analytic"
        }
      },
      {
        path: "/dashboard/saas",
        element: <SaasPage />,
        state: "dashboard.saas",
        sidebarProps: {
          displayText: "Saas"
        }
      }
    ]
  },*/
 
  {
    path: "/accountDetails",
    element: <AccountDetails />,
    state: "accountDetails",
    sidebarProps: {
      displayText: "Account Details",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/accountStatement",
    element: <AccountStatement />,
    state: "accountStatement",
    sidebarProps: {
      displayText: "Account Statement",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/accountSummary",
    element: <AccountSummary />,
    state: "accountSummary",
    sidebarProps: {
      displayText: "Account Summary",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/transaction",
    element: <Transaction />,
    state: "transaction",
    sidebarProps: {
      displayText: "Transaction",
      icon: <FormatListBulletedOutlinedIcon />
    }
  }
];

export default appRoutes;