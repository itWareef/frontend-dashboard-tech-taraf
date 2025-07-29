import AuthContextProvider from "./context/AuthContext";
import TanstackProvider from "./providers/TanstackProvider";
import AppRoutes from "./routes/AppRoutes";
import OfferContextProvider from "./context/OfferPriceContext";

function App() {
  return (
    <TanstackProvider>
      <AuthContextProvider>
        <OfferContextProvider>
          <AppRoutes />
        </OfferContextProvider>
      </AuthContextProvider>
    </TanstackProvider>
  );
}

export default App;
