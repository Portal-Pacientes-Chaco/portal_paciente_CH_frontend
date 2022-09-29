import { Row, Col, Button } from "react-bootstrap";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useEffect, useState } from "react";
import * as MdIcon from "react-icons/md";
import { Bar, Pie } from 'react-chartjs-2';


export const FamilyGroupChart = (props) => {

    const { handleSearch, results } = props
    const [fromDate, setFromDate] = useState(new Date().toISOString().split('T')[0]);
    const [toDate, setToDate] = useState(new Date().toISOString().split('T')[0]);
    const [labels, setLabels] = useState(['January', 'February', 'March', 'April', 'May', 'June', 'July']);
    const search = 1; //id type of search (Tabla en la que debe buscarse la data)

    useEffect(() => {
        handleSearch(fromDate, toDate, search);
    }, [fromDate, toDate, handleSearch]);

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    // TODO: setear labels segun resultado
    // mapear resultado segun labes

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Inicios de sesión',
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                label: 'Usuarios TGD',
                // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                data: results,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Usuarios Portal del Paciente',
                // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                data: results,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <Col lg={6} className='my-3'>
            <h5>Pacientes en grupo familiar</h5>
            <div className="p-3 border border-secundary rounded" style={{ maxHeight: '400px' }}>
                <Bar
                    data={data}
                    height={70}
                    width={100}
                    options={options}
                />
            </div>
        </Col>
    )
}
