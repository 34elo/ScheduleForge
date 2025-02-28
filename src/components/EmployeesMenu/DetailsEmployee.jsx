import React from "react";

export default function DetailsEmployee({ description }) {

    return (
        <>
            <h2 style={{paddingBottom: '20px', margin: 0}}>Информация о сотруднике</h2>
            {description}
        </>
    )
}