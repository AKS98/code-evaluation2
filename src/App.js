import MainLayout from "./components/main-layout/mainLayout";
import PaymentBody from "./components/payment-body/paymentBody";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <PaymentBody />
      </MainLayout>
    </div>
  );
}

export default App;
