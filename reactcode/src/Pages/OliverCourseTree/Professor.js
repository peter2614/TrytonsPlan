import React from 'react';

const Professor = (props) => props.professors.map((professor) => {
    console.log(professor);
    return(
        <div>
            <h4>
                {professor.name}
            </h4>

            <p
                style = {{
                    marginLeft: "20px"
                }}
            >
                {"Score: " + (professor.score * 100).toPrecision(4)}
            </p>

            <p
                style = {{
                    marginLeft: "20px"
                }}
            >
                {"Exp GPA: " + professor.gpaExpected.toPrecision(3)
                    + " Act GPA: " + professor.gpaActual.toPrecision(3)}
            </p>


        </div>
    );
});

export default Professor;