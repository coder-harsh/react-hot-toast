import React from "react";
import ReactDom from "react-dom/client";
import { AiFillBell } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

const Notification = () => {
    const notify = () => toast.success('Button Click Sucessfully.', {
        position: "top-right"
    });
    return (
        <div>
            <button onClick={notify}>Click Me <AiFillBell /></button>
            <Toaster />
        </div>
    );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Notification />);