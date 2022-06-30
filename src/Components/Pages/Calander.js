import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const Calander = () => {
    const [newDate, setNewdate] =useState(new Date());

    return (
        <div className='flex items-center justify-center'>
        <DayPicker
         mode="single"
         selected={newDate}
         onSelect={setNewdate}
        />;
        </div>
    );
};

export default Calander;