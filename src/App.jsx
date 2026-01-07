import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const showMultipleToasts = () => {
    toast.info("Info message");
    toast.success("Success message");
    toast.error("Error message");
    toast.warning("Warning message");
  };

  const clearAllToasts = () => {
    toast.dismiss();
  };

  return (
    <div>
      <button onClick={showMultipleToasts}>
        Trigger Multiple Notifications
      </button>

      <button onClick={clearAllToasts}>Dismiss All Notifications</button>

      <ToastContainer limit={2} />
    </div>
  );
}

export default App;
