import { Routes, Route } from "react-router-dom";
import Login from "./Pages/login/Login";
import Home from "./Pages/manu/Home";
import Nav from "./Pages/manu/Nav";
import SellPhone from "./Pages/sell/SellPhone";
import Otp from "./Pages/login/Otp";
import Expr from "./Expr";
import PhoneInfo from "./Pages/sell/PhoneInfo";
import RepairPhone from "./Pages/repair/RepairPhone";
import Buyphone from "./Pages/buy/Buyphone";
import Phoneoptions from "./Pages/sell/Phoneoptions";
import Foter from "./Pages/manu/Foter";
import LoginInfo from "./Pages/login/LoginInfo";
import PhoneDefects from "./Pages/sell/PhoneDefects";
import Repairoptions from "./Pages/repair/Repairoptions";
import Buyphoneinfo from "./Pages/buy/Buyphoneinfo";
import Bidding from "./Pages/Bidding/Bidding";
import Store from "./Pages/store/Store";
import Biddingphone from "./Pages/Bidding/Biddingphone";
import ComparePhones from "./Pages/compare/ComparePhones";
import Phonesell from "./Pages/sell/Phonesell";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sell" element={<SellPhone />} />
        <Route path="/sell/:model" element={<PhoneInfo />} />
        <Route path="/sell/:model/opti" element={<Phoneoptions />} />
        <Route path="/sell/:model/opti/defects" element={<PhoneDefects />} />
        <Route path="/sell/:model/opti/defects/price" element={<Phonesell />} />
        <Route path="/repair" element={<RepairPhone />} />
        <Route path="/repair/:model" element={<Repairoptions />} />
        <Route path="/buy" element={<Buyphone />} />
        <Route path="/buy/:model" element={<Buyphoneinfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/logininfo" element={<LoginInfo />} />
        <Route path="/store" element={<Store />} />
        <Route path="/bidding" element={<Bidding />} />
        <Route path="/bidding/:id" element={<Biddingphone />} />
        <Route path="/compare" element={<ComparePhones />} />
        <Route path="/expr" element={<Expr />} />
      </Routes>
      <Foter />
    </div>
  );
}

export default App;
