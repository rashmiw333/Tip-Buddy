import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");

  const [tipAmount, setTipAmount] = useState(null);
  const [totalBill, setTotalBill] = useState(null);
  const [amountPerPerson, setAmountPerPerson] = useState(null);

  const [error, setError] = useState("");

  const calculateTip = () => {
    // Validation
    if (
      billAmount === "" ||
      tipPercentage === "" ||
      numberOfPeople === ""
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (
      Number(billAmount) <= 0 ||
      Number(tipPercentage) <= 0 ||
      Number(numberOfPeople) <= 0
    ) {
      setError("Values must be greater than zero.");
      return;
    }

    setError("");

    // Calculate tip
    const tip = Number(billAmount) * Number(tipPercentage) / 100;

    // Calculate total bill
    const total = Number(billAmount) + tip;

    // Calculate amount per person
    const perPerson = total / Number(numberOfPeople);

    setTipAmount(tip);
    setTotalBill(total);
    setAmountPerPerson(perPerson);
  };

  return (
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow">

            <div className="card-body p-4">

              <h1 className="text-center mb-4">
                Tip Buddy
              </h1>

              <p className="text-center text-muted">
                Calculate your tip easily
              </p>

              {/* Bill Amount */}
              <div className="mb-3">

                <label className="form-label">
                  Bill Amount
                </label>

                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter bill amount"
                  value={billAmount}
                  onChange={(event) =>
                    setBillAmount(event.target.value)
                  }
                />

              </div>

              {/* Tip Percentage */}
              <div className="mb-3">

                <label className="form-label">
                  Tip Percentage
                </label>

                <select
                  className="form-select"
                  value={tipPercentage}
                  onChange={(event) =>
                    setTipPercentage(event.target.value)
                  }
                >

                  <option value="">
                    Select tip percentage
                  </option>

                  <option value="5">5%</option>
                  <option value="10">10%</option>
                  <option value="15">15%</option>
                  <option value="20">20%</option>

                </select>

              </div>

              {/* Number of People */}
              <div className="mb-3">

                <label className="form-label">
                  Number of People
                </label>

                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter number of people"
                  value={numberOfPeople}
                  onChange={(event) =>
                    setNumberOfPeople(event.target.value)
                  }
                />

              </div>

              {/* Error */}
              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}

              {/* Button */}
              <button
                className="btn btn-primary w-100"
                onClick={calculateTip}
              >
                Calculate Tip
              </button>

              {/* Result */}
              {tipAmount !== null && (

                <div className="mt-4">

                  <h4 className="text-center mb-3">
                    Bill Summary
                  </h4>

                  <div className="result-box">

                    <div className="result-row">
                      <span>Tip Amount</span>
                      <strong>₹{tipAmount.toFixed(2)}</strong>
                    </div>

                    <div className="result-row">
                      <span>Total Bill</span>
                      <strong>₹{totalBill.toFixed(2)}</strong>
                    </div>

                    <div className="result-row">
                      <span>Amount Per Person</span>
                      <strong>
                        ₹{amountPerPerson.toFixed(2)}
                      </strong>
                    </div>

                  </div>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;