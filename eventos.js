document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    function updateCalendar() {
        // Limpiar el calendario antes de actualizarlo
        calendar.innerHTML = '';

        // Obtener el primer día del mes actual
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

        // Obtener el último día del mes actual
        const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

        // Crear el encabezado del calendario
        const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
        daysOfWeek.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = day;
            calendar.appendChild(dayElement);
        });

        // Agregar el mes y año al encabezado
        const monthYearElement = document.createElement('div');
        monthYearElement.textContent = `${getMonthName(currentMonth)} ${currentYear}`;
        monthYearElement.classList.add('month-year');
        calendar.appendChild(monthYearElement);

        // Rellenar el calendario con los días del mes
        for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = day;
            calendar.appendChild(dayElement);

            // Agregar eventos predefinidos (no se pueden modificar)
            const events = getEvents(currentYear, currentMonth, day);
            events.forEach(eventText => {
                const eventElement = document.createElement('div');
                eventElement.classList.add('event');
                eventElement.textContent = eventText;
                dayElement.appendChild(eventElement);
            });
        }
    }

    // Función para obtener el nombre del mes a partir de su número
    function getMonthName(month) {
        const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        return monthNames[month];
    }

    // Obtener eventos predefinidos para un día específico
    function getEvents(year, month, day) {
        const events = [];

        if (month === 0 && day === 1) {
            events.push('Año Nuevo');
        } else if (month === 1 && day === 1) {
            events.push('Inicio de Clases');
        }else if (month === 2 && day === 8) {
            events.push('Dia de La Mujer Hondureña');
        }else if (month === 2 && day === 19) {
            events.push('Dia del Padre');
        }else if (month === 3 && day === 15) {
            events.push('Semana Santa');
        }else if (month === 3 && day === 16) {
            events.push('Semana Santa');
        }else if (month === 3 && day === 17) {
            events.push('Semana Santa');
        }else if (month === 3 && day === 18) {
            events.push('Dia de las Américas');
        }else if (month === 3 && day === 23) {
            events.push('Día de la lengua española');
        }else if (month === 4 && day === 1) {
            events.push('Dia del Trabajo');
        }else if (month === 4 && day === 14) {
            events.push('Día de la Madre');
        }else if (month === 5 && day === 11) {
            events.push('Día del Estudiante');
        }else if (month === 5 && day === 20) {
            events.push('Día de Lempira');
        }else if (month === 8 && day === 1) {
            events.push('Día de la bandera nacional');
        }else if (month === 8 && day === 10) {
            events.push('Día del Niño');
        }else if (month === 8 && day === 15) {
            events.push('Día de la Independencia');
        }else if (month === 8 && day === 17) {
            events.push('Día del Profesor');
        } else if (month === 11 && day === 25) {
            events.push('Navidad');
        }else if (month === 11 && day === 31) {
            events.push('Noche Vieja');
        }

        return events;
    }

    // Botones para cambiar entre meses
    const prevMonthBtn = document.getElementById('prevMonthBtn');
    prevMonthBtn.addEventListener('click', function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar();
    });

    const nextMonthBtn = document.getElementById('nextMonthBtn');
    nextMonthBtn.addEventListener('click', function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar();
    });

    // Inicializar el calendario
    updateCalendar();
});
