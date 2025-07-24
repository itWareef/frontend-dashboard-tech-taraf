import AuthContextProvider from "./context/AuthContext";
import TanstackProvider from "./providers/TanstackProvider";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <TanstackProvider>
      <AuthContextProvider>
        <AppRoutes />
      </AuthContextProvider>
    </TanstackProvider>
  );
}

export default App;
