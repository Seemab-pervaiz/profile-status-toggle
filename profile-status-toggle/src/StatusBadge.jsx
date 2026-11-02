import { memo } from "react";

function StatusBadge({ status }) {
    console.log("StatusBadge rendered");

    return (
        <p className={`badge ${status === "Online" ? "badge-online" : "badge-offline"}`}>
        {status}
        </p>
    );
}

export default memo(StatusBadge);