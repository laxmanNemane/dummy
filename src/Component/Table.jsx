import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { servayRecords } from '../Data/TableData';

const SurvayTable = () => {
    return (
        <div style={{ maxWidth: 600, margin: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16 }}>
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>Campaigns</th>
                        <th style={tableHeaderStyle}>Clicks</th>
                        <th style={tableHeaderStyle}>Cost</th>
                        <th style={tableHeaderStyle}>Conversions</th>
                        <th style={tableHeaderStyle}>Revenu</th>
                    </tr>
                </thead>
                <tbody>
                    {servayRecords.map((item, index) => (
                        <tr key={index}>
                            <td style={tableCellStyle}>{item.campaigns}</td>
                            <td style={tableCellStyle}>{item.clicks}</td>
                            <td style={tableCellStyle}>{item.cost}</td>
                            <td style={tableCellStyle}>{item.conversions}</td>
                            <td style={tableCellStyle}>{item.Revenu}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const tableHeaderStyle = {
    backgroundColor: '#f4f4f4',
    borderBottom: '1px solid #ddd',
    padding: 8,
    textAlign: 'left',
    fontWeight: 'bold',
};

const tableCellStyle = {
    borderBottom: '1px solid #ddd',
    padding: 8,
};

export default SurvayTable;
